import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

const links = [
  { to: '/', label: 'Início' },
  { to: '/products', label: 'Times' },
  { to: '/about', label: 'Sobre' },
  { to: '/contact', label: 'Contato' }
];

function App() {
  return (
    <>
      <Nav links={links} />

      <main className="container main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
