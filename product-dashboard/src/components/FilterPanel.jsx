import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './FilterPanel.css';

const FilterPanel = React.memo(({ 
  filters, 
  onFilterChange, 
  categories, 
  onReset 
}) => {
  const handleCategoryChange = useCallback((category) => {
    onFilterChange('category', category);
  }, [onFilterChange]);

  const handlePriceChange = useCallback((type, value) => {
    onFilterChange('price', { ...filters.price, [type]: value });
  }, [onFilterChange, filters.price]);

  const handleRatingChange = useCallback((rating) => {
    onFilterChange('minRating', rating);
  }, [onFilterChange]);

  return (
    <aside className="filter-panel" data-testid="filter-panel">
      <div className="filter-header">
        <h2>Filters</h2>
        <button 
          className="btn-reset"
          onClick={onReset}
          aria-label="Reset all filters"
        >
          Reset
        </button>
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Category</h3>
        <div className="filter-options">
          <label className="filter-option">
            <input
              type="radio"
              name="category"
              value="all"
              checked={filters.category === 'all'}
              onChange={() => handleCategoryChange('all')}
            />
            <span>All Categories</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="filter-option">
              <input
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={() => handleCategoryChange(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Price Range</h3>
        <div className="price-inputs">
          <div className="price-input-group">
            <label htmlFor="min-price">Min</label>
            <input
              id="min-price"
              type="number"
              min="0"
              placeholder="Min"
              value={filters.price.min}
              onChange={(e) => handlePriceChange('min', e.target.value)}
              className="price-input"
            />
          </div>
          <span className="price-separator">-</span>
          <div className="price-input-group">
            <label htmlFor="max-price">Max</label>
            <input
              id="max-price"
              type="number"
              min="0"
              placeholder="Max"
              value={filters.price.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              className="price-input"
            />
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Minimum Rating</h3>
        <div className="rating-filter">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="filter-option">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={filters.minRating === rating}
                onChange={() => handleRatingChange(rating)}
              />
              <span className="rating-stars">
                {'★'.repeat(rating)}{'☆'.repeat(5 - rating)} & Up
              </span>
            </label>
          ))}
          <label className="filter-option">
            <input
              type="radio"
              name="rating"
              value={0}
              checked={filters.minRating === 0}
              onChange={() => handleRatingChange(0)}
            />
            <span>All Ratings</span>
          </label>
        </div>
      </div>
    </aside>
  );
});

FilterPanel.displayName = 'FilterPanel';

FilterPanel.propTypes = {
  filters: PropTypes.shape({
    category: PropTypes.string.isRequired,
    price: PropTypes.shape({
      min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    minRating: PropTypes.number.isRequired,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default FilterPanel;
