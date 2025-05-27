import { useState, useEffect } from 'react';
import CarCard from './CarCard';

function CarList({ cars, selectedCars, onCompare }) {
  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard 
          key={car.id} 
          car={car} 
          onCompare={onCompare}
          isSelected={selectedCars.includes(car.id)}
        />
      ))}
    </div>
  );
}

export default CarList;