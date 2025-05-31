import { useState } from "react";

function CarCard({ car, onCompare, isSelected }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`car-card ${isSelected ? "selected" : ""}`}>
      <div className="car-image-container">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className={`car-image ${isLoaded ? "loaded" : ""}`}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && <div className="image-placeholder">Loading...</div>}
      </div>
      <div className="car-info">
        <h2 className="car-title">
          {car.brand} {car.model}
          <span className="car-year">{car.year}</span>
        </h2>
        {/* <p className="car-year">{car.year}</p> */}
        <div className="car-price">${car.price.toLocaleString()}</div>
        <div className="car-specs">
          <div className="spec-item">
            <span className="spec-label">Engine:</span>
            <span className="spec-value">{car.engine}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Fuel:</span>
            <span className="spec-value">{car.fuelType}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">HP:</span>
            <span className="spec-value">{car.horsepower}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">KML:</span>
            <span className="spec-value">{car.mileage}</span>
          </div>
        </div>
        <div className="car-rating">Rating: {car.rating}/5</div>
        <button
          className={`compare-button ${isSelected ? "selected" : ""}`}
          onClick={() => onCompare(car.id)}
        >
          {isSelected ? "Remove from Compare" : "Add to Compare"}
        </button>
      </div>
    </div>
  );
}

export default CarCard;
