import { useState } from 'react';
import Header from './components/Header';
import CarList from './components/CarList';
import Filters from './components/Filters';
import ComparisonTable from './components/ComparisonTable';
import InsightsPanel from './components/InsightsPanel';
import Footer from './components/Footer';
import useCarFilters from './hooks/useCarFilters';
import { cars } from './data/cars';
import './styles/global.css';

const MAX_COMPARE_COUNT = 3;

function App() {
  const [selectedCars, setSelectedCars] = useState([]);
  const {
    filteredCars,
    uniqueBrands,
    uniqueFuelTypes,
    filters,
    setFilters,
    resetFilters
  } = useCarFilters(cars);

  const handleCompare = (carId) => {
    setSelectedCars(prev => {
      if (prev.includes(carId)) {
        return prev.filter(id => id !== carId);
      }

      if (prev.length >= MAX_COMPARE_COUNT) {
        return prev;
      }

      return [...prev, carId];
    });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const selectedCount = selectedCars.length;
  const isCompareLimitReached = selectedCount >= MAX_COMPARE_COUNT;
  const activeFiltersCount = [
    filters.brands.length > 0,
    filters.fuelType !== 'all',
    filters.searchQuery.trim().length > 0,
    filters.priceRange[0] !== 0 || filters.priceRange[1] !== 100000,
    filters.sortBy !== 'price-asc'
  ].filter(Boolean).length;

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
                onReset={resetFilters}
                brands={uniqueBrands}
                fuelTypes={uniqueFuelTypes}
                activeFiltersCount={activeFiltersCount}
              />
            </aside>
            
            <div className="content">
              <InsightsPanel cars={filteredCars} totalCars={cars.length} />

              {selectedCount > 0 && (
                <ComparisonTable 
                  cars={cars} 
                  selectedCarIds={selectedCars} 
                  onRemove={handleCompare}
                />
              )}
              
              <CarList 
                cars={filteredCars} 
                selectedCars={selectedCars} 
                onCompare={handleCompare}
                isCompareLimitReached={isCompareLimitReached}
              />
            </div>
          </div>
        </div>
      </main>
      
      {selectedCount > 0 && (
        <div className="comparison-fab" aria-live="polite">
          <span className="comparison-count">{selectedCount}</span>
          🔍
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
