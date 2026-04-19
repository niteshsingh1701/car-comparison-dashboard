function InsightsPanel({ cars, totalCars }) {
  if (!cars.length) {
    return (
      <section className="insights-panel empty" aria-live="polite">
        <h2>Smart Insights</h2>
        <p>No cars match the current filters. Try widening your criteria.</p>
      </section>
    );
  }

  const totalPrice = cars.reduce((sum, car) => sum + car.price, 0);
  const averagePrice = Math.round(totalPrice / cars.length);

  const totalRating = cars.reduce((sum, car) => sum + car.rating, 0);
  const averageRating = (totalRating / cars.length).toFixed(1);

  const bestRated = cars.reduce(
    (best, current) => (current.rating > best.rating ? current : best),
    cars[0]
  );

  return (
    <section className="insights-panel" aria-live="polite">
      <h2>Smart Insights</h2>
      <div className="insights-grid">
        <article className="insight-card">
          <span className="insight-label">Visible Cars</span>
          <strong className="insight-value">
            {cars.length} / {totalCars}
          </strong>
        </article>

        <article className="insight-card">
          <span className="insight-label">Average Price</span>
          <strong className="insight-value">${averagePrice.toLocaleString()}</strong>
        </article>

        <article className="insight-card">
          <span className="insight-label">Average Rating</span>
          <strong className="insight-value">{averageRating} / 5</strong>
        </article>

        <article className="insight-card">
          <span className="insight-label">Top Rated Pick</span>
          <strong className="insight-value">
            {bestRated.brand} {bestRated.model}
          </strong>
        </article>
      </div>
    </section>
  );
}

export default InsightsPanel;
