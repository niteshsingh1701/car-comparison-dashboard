import CarCard from './CarCard';

function CarList({ cars, selectedCars, onCompare, isCompareLimitReached }) {
  if (cars.length === 0) {
    return (
      <div className="empty-state" role="status" aria-live="polite">
        <h3>No Cars Found</h3>
        <p>Try broadening filters or clearing search to see more results.</p>
      </div>
    );
  }

  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard 
          key={car.id} 
          car={car} 
          onCompare={onCompare}
          isSelected={selectedCars.includes(car.id)}
          isDisabled={isCompareLimitReached && !selectedCars.includes(car.id)}
        />
      ))}
    </div>
  );
}

export default CarList;