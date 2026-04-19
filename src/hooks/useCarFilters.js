import { useState, useEffect } from 'react';

const DEFAULT_FILTERS = {
  priceRange: [0, 100000],
  brands: [],
  fuelType: 'all',
  searchQuery: '',
  sortBy: 'price-asc'
};

function useCarFilters(cars) {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const uniqueBrands = [...new Set(cars.map(car => car.brand))];
  const uniqueFuelTypes = [...new Set(cars.map(car => car.fuelType))];

  const updateFilters = (nextFilters) => {
    setFilters(prev => ({
      ...prev,
      ...nextFilters
    }));
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  useEffect(() => {
    let result = [...cars];
    
    result = result.filter(car => 
      car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
    );
    
    if (filters.brands.length > 0) {
      result = result.filter(car => filters.brands.includes(car.brand));
    }

    if (filters.fuelType && filters.fuelType !== 'all') {
      result = result.filter(car => car.fuelType === filters.fuelType);
    }

    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.trim().toLowerCase();
      result = result.filter(car => {
        const searchableContent = [
          car.brand,
          car.model,
          car.engine,
          car.fuelType,
          ...car.features
        ]
          .join(' ')
          .toLowerCase();

        return searchableContent.includes(query);
      });
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
    uniqueFuelTypes,
    filters,
    setFilters: updateFilters,
    resetFilters
  };
}

export default useCarFilters;