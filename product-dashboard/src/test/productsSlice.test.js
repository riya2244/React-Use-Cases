import { describe, it, expect, beforeEach } from 'vitest';
import productsReducer, {
  setFilter,
  setSortBy,
  resetFilters,
  fetchProducts,
} from '../store/productsSlice';

describe('productsSlice', () => {
  const initialState = {
    items: [],
    filteredItems: [],
    status: 'idle',
    error: null,
    filters: {
      category: 'all',
      price: { min: '', max: '' },
      minRating: 0,
      searchQuery: '',
    },
    sortBy: 'default',
  };

  it('should return initial state', () => {
    expect(productsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setFilter for category', () => {
    const actual = productsReducer(
      initialState,
      setFilter({ filterType: 'category', value: 'electronics' })
    );
    expect(actual.filters.category).toEqual('electronics');
  });

  it('should handle setFilter for price', () => {
    const actual = productsReducer(
      initialState,
      setFilter({ filterType: 'price', value: { min: '50', max: '100' } })
    );
    expect(actual.filters.price).toEqual({ min: '50', max: '100' });
  });

  it('should handle setFilter for minRating', () => {
    const actual = productsReducer(
      initialState,
      setFilter({ filterType: 'minRating', value: 4 })
    );
    expect(actual.filters.minRating).toEqual(4);
  });

  it('should handle setFilter for searchQuery', () => {
    const actual = productsReducer(
      initialState,
      setFilter({ filterType: 'searchQuery', value: 'test' })
    );
    expect(actual.filters.searchQuery).toEqual('test');
  });

  it('should handle setSortBy', () => {
    const actual = productsReducer(initialState, setSortBy('price-asc'));
    expect(actual.sortBy).toEqual('price-asc');
  });

  it('should handle resetFilters', () => {
    const modifiedState = {
      ...initialState,
      filters: {
        category: 'electronics',
        price: { min: '50', max: '100' },
        minRating: 4,
        searchQuery: 'test',
      },
      sortBy: 'price-asc',
    };

    const actual = productsReducer(modifiedState, resetFilters());
    expect(actual.filters).toEqual(initialState.filters);
    expect(actual.sortBy).toEqual('default');
  });

  it('should handle fetchProducts.pending', () => {
    const actual = productsReducer(initialState, fetchProducts.pending);
    expect(actual.status).toEqual('loading');
  });

  it('should handle fetchProducts.fulfilled', () => {
    const mockProducts = [
      {
        id: 1,
        title: 'Test Product',
        price: 99.99,
        category: 'electronics',
        rating: { rate: 4.5, count: 100 },
      },
    ];

    const actual = productsReducer(
      initialState,
      fetchProducts.fulfilled(mockProducts, 'requestId', undefined)
    );

    expect(actual.status).toEqual('succeeded');
    expect(actual.items).toEqual(mockProducts);
    expect(actual.filteredItems).toEqual(mockProducts);
  });

  it('should handle fetchProducts.rejected', () => {
    const error = { message: 'Failed to fetch' };
    const actual = productsReducer(
      initialState,
      fetchProducts.rejected(error, 'requestId', undefined)
    );

    expect(actual.status).toEqual('failed');
    expect(actual.error).toEqual('Failed to fetch');
  });
});
