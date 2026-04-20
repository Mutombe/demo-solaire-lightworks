import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
} from '@phosphor-icons/react';
import { business, collections } from '../data/siteData';

export default function Footer() {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;
  return (
    <footer className="relative bg-cream-100 border-t border-cream-300 mt-16 sm:mt-24">
      <div className="grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={business.logo}
                alt={business.name}
                className="h-9 w-auto"
                loading="lazy"
              />
              <span className="font-display text-lg text-charcoal-900">
                {business.name}
              </span>
            </Link>
            <p className="text-sm text-charcoal-500 leading-relaxed max-w-xs">
              {business.tagline} Curated wireless lighting for quietly beautiful
              homes in Zimbabwe.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 border border-charcoal-200 flex items-center justify-center text-charcoal-700 hover:bg-solaire-500 hover:text-white hover:border-solaire-500 transition-colors"
              >
                <InstagramLogo size={16} />
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 border border-charcoal-200 flex items-center justify-center text-charcoal-700 hover:bg-solaire-500 hover:text-white hover:border-solaire-500 transition-colors"
              >
                <WhatsappLogo size={16} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-base text-charcoal-900 mb-5">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm">
              {collections.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/shop?collection=${c.slug}`}
                    className="text-charcoal-600 hover:text-solaire-600 transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-base text-charcoal-900 mb-5">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-charcoal-600 hover:text-solaire-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/inspiration"
                  className="text-charcoal-600 hover:text-solaire-600 transition-colors"
                >
                  Inspiration
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-charcoal-600 hover:text-solaire-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact#faq"
                  className="text-charcoal-600 hover:text-solaire-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-display text-base text-charcoal-900 mb-5">
              Visit
            </h4>
            <ul className="space-y-3 text-sm text-charcoal-600">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-solaire-600 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 text-solaire-600 shrink-0" />
                <span>
                  Mon–Fri {business.hours.weekdays}
                  <br />
                  Sat {business.hours.saturday}
                  <br />
                  Sun {business.hours.sunday}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 text-solaire-600 shrink-0" />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="hover:text-solaire-600"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple
                  size={16}
                  className="mt-0.5 text-solaire-600 shrink-0"
                />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-solaire-600"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 pt-7 sm:pt-8 border-t border-cream-300 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-xs text-charcoal-500 text-center sm:text-left">
          <p>
            © 2026 {business.name} · Lighting curated in Harare.
          </p>
          <p>
            {business.instagramHandle} · {business.followers} followers
          </p>
        </div>

        <p className="mt-4 text-center text-[11px] text-charcoal-400 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-solaire-600 hover:underline"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
