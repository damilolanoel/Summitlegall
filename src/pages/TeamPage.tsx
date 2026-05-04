import { Mail, CheckCircle } from 'lucide-react';
import { teamMembers } from '../data/team';

interface TeamPageProps {
  onNavigate: (page: string, subPage?: string) => void;
}

export default function TeamPage({ onNavigate }: TeamPageProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const principal = teamMembers.find(m => m.isPrincipal);
  const associates = teamMembers.filter(m => !m.isPrincipal);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-bg.jpg" alt="Our Team" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-yellow-400 via-yellow-400/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">Legal Excellence</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Legal Team
          </h1>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            Meet the exceptional legal minds behind Summit Law Firm — a team of dedicated professionals committed to delivering outstanding results for our clients.
          </p>
        </div>
      </section>

      {/* Principal Partner */}
      {principal && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">Founding Principal</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-gray-950 border border-yellow-400/20 rounded-sm overflow-hidden">
              <div className="h-96 lg:h-full min-h-80 overflow-hidden">
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider mb-4">
                  {principal.role}
                </div>
                <h2 className="text-3xl font-black text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {principal.name}
                </h2>
                <p className="text-yellow-400 text-sm mb-5">{principal.title}</p>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm" style={{ fontFamily: "'Lora', serif" }}>
                  {principal.bio}
                </p>

                <div className="mb-5">
                  <h4 className="text-white font-semibold text-sm mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {principal.specializations.map(s => (
                      <span key={s} className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs px-3 py-1 rounded-sm">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="text-white font-semibold text-sm mb-3">Education & Qualifications</h4>
                  <div className="space-y-1">
                    {principal.education.map(edu => (
                      <div key={edu} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle size={13} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                        {edu}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:${principal.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors"
                >
                  <Mail size={14} /> {principal.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Associate Team */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">Our Associates</div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Expert Practitioners
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {associates.map(member => (
              <div key={member.id} className="bg-black border border-yellow-400/10 hover:border-yellow-400/30 rounded-sm overflow-hidden transition-all group hover:-translate-y-1 duration-300">
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-1">{member.role}</div>
                  <h3 className="text-white font-bold text-base mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">{member.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-3" style={{ fontFamily: "'Lora', serif" }}>
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.specializations.slice(0, 2).map(s => (
                      <span key={s} className="bg-yellow-400/5 border border-yellow-400/20 text-yellow-400 text-xs px-2 py-0.5 rounded-sm">{s}</span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-yellow-400/10">
                    <div className="mb-2 text-xs text-gray-500 font-semibold">Education:</div>
                    {member.education.slice(0, 2).map(edu => (
                      <div key={edu} className="text-xs text-gray-500 mb-0.5">{edu}</div>
                    ))}
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-3 flex items-center gap-1 text-xs text-gray-500 hover:text-yellow-400 transition-colors"
                  >
                    <Mail size={11} /> {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join Summit Law Firm
          </h2>
          <p className="text-gray-400 mb-8" style={{ fontFamily: "'Lora', serif" }}>
            We are always looking for talented, driven lawyers to join our team. If you are passionate about excellence in legal practice, we want to hear from you.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-sm font-bold uppercase tracking-wider text-sm transition-colors"
          >
            Send Your Application
          </button>
        </div>
      </section>
    </div>
  );
}
