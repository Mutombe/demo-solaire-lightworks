import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
  WhatsappLogo,
  InstagramLogo,
  CaretRight,
  Plus,
  Minus,
  ArrowRight,
} from '@phosphor-icons/react';
import { business, contact, faqs } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-cream-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left py-5 lg:py-6 group"
      >
        <span className="font-display text-base sm:text-lg lg:text-xl text-charcoal-900 group-hover:text-solaire-600 transition-colors">
          {q}
        </span>
        <span className="shrink-0 h-9 w-9 sm:h-8 sm:w-8 border border-charcoal-300 flex items-center justify-center text-charcoal-700">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-out ${
          open ? 'max-h-96 opacity-100 mb-5 sm:mb-6' : 'max-h-0 opacity-0 mb-0'
        }`}
      >
        <p className="text-charcoal-600 leading-relaxed text-[15px] pr-4 sm:pr-12">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    looking: '',
    message: '',
  });
  const [channel, setChannel] = useState('whatsapp');
  const [openIdx, setOpenIdx] = useState(0);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast.error('Please add your name and a message.');
      return;
    }

    const body = `Hi Solaire Lightworks,\n\nI'm ${form.name}.\n\nWhat I'm looking for: ${form.looking || '—'}\n\nMessage: ${form.message}\n\nReach me at: ${form.email}`;

    if (channel === 'whatsapp') {
      const url = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(body)}`;
      window.open(url, '_blank');
      toast.success('Opening WhatsApp — we reply within the hour.');
    } else {
      const url = `mailto:${business.email}?subject=${encodeURIComponent(
        `Enquiry from ${form.name}`
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
      toast.success('Opening your email — we aim to reply same-day.');
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Contact — Solaire Lightworks"
        description="Visit our studio at Sam Levy's Village or reach us on WhatsApp. We reply within the hour during business hours."
      />

      <section className="bg-cream-50 pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500 tracking-wide mb-6">
            <Link to="/" className="hover:text-solaire-600">Home</Link>
            <CaretRight size={11} />
            <span className="text-charcoal-800">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-accent text-xl sm:text-2xl text-solaire-600">
              we reply within the hour
            </p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-charcoal-900 leading-[1.08] sm:leading-[1.02] text-balance mt-2">
              Say{' '}
              <span className="italic text-solaire-600">hello</span>.
            </h1>
            <p className="mt-4 sm:mt-5 text-charcoal-500 text-base lg:text-lg max-w-xl">
              Stop by the studio, drop us a WhatsApp, or send an email. If
              you'd rather we come to you, we do home consultations across
              Harare by appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 pb-16 sm:pb-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact card */}
            <SectionReveal className="lg:col-span-2">
              <div className="bg-charcoal-900 text-cream-50 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                <div className="grain" />
                <div className="relative space-y-6 sm:space-y-8">
                  <div>
                    <p className="font-accent text-xl sm:text-2xl text-glow-400">
                      come say hello
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl mt-1">
                      The studio & more.
                    </h2>
                  </div>

                  <ul className="space-y-5 text-[15px]">
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="mt-1 text-solaire-400 shrink-0" />
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-cream-200/70">
                          Studio
                        </p>
                        <p className="text-cream-50 mt-1">{business.address}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={18} className="mt-1 text-solaire-400 shrink-0" />
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-cream-200/70">
                          Hours
                        </p>
                        <p className="text-cream-50 mt-1 space-y-0.5">
                          Mon – Fri · {business.hours.weekdays}
                          <br />
                          Saturday · {business.hours.saturday}
                          <br />
                          Sunday · {business.hours.sunday}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone size={18} className="mt-1 text-solaire-400 shrink-0" />
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-cream-200/70">
                          Phone
                        </p>
                        <a
                          href={contact.phoneHref}
                          className="text-cream-50 mt-1 block hover:text-solaire-400"
                        >
                          {business.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <EnvelopeSimple size={18} className="mt-1 text-solaire-400 shrink-0" />
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-cream-200/70">
                          Email
                        </p>
                        <a
                          href={`mailto:${business.email}`}
                          className="text-cream-50 mt-1 block hover:text-solaire-400 break-all"
                        >
                          {business.email}
                        </a>
                      </div>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={contact.whatsappGeneric}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-solaire-500 text-white px-5 py-3 text-xs tracking-[0.14em] uppercase hover:glow-ring transition-all"
                    >
                      <WhatsappLogo size={14} weight="fill" />
                      WhatsApp
                    </a>
                    <a
                      href={business.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-cream-200/40 text-cream-50 px-5 py-3 text-xs tracking-[0.14em] uppercase hover:bg-cream-50 hover:text-charcoal-900 transition-colors"
                    >
                      <InstagramLogo size={14} />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 aspect-[4/3] overflow-hidden border border-cream-300">
                <iframe
                  title="Solaire Lightworks Studio Location"
                  src="https://www.google.com/maps?q=Sam+Levy's+Village+Borrowdale+Harare&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </SectionReveal>

            {/* Form */}
            <SectionReveal className="lg:col-span-3" delay={120}>
              <form
                onSubmit={handleSubmit}
                className="bg-cream-100 border border-cream-300 p-6 sm:p-8 lg:p-12 relative overflow-hidden"
              >
                <div className="grain" />
                <div className="relative">
                  <p className="font-accent text-xl sm:text-2xl text-solaire-600">
                    tell us about your space
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal-900 mt-1">
                    Send us a note.
                  </h2>

                  <div className="mt-7 sm:mt-8 grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] tracking-[0.18em] uppercase text-charcoal-500 mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-base sm:text-sm focus:border-solaire-500 outline-none"
                        placeholder="Tariro"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.18em] uppercase text-charcoal-500 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-base sm:text-sm focus:border-solaire-500 outline-none"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-5">
                    <label className="block text-[11px] tracking-[0.18em] uppercase text-charcoal-500 mb-2">
                      What are you looking for?
                    </label>
                    <input
                      type="text"
                      value={form.looking}
                      onChange={update('looking')}
                      className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-base sm:text-sm focus:border-solaire-500 outline-none"
                      placeholder="A pendant for our dining room…"
                    />
                  </div>

                  <div className="mt-4 sm:mt-5">
                    <label className="block text-[11px] tracking-[0.18em] uppercase text-charcoal-500 mb-2">
                      Your message
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-base sm:text-sm focus:border-solaire-500 outline-none resize-none"
                      placeholder="Tell us the room, the vibe, and when you'd like it lit by."
                    />
                  </div>

                  <div className="mt-6">
                    <p className="block text-[11px] tracking-[0.18em] uppercase text-charcoal-500 mb-3">
                      Send via
                    </p>
                    <div className="flex sm:inline-flex border border-cream-300 bg-cream-50 p-1 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => setChannel('whatsapp')}
                        className={`flex-1 sm:flex-none px-5 py-3 text-xs tracking-[0.14em] uppercase transition-colors inline-flex items-center justify-center gap-2 ${
                          channel === 'whatsapp'
                            ? 'bg-solaire-500 text-white'
                            : 'text-charcoal-700'
                        }`}
                      >
                        <WhatsappLogo size={13} weight="fill" />
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setChannel('email')}
                        className={`flex-1 sm:flex-none px-5 py-3 text-xs tracking-[0.14em] uppercase transition-colors inline-flex items-center justify-center gap-2 ${
                          channel === 'email'
                            ? 'bg-glow-500 text-charcoal-900'
                            : 'text-charcoal-700'
                        }`}
                      >
                        <EnvelopeSimple size={13} />
                        Email
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`mt-7 sm:mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-[0.14em] uppercase transition-all duration-300 ${
                      channel === 'whatsapp'
                        ? 'bg-solaire-500 text-white hover:glow-ring'
                        : 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800'
                    }`}
                  >
                    Send message
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            </SectionReveal>
          </div>

          {/* FAQ */}
          <div id="faq" className="mt-16 sm:mt-24 lg:mt-32 grid lg:grid-cols-12 gap-8 sm:gap-10">
            <div className="lg:col-span-4">
              <p className="font-accent text-xl sm:text-2xl text-solaire-600">
                before you ask
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 leading-[1.08] sm:leading-[1.05] mt-1 text-balance">
                Frequently asked.
              </h2>
              <p className="mt-4 sm:mt-5 text-charcoal-500 text-sm leading-relaxed max-w-xs">
                Anything not covered? WhatsApp is the fastest — we reply within
                the hour during studio hours.
              </p>
            </div>
            <div className="lg:col-span-8">
              {faqs.map((f, i) => (
                <FAQItem
                  key={i}
                  q={f.q}
                  a={f.a}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
