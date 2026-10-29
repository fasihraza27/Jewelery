import { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/products.json";
import { ProductCard } from "../../components/ProductCard/ProductCard.jsx";
import "./ProductDetails.css";

const ProductView = ({ product, onNavigate }) => {
  const [image, setImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const total = product.price * quantity;

  const relatedProducts = productsData
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.category === "unisex"),
    )
    .slice(0, 4);

  return (
    <div className="product-page">
      <div className="page-container">
        <div className="product-page__topbar">
          <Link to="/shop" className="product-page__back">
            ← Back to Shop
          </Link>

          <div className="product-page__crumbs">
            <span>Archive</span>
            <span>/</span>
            <span className="product-page__crumb-current">
              {product.category}
            </span>
          </div>
        </div>

        <div className="product-page__layout">
          <div className="gallery">
            <div className="gallery__main">
              <img
                src={image}
                alt={product.name}
                className="gallery__main-img"
              />

              <div className="gallery__badge gallery__badge--category">
                {product.category} Atelier
              </div>

              <div className="gallery__badge gallery__badge--finish">
                Hand-Finished
              </div>
            </div>

            <div className="gallery__thumbs">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setImage(img)}
                  className={
                    image === img
                      ? "gallery__thumb gallery__thumb--active"
                      : "gallery__thumb"
                  }>
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="gallery__thumb-img"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-info__meta">
              <span className="product-info__collection">
                ✦ {product.category} Collection
              </span>

              <span className="product-info__stock">✓ In Stock</span>
            </div>

            <h1 className="product-info__name">{product.name}</h1>

            <div className="product-info__rating">
              <div className="product-info__stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= product.rating
                        ? "product-info__star product-info__star--filled"
                        : "product-info__star"
                    }>
                    ★
                  </span>
                ))}
              </div>

              <span className="product-info__rating-value">
                {product.rating}
              </span>

              <span className="product-info__reviews">
                ({product.reviewsCount || 48} reviews)
              </span>
            </div>

            <p className="product-info__desc">{product.description}</p>

            <div className="quantity">
              <div className="quantity__head">
                <span className="quantity__label">Quantity</span>

                <span className="quantity__each">${product.price} each</span>
              </div>

              <div className="quantity__controls">
                <div className="quantity__stepper">
                  <button
                    className="quantity__btn"
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}>
                    −
                  </button>

                  <span className="quantity__value">{quantity}</span>

                  <button
                    className="quantity__btn"
                    onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>

                <span className="quantity__count">
                  {quantity} {quantity === 1 ? "piece" : "pieces"}
                </span>
              </div>
            </div>

            <div className="total">
              <span className="total__label">Total Price</span>

              <div className="total__row">
                <span className="total__amount">${total.toFixed(2)}</span>
              </div>

              <p className="total__note">
                VAT included · Insured Atelier Dispatch
              </p>
            </div>

            <div className="specs">
              <div className="specs__row">
                <span className="specs__label">Material</span>

                <span className="specs__value">{product.material}</span>
              </div>

              <div className="specs__row">
                <span className="specs__label">Category</span>

                <span className="specs__value">{product.category} Atelier</span>
              </div>

              <div className="specs__row">
                <span className="specs__label">Finish</span>

                <span className="specs__value">
                  Hand-Polished Atelier Grade
                </span>
              </div>
            </div>

            <div className="trust">
              <div className="trust__item">
                <span className="trust__icon">▸</span>
                <span>Complimentary courier</span>
              </div>

              <div className="trust__item">
                <span className="trust__icon">✓</span>
                <span>30-day effortless returns</span>
              </div>
            </div>
          </div>
        </div>

        <div className="related">
          <div className="related__head">
            <span className="section-eyebrow">Harmonious Pairings</span>

            <h2 className="related__title">YOU MAY ALSO ADMIRE</h2>
          </div>

          <div className="row g-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                <ProductCard product={product} onNavigate={onNavigate} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Router hooks are disallowed by the project's lint rules, so read the id from the URL
// directly. This keeps /product/:id working on refresh and for shared links.
const getIdFromUrl = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = window.location.pathname.slice(base.length);
  const match = path.match(/^\/product\/(\d+)/);
  return match ? Number(match[1]) : null;
};

export const ProductDetails = ({ productId, onSelectProduct }) => {
  const id = getIdFromUrl() ?? productId;
  const product = productsData.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="product-missing">
        <h2>Piece Not Found</h2>

        <p>The requested product does not exist.</p>

        <Link to="/shop" className="btn-luxury">
          RETURN TO SHOP
        </Link>
      </div>
    );
  }

  return <ProductView key={product.id} product={product} onNavigate={onSelectProduct} />;
};
