import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  CaretRight,
  WhatsappLogo,
  EnvelopeSimple,
  Truck,
  ShieldCheck,
  CheckCircle,
  CaretLeft,
} from '@phosphor-icons/react';
import { products, collections } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import SectionReveal from '../components/SectionReveal';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!product) return <Navigate to="/shop" replace />;

  const collection = collections.find((c) => c.slug === product.collection);
  const related = products
    .filter((p) => p.collection === product.collection && p.slug !== product.slug)
    .slice(0, 4);

  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];

  return (
    <PageTransition>
      <SEO
        title={`${product.name} — Solaire Lightworks`}
        description={product.tagline}
      />

      <section className="bg-cream-50 pt-10 lg:pt-14">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500 tracking-wide mb-8">
            <Link to="/" className="hover:text-solaire-600">Home</Link>
            <CaretRight size={11} />
            <Link to="/shop" className="hover:text-solaire-600">Shop</Link>
            <CaretRight size={11} />
            {collection && (
              <>
                <Link
                  to={`/shop?collection=${collection.slug}`}
                  className="hover:text-solaire-600"
                >
                  {collection.name}
                </Link>
                <CaretRight size={11} />
              </>
            )}
            <span className="text-charcoal-800 truncate">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="relative aspect-[4/5] bg-cream-200 overflow-hidden">
                <img
                  src={gallery[activeImage]}
                  alt={product.name}
                  loading="eager"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                {product.badges && product.badges[0] && (
                  <span className="absolute top-4 left-4 bg-cream-50 text-charcoal-800 text-[10px] tracking-[0.18em] uppercase px-2.5 py-1.5">
                    {product.badges[0]}
                  </span>
                )}
              </div>
              {gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3 mt-3">
                  {gallery.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative aspect-square overflow-hidden bg-cream-200 transition-all ${
                        activeImage === i
                          ? 'ring-1 ring-solaire-500 opacity-100'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={g}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="lg:sticky lg:top-28 self-start">
              {collection && (
                <p className="text-[11px] tracking-[0.2em] uppercase text-solaire-600">
                  {collection.name}
                </p>
              )}
              <h1 className="mt-2 font-display text-4xl sm:text-5xl text-charcoal-900 leading-[1.05]">
                {product.name}
              </h1>
              <p className="mt-3 font-display italic text-lg text-charcoal-600">
                {product.tagline}
              </p>

              <p className="mt-6 font-display text-3xl text-charcoal-900">
                ${product.price}
              </p>

              <p className="mt-6 text-charcoal-600 leading-relaxed text-[15px] max-w-xl">
                {product.description}
              </p>

              <div className="mt-8">
                <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal-500 mb-3">
                  Finish
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.finishes.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-2 border border-charcoal-300 text-xs text-charcoal-800"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={product.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-solaire-500 text-white px-6 py-4 text-sm tracking-[0.14em] uppercase hover:glow-ring transition-all duration-300"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  Order on WhatsApp
                </a>
                <a
                  href={product.email}
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-charcoal-800 text-charcoal-800 px-6 py-4 text-sm tracking-[0.14em] uppercase hover:bg-charcoal-800 hover:text-cream-50 transition-colors"
                >
                  <EnvelopeSimple size={16} />
                  Email inquiry
                </a>
              </div>

              {/* Trust row */}
              <div className="mt-8 grid grid-cols-3 gap-3 pt-8 border-t border-cream-300">
                <div className="flex flex-col items-center text-center gap-1.5 text-charcoal-600">
                  <Truck size={20} className="text-solaire-600" />
                  <span className="text-[11px] tracking-wide">
                    Nationwide delivery
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5 text-charcoal-600">
                  <ShieldCheck size={20} className="text-solaire-600" />
                  <span className="text-[11px] tracking-wide">2-year warranty</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5 text-charcoal-600">
                  <CheckCircle size={20} className="text-solaire-600" />
                  <span className="text-[11px] tracking-wide">
                    Tested before ship
                  </span>
                </div>
              </div>

              {/* Specs */}
              <div className="mt-10">
                <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal-500 mb-4">
                  Specifications
                </p>
                <dl className="divide-y divide-cream-300 border-t border-b border-cream-300">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div
                      key={k}
                      className="py-3 grid grid-cols-[120px_1fr] gap-4 text-sm"
                    >
                      <dt className="text-charcoal-500 capitalize">{k}</dt>
                      <dd className="text-charcoal-800">{v}</dd>
                    </div>
                  ))}
                  <div className="py-3 grid grid-cols-[120px_1fr] gap-4 text-sm">
                    <dt className="text-charcoal-500">SKU</dt>
                    <dd className="text-charcoal-800 font-mono">{product.sku}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream-100 mt-24 py-20 lg:py-24 relative">
          <div className="grain" />
          <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
            <SectionReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
                <div>
                  <p className="font-accent text-2xl text-solaire-600">
                    pairs beautifully
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 leading-[1.05]">
                    You may also like
                  </h2>
                </div>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase text-charcoal-800 border-b border-charcoal-800 pb-1 hover:text-solaire-600 hover:border-solaire-600 self-start md:self-end"
                >
                  <CaretLeft size={13} />
                  Back to shop
                </Link>
              </div>
            </SectionReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {related.map((p, i) => (
                <SectionReveal key={p.slug} delay={i * 60}>
                  <ProductCard product={p} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
