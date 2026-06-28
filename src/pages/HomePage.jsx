import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { faqItems, heroCopy, serviceCards, stats, testimonialSlides } from '../data/siteData';

export default function HomePage() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [statsFlipIndex, setStatsFlipIndex] = useState(0);

  useEffect(() => {
    document.title = 'Hello Property Management';
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mediaQuery.matches);

    update();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', update);
      return () => mediaQuery.removeEventListener('change', update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  useEffect(() => {
    if (reduceMotion || testimonialSlides.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonialSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || stats.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setStatsFlipIndex((current) => (current + 1) % stats.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <main>
      <Reveal as="section" className="hero" id="top">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow" delay={0}>
            {heroCopy.eyebrow}
          </Reveal>
          <Reveal as="h1" delay={90}>
            <span>{heroCopy.title}</span>
          </Reveal>
          <Reveal as="p" className="hero-accent" delay={180}>
            <span>{heroCopy.accent}</span>
          </Reveal>
          <Reveal as="p" className="hero-body" delay={270}>
            {heroCopy.body}
          </Reveal>
          <Reveal as="div" className="hero-actions" delay={360}>
            {heroCopy.ctas.map((cta) =>
              cta.primary ? (
                <Link key={cta.label} className="button button-primary" to={cta.href}>
                  {cta.label}
                  <Icon name="arrow" />
                </Link>
              ) : (
                <Link key={cta.label} className="button button-secondary" to={cta.href}>
                  {cta.label}
                  <Icon name="arrow" />
                </Link>
              ),
            )}
          </Reveal>
        </div>

        <Reveal as="div" className="hero-media" delay={160}>
          <img src="/assets/images/hero_brownstones.png" alt="Boston brownstones" />
          <div className="hero-note hero-note-left" />
          <div className="hero-note hero-note-card">
            <p>Local Expertise.</p>
            <p>Proven Results.</p>
            <span>OUR PHILOSOPHY</span>
          </div>
        </Reveal>
      </Reveal>

      <Reveal as="section" className="band-split" id="services" delay={80}>
        <div className="services-band">
          <div className="services-band-media" aria-hidden="true">
            <video
              className="services-band-video services-band-video-left"
              src="/assets/videos/kitchen_walkthrough_no_people.mp4"
              autoPlay={!reduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
            />
            <video
              className="services-band-video services-band-video-right"
              src="/assets/videos/walk_from_this_kitchen.mp4"
              autoPlay={!reduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          <Reveal delay={60}>
            <SectionHeading
              title="Residential Property Management"
              body="Whether you own a single home or a multitude of investment properties, you can depend on us for attentive, tailored property management."
            />
          </Reveal>

          <div className="service-grid">
            {serviceCards.map((card, index) => (
              <Reveal as="article" className="service-card" key={card.title} delay={120 + index * 90}>
                <div className="service-icon">
                  <Icon name={card.icon} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span>Learn more</span>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="map-panel" id="properties">
          <Reveal className="map-panel-copy" delay={180}>
            <p className="map-kicker">WE KNOW BOSTON. WE KNOW PROPERTY.</p>
            <p>
              From Back Bay to Cambridge and beyond, our deep understanding of the local market ensures your property is
              in the best hands.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=121+Portland+Street,+Suite+B,+Boston,+MA+02114"
              target="_blank"
              rel="noreferrer"
            >
              Explore our service area
            </a>
          </Reveal>
          <Reveal
            as="iframe"
            className="map-panel-map"
            title="Google Maps for Hello Property Management at 121 Portland Street, Suite B, Boston, MA 02114"
            src="https://www.google.com/maps?q=121+Portland+Street,+Suite+B,+Boston,+MA+02114&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            delay={260}
          />
        </aside>
      </Reveal>

      <Reveal as="section" className="proof-grid" id="owners" delay={120}>
        <Reveal as="img" className="proof-image" src="/assets/images/luxury_living_room.png" alt="Luxury living room" delay={60} />

        <Reveal as="blockquote" className="quote-card" delay={150}>
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <div className="testimonial-slide" key={testimonialIndex} aria-live="polite">
            <p>{testimonialSlides[testimonialIndex].quote}</p>
            <footer className="testimonial-footer">
              <div>
                <span className="testimonial-name">{testimonialSlides[testimonialIndex].name}</span>
                <span className="testimonial-role">{testimonialSlides[testimonialIndex].role}</span>
              </div>
              <div className="testimonial-stars" aria-label="Five star rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </footer>
          </div>
          <div className="testimonial-dots" aria-hidden="true">
            {testimonialSlides.map((slide, index) => (
              <span key={slide.name} className={index === testimonialIndex ? 'active' : ''} />
            ))}
          </div>
        </Reveal>

        <Reveal as="img" className="proof-image" src="/assets/images/hero_brownstones.png" alt="Boston street scene" delay={240} />

        <Reveal as="div" className="stats-card" delay={300}>
          {stats.map((stat, index) => (
            <div
              className={`stat-row ${index === statsFlipIndex ? 'is-flipping' : ''}`}
              key={stat.label}
              style={{ '--stat-delay': `${index * 80}ms` }}
            >
              <div className="stat-flap">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </Reveal>

      <Reveal as="section" className="cta-grid" id="resources" delay={100}>
        <Reveal as="img" src="/assets/images/spiral_staircase.png" alt="Historic staircase" delay={60} />
        <Reveal className="cta-panel" delay={140}>
          <SectionHeading
            title="Get Your Time Back"
            body="Hire Hello Property Management and get your time back. Leave the day-to-day management to us and have more time for the things you want."
          />
          <Link className="button button-outline" to="/contact-us">
            Schedule a consultation
            <Icon name="arrow" />
          </Link>
        </Reveal>
        <Reveal as="img" src="/assets/images/modern_kitchen.png" alt="Modern kitchen" delay={220} />
      </Reveal>

      <Reveal as="section" className="owner-story" delay={120}>
        <Reveal className="owner-story-copy" delay={80}>
          <SectionHeading
            eyebrow="MAKING BEING A LANDLORD ENJOYABLE AGAIN"
            title="Hello Property Management, Goodbye Problems!"
            body="Hello offers property management services for single family homes or condo units, apartment buildings and condo buildings as well. With reporting and budgeting, around the clock emergency services as well as scheduled maintenance, rent collection and eviction services, we handle all aspects of managing your property to make owning real estate stress-free and enjoyable for you."
          />
          <Link className="button button-primary" to="/contact-us">
            Get started today
            <Icon name="arrow" />
          </Link>
        </Reveal>

        <Reveal className="faq-panel" delay={170}>
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Simple answers for owners and tenants."
            body="Please contact us if you cannot find an answer to your question."
          />
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={item.question} style={{ '--row-delay': `${index * 80}ms` }}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Reveal>

      <Reveal as="section" className="routes-preview" aria-label="Quick links to key pages" delay={120}>
        <Reveal as={Link} to="/about-us" className="route-card route-card-light" delay={60}>
          <span>About Us</span>
          <strong>Meet the team and learn how we work.</strong>
        </Reveal>
        <Reveal as={Link} to="/evictions" className="route-card route-card-dark" delay={140}>
          <span>EVICTIONS</span>
          <strong>How long evictions take in Massachusetts.</strong>
        </Reveal>
        <Reveal as={Link} to="/contact-us" className="route-card route-card-accent" delay={220}>
          <span>Contact Us</span>
          <strong>Request a call and get started today.</strong>
        </Reveal>
      </Reveal>
    </main>
  );
}
