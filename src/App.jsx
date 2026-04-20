import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SearchModal from './components/SearchModal';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';
import About from './pages/About';
import Inspiration from './pages/Inspiration';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollReset() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <ScrollReset />
      <Marquee />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      <main className="min-h-[60vh]">
        <ErrorBoundary>
          <AnimatePresence mode="popLayout" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:slug" element={<ProductDetail />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />
      <ScrollToTop />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Toaster
        position="top-center"
        theme="light"
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Inter, system-ui, sans-serif',
            borderRadius: '2px',
          },
        }}
      />
    </>
  );
}
