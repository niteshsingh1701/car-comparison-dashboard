import { useState } from 'react';

function Filters({ onFilterChange, brands }) {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState('price-asc');

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
    applyFilters(newRange, selectedBrands, sortBy);
  };

  const handleBrandChange = (brand) => {
    const newSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    
    setSelectedBrands(newSelectedBrands);
    applyFilters(priceRange, newSelectedBrands, sortBy);
  };

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    applyFilters(priceRange, selectedBrands, newSortBy);
  };

  const applyFilters = (price, brands, sort) => {
    onFilterChange({
      priceRange: price,
      brands: brands,
      sortBy: sort
    });
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      
      <div className="filter-section">
        <h3>Price Range</h3>
        <div className="price-inputs">
          <div className="price-input">
            <label>Min: ${priceRange[0].toLocaleString()}</label>
            <input 
              type="range" 
              min="0" 
              max="100000" 
              step="1000" 
              value={priceRange[0]} 
              onChange={(e) => handlePriceChange(e, 0)} 
            />
          </div>
          <div className="price-input">
            <label>Max: ${priceRange[1].toLocaleString()}</label>
            <input 
              type="range" 
              min="0" 
              max="100000" 
              step="1000" 
              value={priceRange[1]} 
              onChange={(e) => handlePriceChange(e, 1)} 
            />
          </div>
        </div>
      </div>
      
      <div className="filter-section">
        <h3>Brands</h3>
        <div className="brand-checkboxes">
          {brands.map(brand => (
            <div key={brand} className="brand-checkbox">
              <input 
                type="checkbox" 
                id={`brand-${brand}`} 
                checked={selectedBrands.includes(brand)} 
                onChange={() => handleBrandChange(brand)} 
              />
              <label htmlFor={`brand-${brand}`}>{brand}</label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="filter-section">
        <h3>Sort By</h3>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="year-desc">Year: Newest First</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;