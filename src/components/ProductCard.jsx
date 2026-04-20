import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react';

const FINISH_DOT_COLORS = {
  'brushed brass': '#B08D57',
  'soft black': '#1A1A1D',
  'matte black': '#1A1A1D',
  'warm white': '#FDFBF2',
  ivory: '#FDFBF2',
  ink: '#1A1A1D',
  sage: '#9CAF88',
  brass: '#B08D57',
  'milk glass': '#F8F3E4',
  black: '#1A1A1D',
  'smoke glass': '#4A4A4F',
  'warm bronze': '#8B6B3D',
  'soft white': '#FEFDF9',
  bronze: '#8B6B3D',
  'tan leather': '#C0935C',
  graphite: '#3A3A3F',
  'black leather': '#1A1A1D',
  clay: '#B88A6E',
  'plaster white': '#F4EEE2',
  'warm sand': '#D9C7A3',
  'aged brass': '#9B7B4A',
  alabaster: '#F1EADE',
  terracotta: '#C7714A',
};

function finishDot(label) {
  const key = label.trim().toLowerCase();
  // Handle compound labels like "Brass · Milk Glass" — take first token before separator
  const first = key.split('·')[0].trim();
  return FINISH_DOT_COLORS[first] || FINISH_DOT_COLORS[key] || '#CFCFD4';
}

export default function ProductCard({ product }) {
  return (
    <article className="group flex flex-col">
      <Link
        to={`/shop/${product.slug}`}
        className="relative block overflow-hidden bg-cream-200 aspect-[4/5]"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        {product.badges && product.badges[0] === 'New' && (
          <span className="absolute top-3 left-3 bg-solaire-500 text-white text-[10px] tracking-[0.18em] uppercase px-2 py-1 animate-glow-pulse">
            New
          </span>
        )}
        {product.badges && product.badges[0] && product.badges[0] !== 'New' && (
          <span className="absolute top-3 left-3 bg-cream-50 text-charcoal-800 text-[10px] tracking-[0.18em] uppercase px-2 py-1">
            {product.badges[0]}
          </span>
        )}
      </Link>

      <div className="pt-4 flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5">
          {product.finishes.slice(0, 4).map((f) => (
            <span
              key={f}
              title={f}
              className="h-3 w-3 border border-charcoal-200"
              style={{ backgroundColor: finishDot(f), borderRadius: '2px' }}
            />
          ))}
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-lg text-charcoal-900 leading-tight">
              <Link
                to={`/shop/${product.slug}`}
                className="hover:text-solaire-600 transition-colors"
              >
                {product.name}
              </Link>
            </h3>
            <p className="text-xs text-charcoal-500 mt-0.5 line-clamp-1">
              {product.tagline}
            </p>
          </div>
          <span className="font-display text-lg text-charcoal-900 shrink-0">
            ${product.price}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <a
            href={product.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 flex-1 bg-solaire-500 text-white text-xs tracking-wide py-2 hover:bg-solaire-600 transition-colors"
          >
            <WhatsappLogo size={13} weight="fill" />
            WhatsApp
          </a>
          <a
            href={product.email}
            className="flex items-center justify-center gap-1.5 flex-1 border border-charcoal-800 text-charcoal-800 text-xs tracking-wide py-2 hover:bg-charcoal-800 hover:text-cream-50 transition-colors"
          >
            <EnvelopeSimple size={13} />
            Email
          </a>
        </div>
      </div>
    </article>
  );
}
