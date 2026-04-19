import { useState } from 'react';

function Filters({ onFilterChange, onReset, brands, fuelTypes, activeFiltersCount }) {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFuelType, setSelectedFuelType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
    applyFilters(newRange, selectedBrands, selectedFuelType, searchQuery, sortBy);
  };

  const handleBrandChange = (brand) => {
    const newSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    
    setSelectedBrands(newSelectedBrands);
    applyFilters(priceRange, newSelectedBrands, selectedFuelType, searchQuery, sortBy);
  };

  const handleFuelTypeChange = (e) => {
    const newFuelType = e.target.value;
    setSelectedFuelType(newFuelType);
    applyFilters(priceRange, selectedBrands, newFuelType, searchQuery, sortBy);
  };

  const handleSearchChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    applyFilters(priceRange, selectedBrands, selectedFuelType, newSearchQuery, sortBy);
  };

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    applyFilters(priceRange, selectedBrands, selectedFuelType, searchQuery, newSortBy);
  };

  const handleReset = () => {
    const defaultPrice = [0, 100000];
    const defaultBrands = [];
    const defaultFuelType = 'all';
    const defaultSearchQuery = '';
    const defaultSort = 'price-asc';

    setPriceRange(defaultPrice);
    setSelectedBrands(defaultBrands);
    setSelectedFuelType(defaultFuelType);
    setSearchQuery(defaultSearchQuery);
    setSortBy(defaultSort);

    applyFilters(
      defaultPrice,
      defaultBrands,
      defaultFuelType,
      defaultSearchQuery,
      defaultSort
    );

    onReset();
  };

  const applyFilters = (price, selectedBrandList, fuelType, search, sort) => {
    onFilterChange({
      priceRange: price,
      brands: selectedBrandList,
      fuelType,
      searchQuery: search,
      sortBy: sort
    });
  };

  return (
    <div className="filters">
      <div className="filters-heading">
        <h2>Filters</h2>
        <span className="active-filters-pill">{activeFiltersCount} active</span>
      </div>

      <div className="filter-section">
        <h3>Search</h3>
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Model, brand, feature..."
          className="filter-search"
          aria-label="Search cars"
        />
      </div>
      
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
        <h3>Fuel Type</h3>
        <select value={selectedFuelType} onChange={handleFuelTypeChange}>
          <option value="all">All Fuel Types</option>
          {fuelTypes.map((fuelType) => (
            <option key={fuelType} value={fuelType}>
              {fuelType}
            </option>
          ))}
        </select>
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

      <button type="button" className="reset-filters-btn" onClick={handleReset}>
        Reset Filters
      </button>
    </div>
  );
}

export default Filters;