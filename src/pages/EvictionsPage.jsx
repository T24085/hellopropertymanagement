import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { evictionSteps } from '../data/siteData';
import { Icon } from '../components/Icons';

export default function EvictionsPage() {
  useEffect(() => {
    document.title = 'Evictions | Hello Property Management';
  }, []);

  return (
    <main className="page-shell">
      <Reveal as="section" className="page-hero page-hero-evictions">
        <Reveal delay={40}>
          <SectionHeading
            eyebrow="EVICTIONS IN MASSACHUSETTS"
            title="How Long Do Evictions Take In Massachusetts?"
            body="Eviction can be stressful for both landlords and tenants in Massachusetts. Knowing the typical timeline can help you prepare and understand what to expect."
          />
        </Reveal>
        <Reveal className="page-hero-panel dark" delay={140}>
          <p>Goodbye Problems.</p>
          <strong>Tenant Issues</strong>
          <a href="mailto:info@hellopropertymanagement.com">
            Find out more
            <Icon name="arrow" />
          </a>
        </Reveal>
      </Reveal>

      <Reveal as="section" className="article-layout" delay={80}>
        <Reveal as="article" className="article-card" delay={40}>
          <h2>Understanding the Eviction Process in Massachusetts</h2>
          <p>
            In general, the eviction process in Massachusetts takes between 2–4 months, but the timeline can vary based
            on the type of eviction, whether the tenant contests the case, and court availability.
          </p>

          <div className="step-list">
            {evictionSteps.map((item, index) => (
              <section key={item.step} className="step-item" style={{ '--step-delay': `${index * 80}ms` }}>
                <h3>{item.step}</h3>
                <p>{item.text}</p>
              </section>
            ))}
          </div>
        </Reveal>

        <aside className="article-sidebar">
          <Reveal className="sidebar-card" delay={100}>
            <span className="sidebar-label">Total Timeframe</span>
            <strong>Best case: ~2 months</strong>
            <p>Contested cases: 3–4 months or longer.</p>
          </Reveal>
          <Reveal className="sidebar-card" delay={180}>
            <span className="sidebar-label">Official reference</span>
            <a
              href="https://www.mass.gov/eviction-for-landlords?_gl=1*cr2lh7*_ga*MjA3MjkwODA1MC4xNzU1OTU1MDcx*_ga_MCLPEGW7WM*czE3NTg4OTYxNjgkbzEkZzEkdDE3NTg4OTYxODMkajQ1JGwwJGgw"
              target="_blank"
              rel="noreferrer"
            >
              Mass.gov – The Eviction Process
            </a>
          </Reveal>
          <Reveal className="sidebar-card" delay={260}>
            <span className="sidebar-label">Related reading</span>
            <a href="https://masscashforhomes.com/category/tenant-issues/" target="_blank" rel="noreferrer">
              Tenant Issues
            </a>
          </Reveal>
        </aside>
      </Reveal>

      <Reveal as="section" className="article-cta" delay={100}>
        <Reveal delay={40}>
          <SectionHeading
            eyebrow="WHY THIS MATTERS FOR HOMEOWNERS"
            title="Use A Management Team Familiar With The Process."
            body="Using a property management company that is familiar with the eviction process will save you time, reduce stress, and ideally lower some of the potential legal costs of eviction."
          />
        </Reveal>
        <Link className="button button-primary" to="/contact-us">
          Schedule a consultation
          <Icon name="arrow" />
        </Link>
      </Reveal>
    </main>
  );
}
