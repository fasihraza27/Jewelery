import { Link } from 'react-router-dom';
import { HeroSlider } from '../../components/HeroSlider/HeroSlider.jsx';
import { CollectionCard } from '../../components/CollectionCard/CollectionCard.jsx';
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx';
import { HorizontalShowcase } from '../../components/HorizontalShowcase/HorizontalShowcase.jsx';
import { Newsletter } from '../../components/Newsletter/Newsletter.jsx';
import productsData from '../../data/products.json';
import craftsmanshipImg from '../../assets/images/craftsmanship_workshop_1790587029479.jpg';
import './Home.css';
import { ArrowRight, ShieldCheck, Sparkles, RefreshCw, Award } from 'lucide-react';
const collections = [
  {
    id: 'women',
    category: "Women's Collection",
    title: "Discover Women's Jewelry",
    tagline: 'Delicate pavé, serpentine rings & fluid hand chains',
    description:
      'Sensual silhouettes sculpted in recycled 14k gold and sterling silver, echoing natural human contours.',
    image:
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=women',
  },
  {
    id: 'men',
    category: "Men's Collection",
    title: "Discover Men's Jewelry",
    tagline: 'Brutalist cuffs, raw obsidian & diamond-cut curb chains',
    description:
      'Substantial architecture in aerospace titanium and oxidized precious metals engineered with tactile presence.',
    image:
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=men',
  },
  {
    id: 'unisex',
    category: 'Unisex Collection',
    title: 'Jewelry Without Labels',
    tagline: 'Fluid cuffs, geometric bands & interlocking bangles',
    description:
      'Pieces created without preconceptions or demographic boundaries. Pure form, honest materials, individual expression.',
    image:
      'https://images.unsplash.com/photo-1611591475155-426475489c36?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=unisex',
  },
];
export const Home = ({ onSelectProduct }) => {
  // Products loaded strictly from local JSON
  const bestSellers = productsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="home">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* Trust Pillars */}
      <section className="page-container home__trust-wrap">
        <div className="home__trust">
          <div className="home__trust-item">
            <div className="icon-badge">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="home__trust-title">Recycled Precious Metals</h4>
              <p className="home__trust-text">Certified 925 silver & 18K solid gold</p>
            </div>
          </div>

          <div className="home__trust-item">
            <div className="icon-badge">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="home__trust-title">Lifetime Atelier Guarantee</h4>
              <p className="home__trust-text">Complimentary cleaning & stone warranty</p>
            </div>
          </div>

          <div className="home__trust-item">
            <div className="icon-badge">
              <RefreshCw size={18} />
            </div>
            <div>
              <h4 className="home__trust-title">Complimentary Global Returns</h4>
              <p className="home__trust-text">30-day effortless insured exchanges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal-scroll 3D showcase */}
      <HorizontalShowcase />

      {/* 2. Shop By Collection */}
      <section className="page-container">
        <div className="home__section-head">
          <div className="section-eyebrow">
            <Award size={13} />
            <span>Architectural Curations</span>
          </div>
          <h2 className="section-title">SHOP BY COLLECTION</h2>
          <div className="gold-rule gold-rule--center" />
          <p className="section-lead">
            Every piece is created to enhance the anatomy of the hand, designed to transcend gender
            stereotypes and celebrate individual sovereignty.
          </p>
        </div>

        <div className="home__collections">
          {collections.map((col) => (
            <CollectionCard key={col.id} collection={col} />
          ))}
        </div>
      </section>

      {/* 3. Best Sellers */}
      <section className="page-container">
        <div className="home__best-head">
          <div>
            <span className="section-eyebrow">Most Coveted Pieces</span>
            <h2 className="section-title home__best-title">BEST SELLERS</h2>
          </div>
          <Link to="/shop" className="home__explore-link">
            <span>Explore All Pieces</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="row g-4">
          {bestSellers.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-3">
              <ProductCard product={product} onNavigate={onSelectProduct} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Philosophy & Craftsmanship Section */}
      <section className="page-container">
        <div className="home__philosophy">
          <div className="home__philosophy-text">
            <span className="section-eyebrow">The Classified Philosophy</span>
            <h2 className="home__quote">"Jewelry is an expression of individuality, not a label."</h2>
            <div className="home__quote-rule" />
            <p className="section-lead">
              We reject arbitrary distinctions between jewelry for men and women. The hand is an
              instrument of touch, work, gesture, and connection. Our pieces are ergonomically
              shaped to balance weight and form on any skin.
            </p>
            <div>
              <Link to="/about" className="btn-luxury">
                <span>Read Our Atelier Story</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="image-frame home__philosophy-image">
            <img
              src={craftsmanshipImg}
              alt="Artisan jeweler at workbench polishing silver hand cuff"
              className="image-frame__img"
            />
            <div className="image-frame__shade" />
            <div className="image-frame__caption">
              Classified Master Goldsmith Atelier · Hand Polish
            </div>
          </div>
        </div>
      </section>

      {/* 5. Newsletter */}
      <Newsletter />
    </div>
  );
};
