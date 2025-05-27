export const updateMetaTags = (title, description) => {
  document.title = title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = description;
};

export const generateStructuredData = (cars) => {
  if (!cars || cars.length === 0) return null;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": cars.map((car, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": `${car.brand} ${car.model}`,
        "description": `${car.year} ${car.brand} ${car.model} with ${car.engine} engine`,
        "brand": {
          "@type": "Brand",
          "name": car.brand
        },
        "offers": {
          "@type": "Offer",
          "price": car.price,
          "priceCurrency": "USD"
        }
      }
    }))
  };
  
  return structuredData;
};

export const injectStructuredData = (data) => {
  if (!data) return;
  
  let script = document.querySelector('#structured-data');
  if (!script) {
    script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(data);
};