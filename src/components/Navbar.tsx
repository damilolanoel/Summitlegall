import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { practiceAreas } from '../data/practiceAreas';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, subPage?: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'HA' | 'YO'>('EN');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'practice', label: 'Practice Areas', hasDropdown: true },
    { id: 'team', label: 'Our Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: string, subPage?: string) => {
    onNavigate(page, subPage);
    setMobileOpen(false);
    setPracticeOpen(false);
    setMobilePracticeOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-black text-yellow-400 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-gray-400">Excellence in Legal Practice Since 1990 | Nigeria's Premier Law Firm</span>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/2348093605871" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Phone size={11} /> +234 809 360 5871
            </a>
            <a href="mailto:info@summitlawfirm.com.ng" className="text-gray-400 hover:text-yellow-400 transition-colors">
              info@summitlawfirm.com.ng
            </a>
            <div className="flex gap-2 ml-4">
              {(['EN', 'HA', 'YO'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs px-2 py-0.5 rounded ${lang === l ? 'bg-yellow-400 text-black font-bold' : 'text-gray-400 hover:text-yellow-400'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-2xl shadow-yellow-400/10' : 'bg-black'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-black text-xl leading-none">
              S
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Summit <span className="text-yellow-400">Law</span>
              </div>
              <div className="text-gray-400 text-xs tracking-widest uppercase leading-tight">Firm</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <div key={link.id} className="relative group">
                <button
                  onClick={() => link.hasDropdown ? setPracticeOpen(!practiceOpen) : handleNav(link.id)}
                  onMouseEnter={() => link.hasDropdown && setPracticeOpen(true)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-sm
                    ${currentPage === link.id
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                    }`}
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${practiceOpen ? 'rotate-180' : ''}`} />}
                </button>

                {/* Practice areas dropdown */}
                {link.hasDropdown && (
                  <div
                    onMouseLeave={() => setPracticeOpen(false)}
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[700px] bg-black border border-yellow-400/20 shadow-2xl rounded-sm transition-all duration-200 ${practiceOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  >
                    <div className="p-4 border-b border-yellow-400/20">
                      <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">Our Practice Areas</p>
                    </div>
                    <div className="grid grid-cols-3 gap-0 p-2">
                      {practiceAreas.map(area => (
                        <button
                          key={area.id}
                          onClick={() => handleNav('practice-detail', area.id)}
                          className="text-left px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5 text-xs rounded-sm transition-colors flex items-center gap-2"
                        >
                          <span>{area.icon}</span>
                          <span>{area.shortTitle}</span>
                        </button>
                      ))}
                    </div>
                    <div className="p-3 border-t border-yellow-400/20 bg-yellow-400/5">
                      <button
                        onClick={() => handleNav('practice')}
                        className="text-yellow-400 text-xs font-semibold hover:text-yellow-300 transition-colors"
                      >
                        View All Practice Areas →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/2348093605871"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-sm text-xs font-semibold transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Book Consult
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white hover:text-yellow-400 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-black border-t border-yellow-400/20 pb-4">
            <div className="max-w-7xl mx-auto px-4 py-2 space-y-1">
              {/* Lang switcher mobile */}
              <div className="flex gap-2 py-2">
                {(['EN', 'HA', 'YO'] as const).map(l => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`text-xs px-3 py-1 rounded-sm ${lang === l ? 'bg-yellow-400 text-black font-bold' : 'text-gray-400 border border-gray-700 hover:text-yellow-400'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {navLinks.map(link => (
                <div key={link.id}>
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        setMobilePracticeOpen(!mobilePracticeOpen);
                      } else {
                        handleNav(link.id);
                      }
                    }}
                    className={`w-full text-left flex items-center justify-between px-3 py-3 rounded-sm text-sm font-medium transition-colors
                      ${currentPage === link.id ? 'text-yellow-400 bg-yellow-400/10' : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'}`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${mobilePracticeOpen ? 'rotate-180' : ''}`} />}
                  </button>

                  {link.hasDropdown && mobilePracticeOpen && (
                    <div className="pl-4 mt-1 space-y-0.5 border-l-2 border-yellow-400/30 ml-3">
                      {practiceAreas.map(area => (
                        <button
                          key={area.id}
                          onClick={() => handleNav('practice-detail', area.id)}
                          className="w-full text-left px-3 py-2 text-gray-400 hover:text-yellow-400 text-xs transition-colors flex items-center gap-2"
                        >
                          <span>{area.icon}</span>
                          {area.shortTitle}
                        </button>
                      ))}
                      <button
                        onClick={() => handleNav('practice')}
                        className="w-full text-left px-3 py-2 text-yellow-400 text-xs font-semibold"
                      >
                        View All Practice Areas →
                      </button>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/2348093605871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-sm text-sm font-semibold"
                >
                  <Phone size={14} /> WhatsApp Us
                </a>
                <button
                  onClick={() => handleNav('contact')}
                  className="bg-yellow-400 text-black py-3 rounded-sm text-sm font-bold uppercase tracking-wider"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
