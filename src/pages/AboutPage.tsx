import { CheckCircle, Award, Globe, Target, Eye, Heart } from 'lucide-react';
import { offices } from '../data/team';

interface AboutPageProps {
  onNavigate: (page: string, subPage?: string) => void;
}

const values = [
  { icon: Award, title: 'Excellence', desc: 'We pursue the highest standards in every matter, delivering work that is thorough, precise, and effective.' },
  { icon: Heart, title: 'Integrity', desc: 'Our practice is built on unwavering ethical standards. We are honest, transparent, and trustworthy in all dealings.' },
  { icon: Globe, title: 'Accessibility', desc: 'World-class legal services should be accessible. We offer multilingual service and offices across Nigeria.' },
  { icon: Target, title: 'Results', desc: 'We are outcome-focused. Every strategy we devise has one goal: achieving the best possible result for our client.' },
];

const milestones = [
  { year: '1990', event: 'Founded in Abuja by Chief Emeka O. Summit after a distinguished career in the Federal Ministry of Justice.' },
  { year: '1995', event: 'Opened Lagos office to serve the commercial heartbeat of Nigeria.' },
  { year: '2001', event: 'Chief Emeka O. Summit awarded the rank of Senior Advocate of Nigeria (SAN).' },
  { year: '2005', event: 'Landmark Supreme Court victory in constitutional rights matter, establishing new legal precedent.' },
  { year: '2010', event: 'Expanded to Port Harcourt and Kano, achieving national footprint.' },
  { year: '2015', event: '25th anniversary — recognized as one of Nigeria\'s Top 10 Law Firms by Legal Business Africa.' },
  { year: '2020', event: 'Established dedicated IP & Technology Law practice to serve Nigeria\'s booming tech sector.' },
  { year: '2025', event: 'Celebrating 35 years of excellence, with over 2,000 cases won and clients in 15+ countries.' },
];

const jurisdictions = [
  'All Nigerian Federal and State Courts',
  'Supreme Court of Nigeria',
  'Court of Appeal',
  'National Industrial Court',
  'Investment & Securities Tribunal',
  'Tax Appeal Tribunal',
  'ECOWAS Community Court of Justice',
  'International Chamber of Commerce (ICC)',
  'London Court of International Arbitration (LCIA)',
  'International Centre for Settlement of Investment Disputes (ICSID)',
  'ARIPO (African Regional Intellectual Property Organization)',
  'Nigerian Copyright Commission',
  'Trademarks Registry',
  'Corporate Affairs Commission',
  'Federal Inland Revenue Service',
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-bg.jpg" alt="About Summit Law Firm" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
        </div>
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-yellow-400 via-yellow-400/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">Our Story</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Summit<br /><span className="text-yellow-400">Law Firm</span>
          </h1>
          <div className="w-16 h-0.5 bg-yellow-400 mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            Since 1990, we have been the legal partner of choice for individuals, corporations, and governments across Nigeria and beyond. Our story is one of relentless dedication to the law and to our clients.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-yellow-400 p-8 rounded-sm">
            <Target className="text-black mb-4" size={32} />
            <h2 className="text-black font-black text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h2>
            <p className="text-black/70 leading-relaxed text-sm">
              To deliver world-class, principled legal services that empower our clients to achieve their goals — with integrity, expertise, and a deep commitment to justice.
            </p>
          </div>
          <div className="bg-gray-950 border border-yellow-400/20 p-8 rounded-sm">
            <Eye className="text-yellow-400 mb-4" size={32} />
            <h2 className="text-white font-black text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              To be Africa's most trusted law firm — known for our ethical leadership, innovative legal solutions, and the transformative impact we have on our clients' lives and businesses.
            </p>
          </div>
          <div className="bg-gray-950 border border-yellow-400/20 p-8 rounded-sm">
            <Heart className="text-yellow-400 mb-4" size={32} />
            <h2 className="text-white font-black text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Our Promise</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Every client receives our full attention, expert counsel, and unwavering advocacy. Your success is our success — and we fight for it with everything we have.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">What We Stand For</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-950 border border-yellow-400/10 p-6 rounded-sm hover:border-yellow-400/40 transition-colors group">
                <Icon className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-gray-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">Our Journey</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>35 Years of History</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-400/20" />
            <div className="space-y-8">
              {milestones.map((m, idx) => (
                <div key={idx} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-16 h-16 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-black text-sm z-10">
                    {m.year}
                  </div>
                  <div className="bg-black border border-yellow-400/10 hover:border-yellow-400/30 p-4 rounded-sm flex-1 transition-colors">
                    <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">Where We Practice</div>
            <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Jurisdictions & Tribunals
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
              Our lawyers are admitted to practice before the widest range of courts, tribunals, and international arbitral bodies in Nigeria and beyond.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {jurisdictions.map(j => (
                <div key={j} className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle size={14} className="text-yellow-400 flex-shrink-0" />
                  {j}
                </div>
              ))}
            </div>
          </div>

          {/* Offices repeat */}
          <div>
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">Our Offices</div>
            <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              National Footprint
            </h2>
            <div className="space-y-4">
              {offices.map(o => (
                <div key={o.id} className="bg-gray-950 border border-yellow-400/10 p-5 rounded-sm hover:border-yellow-400/30 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-yellow-400 text-xs uppercase tracking-wider font-semibold mb-1">{o.label}</p>
                      <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{o.city}</h3>
                      <p className="text-gray-500 text-sm whitespace-pre-line">{o.address}</p>
                    </div>
                    <div className="w-10 h-10 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                      {o.city.charAt(0)}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-yellow-400/10 flex gap-4">
                    <a href={`tel:${o.phone}`} className="text-gray-400 hover:text-yellow-400 text-xs transition-colors">{o.phone}</a>
                    <a href={`mailto:${o.email}`} className="text-gray-400 hover:text-yellow-400 text-xs transition-colors">{o.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Work With Nigeria's Best?
          </h2>
          <p className="text-black/70 mb-8">Schedule a confidential consultation with our expert team today.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => handleNav('contact')}
              className="bg-black hover:bg-gray-900 text-yellow-400 px-8 py-3 rounded-sm font-bold uppercase tracking-wider text-sm transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="https://wa.me/2348093605871"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-sm font-bold text-sm transition-colors"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
