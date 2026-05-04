import { ChevronRight } from 'lucide-react';
import { practiceAreas } from '../data/practiceAreas';

interface PracticeAreasPageProps {
  onNavigate: (page: string, subPage?: string) => void;
}

export default function PracticeAreasPage({ onNavigate }: PracticeAreasPageProps) {
  const handleNav = (page: string, subPage?: string) => {
    onNavigate(page, subPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { key: 'high', label: 'Core Practice Areas', desc: 'Our flagship disciplines where we have the deepest expertise and longest track record.' },
    { key: 'medium', label: 'Specialist Areas', desc: 'Focused expertise for specific legal challenges and needs.' },
    { key: 'low', label: 'Additional Services', desc: 'Comprehensive coverage for all your legal requirements.' },
    { key: 'custom', label: 'Specialized Practice', desc: 'Unique expertise bridging multiple legal disciplines.' },
  ];

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/justice-scales.jpg" alt="Practice Areas" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-yellow-400 via-yellow-400/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">Legal Expertise</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Practice Areas
          </h1>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            Comprehensive legal expertise across 15 specializations — structured to deliver specialist knowledge for every client need.
          </p>
        </div>
      </section>

      {/* Practice Area Grid by Category */}
      {categories.map(cat => {
        const areas = practiceAreas.filter(a => a.category === cat.key);
        if (areas.length === 0) return null;
        return (
          <section key={cat.key} className="py-16 px-4 border-t border-yellow-400/10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-10">
                <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">{cat.label}</div>
                <h2 className="text-2xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{cat.label}</h2>
                <p className="text-gray-500 mt-1 text-sm">{cat.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {areas.map(area => (
                  <button
                    key={area.id}
                    onClick={() => handleNav('practice-detail', area.id)}
                    className="group bg-gray-950 border border-yellow-400/10 hover:border-yellow-400/50 p-6 rounded-sm text-left transition-all duration-300 hover:bg-yellow-400/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/10"
                  >
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {area.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <div className="text-yellow-400 text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ChevronRight size={12} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-yellow-400 py-16 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Can't Find What You Need?
          </h2>
          <p className="text-black/70 mb-8">Contact us directly — our lawyers handle a wide range of legal matters beyond those listed.</p>
          <button
            onClick={() => handleNav('contact')}
            className="bg-black hover:bg-gray-900 text-yellow-400 px-10 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-colors"
          >
            Speak to a Lawyer Today
          </button>
        </div>
      </section>
    </div>
  );
}
