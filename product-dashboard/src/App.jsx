import { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './components/ProductCard';
import FilterPanel from './components/FilterPanel';
import { useDebounce } from './hooks/useDebounce';
import {
  fetchProducts,
  selectFilteredProducts,
  selectProductsStatus,
  selectProductsError,
  selectFilters,
  selectSortBy,
  selectCategories,
  setFilter,
  setSortBy,
  resetFilters,
} from './store/productsSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);
  const filters = useSelector(selectFilters);
  const sortBy = useSelector(selectSortBy);
  const categories = useSelector(selectCategories);

  const [searchInput, setSearchInput] = useState('');
  const [displayCount, setDisplayCount] = useState(8);
  const debouncedSearch = useDebounce(searchInput, 300);

  // Fetch products on mount
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Update search filter when debounced value changes
  useEffect(() => {
    dispatch(setFilter({ filterType: 'searchQuery', value: debouncedSearch }));
  }, [debouncedSearch, dispatch]);

  // Handle filter changes
  const handleFilterChange = useCallback(
    (filterType, value) => {
      dispatch(setFilter({ filterType, value }));
    },
    [dispatch]
  );

  // Handle sort change
  const handleSortChange = useCallback(
    (e) => {
      dispatch(setSortBy(e.target.value));
    },
    [dispatch]
  );

  // Handle reset filters
  const handleResetFilters = useCallback(() => {
    dispatch(resetFilters());
    setSearchInput('');
    setDisplayCount(8);
  }, [dispatch]);

  // Handle add to cart
  const handleAddToCart = useCallback((product) => {
    console.log('Added to cart:', product);
    alert(`${product.title} added to cart!`);
  }, []);

  // Handle view details
  const handleViewDetails = useCallback((product) => {
    console.log('View details:', product);
    alert(`Viewing details for: ${product.title}`);
  }, []);

  // Load more products
  const handleLoadMore = useCallback(() => {
    setDisplayCount((prev) => prev + 8);
  }, []);

  // Memoized displayed products
  const displayedProducts = useMemo(
    () => products.slice(0, displayCount),
    [products, displayCount]
  );

  const hasMore = displayCount < products.length;

  if (status === 'loading') {
    return (
      <div className="app">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="app">
        <div className="error-container">
          <h2>Error Loading Products</h2>
          <p>{error}</p>
          <button onClick={() => dispatch(fetchProducts())}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Product Dashboard</h1>
        <p className="subtitle">Discover amazing products with advanced filtering</p>
      </header>

      <div className="dashboard-container">
        <FilterPanel
          filters={filters}
          onFilterChange={handleFilterChange}
          categories={categories}
          onReset={handleResetFilters}
        />

        <main className="main-content">
          <div className="toolbar">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="search-input"
                aria-label="Search products"
              />
              <span className="search-icon">🔍</span>
            </div>

            <div className="sort-container">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select"
              >
                <option value="default">Default</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="rating-desc">Rating (High to Low)</option>
              </select>
            </div>
          </div>

          <div className="results-info">
            <span>
              Showing {displayedProducts.length} of {products.length} products
            </span>
          </div>

          {products.length === 0 ? (
            <div className="no-results">
              <h2>No products found</h2>
              <p>Try adjusting your filters or search query</p>
              <button onClick={handleResetFilters} className="btn btn-primary">
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>

              {hasMore && (
                <div className="load-more-container">
                  <button
                    onClick={handleLoadMore}
                    className="btn btn-primary btn-load-more"
                  >
                    Load More Products
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
