import React from 'react';
import { announcement } from '../data/siteData';

export default function Marquee() {
  const items = announcement.items;
  const text = items.join('  ·  ');

  return (
    <div className="w-full bg-cream-100 border-b border-cream-300 overflow-hidden">
      <div className="relative flex whitespace-nowrap py-2 text-[11px] sm:text-xs tracking-widest uppercase text-charcoal-600">
        <div className="flex animate-marquee">
          <span className="px-8">{text}</span>
          <span className="px-8">{text}</span>
          <span className="px-8">{text}</span>
          <span className="px-8">{text}</span>
        </div>
      </div>
    </div>
  );
}
