import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkle,
  Leaf,
  HandHeart,
  CheckCircle,
  CaretRight,
} from '@phosphor-icons/react';
import { story, values, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';

const VALUE_ICONS = { Sparkle, Leaf, HandHeart, CheckCircle };

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About — Solaire Lightworks"
        description="A small, considered lighting studio in Harare. Read about our philosophy and why every piece earns its place."
      />

      {/* Magazine opening */}
      <section className="bg-cream-50 pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500 tracking-wide mb-6">
            <Link to="/" className="hover:text-solaire-600">Home</Link>
            <CaretRight size={11} />
            <span className="text-charcoal-800">About</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="font-accent text-xl sm:text-2xl text-solaire-600">{story.eyebrow}</p>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl text-charcoal-900 leading-[1.05] sm:leading-[0.98] text-balance mt-2">
                {story.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="italic text-solaire-600">
                  {story.title.split(' ').slice(-1)}
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <dl className="grid grid-cols-3 gap-4 sm:gap-6 lg:w-full max-w-sm">
                {story.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl lg:text-3xl text-charcoal-900">
                      {s.value}
                    </dt>
                    <dd className="text-[10px] tracking-[0.16em] uppercase text-charcoal-500 mt-1">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating rows */}
      <section className="bg-cream-50 pb-14 sm:pb-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 space-y-14 sm:space-y-20 lg:space-y-28">
          {story.paragraphs.map((p, i) => {
            const left = i % 2 === 0;
            const img =
              i === 0 ? story.imagePortrait :
              i === 1 ? story.imageLandscape :
              'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1400&q=80';
            return (
              <div
                key={i}
                className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center"
              >
                <SectionReveal
                  className={`lg:col-span-6 order-1 ${left ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-cream-200 max-w-xl">
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                </SectionReveal>
                <SectionReveal
                  className={`lg:col-span-6 order-2 ${left ? 'lg:order-2' : 'lg:order-1'}`}
                  delay={120}
                >
                  <p className="font-accent text-lg sm:text-xl text-solaire-600 mb-2 sm:mb-3">
                    chapter 0{i + 1}
                  </p>
                  <p className="font-display text-xl sm:text-2xl lg:text-3xl text-charcoal-800 leading-snug text-pretty max-w-xl">
                    {p}
                  </p>
                </SectionReveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full-width founder quote */}
      <section className="relative">
        <div className="relative aspect-[4/5] sm:aspect-[16/9] max-h-[640px] w-full overflow-hidden bg-charcoal-900">
          <img
            src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=2000&q=80"
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-charcoal-900/55 sm:bg-charcoal-900/45" />
          <div className="relative h-full flex items-center justify-center px-5 sm:px-6">
            <blockquote className="max-w-4xl text-center">
              <p className="font-display italic text-cream-50 text-2xl sm:text-4xl lg:text-6xl leading-[1.15] sm:leading-[1.1] text-balance">
                "Light should feel like hospitality — warm, easy, generous. Not a
                cable management problem."
              </p>
              <footer className="mt-6 sm:mt-8 text-cream-200/80 text-[10px] sm:text-xs tracking-[0.22em] uppercase">
                Founder · {business.shortName} {business.city}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-100 py-14 sm:py-24 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="max-w-2xl mb-10 sm:mb-14">
              <p className="font-accent text-xl sm:text-2xl text-solaire-600">
                what we stand for
              </p>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-[1.08] sm:leading-[1.05] mt-1 text-balance">
                Four quiet values — and we won't{' '}
                <span className="italic text-solaire-600">budge on them</span>.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {values.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon] || Sparkle;
              return (
                <SectionReveal key={v.title} delay={i * 80}>
                  <div className="h-full bg-cream-50 border border-cream-300 p-6 sm:p-8 lg:p-10 flex gap-4 sm:gap-5">
                    <div className="shrink-0 h-12 w-12 bg-solaire-50 text-solaire-600 flex items-center justify-center">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-charcoal-900">
                        {v.title}
                      </h3>
                      <p className="mt-2 sm:mt-3 text-charcoal-600 leading-relaxed text-[15px]">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        bg="https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=2000&q=80"
        eyebrow="come by the studio"
        heading="Sam Levy's Village, Borrowdale — kettle on."
        sub="We'd love to show you the pieces in person. Drop in, or we can visit your space for a home consultation."
      />
    </PageTransition>
  );
}
