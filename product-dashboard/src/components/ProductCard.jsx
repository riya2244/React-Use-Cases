import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = React.memo(({ product, onAddToCart, onViewDetails }) => {
  const { id, title, description, price, image, category, rating } = product;

  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i}>★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i}>⯪</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return stars;
  };

  return (
    <article className="product-card" data-testid={`product-card-${id}`}>
      <img 
        src={image} 
        alt={title}
        className="product-image"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
        }}
      />
      
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>

        <div className="product-meta">
          <span className="product-price">${price.toFixed(2)}</span>
          <span className="product-category">{category}</span>
        </div>

        <div className="product-rating">
          <span className="rating-stars">
            {renderStars(rating.rate)}
          </span>
          <span className="rating-count">({rating.count})</span>
        </div>

        <div className="product-actions">
          <button 
            className="btn btn-primary"
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${title} to cart`}
          >
            Add to Cart
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => onViewDetails(product)}
            aria-label={`View details for ${title}`}
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProductCard;
