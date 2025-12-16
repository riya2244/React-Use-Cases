import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterPanel from '../components/FilterPanel';

describe('FilterPanel', () => {
  const mockFilters = {
    category: 'all',
    price: { min: '', max: '' },
    minRating: 0,
  };

  const mockCategories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
  const mockOnFilterChange = vi.fn();
  const mockOnReset = vi.fn();

  it('renders all filter sections', () => {
    render(
      <FilterPanel
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        categories={mockCategories}
        onReset={mockOnReset}
      />
    );

    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Price Range')).toBeInTheDocument();
    expect(screen.getByText('Minimum Rating')).toBeInTheDocument();
  });

  it('renders all categories', () => {
    render(
      <FilterPanel
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        categories={mockCategories}
        onReset={mockOnReset}
      />
    );

    mockCategories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('calls onFilterChange when category is selected', () => {
    render(
      <FilterPanel
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        categories={mockCategories}
        onReset={mockOnReset}
      />
    );

    const electronicsRadio = screen.getByDisplayValue('electronics');
    fireEvent.click(electronicsRadio);

    expect(mockOnFilterChange).toHaveBeenCalledWith('category', 'electronics');
  });

  it('calls onFilterChange when price range is updated', () => {
    render(
      <FilterPanel
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        categories={mockCategories}
        onReset={mockOnReset}
      />
    );

    const minPriceInput = screen.getByLabelText('Min');
    fireEvent.change(minPriceInput, { target: { value: '50' } });

    expect(mockOnFilterChange).toHaveBeenCalled();
  });

  it('calls onFilterChange when rating is selected', () => {
    render(
      <FilterPanel
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        categories={mockCategories}
        onReset={mockOnReset}
      />
    );

    const ratingRadio = screen.getByDisplayValue('4');
    fireEvent.click(ratingRadio);

    expect(mockOnFilterChange).toHaveBeenCalledWith('minRating', 4);
  });

  it('calls onReset when reset button is clicked', () => {
    render(
      <FilterPanel
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        categories={mockCategories}
        onReset={mockOnReset}
      />
    );

    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);

    expect(mockOnReset).toHaveBeenCalledTimes(1);
  });

  it('displays selected category correctly', () => {
    const filtersWithCategory = {
      ...mockFilters,
      category: 'electronics',
    };

    render(
      <FilterPanel
        filters={filtersWithCategory}
        onFilterChange={mockOnFilterChange}
        categories={mockCategories}
        onReset={mockOnReset}
      />
    );

    const electronicsRadio = screen.getByDisplayValue('electronics');
    expect(electronicsRadio).toBeChecked();
  });
});
