import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How do I schedule a consultation with Summit Law Firm?',
    a: 'You can book a consultation by calling +234 809 360 5871, sending a WhatsApp message, filling out our online enquiry form, or emailing info@summitlawfirm.com.ng. We typically respond within 24 hours and can often schedule a consultation the same or next business day.',
  },
  {
    q: 'Do you offer free initial consultations?',
    a: 'Yes — we offer a complimentary initial consultation (up to 30 minutes) for most matters. This allows us to understand your situation and advise you on the best course of action. More complex matters may require a detailed initial assessment at a nominal fee.',
  },
  {
    q: 'Which cities do you have offices in?',
    a: 'Summit Law Firm has offices in Abuja (Head Office), Lagos, Port Harcourt, and Kano. We serve clients across all 36 states of Nigeria and the FCT, and we also handle international matters for Nigerian clients abroad.',
  },
  {
    q: 'How do you charge for your legal services?',
    a: 'Our fees depend on the nature and complexity of the matter. We offer hourly rates, fixed fees for defined tasks (such as contract drafting or company incorporation), retainer arrangements for ongoing work, and contingency arrangements in select litigation matters. We discuss fees transparently at the outset.',
  },
  {
    q: 'Can you handle matters in my state if I\'m not in Abuja, Lagos, Port Harcourt, or Kano?',
    a: 'Absolutely. Our lawyers are admitted to practice across Nigeria and regularly handle matters in all states. We also partner with trusted local counsel in states where required, ensuring comprehensive coverage nationwide.',
  },
  {
    q: 'What languages do your lawyers speak?',
    a: 'Our team is fluent in English (all lawyers), with Hausa, Yoruba, and Igbo speaking capacity within our team. We also provide interpreter services for clients who prefer other Nigerian languages or international clients.',
  },
  {
    q: 'How long have you been in practice?',
    a: 'Summit Law Firm was founded in 1990 by Chief Emeka O. Summit SAN. We have been in continuous practice for over 35 years, building one of Nigeria\'s most respected and experienced legal teams.',
  },
  {
    q: 'Can you handle international legal matters?',
    a: 'Yes. We advise on cross-border transactions, international arbitration, enforcement of foreign judgments in Nigeria, and Nigerian law aspects of international transactions. We also have a network of partner firms across Africa, Europe, and North America.',
  },
  {
    q: 'Is my information kept confidential?',
    a: 'Absolutely. Attorney-client privilege and professional confidentiality are cornerstones of our practice. All information you share with us is strictly confidential and protected by law. We never disclose client information without consent.',
  },
  {
    q: 'Do you handle pro bono (free) work?',
    a: 'Yes, Summit Law Firm is committed to access to justice. We handle a number of pro bono matters each year, particularly in human rights, fundamental rights enforcement, and assistance to vulnerable individuals. Contact us to enquire about pro bono eligibility.',
  },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-yellow-400 via-yellow-400/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">Help Center</div>
          <h1 className="text-5xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked<br /><span className="text-yellow-400">Questions</span>
          </h1>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
            Everything you need to know about working with Summit Law Firm.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-sm transition-all ${openIdx === i ? 'border-yellow-400/40 bg-gray-950' : 'border-yellow-400/10 bg-gray-950 hover:border-yellow-400/20'}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-start justify-between p-5 text-left gap-4"
              >
                <span className="text-white font-semibold text-sm pr-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-yellow-400 flex-shrink-0 mt-0.5 transition-transform ${openIdx === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5">
                  <div className="h-px bg-yellow-400/20 mb-4" />
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center bg-gray-950 border border-yellow-400/20 p-8 rounded-sm">
          <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Still Have Questions?
          </h3>
          <p className="text-gray-400 text-sm mb-5">Our team is happy to help. Reach out via any of the channels below.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:+2348093605871" className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2.5 rounded-sm font-bold text-sm transition-colors">
              Call Us Now
            </a>
            <a href="https://wa.me/2348093605871" target="_blank" rel="noopener noreferrer"
               className="bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-sm font-bold text-sm transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
