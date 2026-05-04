import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { offices } from '../data/team';
import { practiceAreas } from '../data/practiceAreas';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '', office: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-950" />
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-yellow-400 via-yellow-400/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">Get In Touch</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h1>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
            Reach out for a confidential consultation. Our team responds within 24 hours — or connect via WhatsApp for immediate assistance.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="tel:+2348093605871" className="group bg-gray-950 border border-yellow-400/10 hover:border-yellow-400/40 p-6 rounded-sm transition-all text-center">
            <Phone className="text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-white font-semibold text-sm mb-1">Call Us</h3>
            <p className="text-gray-400 text-xs">+234 809 360 5871</p>
          </a>
          <a href="https://wa.me/2348093605871" target="_blank" rel="noopener noreferrer" className="group bg-gray-950 border border-green-500/20 hover:border-green-500/50 p-6 rounded-sm transition-all text-center">
            <svg className="w-7 h-7 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <h3 className="text-white font-semibold text-sm mb-1">WhatsApp</h3>
            <p className="text-gray-400 text-xs">Chat instantly</p>
          </a>
          <a href="mailto:info@summitlawfirm.com.ng" className="group bg-gray-950 border border-yellow-400/10 hover:border-yellow-400/40 p-6 rounded-sm transition-all text-center">
            <Mail className="text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-white font-semibold text-sm mb-1">Email Us</h3>
            <p className="text-gray-400 text-xs">info@summitlawfirm.com.ng</p>
          </a>
          <div className="group bg-gray-950 border border-yellow-400/10 p-6 rounded-sm text-center">
            <Clock className="text-yellow-400 mx-auto mb-3" size={28} />
            <h3 className="text-white font-semibold text-sm mb-1">Office Hours</h3>
            <p className="text-gray-400 text-xs">Mon–Fri: 8am–6pm<br />Sat: 9am–2pm</p>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gray-950 border border-yellow-400/20 p-8 rounded-sm">
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle className="text-yellow-400 mx-auto mb-4" size={56} />
                <h3 className="text-white font-black text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Enquiry Received!
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                  Thank you for contacting Summit Law Firm. One of our lawyers will respond to your enquiry within 24 hours.
                </p>
                <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-sm">
                  <p className="text-yellow-400 text-sm font-semibold">Need immediate help?</p>
                  <a href="https://wa.me/2348093605871" className="text-white text-sm hover:text-yellow-400 transition-colors">
                    WhatsApp us: +234 809 360 5871
                  </a>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Send Us an Enquiry
                </h2>
                <p className="text-gray-400 text-sm mb-6">All communications are strictly confidential.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-xs mb-1 block">Full Name *</label>
                      <input type="text" required value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs mb-1 block">Phone Number *</label>
                      <input type="tel" required value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors"
                        placeholder="+234..." />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs mb-1 block">Email Address *</label>
                    <input type="email" required value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors"
                      placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs mb-1 block">Company / Organization</label>
                    <input type="text" value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-black border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors"
                      placeholder="Optional" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-xs mb-1 block">Practice Area</label>
                      <select value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-black border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors">
                        <option value="">Select area...</option>
                        {practiceAreas.map(a => (
                          <option key={a.id} value={a.id}>{a.shortTitle}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs mb-1 block">Preferred Office</label>
                      <select value={formData.office}
                        onChange={e => setFormData({ ...formData, office: e.target.value })}
                        className="w-full bg-black border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors">
                        <option value="">Any office</option>
                        {offices.map(o => (
                          <option key={o.id} value={o.id}>{o.city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs mb-1 block">Your Message *</label>
                    <textarea required rows={5} value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black border border-yellow-400/20 focus:border-yellow-400/60 text-white px-3 py-2.5 rounded-sm text-sm outline-none transition-colors resize-none"
                      placeholder="Please briefly describe your legal matter..." />
                  </div>

                  <button type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3.5 rounded-sm font-bold uppercase tracking-wider text-sm transition-all">
                    Submit Enquiry
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    By submitting, you agree that your information will be handled in accordance with our Privacy Policy. All communications are strictly confidential.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Offices info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Offices
            </h2>
            {offices.map(office => (
              <div key={office.id} className="bg-gray-950 border border-yellow-400/10 hover:border-yellow-400/30 p-6 rounded-sm transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-black text-xl flex-shrink-0">
                    {office.city.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{office.city}</h3>
                      <span className="text-yellow-400 text-xs bg-yellow-400/10 px-2 py-0.5 rounded-sm">{office.label}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400 text-sm mb-2">
                      <MapPin size={13} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="whitespace-pre-line text-xs">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Phone size={12} className="text-yellow-400" />
                      <a href={`tel:${office.phone}`} className="text-gray-400 hover:text-yellow-400 text-xs transition-colors">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={12} className="text-yellow-400" />
                      <a href={`mailto:${office.email}`} className="text-gray-400 hover:text-yellow-400 text-xs transition-colors">{office.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Emergency contact */}
            <div className="bg-yellow-400/5 border border-yellow-400/30 p-5 rounded-sm">
              <h3 className="text-yellow-400 font-bold text-sm mb-2">⚡ Emergency Legal Support</h3>
              <p className="text-gray-400 text-xs mb-3">
                For urgent legal matters outside business hours, reach our emergency line via WhatsApp.
              </p>
              <a
                href="https://wa.me/2348093605871"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white text-sm font-semibold"
              >
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +234 809 360 5871 (WhatsApp)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
