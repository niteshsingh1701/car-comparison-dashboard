import { useState, useEffect } from 'react';
import Header from './components/Header';
import CarList from './components/CarList';
import Filters from './components/Filters';
import ComparisonTable from './components/ComparisonTable';
import Footer from './components/Footer';
import useCarFilters from './hooks/useCarFilters';
import { cars } from './data/cars';
import './styles/global.css';

function App() {
  const [selectedCars, setSelectedCars] = useState([]);
  const [isComparisonExpanded, setIsComparisonExpanded] = useState(false);
  const { filteredCars, uniqueBrands, setFilters } = useCarFilters(cars);

  const handleCompare = (carId) => {
    setSelectedCars(prev => 
      prev.includes(carId)
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleComparisonView = () => {
    setIsComparisonExpanded(!isComparisonExpanded);
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <h1 className="page-title">Car Comparison Dashboard</h1>
          <p className="page-description">
            Compare different car models based on specifications, features, and price.
            Select up to 3 cars to view a detailed side-by-side comparison.
          </p>
          
          <div className="dashboard-layout">
            <aside className="sidebar">
              <Filters 
                onFilterChange={handleFilterChange} 
                brands={uniqueBrands} 
              />
            </aside>
            
            <div className="content">
              {selectedCars.length > 0 && (
                <ComparisonTable 
                  cars={cars} 
                  selectedCarIds={selectedCars} 
                  onRemove={handleCompare} 
                  isExpanded={isComparisonExpanded}
                  onToggleExpand={toggleComparisonView}
                />
              )}
              
              <CarList 
                cars={filteredCars} 
                selectedCars={selectedCars} 
                onCompare={handleCompare} 
              />
            </div>
          </div>
        </div>
      </main>
      
      {selectedCars.length > 0 && (
        <button 
          className="comparison-fab" 
          onClick={toggleComparisonView}
          aria-label="Toggle comparison view"
        >
          <span className="comparison-count">{selectedCars.length}</span>
          🔍
        </button>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
