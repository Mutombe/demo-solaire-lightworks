import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

export default function CollectionTile({ collection, className = '', aspect = 'aspect-[4/5]' }) {
  return (
    <Link
      to={`/shop?collection=${collection.slug}`}
      className={`group relative block overflow-hidden bg-cream-200 ${aspect} ${className}`}
    >
      <img
        src={collection.image}
        alt={collection.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/10 to-transparent" />
      <span className="absolute top-4 right-4 bg-cream-50 text-charcoal-800 text-[10px] tracking-[0.18em] uppercase px-2.5 py-1">
        {collection.count} pieces
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <h3 className="font-display text-3xl lg:text-4xl text-cream-50 leading-tight">
          {collection.name}
        </h3>
        <p className="text-cream-200/90 text-sm mt-2 max-w-xs">
          {collection.caption}
        </p>
        <span className="inline-flex items-center gap-2 mt-4 text-cream-50 text-xs tracking-[0.18em] uppercase border-b border-cream-50/40 pb-0.5 group-hover:border-cream-50">
          Explore
          <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}
