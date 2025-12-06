import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Produtos' },
  { to: '/about', label: 'Sobre' },
  { to: '/contact', label: 'Contato' }
];

function App() {
  return (
    <>
      <Nav links={links} />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer year={2025} />
    </>
  );
}

export default App;
