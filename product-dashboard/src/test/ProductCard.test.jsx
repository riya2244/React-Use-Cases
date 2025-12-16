import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    description: 'This is a test product description that is long enough to be truncated',
    price: 99.99,
    image: 'https://test.com/image.jpg',
    category: 'electronics',
    rating: { rate: 4.5, count: 120 },
  };

  const mockOnAddToCart = vi.fn();
  const mockOnViewDetails = vi.fn();

  it('renders product information correctly', () => {
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={mockOnAddToCart}
        onViewDetails={mockOnViewDetails}
      />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('electronics')).toBeInTheDocument();
    expect(screen.getByText('(120)')).toBeInTheDocument();
  });

  it('displays product image with correct alt text', () => {
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={mockOnAddToCart}
        onViewDetails={mockOnViewDetails}
      />
    );

    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://test.com/image.jpg');
  });

  it('truncates long descriptions', () => {
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={mockOnAddToCart}
        onViewDetails={mockOnViewDetails}
      />
    );

    const description = screen.getByText(/This is a test product description/);
    expect(description.textContent).toContain('...');
  });

  it('calls onAddToCart when Add to Cart button is clicked', () => {
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={mockOnAddToCart}
        onViewDetails={mockOnViewDetails}
      />
    );

    const addButton = screen.getByText('Add to Cart');
    fireEvent.click(addButton);

    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
  });

  it('calls onViewDetails when Details button is clicked', () => {
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={mockOnAddToCart}
        onViewDetails={mockOnViewDetails}
      />
    );

    const detailsButton = screen.getByText('Details');
    fireEvent.click(detailsButton);

    expect(mockOnViewDetails).toHaveBeenCalledWith(mockProduct);
    expect(mockOnViewDetails).toHaveBeenCalledTimes(1);
  });

  it('renders correct rating stars', () => {
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={mockOnAddToCart}
        onViewDetails={mockOnViewDetails}
      />
    );

    const ratingContainer = screen.getByText('(120)').previousSibling;
    expect(ratingContainer).toBeInTheDocument();
  });
});
