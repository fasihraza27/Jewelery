import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import FALLBACK_IMAGE from '../../assets/images/hero_unisex_jewelry_1790586987926.jpg';
import './ProductCard.css';

export const ProductCard = ({ product, onNavigate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleNavigate = () => onNavigate?.(product.id);

  // Secondary angle image for a smooth cross-fade on hover
  const secondaryImage = product.images?.[1] || product.image;
  const hasSecondary = secondaryImage && secondaryImage !== product.image;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="product-card"
    >
      {/* Gold hairline shown on hover */}
      <div className="product-card__accent" />

      {/* Image stage */}
      <Link
        to={`/product/${product.id}`}
        onClick={handleNavigate}
        className="product-card__media"
        aria-label={`View ${product.name}`}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className={
              isHovered && hasSecondary
                ? 'product-card__img product-card__img--faded'
                : 'product-card__img'
            }
            onError={(e) => {
              e.target.src = FALLBACK_IMAGE;
            }}
          />
        ) : null}

        {hasSecondary ? (
          <img
            src={secondaryImage}
            alt={`${product.name} alternate angle`}
            referrerPolicy="no-referrer"
            className={
              isHovered
                ? 'product-card__img product-card__img--alt product-card__img--alt-visible'
                : 'product-card__img product-card__img--alt'
            }
          />
        ) : null}

        <span className="product-card__category">{product.category}</span>
      </Link>

      {/* Details */}
      <div className="product-card__body">
        <div>
          <div className="product-card__eyebrow">
            <span className="product-card__tag">Hand Atelier</span>
            <div className="product-card__rating">
              <Star size={10} className="product-card__star" />
              <span className="tabular-nums">{product.rating.toFixed(1)}</span>
            </div>
          </div>

          <h3 className="product-card__name line-clamp-1">
            <Link to={`/product/${product.id}`} onClick={handleNavigate}>
              {product.name}
            </Link>
          </h3>

          <p className="product-card__material line-clamp-1">{product.material}</p>

          <div className="product-card__price">
            <span className="product-card__amount tabular-nums">${product.price.toFixed(2)}</span>
            <span className="product-card__currency">USD</span>
          </div>
        </div>

        <div className="product-card__footer">
          <Link
            to={`/product/${product.id}`}
            onClick={handleNavigate}
            className="product-card__cta"
          >
            <span>View Piece</span>
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
};
