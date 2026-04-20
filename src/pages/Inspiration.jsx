import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { inspiration } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Inspiration() {
  const tags = useMemo(() => {
    const s = new Set(['All']);
    inspiration.forEach((i) => s.add(i.tag));
    return Array.from(s);
  }, []);

  const [activeTag, setActiveTag] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => inspiration.filter((i) => activeTag === 'All' || i.tag === activeTag),
    [activeTag]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft')
        setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, filtered.length]);

  return (
    <PageTransition>
      <SEO
        title="Inspiration — Solaire Lightworks"
        description="Wireless lighting, styled in real Zimbabwean homes. Browse our inspiration gallery by room."
      />

      <section className="bg-cream-50 pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-14 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500 tracking-wide mb-6">
            <Link to="/" className="hover:text-solaire-600">Home</Link>
            <CaretRight size={11} />
            <span className="text-charcoal-800">Inspiration</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-accent text-xl sm:text-2xl text-solaire-600">
              styled in real Zimbabwean homes
            </p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-charcoal-900 leading-[1.08] sm:leading-[1.02] text-balance mt-2">
              Inspiration,{' '}
              <span className="italic text-solaire-600">lit softly</span>.
            </h1>
            <p className="mt-4 sm:mt-5 text-charcoal-500 text-base lg:text-lg max-w-xl">
              A gallery of our pieces at rest — on bedside tables, dining runs,
              garden paths, and quiet corners across the country.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 -mx-5 lg:mx-0 px-5 lg:px-0 overflow-x-auto no-scrollbar">
            <div className="flex lg:flex-wrap gap-2 whitespace-nowrap lg:whitespace-normal pb-1">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  className={`shrink-0 px-4 py-2.5 text-xs tracking-[0.14em] uppercase border transition-colors ${
                    activeTag === t
                      ? 'bg-charcoal-900 text-cream-50 border-charcoal-900'
                      : 'border-charcoal-300 text-charcoal-700 hover:border-solaire-500 hover:text-solaire-600'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 pb-16 sm:pb-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 lg:gap-6 [column-fill:_balance]">
            {filtered.map((img, i) => (
              <SectionReveal key={img.src + i} delay={Math.min(i, 10) * 30}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full mb-3 md:mb-4 lg:mb-6 overflow-hidden bg-cream-200 break-inside-avoid text-left"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full h-auto object-cover object-center transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <p className="text-[10px] tracking-[0.18em] uppercase text-cream-200/90">
                        {img.tag}
                      </p>
                      <p className="mt-1 font-display italic text-cream-50 text-base">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="fixed inset-0 z-[70] bg-charcoal-900/95 flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 h-12 w-12 flex items-center justify-center text-cream-50 bg-charcoal-900/50 sm:bg-transparent hover:bg-white/10 transition-colors"
          >
            <X size={24} />
          </button>
          <button
            onClick={() =>
              setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)
            }
            aria-label="Previous"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center text-cream-50 bg-charcoal-900/50 sm:bg-transparent hover:bg-white/10 transition-colors"
          >
            <CaretLeft size={24} />
          </button>
          <button
            onClick={() =>
              setLightboxIndex((i) => (i + 1) % filtered.length)
            }
            aria-label="Next"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center text-cream-50 bg-charcoal-900/50 sm:bg-transparent hover:bg-white/10 transition-colors"
          >
            <CaretRight size={24} />
          </button>
          <figure className="max-w-5xl max-h-full flex flex-col items-center">
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].caption}
              className="max-h-[78vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-cream-200/85 text-sm font-display italic">
              {filtered[lightboxIndex].caption} · {filtered[lightboxIndex].tag}
            </figcaption>
          </figure>
        </div>
      )}
    </PageTransition>
  );
}
