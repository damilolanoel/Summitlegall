import { useState } from 'react';
import { ChevronRight, Award, Globe, Clock, Star, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { practiceAreas } from '../data/practiceAreas';
import { teamMembers, offices } from '../data/team';

interface HomePageProps {
  onNavigate: (page: string, subPage?: string) => void;
}

const stats = [
  { value: '35+', label: 'Years of Excellence', icon: Clock },
  { value: '2,000+', label: 'Cases Won', icon: Award },
  { value: '15', label: 'Practice Areas', icon: Globe },
  { value: '4', label: 'Offices Nationwide', icon: MapPin },
];

const testimonials = [
  {
    name: 'Chukwuemeka Obi',
    company: 'CEO, Obi Properties Ltd',
    text: 'Summit Law Firm handled our ₦4 billion real estate transaction with extraordinary professionalism. Their attention to detail and deep knowledge of property law saved us from a potentially costly mistake.',
    rating: 5,
  },
  {
    name: 'Fatima Al-Hassan',
    company: 'Managing Director, Zenith Imports',
    text: 'When we faced an employment tribunal matter, Summit\'s team was exceptional. They resolved a complex dispute that could have derailed our business in just 3 months. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Dr. Babatunde Adeola',
    company: 'Chairman, TechBridge Nigeria',
    text: 'Our IP portfolio is now rock-solid thanks to Summit Law Firm. Their technology law expertise is unmatched in Nigeria. They registered our patents and trademarks across ARIPO with incredible efficiency.',
    rating: 5,
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', service: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNav = (page: string, subPage?: string) => {
    onNavigate(page, subPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '', service: '' });
  };

  const highPracticeAreas = practiceAreas.filter(a => a.category === 'high');

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="/images/hero-bg.jpg" alt="Summit Law Firm" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Decorative line */}
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-yellow-400 via-yellow-400/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-sm text-xs font-semibold tracking-widest uppercase mb-8">
              <Award size={12} />
              Nigeria's Premier Law Firm · Est. 1990
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Summit
              <br />
              <span className="text-yellow-400">Law</span>
              <br />
              Firm
            </h1>

            <div className="w-16 h-0.5 bg-yellow-400 mb-6" />

            <p className="text-gray-300 text-lg leading-relaxed mb-3" style={{ fontFamily: "'Lora', serif" }}>
              Delivering <span className="text-yellow-400 font-semibold">35 years</span> of legal excellence across Nigeria.
              From corporate boardrooms to constitutional courts — we stand for what's right.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              4 offices nationwide · 15 practice areas · Senior Advocates of Nigeria on staff
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleNav('contact')}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 font-bold uppercase tracking-wider text-sm rounded-sm transition-all hover:shadow-xl hover:shadow-yellow-400/30 flex items-center gap-2"
              >
                Book Free Consultation <ChevronRight size={16} />
              </button>
              <button
                onClick={() => handleNav('practice')}
                className="border border-yellow-400/50 hover:border-yellow-400 text-white hover:text-yellow-400 px-8 py-4 font-semibold text-sm rounded-sm transition-all flex items-center gap-2"
              >
                Our Practice Areas <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Hero right: Stats card */}
          <div className="hidden lg:block">
            <div className="bg-black/60 backdrop-blur-md border border-yellow-400/20 rounded-sm p-8">
              <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">Our Track Record</p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ value, label, icon: Icon }) => (
                  <div key={label} className="text-center p-4 border border-yellow-400/10 rounded-sm bg-yellow-400/5">
                    <Icon className="text-yellow-400 mx-auto mb-2" size={24} />
                    <div className="text-3xl font-black text-yellow-400" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</div>
                    <div className="text-gray-400 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-yellow-400/20">
                <p className="text-gray-400 text-xs mb-3">Speak to us now:</p>
                <a
                  href="https://wa.me/2348093605871"
                  className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">+234 809 360 5871</div>
                    <div className="text-xs text-gray-500">WhatsApp available</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-yellow-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS BAR (mobile) ── */}
      <section className="bg-yellow-400 py-6 px-4 lg:hidden">
        <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="text-black mx-auto mb-1" size={20} />
              <div className="text-2xl font-black text-black" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</div>
              <div className="text-black/60 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/images/about-bg.jpg"
              alt="Summit Law Firm Team"
              className="rounded-sm w-full object-cover h-[480px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-sm shadow-2xl hidden md:block">
              <div className="text-black font-black text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>35</div>
              <div className="text-black/70 text-xs font-semibold">Years of<br/>Excellence</div>
            </div>
            <div className="absolute -top-6 -left-6 bg-black border border-yellow-400/30 p-4 rounded-sm hidden md:block">
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(n => <Star key={n} size={12} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <div className="text-white text-xs font-semibold">Nigeria's #1</div>
              <div className="text-gray-400 text-xs">Rated Law Firm</div>
            </div>
          </div>

          <div>
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">About Summit Law Firm</div>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Three Decades of Legal<br />
              <span className="text-yellow-400">Mastery & Integrity</span>
            </h2>
            <div className="w-12 h-0.5 bg-yellow-400 mb-6" />
            <p className="text-gray-400 leading-relaxed mb-5" style={{ fontFamily: "'Lora', serif" }}>
              Founded in 1990 by Chief Emeka O. Summit SAN, our firm has grown from a single-office Abuja practice into Nigeria's most comprehensive multi-practice legal institution. We combine the wisdom of experience with the energy of a new generation of exceptional lawyers.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8" style={{ fontFamily: "'Lora', serif" }}>
              Our mission is simple: provide world-class legal services tailored to the Nigerian context, with unwavering commitment to our clients' success and the highest ethical standards.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Senior Advocates of Nigeria on staff',
                'Active in all 36 states + FCT',
                'Multi-language client service',
                'Transparent, ethical billing',
                'International network of partners',
                '24/7 emergency legal support',
              ].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleNav('about')}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-3 font-bold text-sm uppercase tracking-wider rounded-sm transition-all flex items-center gap-2"
            >
              Our Full Story <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS ── */}
      <section className="bg-gray-950 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">Legal Expertise</div>
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Practice Areas
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
              Comprehensive legal coverage across 15 specializations — from complex corporate transactions to individual rights protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {highPracticeAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => handleNav('practice-detail', area.id)}
                className="group bg-black border border-yellow-400/10 hover:border-yellow-400/50 p-6 rounded-sm text-left transition-all duration-300 hover:bg-yellow-400/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/10"
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {area.shortTitle}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                  {area.description.substring(0, 100)}...
                </p>
                <div className="mt-4 text-yellow-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Learn More <ChevronRight size={12} />
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => handleNav('practice')}
              className="border border-yellow-400/40 hover:border-yellow-400 text-yellow-400 px-8 py-3 rounded-sm text-sm font-semibold transition-all hover:bg-yellow-400/10"
            >
              View All 15 Practice Areas →
            </button>
          </div>
        </div>
      </section>

      {/* ── TEAM TEASER ── */}
      <section className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">Meet Our Lawyers</div>
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Exceptional Legal Minds
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.slice(0, 3).map(member => (
              <div key={member.id} className="group relative overflow-hidden rounded-sm border border-yellow-400/10 hover:border-yellow-400/40 transition-all duration-300">
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-1">{member.role}</div>
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{member.name}</h3>
                  <p className="text-gray-400 text-xs">{member.title}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {member.specializations.slice(0, 2).map(s => (
                      <span key={s} className="bg-yellow-400/10 text-yellow-400 text-xs px-2 py-0.5 rounded-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => handleNav('team')}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all"
            >
              Meet Our Full Team →
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-gray-950 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">Client Testimonials</div>
          <h2 className="text-4xl font-black text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Clients Say
          </h2>

          <div className="bg-black border border-yellow-400/20 p-10 rounded-sm relative">
            <div className="text-yellow-400 text-6xl leading-none mb-4 font-serif absolute top-6 left-8">"</div>
            <div className="flex gap-1 justify-center mb-4">
              {[1,2,3,4,5].map(n => (
                <Star key={n} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 italic" style={{ fontFamily: "'Lora', serif" }}>
              {testimonials[activeTestimonial].text}
            </p>
            <p className="text-yellow-400 font-bold">{testimonials[activeTestimonial].name}</p>
            <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].company}</p>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all ${i === activeTestimonial ? 'w-8 h-2.5 bg-yellow-400' : 'w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">Find Us</div>
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Offices Across Nigeria
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offices.map(office => (
              <div key={office.id} className="bg-gray-950 border border-yellow-400/10 hover:border-yellow-400/40 p-6 rounded-sm transition-all group">
                <div className="w-10 h-10 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-bold text-lg mb-4">
                  {office.city.charAt(0)}
                </div>
                <div className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-1">{office.label}</div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{office.city}</h3>
                <p className="text-gray-500 text-sm whitespace-pre-line mb-4 leading-relaxed">{office.address}</p>
                <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors mb-1">
                  <Phone size={13} /> {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-xs transition-colors">
                  <Mail size={13} /> {office.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="bg-gray-950 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">Get In Touch</div>
            <h2 className="text-4xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Book Your Free<br />
              <span className="text-yellow-400">Consultation</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8" style={{ fontFamily: "'Lora', serif" }}>
              Our experienced lawyers are ready to advise you. Complete the form and we'll respond within 24 hours — or WhatsApp us for immediate assistance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-black border border-yellow-400/10 rounded-sm">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-sm flex items-center justify-center">
                  <Phone className="text-yellow-400" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Call or WhatsApp</p>
                  <a href="tel:+2348093605871" className="text-gray-400 text-sm hover:text-yellow-400">+234 809 360 5871</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-black border border-yellow-400/10 rounded-sm">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-sm flex items-center justify-center">
                  <Mail className="text-yellow-400" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Email Us</p>
                  <a href="mailto:info@summitlawfirm.com.ng" className="text-gray-400 text-sm hover:text-yellow-400">info@summitlawfirm.com.ng</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black border border-yellow-400/20 p-8 rounded-sm">
            {formSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="text-yellow-400 mx-auto mb-4" size={48} />
                <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Thank You!</h3>
                <p className="text-gray-400">We've received your enquiry and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">Enquiry Form</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs mb-1 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-950 border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs mb-1 block">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-950 border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors"
                      placeholder="+234..."
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-950 border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Practice Area</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-gray-950 border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors"
                  >
                    <option value="">Select a practice area</option>
                    {practiceAreas.map(a => (
                      <option key={a.id} value={a.id}>{a.shortTitle}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-950 border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors resize-none"
                    placeholder="Briefly describe your legal matter..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-sm font-bold uppercase tracking-wider text-sm transition-all"
                >
                  Send Enquiry →
                </button>

                <p className="text-gray-600 text-xs text-center">
                  All communications are strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
