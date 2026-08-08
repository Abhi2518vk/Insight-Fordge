import { useState, useEffect } from 'react';
import { Header } from './components/global/Header';
import { Footer } from './components/global/Footer';

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
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Scroll to top automatically when swapping route views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
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
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary flex flex-col justify-between selection:bg-brand-primary selection:text-text-primary">
      <div>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="animate-fade-in pb-12">
          {renderActivePage()}
        </main>
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
