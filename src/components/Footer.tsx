import { Phone, ArrowRight } from 'lucide-react';
import { offices } from '../data/team';
import { practiceAreas } from '../data/practiceAreas';

interface FooterProps {
  onNavigate: (page: string, subPage?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string, subPage?: string) => {
    onNavigate(page, subPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const highPriority = practiceAreas.filter(a => a.category === 'high').slice(0, 6);

  return (
    <footer className="bg-black text-gray-400 border-t border-yellow-400/20">
      {/* CTA Banner */}
      <div className="bg-yellow-400 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-black text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Need Legal Advice? We're Ready to Help.
            </h2>
            <p className="text-black/70 mt-1">Speak with an expert today — confidential, no-obligation consultation.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://wa.me/2348093605871"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-sm font-semibold transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us Now
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="bg-black hover:bg-gray-900 text-yellow-400 px-6 py-3 rounded-sm font-semibold transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: About */}
        <div>
          <button onClick={() => handleNav('home')} className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-black text-xl">S</div>
            <div>
              <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Summit <span className="text-yellow-400">Law</span> Firm
              </div>
              <div className="text-gray-500 text-xs tracking-wider">Est. 1990</div>
            </div>
          </button>
          <p className="text-sm leading-relaxed text-gray-500 mb-5">
            Nigeria's premier multi-practice law firm. Delivering excellence in legal services with integrity, expertise, and unwavering commitment to our clients for over 35 years.
          </p>
          <div className="flex gap-3">
            {[
              { label: 'Facebook', href: '#', svg: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { label: 'Twitter', href: '#', svg: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              { label: 'Instagram', href: '#', svg: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a1 1 0 011 1v11a1 1 0 01-1 1h-11a1 1 0 01-1-1v-11a1 1 0 011-1z' },
              { label: 'LinkedIn', href: '#', svg: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
            ].map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-sm border border-yellow-400/20 flex items-center justify-center text-gray-500 hover:text-yellow-400 hover:border-yellow-400/60 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={svg} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Practice Areas */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            Practice Areas
          </h3>
          <ul className="space-y-2">
            {highPriority.map(area => (
              <li key={area.id}>
                <button
                  onClick={() => handleNav('practice-detail', area.id)}
                  className="text-sm text-gray-500 hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 text-yellow-400" />
                  {area.shortTitle}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav('practice')}
                className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors"
              >
                View All 15 Areas →
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Offices */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Offices
          </h3>
          <ul className="space-y-4">
            {offices.map(office => (
              <li key={office.id} className="text-sm">
                <p className="text-yellow-400 font-medium text-xs uppercase tracking-wider mb-1">{office.city}</p>
                <p className="text-gray-500 text-xs leading-relaxed whitespace-pre-line">{office.address}</p>
                <a href={`tel:${office.phone}`} className="text-gray-400 hover:text-yellow-400 text-xs transition-colors flex items-center gap-1 mt-1">
                  <Phone size={10} /> {office.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Quick Links + Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            Quick Links
          </h3>
          <ul className="space-y-2 mb-7">
            {[
              { label: 'About Summit Law', page: 'about' },
              { label: 'Our Team', page: 'team' },
              { label: 'Contact Us', page: 'contact' },
              { label: 'FAQ', page: 'faq' },
              { label: 'Testimonials', page: 'home' },
              { label: 'Privacy Policy', page: 'privacy' },
              { label: 'Disclaimer', page: 'disclaimer' },
            ].map(link => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.page)}
                  className="text-sm text-gray-500 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Newsletter */}
          <div>
            <p className="text-xs text-gray-500 mb-2 font-medium">Subscribe to Legal Updates:</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-yellow-400/20 text-white px-3 py-2 text-xs rounded-l-sm focus:outline-none focus:border-yellow-400/50"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-3 py-2 rounded-r-sm transition-colors">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-yellow-400/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Summit Law Firm. All rights reserved. | Nigeria's Premier Legal Practice</p>
          <div className="flex gap-4">
            <button onClick={() => handleNav('privacy')} className="hover:text-yellow-400 transition-colors">Privacy Policy</button>
            <button onClick={() => handleNav('disclaimer')} className="hover:text-yellow-400 transition-colors">Disclaimer</button>
            <button onClick={() => handleNav('terms')} className="hover:text-yellow-400 transition-colors">Terms & Conditions</button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/2348093605871"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-black text-yellow-400 text-xs px-3 py-1 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          Chat with us!
        </span>
      </a>
    </footer>
  );
}
