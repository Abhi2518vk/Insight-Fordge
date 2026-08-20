import { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/global/Header';
import { Footer } from './components/global/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

// Eager load Home page for instant initial paint
import { Home } from './pages/Home';

// Lazy load non-critical secondary pages to minimize initial JavaScript bundle size
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Industries = lazy(() => import('./pages/Industries').then(m => ({ default: m.Industries })));
const Portfolio = lazy(() => import('./pages/Portfolio').then(m => ({ default: m.Portfolio })));
const Process = lazy(() => import('./pages/Process').then(m => ({ default: m.Process })));
const Insights = lazy(() => import('./pages/Insights').then(m => ({ default: m.Insights })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

const PageFallback = () => (
  <div className="py-24 max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin mb-4" />
    <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Loading Module...</span>
  </div>
);

export default function App() {
  // Initialize currentPage from window.location.pathname for direct deep-linking support
  const getInitialPage = () => {
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    if (!path || path === 'home') return 'home';
    const validPages = ['about', 'services', 'industries', 'portfolio', 'process', 'insights', 'contact'];
    return validPages.includes(path) ? path : '404';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage());

  // Listen for browser back/forward popstate events
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      if (!path || path === 'home') {
        setCurrentPage('home');
        return;
      }
      const validPages = ['about', 'services', 'industries', 'portfolio', 'process', 'insights', 'contact'];
      setCurrentPage(validPages.includes(path) ? path : '404');
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
      },
      '404': {
        title: '404 — Page Not Found | Insight Forge',
        desc: 'The requested URL endpoint or system route does not exist in our active architecture matrix.',
        url: 'https://www.insight-forge.site/404'
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
        return <Suspense fallback={<PageFallback />}><About setCurrentPage={handlePageChange} /></Suspense>;
      case 'services':
        return <Suspense fallback={<PageFallback />}><Services /></Suspense>;
      case 'industries':
        return <Suspense fallback={<PageFallback />}><Industries /></Suspense>;
      case 'portfolio':
        return <Suspense fallback={<PageFallback />}><Portfolio /></Suspense>;
      case 'process':
        return <Suspense fallback={<PageFallback />}><Process /></Suspense>;
      case 'insights':
        return <Suspense fallback={<PageFallback />}><Insights /></Suspense>;
      case 'contact':
        return <Suspense fallback={<PageFallback />}><Contact /></Suspense>;
      case '404':
        return <Suspense fallback={<PageFallback />}><NotFound setCurrentPage={handlePageChange} /></Suspense>;
      default:
        return <Suspense fallback={<PageFallback />}><NotFound setCurrentPage={handlePageChange} /></Suspense>;
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
