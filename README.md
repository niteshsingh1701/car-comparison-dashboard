# Car Comparison Dashboard

A React-based web application that allows users to compare different car models side by side. This interactive dashboard helps users make informed decisions by comparing specifications, prices, and features of various vehicles.


## Features

- **Interactive Car Browsing**: View a collection of cars with detailed specifications
- **Advanced Filtering**: Filter cars by price range and brand
- **Sorting Options**: Sort cars by price (low to high/high to low), rating, or year
- **Side-by-Side Comparison**: Select up to 3 cars for detailed specification comparison
- **Responsive Design**: Works on desktop and mobile devices
- **SEO Optimized**: Includes meta tags and structured data for better search engine visibility

## Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Next generation frontend tooling for faster development
- **Custom CSS**: Hand-crafted styling without external UI libraries
- **ESLint**: Code quality and style checking

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/car-comparison-dashboard.git
   cd car-comparison-dashboard
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

## Usage

### Filtering Cars

1. Use the price range sliders to set minimum and maximum price
2. Select one or more brands from the checkboxes
3. Choose a sorting option from the dropdown menu

### Comparing Cars

1. Click "Add to Compare" on any car card you want to compare
2. Select up to 3 cars for the best comparison experience
3. View the detailed comparison table that appears above the car list
4. Remove cars from comparison by clicking the "✕" button in the comparison table or "Remove from Compare" on the car card

## Project Structure

```
car-comparison-dashboard/
├── public/               # Static files
├── src/                  # Source files
│   ├── assets/           # Images and other assets
│   ├── components/       # React components
│   │   ├── CarCard.jsx   # Individual car display
│   │   ├── CarList.jsx   # Grid of car cards
│   │   ├── ComparisonTable.jsx # Side-by-side comparison
│   │   ├── Filters.jsx   # Filtering controls
│   │   ├── Footer.jsx    # Page footer
│   │   └── Header.jsx    # Page header
│   ├── data/             # Data files
│   │   └── cars.js       # Car information
│   ├── hooks/            # Custom React hooks
│   │   └── useCarFilters.js # Filtering logic
│   ├── styles/           # CSS files
│   │   └── global.css    # Global styles
│   ├── utils/            # Utility functions
│   │   └── seo.js        # SEO optimization
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   └── index.css         # Base styles
├── .gitignore            # Git ignore file
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
└── vite.config.js        # Vite configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## SEO Features

This application includes:

- Dynamic meta tags for better search engine indexing
- Structured data using Schema.org vocabulary
- Semantic HTML for improved accessibility and SEO

## Future Enhancements

- User accounts and saved comparisons
- More detailed car specifications
- Integration with real-time pricing APIs
- User reviews and ratings
- Dark mode support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Car images from Unsplash
- React team for the amazing library
- Vite team for the fast development experience
        Too many current requests. Your queue position is 7. Please wait for a while or switch to other models for a smoother experience.
