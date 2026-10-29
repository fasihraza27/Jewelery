import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import './CollectionCard.css';

export const CollectionCard = ({ collection }) => {
  return (
    <Link to={collection.link} className="collection-card">
      {/* Gold hairline shown on hover */}
      <div className="collection-card__accent" />

      {/* Image */}
      <div className="collection-card__media">
        {collection.image ? (
          <img
            src={collection.image}
            alt={collection.title}
            referrerPolicy="no-referrer"
            className="collection-card__img"
          />
          ) : null}

        <div className="collection-card__shade" />
      </div>

      {/* Text overlay */}
      <div className="collection-card__content">
        <div className="collection-card__top">
          <div className="collection-card__category">
            <Sparkles size={11} />
            <span>{collection.category}</span>
          </div>
          <div className="collection-card__arrow">
            <ArrowUpRight size={15} />
          </div>
        </div>

        <h3 className="collection-card__title">{collection.title}</h3>

        <p className="collection-card__desc line-clamp-1">{collection.description}</p>

        <div className="collection-card__footer">
          <span className="collection-card__cta">Discover Collection</span>
          <span className="collection-card__go">→</span>
        </div>
      </div>
    </Link>
  );
};
