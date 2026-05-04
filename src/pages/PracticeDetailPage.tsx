import { CheckCircle, ChevronRight, Phone, Mail, ArrowLeft } from 'lucide-react';
import { getPracticeAreaById, practiceAreas } from '../data/practiceAreas';

interface PracticeDetailPageProps {
  practiceId: string;
  onNavigate: (page: string, subPage?: string) => void;
}

export default function PracticeDetailPage({ practiceId, onNavigate }: PracticeDetailPageProps) {
  const area = getPracticeAreaById(practiceId);

  const handleNav = (page: string, subPage?: string) => {
    onNavigate(page, subPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!area) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Practice area not found.</p>
          <button onClick={() => handleNav('practice')} className="text-yellow-400 hover:underline">
            ← Back to Practice Areas
          </button>
        </div>
      </div>
    );
  }

  const related = practiceAreas.filter(a => a.id !== area.id).slice(0, 4);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/justice-scales.jpg" alt={area.title} className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
        </div>
        <div className="absolute left-0 top-0 w-1.5 h-full bg-yellow-400" />
        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={() => handleNav('practice')}
            className="flex items-center gap-2 text-gray-500 hover:text-yellow-400 text-sm transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to All Practice Areas
          </button>
          <div className="text-5xl mb-4">{area.icon}</div>
          <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            {area.category === 'high' ? 'Core Practice' : area.category === 'medium' ? 'Specialist Area' : area.category === 'custom' ? 'Specialized Practice' : 'Additional Service'}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {area.title}
          </h1>
          <div className="w-16 h-0.5 bg-yellow-400 mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            {area.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left content */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Overview</h2>
              <p className="text-gray-400 leading-relaxed text-base" style={{ fontFamily: "'Lora', serif" }}>
                {area.longDescription}
              </p>
            </div>

            {/* Key Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Key Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {area.keyServices.map(service => (
                  <div key={service} className="flex items-start gap-3 bg-gray-950 border border-yellow-400/10 hover:border-yellow-400/30 p-4 rounded-sm transition-colors">
                    <CheckCircle size={15} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Us */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Choose Summit Law Firm?
              </h2>
              <div className="space-y-4">
                {area.whyUs.map((reason, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed pt-1" style={{ fontFamily: "'Lora', serif" }}>{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enquiry Card */}
            <div className="bg-gray-950 border border-yellow-400/20 p-6 rounded-sm">
              <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get Expert Advice
              </h3>
              <p className="text-gray-400 text-sm mb-5">
                Speak to one of our {area.shortTitle} specialists today for a confidential consultation.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/2348093605871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white p-3 rounded-sm transition-colors"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <div className="font-semibold text-sm">WhatsApp Us Now</div>
                    <div className="text-xs text-green-200">+234 809 360 5871</div>
                  </div>
                </a>
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded-sm font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  Book Consultation <ChevronRight size={14} />
                </button>
                <a
                  href="mailto:info@summitlawfirm.com.ng"
                  className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 text-sm transition-colors p-3 border border-yellow-400/10 rounded-sm"
                >
                  <Mail size={16} /> info@summitlawfirm.com.ng
                </a>
                <a
                  href="tel:+2348093605871"
                  className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 text-sm transition-colors p-3 border border-yellow-400/10 rounded-sm"
                >
                  <Phone size={16} /> +234 809 360 5871
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-950 border border-yellow-400/10 p-6 rounded-sm">
              <h3 className="text-white font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Office Hours</h3>
              <div className="space-y-1 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-yellow-400">8:00am – 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-yellow-400">9:00am – 2:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Emergency legal support available 24/7 via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="bg-gray-950 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Related Practice Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map(a => (
              <button
                key={a.id}
                onClick={() => handleNav('practice-detail', a.id)}
                className="group bg-black border border-yellow-400/10 hover:border-yellow-400/40 p-5 rounded-sm text-left transition-all"
              >
                <div className="text-2xl mb-2">{a.icon}</div>
                <h3 className="text-white text-sm font-bold group-hover:text-yellow-400 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {a.shortTitle}
                </h3>
                <p className="text-gray-500 text-xs mt-1 line-clamp-2">{a.description.substring(0, 70)}...</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
