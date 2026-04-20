import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MagnifyingGlass, List, X, WhatsappLogo } from '@phosphor-icons/react';
import { business } from '../data/siteData';

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/inspiration', label: 'Inspiration' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = loc.pathname === '/';
  const transparent = isHome && !scrolled;

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          transparent
            ? 'bg-transparent'
            : 'bg-cream-50/95 backdrop-blur-md border-b border-cream-300'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={business.logo}
              alt={business.name}
              className="h-8 w-auto"
              loading="eager"
            />
            <span className="font-display text-[20px] tracking-tight text-charcoal-900 hidden sm:block">
              {business.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-solaire-600'
                      : 'text-charcoal-700 hover:text-solaire-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-solaire-600" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="h-10 w-10 flex items-center justify-center text-charcoal-700 hover:text-solaire-600 transition-colors"
            >
              <MagnifyingGlass size={20} />
            </button>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="h-10 w-10 hidden sm:flex items-center justify-center text-charcoal-700 hover:text-solaire-600 transition-colors"
            >
              <WhatsappLogo size={20} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-10 w-10 flex lg:hidden items-center justify-center text-charcoal-800"
            >
              <List size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-900/40"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-cream-50 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-cream-300">
            <span className="font-display text-lg">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3 font-display text-2xl transition-colors ${
                    isActive ? 'text-solaire-600' : 'text-charcoal-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-cream-300 space-y-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-solaire-500 text-white py-3 text-sm tracking-wide"
            >
              <WhatsappLogo size={18} weight="fill" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-charcoal-500 text-center">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
