import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Lightning,
  Usb,
  WaveTriangle,
  CloudSun,
  Truck,
  ShieldCheck,
  Star,
  WhatsappLogo,
  EnvelopeSimple,
  Sparkle,
} from '@phosphor-icons/react';
import {
  hero,
  collections,
  products,
  features,
  story,
  inspiration,
  reviews,
  journal,
  business,
} from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ProductCard from '../components/ProductCard';
import CollectionTile from '../components/CollectionTile';
import CTASection from '../components/CTASection';

const ICONS = {
  Lightning,
  Usb,
  UsbLogo: Usb,
  WaveTriangle,
  CloudSun,
  Truck,
  ShieldCheck,
  Sparkle,
};

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 5);
  const homeCollections = collections.slice(0, 6);
  const [heroMain, heroSecondary] = hero.images;

  return (
    <PageTransition>
      <SEO
        title="Solaire Lightworks — Luxury Wireless Rechargeable Lighting | Zimbabwe"
        description={hero.sub}
      />

      {/* HERO */}
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-10 lg:pt-14 pb-24 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 lg:pr-6">
              <p className="font-accent text-xl sm:text-2xl text-solaire-600 mb-3 sm:mb-4">
                a quiet note from Harare
              </p>
              <h1 className="font-display text-[40px] sm:text-6xl lg:text-7xl leading-[1.02] sm:leading-[0.98] text-charcoal-900 text-balance">
                {hero.headline}
                <span className="block font-display italic text-solaire-600 mt-2 sm:mt-3 text-[26px] sm:text-4xl lg:text-5xl leading-snug">
                  {hero.headlineAccent}
                </span>
              </h1>
              <p className="mt-6 sm:mt-7 text-charcoal-500 text-base lg:text-lg leading-relaxed max-w-xl text-pretty">
                {hero.sub}
              </p>

              <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={hero.ctaPrimary.to}
                  className="inline-flex items-center justify-center gap-2 bg-solaire-500 text-white px-7 py-3.5 text-sm tracking-[0.12em] uppercase hover:glow-ring transition-all duration-300"
                >
                  {hero.ctaPrimary.label}
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={hero.ctaSecondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-charcoal-800 text-charcoal-800 px-7 py-3.5 text-sm tracking-[0.12em] uppercase hover:bg-charcoal-800 hover:text-cream-50 transition-colors"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  {hero.ctaSecondary.label}
                </a>
              </div>

              <dl className="mt-12 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 max-w-xl">
                {hero.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl text-charcoal-900">
                      {s.value}
                    </dt>
                    <dd className="text-[11px] tracking-[0.16em] uppercase text-charcoal-500 mt-1">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] max-w-[560px] mx-auto lg:ml-auto lg:mr-0">
                <div className="absolute -inset-10 halo pointer-events-none" />
                <div className="relative h-full w-full overflow-hidden bg-cream-200">
                  <img
                    src={heroMain.src}
                    alt={heroMain.alt}
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
                {/* Floating secondary */}
                <div className="absolute -bottom-6 left-4 w-[44%] sm:-bottom-10 sm:-left-14 sm:w-[52%] max-w-[260px] aspect-[4/5] bg-cream-50 p-2 animate-drift-slow shadow-xl">
                  <img
                    src={heroSecondary.src}
                    alt={heroSecondary.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {/* Decorative badge */}
                <div className="absolute top-4 left-4 sm:-left-10 bg-cream-50 border border-cream-300 px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-md">
                  <div className="h-2 w-2 bg-solaire-500 rounded-full animate-glow-pulse" />
                  <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-charcoal-600">
                    New · Halo Pendant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="relative bg-cream-50 py-14 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div className="max-w-xl">
                <p className="font-accent text-xl sm:text-2xl text-solaire-600">
                  the collections
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-[1.08] sm:leading-[1.05] mt-1 text-balance">
                  Light for every room,{' '}
                  <span className="italic text-solaire-600">effortlessly</span>.
                </h2>
              </div>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase text-charcoal-800 border-b border-charcoal-800 pb-1 hover:text-solaire-600 hover:border-solaire-600 self-start"
              >
                Browse collections
                <ArrowRight size={13} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {homeCollections.map((c, i) => (
              <SectionReveal key={c.slug} delay={i * 60}>
                <CollectionTile collection={c} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="relative bg-cream-100 py-14 sm:py-20 lg:py-28">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div className="max-w-xl">
                <p className="font-accent text-xl sm:text-2xl text-solaire-600">
                  this month's favourites
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-[1.08] sm:leading-[1.05] mt-1 text-balance">
                  Pieces we can't stop{' '}
                  <span className="italic text-solaire-600">recommending</span>.
                </h2>
              </div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase text-charcoal-800 border-b border-charcoal-800 pb-1 hover:text-solaire-600 hover:border-solaire-600 self-start"
              >
                All products
                <ArrowRight size={13} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {featured.slice(0, 4).map((p, i) => (
              <SectionReveal key={p.slug} delay={i * 60}>
                <ProductCard product={p} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative bg-cream-50 py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            <SectionReveal className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] max-w-[480px] mx-auto lg:mx-0">
                <img
                  src={story.imagePortrait}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 halo pointer-events-none" />
              </div>
            </SectionReveal>
            <SectionReveal className="lg:col-span-7 order-1 lg:order-2" delay={100}>
              <p className="font-accent text-xl sm:text-2xl text-solaire-600">
                {story.eyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-[1.08] sm:leading-[1.05] mt-1 text-balance">
                {story.title}
              </h2>
              <div className="mt-8 space-y-5 text-charcoal-600 text-base lg:text-lg leading-relaxed max-w-2xl">
                {story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                {story.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl text-solaire-600">
                      {s.value}
                    </dt>
                    <dd className="text-[11px] tracking-[0.14em] uppercase text-charcoal-500 mt-1.5">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-10 text-sm tracking-[0.12em] uppercase text-charcoal-800 border-b border-charcoal-800 pb-1 hover:text-solaire-600 hover:border-solaire-600"
              >
                More about us
                <ArrowRight size={13} />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="relative bg-cream-100 py-14 sm:py-20 lg:py-28">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="max-w-2xl mb-10 sm:mb-14">
              <p className="font-accent text-xl sm:text-2xl text-solaire-600">why solaire</p>
              <h2 className="font-display text-3xl sm:text-5xl text-charcoal-900 leading-[1.08] sm:leading-[1.05] mt-1 text-balance">
                The details that matter,{' '}
                <span className="italic text-solaire-600">quietly</span>.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 sm:gap-y-12">
            {features.map((f, i) => {
              const Icon = ICONS[f.icon] || Sparkle;
              return (
                <SectionReveal key={f.title} delay={i * 50}>
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 h-12 w-12 bg-cream-50 border border-cream-300 flex items-center justify-center text-solaire-600">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-charcoal-900">
                        {f.title}
                      </h3>
                      <p className="text-sm text-charcoal-500 mt-2 leading-relaxed">
                        {f.body}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSPIRATION */}
      <section className="relative bg-cream-50 py-14 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div className="max-w-xl">
                <p className="font-accent text-xl sm:text-2xl text-solaire-600">
                  as seen in our customers' homes
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-[1.08] sm:leading-[1.05] mt-1 text-balance">
                  Inspiration,{' '}
                  <span className="italic text-solaire-600">lit softly</span>.
                </h2>
              </div>
              <Link
                to="/inspiration"
                className="inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase text-charcoal-800 border-b border-charcoal-800 pb-1 hover:text-solaire-600 hover:border-solaire-600 self-start"
              >
                View gallery
                <ArrowRight size={13} />
              </Link>
            </div>
          </SectionReveal>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 lg:gap-6 [column-fill:_balance]">
            {inspiration.slice(0, 8).map((img, i) => (
              <Link
                key={i}
                to="/inspiration"
                className="group relative block mb-3 md:mb-4 lg:mb-6 overflow-hidden bg-cream-200 break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover object-center transition-transform duration-[900ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="font-display italic text-cream-50 text-sm">
                    {img.caption}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative bg-cream-100 py-14 sm:py-20 lg:py-28">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <p className="font-accent text-xl sm:text-2xl text-solaire-600">
                kind words
              </p>
              <h2 className="font-display text-3xl sm:text-5xl text-charcoal-900 leading-[1.08] sm:leading-[1.05] mt-1 text-balance">
                From homes across{' '}
                <span className="italic text-solaire-600">Zimbabwe</span>.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {reviews.slice(0, 3).map((r, i) => (
              <SectionReveal key={r.name} delay={i * 80}>
                <article className="h-full bg-cream-50 p-7 lg:p-8 border border-cream-300 flex flex-col">
                  <div className="flex items-center gap-0.5 text-solaire-500">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} size={14} weight="fill" />
                    ))}
                  </div>
                  <p className="mt-4 text-charcoal-700 leading-relaxed text-[15px]">
                    "{r.body}"
                  </p>
                  <div className="mt-6 pt-6 border-t border-cream-300 flex items-center gap-3">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover object-center"
                    />
                    <div>
                      <p className="font-display text-sm text-charcoal-900">
                        {r.name}
                      </p>
                      <p className="text-xs text-charcoal-500">{r.role}</p>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="relative bg-cream-50 py-14 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div className="max-w-xl">
                <p className="font-accent text-xl sm:text-2xl text-solaire-600">
                  from the journal
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-[1.08] sm:leading-[1.05] mt-1 text-balance">
                  Notes on light,{' '}
                  <span className="italic text-solaire-600">living</span> and
                  layering.
                </h2>
              </div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {journal.map((a, i) => (
              <SectionReveal key={a.slug} delay={i * 70}>
                <article className="group h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] group-hover:scale-[1.05]"
                    />
                    <span className="absolute top-4 left-4 bg-cream-50 text-charcoal-800 text-[10px] tracking-[0.18em] uppercase px-2.5 py-1">
                      {a.tag}
                    </span>
                  </div>
                  <div className="pt-5 flex-1 flex flex-col">
                    <p className="text-xs tracking-[0.16em] uppercase text-charcoal-500">
                      {a.readTime}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-charcoal-900 leading-snug">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-charcoal-500 text-sm leading-relaxed flex-1">
                      {a.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-5 text-solaire-600 text-xs tracking-[0.12em] uppercase border-b border-solaire-600 pb-0.5 self-start">
                      Read the note
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        bg="https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=2000&q=80"
        eyebrow="a hand to choose"
        heading="Light, delivered with a little hospitality."
        sub="Tell us the room, we'll suggest the piece. Free delivery in Harare, nationwide shipping from our studio door."
      />
    </PageTransition>
  );
}
