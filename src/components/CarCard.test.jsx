import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CarCard from './CarCard';

describe('CarCard', () => {
  const simpleCar = {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2018,
    price: 25000,
    fuelType: "Gasoline",
    engine: "2.5L 4-Cylinder",
    horsepower: 203,
    mileage: 28,
    rating: 4.5,
    image: "https://example.com/image.jpg"
  };
  
  const onCompareMock = vi.fn();
  
  it('displays car information correctly', () => {
    render(<CarCard car={simpleCar} onCompare={onCompareMock} isSelected={false} />);
    
    expect(screen.getByText(`${simpleCar.brand} ${simpleCar.model}`)).toBeInTheDocument();
    expect(screen.getByText(`$${simpleCar.price.toLocaleString()}`)).toBeInTheDocument();
    expect(screen.getByText('Add to Compare')).toBeInTheDocument();
  });
  
  it('calls onCompare when button is clicked', () => {
    render(<CarCard car={simpleCar} onCompare={onCompareMock} isSelected={false} />);
    
    const button = screen.getByText('Add to Compare');
    fireEvent.click(button);
    
    expect(onCompareMock).toHaveBeenCalledWith(simpleCar.id);
  });
});