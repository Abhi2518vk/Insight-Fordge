import React, { useState } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { BadgeTech } from '../components/ui/BadgeTech';
import { Calendar, User, Mail } from 'lucide-react';

export const Insights: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const tags = ['All', '#postgres', '#nextjs', '#bi', '#automation', '#aws'];

  const articles = [
    {
      title: 'Optimizing PostgreSQL Query Plans: Swapping ORMs for Raw SQL inside Next.js APIs',
      author: 'Alexander Vance (Data Partner)',
      date: 'Aug 04, 2026',
      read: '14 min read',
      tag: '#postgres',
      desc: 'Investigating index fragmentation, sub-query refactoring, and why we swap traditional active-record ORMs for parameterized SQL queries in high-scale Next.js environments.'
    },
    {
      title: 'The Hidden Cost of BI Gateway Pipelines: How to Architect Direct-Query Dashboards',
      author: 'Alexander Vance (Data Partner)',
      date: 'Jul 28, 2026',
      read: '11 min read',
      tag: '#bi',
      desc: 'Avoid nesting unoptimized BI gateways. We review server memory metrics, Snowflake partitions, and scheduling direct-query caches to achieve sub-second dashboard loads.'
    },
    {
      title: 'Building Resilient Serverless Webhooks: Queue Management Under High Latency',
      author: 'Elena Rostova (Automation Partner)',
      date: 'Jul 19, 2026',
      read: '9 min read',
      tag: '#automation',
      desc: 'When third-party ERP APIs timeout, custom webhooks must not lose payload data. We structure robust AWS Lambda pipelines utilizing dead-letter queue fallbacks.'
    }
  ];

  const filteredArticles = selectedTag === 'All'
    ? articles
    : articles.filter(a => a.tag === selectedTag);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      {/* 1. Header */}
      <div className="max-w-3xl mb-16 flex flex-col gap-4">
        <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold font-medium">The Journal</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
          Insights: Long-Form Technical Engineering Deep-Dives.
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          We do not publish generic marketing articles. Our partners author detailed research reports documenting actual database, API, and cloud infrastructure resolutions.
        </p>
      </div>

      {/* 2. Tag Filter Line */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {tags.map((tag, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-lg font-mono text-xs border transition-all duration-300 cursor-pointer ${
              selectedTag === tag
                ? 'bg-brand-primary text-text-primary border-brand-primary'
                : 'bg-bg-surface border-border-custom text-text-secondary hover:text-text-primary hover:bg-bg-surface/80'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 3. Articles Feed */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {filteredArticles.map((art, idx) => (
          <CardGlass key={idx} className="flex flex-col justify-between h-full group border-border-custom/80 hover:border-brand-primary/40">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <BadgeTech>{art.tag}</BadgeTech>
                <span className="font-mono text-[10px] text-text-secondary">{art.read}</span>
              </div>

              <h2 className="font-display font-semibold text-base sm:text-lg text-text-primary group-hover:text-accent-gold transition-colors duration-300 line-clamp-3">
                {art.title}
              </h2>

              <p className="text-text-secondary text-xs leading-relaxed line-clamp-4">
                {art.desc}
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-6 mt-6 border-t border-border-custom/50">
              <div className="flex items-center gap-2 text-[11px] text-text-secondary font-mono">
                <User className="w-3.5 h-3.5 text-brand-primary" />
                <span>{art.author}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-text-secondary font-mono">
                <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                <span>{art.date}</span>
              </div>
            </div>
          </CardGlass>
        ))}
      </div>

      {/* 4. Technical Newsletter panel */}
      <CardGlass className="p-8 sm:p-12 border-accent-gold/20 relative overflow-hidden bg-gradient-to-r from-bg-surface to-bg-dark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h2 className="font-display font-semibold text-xl text-text-primary tracking-tight">Subscribe to our Systems Engineering Newsletter</h2>
            <p className="text-text-secondary text-xs sm:text-sm">
              We send out desaturated schema diagrams, direct SQL queries, and serverless performance scripts. Zero promotional spam, strictly technical analysis.
            </p>
          </div>
          <div className="lg:col-span-5 w-full">
            {subscribed ? (
              <div className="p-4 rounded-lg bg-brand-primary/10 border border-brand-primary/30 font-mono text-xs text-brand-primary text-center">
                ✓ Connection established. Welcome to the Forge.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter secure email address..."
                  className="bg-bg-dark border border-border-custom hover:border-brand-primary focus:border-brand-primary rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary font-mono flex-grow focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-display text-sm font-medium bg-brand-primary text-text-primary hover:bg-brand-secondary transition-all duration-300 cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </CardGlass>
    </div>
  );
};
