import { useState } from 'react';

function ComparisonTable({ cars, selectedCarIds, onRemove }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const selectedCars = cars.filter(car => selectedCarIds.includes(car.id));
  
  if (selectedCars.length === 0) {
    return null;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`comparison-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="comparison-header" onClick={toggleExpand}>
        <h2>Car Comparison ({selectedCars.length})</h2>
        <button className="comparison-toggle">
          {isExpanded ? '▼' : '▲'}
        </button>
      </div>
      <div className={`comparison-content ${isExpanded ? '' : 'collapsed'}`}>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Specification</th>
                {selectedCars.map(car => (
                  <th key={car.id}>
                    {car.brand} {car.model}
                    <button 
                      className="remove-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(car.id);
                      }}
                    >
                      ✕
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image</td>
                {selectedCars.map(car => (
                  <td key={car.id}>
                    <img 
                      src={car.image} 
                      alt={`${car.brand} ${car.model}`} 
                      className="comparison-image" 
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>Year</td>
                {selectedCars.map(car => (
                  <td key={car.id}>{car.year}</td>
                ))}
              </tr>
              <tr>
                <td>Price</td>
                {selectedCars.map(car => (
                  <td key={car.id}>${car.price.toLocaleString()}</td>
                ))}
              </tr>
              <tr>
                <td>Engine</td>
                {selectedCars.map(car => (
                  <td key={car.id}>{car.engine}</td>
                ))}
              </tr>
              <tr>
                <td>Fuel Type</td>
                {selectedCars.map(car => (
                  <td key={car.id}>{car.fuelType}</td>
                ))}
              </tr>
              <tr>
                <td>Horsepower</td>
                {selectedCars.map(car => (
                  <td key={car.id}>{car.horsepower} hp</td>
                ))}
              </tr>
              <tr>
                <td>Transmission</td>
                {selectedCars.map(car => (
                  <td key={car.id}>{car.transmission}</td>
                ))}
              </tr>
              <tr>
                <td>Mileage</td>
                {selectedCars.map(car => (
                  <td key={car.id}>{car.mileage} mpg</td>
                ))}
              </tr>
              <tr>
                <td>Weight</td>
                {selectedCars.map(car => (
                  <td key={car.id}>{car.weight} lbs</td>
                ))}
              </tr>
              <tr>
                <td>Dimensions</td>
                {selectedCars.map(car => (
                  <td key={car.id}>
                    L: {car.dimensions.length}" × W: {car.dimensions.width}" × H: {car.dimensions.height}"
                  </td>
                ))}
              </tr>
              <tr>
                <td>Rating</td>
                {selectedCars.map(car => (
                  <td key={car.id}>{car.rating}/5</td>
                ))}
              </tr>
              <tr>
                <td>Features</td>
                {selectedCars.map(car => (
                  <td key={car.id}>
                    <ul className="feature-list">
                      {car.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ComparisonTable;