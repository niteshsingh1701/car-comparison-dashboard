import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useCarFilters from './useCarFilters';

describe('useCarFilters', () => {
  const testCars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      price: 25000,
      year: 2018,
      rating: 4.5,
      fuelType: 'Petrol/Disel',
      engine: '2.5L',
      features: ['Bluetooth']
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Accord',
      price: 30000,
      year: 2019,
      rating: 4.7,
      fuelType: 'Hybrid',
      engine: '2.0L',
      features: ['Apple CarPlay']
    },
    {
      id: 3,
      brand: 'BMW',
      model: '3 Series',
      price: 45000,
      year: 2022,
      rating: 4.6,
      fuelType: 'Petrol/Disel',
      engine: '2.0L Turbo',
      features: ['Parking Assistant']
    }
  ];
  
  it('returns all cars initially', () => {
    const { result } = renderHook(() => useCarFilters(testCars));
    
    expect(result.current.filteredCars).toEqual(testCars);
    expect(result.current.uniqueBrands).toEqual(['Toyota', 'Honda', 'BMW']);
    expect(result.current.uniqueFuelTypes).toEqual(['Petrol/Disel', 'Hybrid']);
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

  it('filters cars by fuel type and search query', () => {
    const { result } = renderHook(() => useCarFilters(testCars));

    act(() => {
      result.current.setFilters({
        fuelType: 'Hybrid',
        searchQuery: 'accord'
      });
    });

    expect(result.current.filteredCars).toHaveLength(1);
    expect(result.current.filteredCars[0].brand).toBe('Honda');
  });
});