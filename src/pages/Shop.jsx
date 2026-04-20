import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FunnelSimple, X, CaretDown, CaretRight } from '@phosphor-icons/react';
import { products, collections } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ProductCard from '../components/ProductCard';

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'newest', label: 'Newest' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
];

const PRICE_RANGES = [
  { id: 'all', label: 'All prices', min: 0, max: Infinity },
  { id: 'u150', label: 'Under $150', min: 0, max: 149 },
  { id: '150-300', label: '$150 – $300', min: 150, max: 300 },
  { id: '300+', label: 'Over $300', min: 301, max: Infinity },
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Shop() {
  const query = useQuery();
  const initialCollection = query.get('collection') || 'all';
  const [activeCollection, setActiveCollection] = useState(initialCollection);
  const [activeFinish, setActiveFinish] = useState('all');
  const [price, setPrice] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setActiveCollection(query.get('collection') || 'all');
  }, [query]);

  const allFinishes = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p.finishes.forEach((f) => set.add(f.split('·')[0].trim())));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === price);
    let list = products.filter((p) => {
      if (activeCollection !== 'all' && p.collection !== activeCollection) return false;
      if (activeFinish !== 'all') {
        const hasFinish = p.finishes.some((f) =>
          f.toLowerCase().includes(activeFinish.toLowerCase())
        );
        if (!hasFinish) return false;
      }
      if (range && (p.price < range.min || p.price > range.max)) return false;
      return true;
    });

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === 'newest')
      list = [...list].sort((a, b) => (b.badges?.includes('New') ? 1 : 0) - (a.badges?.includes('New') ? 1 : 0));
    else
      list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));

    return list;
  }, [activeCollection, activeFinish, price, sort]);

  const clearAll = () => {
    setActiveCollection('all');
    setActiveFinish('all');
    setPrice('all');
  };

  const Filters = (
    <div className="space-y-10">
      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal-500 mb-4">
          Collection
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setActiveCollection('all')}
            className={`text-left px-3 py-1.5 text-sm transition-colors ${
              activeCollection === 'all'
                ? 'bg-charcoal-900 text-cream-50'
                : 'text-charcoal-700 hover:text-solaire-600'
            }`}
            style={{ borderRadius: '2px' }}
          >
            All collections
          </button>
          {collections.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCollection(c.slug)}
              className={`text-left px-3 py-1.5 text-sm transition-colors ${
                activeCollection === c.slug
                  ? 'bg-charcoal-900 text-cream-50'
                  : 'text-charcoal-700 hover:text-solaire-600'
              }`}
              style={{ borderRadius: '2px' }}
            >
              {c.name} <span className="text-charcoal-400 text-xs">· {c.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal-500 mb-4">
          Finish
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFinish('all')}
            className={`px-3 py-1.5 text-xs border transition-colors ${
              activeFinish === 'all'
                ? 'bg-charcoal-900 text-cream-50 border-charcoal-900'
                : 'border-charcoal-200 text-charcoal-700 hover:border-solaire-500'
            }`}
          >
            All
          </button>
          {allFinishes.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFinish(f)}
              className={`px-3 py-1.5 text-xs border transition-colors ${
                activeFinish === f
                  ? 'bg-charcoal-900 text-cream-50 border-charcoal-900'
                  : 'border-charcoal-200 text-charcoal-700 hover:border-solaire-500'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal-500 mb-4">
          Price
        </p>
        <div className="flex flex-col gap-2">
          {PRICE_RANGES.map((r) => (
            <label
              key={r.id}
              className="flex items-center gap-2.5 text-sm text-charcoal-700 cursor-pointer"
            >
              <input
                type="radio"
                name="price"
                value={r.id}
                checked={price === r.id}
                onChange={() => setPrice(r.id)}
                className="accent-solaire-500"
              />
              {r.label}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearAll}
        className="text-xs tracking-[0.12em] uppercase text-solaire-600 border-b border-solaire-600 pb-0.5 self-start"
      >
        Clear all filters
      </button>
    </div>
  );

  return (
    <PageTransition>
      <SEO
        title="Shop — Solaire Lightworks"
        description="Shop luxury wireless rechargeable lighting — table lamps, pendants, sconces, floor lamps, outdoor lanterns and candles. Nationwide delivery."
      />

      {/* Breadcrumb + title */}
      <section className="bg-cream-50 pt-10 pb-8 lg:pt-14 lg:pb-10 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500 tracking-wide mb-4">
            <Link to="/" className="hover:text-solaire-600">Home</Link>
            <CaretRight size={11} />
            <span className="text-charcoal-800">Shop</span>
            {activeCollection !== 'all' && (
              <>
                <CaretRight size={11} />
                <span className="text-charcoal-800 capitalize">
                  {collections.find((c) => c.slug === activeCollection)?.name}
                </span>
              </>
            )}
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="font-accent text-2xl text-solaire-600">
                everything in the studio
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-[1.05]">
                Shop the collection
              </h1>
            </div>
            <p className="text-sm text-charcoal-500 max-w-md">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} —
              tested, charged and ready to light your home.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between gap-4 mb-8">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 border border-charcoal-300 px-4 py-2.5 text-sm"
            >
              <FunnelSimple size={16} />
              Filters
            </button>
            <div className="ml-auto flex items-center gap-2 text-sm">
              <span className="hidden sm:inline text-charcoal-500">Sort:</span>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none pl-4 pr-9 py-2.5 border border-charcoal-300 bg-cream-50 text-sm text-charcoal-800 focus:border-solaire-500 outline-none"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <CaretDown
                  size={13}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-14">
            <aside className="hidden lg:block">
              <div className="sticky top-28">{Filters}</div>
            </aside>

            <div>
              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-display text-3xl text-charcoal-700">
                    No pieces match these filters.
                  </p>
                  <p className="mt-3 text-charcoal-500 text-sm">
                    Try clearing a filter — or message us and we'll source it.
                  </p>
                  <button
                    onClick={clearAll}
                    className="mt-6 inline-flex items-center gap-2 bg-solaire-500 text-white px-5 py-2.5 text-xs tracking-[0.14em] uppercase"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                  {filtered.map((p, i) => (
                    <SectionReveal key={p.slug} delay={Math.min(i, 8) * 40}>
                      <ProductCard product={p} />
                    </SectionReveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-900/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <aside
          className={`absolute top-0 left-0 h-full w-[88%] max-w-sm bg-cream-50 overflow-y-auto transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-cream-300">
            <span className="font-display text-lg">Filters</span>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="h-10 w-10 flex items-center justify-center"
            >
              <X size={22} />
            </button>
          </div>
          <div className="p-6">{Filters}</div>
          <div className="p-6 pt-0">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-solaire-500 text-white py-3 text-xs tracking-[0.14em] uppercase"
            >
              Show {filtered.length} pieces
            </button>
          </div>
        </aside>
      </div>
    </PageTransition>
  );
}
