import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Shop } from './pages/Shop/Shop.jsx';
import { ProductDetails } from './pages/ProductDetails/ProductDetails.jsx';
import { AboutUs } from './pages/AboutUs/AboutUs.jsx';
import { ContactUs } from './pages/ContactUs/ContactUs.jsx';

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
      <Router basename={import.meta.env.BASE_URL}>
        <div className="app-shell">
          <Navbar />

          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home onSelectProduct={setSelectedProductId} />} />
              <Route path="/shop" element={<Shop onSelectProduct={setSelectedProductId} />} />
              <Route path="/product/:id" element={<ProductDetails productId={selectedProductId} onSelectProduct={setSelectedProductId} />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
  );
}