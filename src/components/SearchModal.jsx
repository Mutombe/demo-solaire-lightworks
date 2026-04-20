import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, X, WhatsappLogo, ArrowRight } from '@phosphor-icons/react';
import { products, contact } from '../data/siteData';

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const n = q.trim().toLowerCase();
    return products
      .filter((p) =>
        [p.name, p.sku, p.collection, p.tagline, ...(p.badges || [])]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(n)
      )
      .slice(0, 12);
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-cream-50 overflow-y-auto">
      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-10 pt-10 pb-20">
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-6 right-6 lg:top-8 lg:right-10 h-10 w-10 flex items-center justify-center text-charcoal-800 hover:text-solaire-600"
        >
          <X size={22} />
        </button>

        <p className="font-accent text-xl text-solaire-600 text-center mt-8">
          looking for something?
        </p>
        <div className="relative mt-3 max-w-2xl mx-auto">
          <MagnifyingGlass
            size={22}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-charcoal-400"
          />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try 'brass', 'pendant'…"
            className="w-full pl-10 pr-4 py-4 sm:py-5 bg-transparent border-b border-charcoal-300 focus:border-solaire-500 outline-none text-2xl sm:text-4xl font-display italic text-charcoal-900 placeholder:text-charcoal-300"
          />
        </div>

        <div className="mt-14">
          {q.trim() && results.length === 0 && (
            <div className="text-center py-16">
              <p className="font-display text-2xl text-charcoal-700">
                No lamps match that. Yet.
              </p>
              <p className="mt-3 text-charcoal-500 text-sm">
                Looking for something specific?
              </p>
              <a
                href={contact.whatsappGeneric}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-solaire-600 text-sm tracking-wide border-b border-solaire-600 pb-0.5"
              >
                <WhatsappLogo size={14} />
                Message us — we can source it.
              </a>
            </div>
          )}

          {results.length > 0 && (
            <>
              <p className="text-xs tracking-[0.18em] uppercase text-charcoal-500 mb-5">
                {results.length} {results.length === 1 ? 'result' : 'results'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {results.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/shop/${p.slug}`}
                    onClick={onClose}
                    className="group block"
                  >
                    <div className="relative overflow-hidden bg-cream-200 aspect-[4/5]">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="pt-3 flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-display text-base leading-tight">
                          {p.name}
                        </h4>
                        <p className="text-xs text-charcoal-500 mt-0.5 capitalize">
                          {p.collection}
                        </p>
                      </div>
                      <span className="font-display text-base">${p.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {!q.trim() && (
            <div className="mt-10">
              <p className="text-xs tracking-[0.18em] uppercase text-charcoal-500 mb-5">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2">
                {['pendant', 'bedside', 'outdoor', 'brass', 'candle', 'sconce'].map(
                  (t) => (
                    <button
                      key={t}
                      onClick={() => setQ(t)}
                      className="px-4 py-2 text-sm border border-charcoal-200 hover:border-solaire-500 hover:text-solaire-600 transition-colors capitalize"
                    >
                      {t}
                    </button>
                  )
                )}
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-charcoal-500">
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 hover:text-solaire-600"
                >
                  Browse all pieces <ArrowRight size={13} />
                </Link>
                <span className="text-charcoal-300">·</span>
                <Link
                  to="/collections"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 hover:text-solaire-600"
                >
                  Our collections <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
