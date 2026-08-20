import { useState, useEffect } from 'react';
import { Header } from './components/global/Header';
import { Footer } from './components/global/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Portfolio } from './pages/Portfolio';
import { Process } from './pages/Process';
import { Insights } from './pages/Insights';
import { Contact } from './pages/Contact';

export default function App() {
  // Initialize currentPage from window.location.pathname for direct deep-linking support
  const getInitialPage = () => {
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    const validPages = ['home', 'about', 'services', 'industries', 'portfolio', 'process', 'insights', 'contact'];
    return validPages.includes(path) ? path : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage());

  // Listen for browser back/forward popstate events
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'industries', 'portfolio', 'process', 'insights', 'contact'];
      setCurrentPage(validPages.includes(path) ? path : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Custom navigation handler updating state and browser address bar
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  };

  // Scroll to top automatically and set route-specific SEO titles & Open Graph metadata
  useEffect(() => {
    window.scrollTo(0, 0);

    const pageMetaMap: Record<string, { title: string; desc: string; url: string }> = {
      home: {
        title: 'Insight Forge — Web Dev, BI, AI & Software Consulting',
        desc: 'Data analytics, business intelligence, website development, software engineering, and AI automation — full-stack technology consulting.',
        url: 'https://www.insight-forge.site/'
      },
      about: {
        title: 'About Us — Insight Forge Tech Consulting',
        desc: 'Meet our senior partner team specializing in custom web engineering, AI workflow automation, data science, and BI architecture.',
        url: 'https://www.insight-forge.site/about'
      },
      services: {
        title: 'Services — Web Dev, BI & AI Automation | Insight Forge',
        desc: 'Explore our core capabilities: Custom Web & Software Engineering, Business Intelligence & Data Analytics, and AI Business Automation.',
        url: 'https://www.insight-forge.site/services'
      },
      industries: {
        title: 'Industries Served — Insight Forge Consulting',
        desc: 'Tailored technology solutions for Manufacturing, Logistics, Retail, Healthcare, Finance, E-Commerce, and SaaS enterprises.',
        url: 'https://www.insight-forge.site/industries'
      },
      portfolio: {
        title: 'Portfolio & Case Studies — Insight Forge',
        desc: 'Investigate our interactive project sandboxes, transactional ETL systems, SaaS prototypes, and custom logistics platforms.',
        url: 'https://www.insight-forge.site/portfolio'
      },
      process: {
        title: 'Engineering Process — Insight Forge',
        desc: 'Our double-track engineering methodology: Data Analytics architecture and Web/Software discovery, sprint execution, and handover.',
        url: 'https://www.insight-forge.site/process'
      },
      insights: {
        title: 'Technical Insights & Deep-Dives — Insight Forge',
        desc: 'Engineering reports, SQL optimization benchmarks, serverless webhook strategies, and direct-query BI architecture deep-dives.',
        url: 'https://www.insight-forge.site/insights'
      },
      contact: {
        title: 'Contact & System Audit — Insight Forge',
        desc: 'Schedule a 30-minute partner-led architecture audit and receive direct database and software diagnostics under unilateral NDA.',
        url: 'https://www.insight-forge.site/contact'
      }
    };

    const currentMeta = pageMetaMap[currentPage] || pageMetaMap.home;
    document.title = currentMeta.title;

    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('property', 'og:title', currentMeta.title);
    setMeta('property', 'og:description', currentMeta.desc);
    setMeta('property', 'og:url', currentMeta.url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Insight Forge');
    setMeta('property', 'og:image', 'https://www.insight-forge.site/logo.png');

    setMeta('property', 'twitter:card', 'summary_large_image');
    setMeta('property', 'twitter:title', currentMeta.title);
    setMeta('property', 'twitter:description', currentMeta.desc);
    setMeta('property', 'twitter:url', currentMeta.url);
    setMeta('property', 'twitter:image', 'https://www.insight-forge.site/logo.png');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentMeta.url);
  }, [currentPage]);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={handlePageChange} />;
      case 'about':
        return <About setCurrentPage={handlePageChange} />;
      case 'services':
        return <Services />;
      case 'industries':
        return <Industries />;
      case 'portfolio':
        return <Portfolio />;
      case 'process':
        return <Process />;
      case 'insights':
        return <Insights />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary flex flex-col justify-between selection:bg-brand-primary selection:text-text-primary">
      <div>
        <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
        <main className="animate-fade-in pb-12">
          {renderActivePage()}
        </main>
      </div>
      <Footer setCurrentPage={handlePageChange} />
      <WhatsAppButton />
    </div>
  );
}
