import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Not found — Solaire Lightworks" description="This page seems to have dimmed." />
      <section className="min-h-[78vh] bg-cream-50 flex items-center justify-center px-6 relative overflow-hidden">
        <div className="grain" />
        <div className="absolute -top-40 -left-20 w-[520px] h-[520px] halo pointer-events-none" />
        <div className="absolute -bottom-40 -right-20 w-[520px] h-[520px] halo pointer-events-none" />
        <div className="relative text-center max-w-2xl">
          <p className="font-accent text-3xl text-solaire-600">
            lost in the dark
          </p>
          <h1 className="mt-2 font-display text-6xl sm:text-7xl lg:text-8xl text-charcoal-900 leading-[1.02] text-balance">
            This page seems to have{' '}
            <span className="italic text-solaire-600">dimmed</span>.
          </h1>
          <p className="mt-6 text-charcoal-500 text-base lg:text-lg">
            Perhaps a light needed charging. Let's head back to somewhere
            luminous.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-solaire-500 text-white px-7 py-3.5 text-sm tracking-[0.14em] uppercase hover:glow-ring transition-all duration-300"
            >
              <ArrowLeft size={14} />
              Home
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border border-charcoal-800 text-charcoal-800 px-7 py-3.5 text-sm tracking-[0.14em] uppercase hover:bg-charcoal-800 hover:text-cream-50 transition-colors"
            >
              Shop the collection
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
