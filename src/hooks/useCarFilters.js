import { useState, useEffect } from 'react';

function useCarFilters(cars) {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [filters, setFilters] = useState({
    priceRange: [0, 100000],
    brands: [],
    sortBy: 'price-asc'
  });

  const uniqueBrands = [...new Set(cars.map(car => car.brand))];

  useEffect(() => {
    let result = [...cars];
    
    result = result.filter(car => 
      car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
    );
    
    if (filters.brands.length > 0) {
      result = result.filter(car => filters.brands.includes(car.brand));
    }
    
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'year-desc':
        result.sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }
    
    setFilteredCars(result);
  }, [cars, filters]);

  return {
    filteredCars,
    uniqueBrands,
    setFilters
  };
}

export default useCarFilters;