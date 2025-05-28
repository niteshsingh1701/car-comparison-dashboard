import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useCarFilters from './useCarFilters';

describe('useCarFilters', () => {
  const testCars = [
    { id: 1, brand: 'Toyota', price: 25000, year: 2018, rating: 4.5 },
    { id: 2, brand: 'Honda', price: 30000, year: 2019, rating: 4.7 },
    { id: 3, brand: 'BMW', price: 45000, year: 2022, rating: 4.6 }
  ];
  
  it('returns all cars initially', () => {
    const { result } = renderHook(() => useCarFilters(testCars));
    
    expect(result.current.filteredCars).toEqual(testCars);
    expect(result.current.uniqueBrands).toEqual(['Toyota', 'Honda', 'BMW']);
  });
  
  it('filters cars by brand correctly', () => {
    const { result } = renderHook(() => useCarFilters(testCars));
    
    act(() => {
      result.current.setFilters({
        priceRange: [0, 100000],
        brands: ['Toyota'],
        sortBy: 'price-asc'
      });
    });
    
    expect(result.current.filteredCars).toHaveLength(1);
    expect(result.current.filteredCars[0].brand).toBe('Toyota');
  });
});