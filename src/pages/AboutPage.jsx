import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { aboutServiceCards, teamMembers } from '../data/siteData';
import { Icon } from '../components/Icons';
import { assetUrl } from '../utils/assetUrl';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Hello Property Management';
  }, []);

  return (
    <main className="page-shell">
      <Reveal as="section" className="about-showcase" delay={90}>
        <Reveal className="about-showcase-frame about-showcase-frame-large" delay={60}>
          <img src={assetUrl('images/hero_brownstones.png')} alt="Boston brownstones" />
          <div className="about-overlay-card about-overlay-left">
            <SectionHeading
              eyebrow="MEET THE TEAM"
              title="Property People With A Local Point Of View."
              body="Hello Property Management is built around responsiveness, practical judgment, and the kind of day-to-day care that keeps buildings and owners moving forward."
            />
          </div>
        </Reveal>

        <Reveal className="about-showcase-copy" delay={120}>
          <p className="eyebrow">OUR APPROACH</p>
          <h2>Responsive Management With An Editorial Eye For Presentation.</h2>
          <p>
            We pair practical property management with sharp communication and polished presentation, so owners get a team
            that is as organized as it is attentive.
          </p>
          <div className="about-highlights">
            <span>Rapid response</span>
            <span>Local judgment</span>
            <span>Full-service care</span>
          </div>
          <div className="about-manager-stack">
            {teamMembers.map((member, index) => (
              <Reveal as="article" className="team-card team-card-compact" key={member.name} delay={160 + index * 90}>
                <div className="team-card-photo">
                  <span>{member.name.split(' ').map((part) => part[0]).join('')}</span>
                </div>
                <div className="team-card-content">
                  <h2>{member.name}</h2>
                  <p className="team-role">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="about-showcase-stack">
          <Reveal className="about-showcase-frame about-showcase-frame-tall" delay={150}>
            <img src={assetUrl('images/luxury_living_room.png')} alt="Luxury living room" />
            <div className="about-overlay-card about-overlay-right">
              <p className="eyebrow">Greater Boston</p>
              <h2>Condos, Apartments, And Luxury Estates.</h2>
              <p>Jack-of-all-trades support for maintenance, leasing, bookkeeping, and legal compliance.</p>
            </div>
          </Reveal>
          <Reveal className="about-showcase-frame" delay={210}>
            <img src={assetUrl('images/about_team_photo.webp')} alt="Hello Property Management team" />
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="services-alt">
        <Reveal delay={50}>
            <SectionHeading
              eyebrow="WHAT WE DO"
              title="Property, Tenant, And Rental Support."
              body="We offer a full suite of property management tools to investors, homeowners and landlords. Let us do the work so you can relax knowing your property is in great hands."
            />
        </Reveal>
        <div className="about-service-grid">
          {aboutServiceCards.map((card, index) => (
            <Reveal as="article" key={card.title} className="about-service-card" delay={100 + index * 100}>
              <span>{card.title}</span>
              <p>{card.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="review-band">
        <Reveal className="review-card" delay={50}>
          <p className="review-label">Zillow Reviews</p>
          <strong>Average Rating</strong>
          <p>What&apos;s a Zestimate?</p>
        </Reveal>
        <Reveal className="review-note" delay={140}>
          <p>
            Hello Property Management, LLC is affiliated with PadMatch, LLC and a subsidiary of RicAlya Holdings, LLC.
          </p>
          <Link className="button button-outline" to="/contact-us">
            Book online
            <Icon name="arrow" />
          </Link>
        </Reveal>
      </Reveal>
    </main>
  );
}
