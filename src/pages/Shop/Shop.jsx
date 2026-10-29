import { Sparkles, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import productsData from '../../data/products.json';
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx';
import './Shop.css';

export const Shop = ({ onSelectProduct }) => {
  const allProducts = productsData;

  return (
    <div className="shop">
      <div className="page-container">
        {/* Page title */}
        <div className="shop__header">
          <div className="section-eyebrow">
            <Sparkles size={12} />
            <span>Complete Atelier Archive</span>
          </div>
          <h1 className="section-title shop__title">SHOP ALL</h1>
          <div className="gold-rule gold-rule--center" />
          <p className="section-lead shop__lead">
            Meticulously engineered rings, cuffs, bangles, and palm pieces designed to contour
            seamlessly against human skin.
          </p>
        </div>

        {/* Product count bar */}
        <div className="shop__count-bar">
          <span className="shop__count-label">Hand Jewelry Catalog</span>
          <span className="tabular-nums">{allProducts.length} Archival Creations</span>
        </div>

        {/* Product grid */}
        <div className="row g-4">
          {allProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard product={product} onNavigate={onSelectProduct} />
            </div>
          ))}
        </div>

        {/* Service assurance bar */}
        <div className="shop__assurance">
          <div className="shop__assurance-item">
            <div className="icon-badge icon-badge--sm">
              <Truck size={18} />
            </div>
            <h4 className="shop__assurance-title">White-Glove Delivery</h4>
            <p className="shop__assurance-text">Armored courier dispatch with direct signature</p>
          </div>

          <div className="shop__assurance-item">
            <div className="icon-badge icon-badge--sm">
              <ShieldCheck size={18} />
            </div>
            <h4 className="shop__assurance-title">Lifetime Guarantee</h4>
            <p className="shop__assurance-text">
              Atelier inspection, re-polishing & structural care
            </p>
          </div>

          <div className="shop__assurance-item">
            <div className="icon-badge icon-badge--sm">
              <RefreshCw size={18} />
            </div>
            <h4 className="shop__assurance-title">30-Day Returns</h4>
            <p className="shop__assurance-text">Complimentary return shipping on all pieces</p>
          </div>
        </div>
      </div>
    </div>
  );
};
