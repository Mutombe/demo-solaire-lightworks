import React from 'react';
import { Link } from 'react-router-dom';
import { CaretRight } from '@phosphor-icons/react';
import { collections } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import CollectionTile from '../components/CollectionTile';
import CTASection from '../components/CTASection';

export default function Collections() {
  return (
    <PageTransition>
      <SEO
        title="Collections — Solaire Lightworks"
        description="Explore our curated collections of luxury wireless rechargeable lighting — pendants, table, floor, sconces, outdoor and candle."
      />

      <section className="bg-cream-50 pt-12 pb-16 lg:pt-16 lg:pb-20 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500 tracking-wide mb-6">
            <Link to="/" className="hover:text-solaire-600">Home</Link>
            <CaretRight size={11} />
            <span className="text-charcoal-800">Collections</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-accent text-2xl text-solaire-600">
              six collections, one philosophy
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 leading-[1.02] text-balance mt-2">
              Light, grouped by the way you{' '}
              <span className="italic text-solaire-600">live with it</span>.
            </h1>
            <p className="mt-6 text-charcoal-500 text-base lg:text-lg leading-relaxed max-w-xl">
              From pendants that float above a dining table to lanterns that
              travel to the terrace at sundown — every piece begins with how a
              room actually feels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 pb-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {collections.map((c, i) => {
              // Offset every other card downward for a magazine feel
              const offset = i % 2 === 1 ? 'lg:mt-20' : '';
              const aspect = i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/5]';
              return (
                <SectionReveal key={c.slug} delay={i * 80} className={offset}>
                  <CollectionTile collection={c} aspect={aspect} />
                  <div className="pt-5 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal-500">
                        0{i + 1}
                      </p>
                      <h3 className="mt-1 font-display text-2xl text-charcoal-900">
                        {c.name}
                      </h3>
                    </div>
                    <Link
                      to={`/shop?collection=${c.slug}`}
                      className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-solaire-600 border-b border-solaire-600 pb-0.5 hover:text-solaire-700"
                    >
                      Shop {c.count}
                      <CaretRight size={11} />
                    </Link>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        bg="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=2000&q=80"
        eyebrow="not sure where to begin?"
        heading="We help you plan the room, not just pick the lamp."
        sub="Send us a photo of your space on WhatsApp. We'll reply with three pieces we'd suggest, and why."
        whatsappMessage="Hi Solaire, here's a photo of my space — could you suggest a lamp?"
        emailSubject="Help planning my room — Solaire"
      />
    </PageTransition>
  );
}
