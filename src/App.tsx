import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import PracticeDetailPage from './pages/PracticeDetailPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

type Page = 'home' | 'about' | 'practice' | 'practice-detail' | 'team' | 'contact' | 'faq' | 'privacy' | 'disclaimer' | 'terms';

function PrivacyPage() {
  return (
    <div className="bg-black min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">Legal</div>
        <h1 className="text-4xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>
        <div className="w-12 h-0.5 bg-yellow-400 mb-8" />
        <div className="space-y-6 text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
          <p>Summit Law Firm ("we", "our", "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or contact us.</p>
          <h2 className="text-white font-bold text-lg mt-6">Information We Collect</h2>
          <p>We collect information you voluntarily provide when you contact us, submit an enquiry form, or subscribe to our newsletter. This includes your name, email address, phone number, and information about your legal matter.</p>
          <h2 className="text-white font-bold text-lg mt-6">How We Use Your Information</h2>
          <p>We use your information solely to respond to your enquiries, provide legal services, and communicate relevant legal updates. We do not sell, trade, or transfer your information to third parties without your consent, except as required by law.</p>
          <h2 className="text-white font-bold text-lg mt-6">Attorney-Client Privilege</h2>
          <p>All communications between Summit Law Firm and its clients are protected by attorney-client privilege and professional confidentiality obligations under Nigerian law.</p>
          <h2 className="text-white font-bold text-lg mt-6">Contact</h2>
          <p>For privacy-related enquiries, please contact: privacy@summitlawfirm.com.ng</p>
          <p className="text-gray-500 text-xs mt-8">Last updated: January 2025. Summit Law Firm, 15 Adetokunbo Ademola Crescent, Wuse II, Abuja, FCT, Nigeria.</p>
        </div>
      </div>
    </div>
  );
}

function DisclaimerPage() {
  return (
    <div className="bg-black min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">Legal</div>
        <h1 className="text-4xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Disclaimer</h1>
        <div className="w-12 h-0.5 bg-yellow-400 mb-8" />
        <div className="space-y-6 text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
          <p>The information provided on this website is for general informational purposes only and does not constitute legal advice. Reading this website or contacting Summit Law Firm does not create an attorney-client relationship.</p>
          <p>Legal matters are complex and fact-specific. The information on this website may not be current, complete, or applicable to your specific situation. You should not rely on this information as a substitute for professional legal advice.</p>
          <p>Summit Law Firm makes no representations or warranties about the accuracy, completeness, or suitability of the information on this website. We expressly disclaim all liability for actions taken or not taken based on the content of this website.</p>
          <p>Past results described on this website are not a guarantee, warranty, or prediction of the outcome of future matters. Every legal case is unique and results vary.</p>
          <p className="text-gray-500 text-xs mt-8">Summit Law Firm is regulated by the Nigerian Bar Association and the Body of Benchers of Nigeria.</p>
        </div>
      </div>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="bg-black min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">Legal</div>
        <h1 className="text-4xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Terms & Conditions</h1>
        <div className="w-12 h-0.5 bg-yellow-400 mb-8" />
        <div className="space-y-6 text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
          <p>By accessing and using the Summit Law Firm website, you agree to be bound by these Terms and Conditions.</p>
          <h2 className="text-white font-bold text-lg mt-6">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of Summit Law Firm and is protected by Nigerian and international copyright laws.</p>
          <h2 className="text-white font-bold text-lg mt-6">Use of Website</h2>
          <p>You may use this website for lawful purposes only. You may not use this website in any way that causes, or may cause, damage to the website or impairment of its availability or accessibility.</p>
          <h2 className="text-white font-bold text-lg mt-6">Links to Third-Party Websites</h2>
          <p>Our website may contain links to third-party websites. These links are provided for your convenience. We have no control over the content of those sites and accept no responsibility for them.</p>
          <h2 className="text-white font-bold text-lg mt-6">Governing Law</h2>
          <p>These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>
          <p className="text-gray-500 text-xs mt-8">Last updated: January 2025.</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentPracticeId, setCurrentPracticeId] = useState<string>('');

  const handleNavigate = (page: string, subPage?: string) => {
    setCurrentPage(page as Page);
    if (page === 'practice-detail' && subPage) {
      setCurrentPracticeId(subPage);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'practice':
        return <PracticeAreasPage onNavigate={handleNavigate} />;
      case 'practice-detail':
        return <PracticeDetailPage practiceId={currentPracticeId} onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'disclaimer':
        return <DisclaimerPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-black min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
