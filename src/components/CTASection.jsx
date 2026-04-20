import React from 'react';
import { WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react';
import { business } from '../data/siteData';

export default function CTASection({
  bg,
  eyebrow = 'Let\'s light the room',
  heading = 'Light, quietly luxurious — delivered to your door.',
  sub = 'Tell us the room, we\'ll suggest the lamp. Two minutes, no hard sell.',
  whatsappMessage = "Hi Solaire, I'd like help choosing a lamp for my space.",
  emailSubject = 'Help choosing a Solaire lamp',
}) {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const mailHref = `mailto:${business.email}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <section className="relative overflow-hidden">
      <img
        src={bg}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal-900/65" />
      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-10 py-16 sm:py-24 lg:py-32 text-center">
        <p className="font-accent text-xl sm:text-2xl text-glow-400 mb-3 sm:mb-4">{eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-cream-50 leading-[1.08] sm:leading-[1.05] text-balance">
          {heading}
        </h2>
        <p className="mt-5 sm:mt-6 text-cream-100/85 text-base lg:text-lg max-w-xl mx-auto text-pretty">
          {sub}
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-solaire-500 text-white px-7 py-3.5 text-sm tracking-[0.1em] uppercase hover:glow-ring transition-all duration-300"
          >
            <WhatsappLogo size={16} weight="fill" />
            WhatsApp us
          </a>
          <a
            href={mailHref}
            className="inline-flex items-center justify-center gap-2 border border-cream-50 text-cream-50 px-7 py-3.5 text-sm tracking-[0.1em] uppercase hover:bg-cream-50 hover:text-charcoal-900 transition-colors"
          >
            <EnvelopeSimple size={16} />
            Email instead
          </a>
        </div>
      </div>
    </section>
  );
}
