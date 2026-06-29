import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { useEffect } from 'react';
import { Icon } from '../components/Icons';
import { assetUrl } from '../utils/assetUrl';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us | Hello Property Management';
  }, []);

  return (
    <main className="page-shell contact-page">
      <div className="contact-map-bg" aria-hidden="true">
        <iframe
          title="Google Maps background for Hello Property Management"
          src="https://www.google.com/maps?q=121+Portland+Street,+Suite+B,+Boston,+MA+02114&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="contact-map-overlay" />
      </div>

      <div className="contact-page-content">
        <Reveal as="section" className="page-hero page-hero-contact">
          <Reveal delay={40}>
            <SectionHeading
              eyebrow="CONTACT US"
              title="We Look Forward To Hearing From You."
              body="Do you need help managing your property? Please fill out the request form and we can schedule a call to discuss your needs."
            />
          </Reveal>
          <Reveal className="page-hero-panel" delay={140}>
            <div className="contact-panel-brand">
              <img src={assetUrl('images/hello-property-management-transparent.png')} alt="Hello Property Management" />
            </div>
            <div className="contact-panel-copy">
              <p>Hello Property Management</p>
              <strong>121 Portland Street, Suite B</strong>
              <span>Boston, Massachusetts 02114</span>
            </div>
          </Reveal>
        </Reveal>

        <Reveal as="section" className="contact-layout" delay={80}>
          <Reveal className="contact-info" delay={40}>
            <div className="contact-block">
              <span className="sidebar-label">Email</span>
              <a href="mailto:info@hellopropertymanagement.com">info@hellopropertymanagement.com</a>
            </div>
            <div className="contact-block">
              <span className="sidebar-label">Hours</span>
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday: By appointment</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="contact-block">
              <span className="sidebar-label">Get directions</span>
              <a href="https://www.google.com/maps/search/121+Portland+Street,+Suite+B+Boston,+Massachusetts+02114" target="_blank" rel="noreferrer">
                Open map
              </a>
            </div>
          </Reveal>

          <Reveal as="form" className="contact-form" delay={140}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email*
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Property Address
              <input type="text" name="address" placeholder="Property address" />
            </label>
            <label>
              Attach Files
              <input type="file" name="file" />
            </label>
            <div className="form-actions">
              <button className="button button-primary" type="submit">
                Send
                <Icon name="arrow" />
              </button>
              <button className="button button-secondary" type="button">
                Cancel
              </button>
            </div>
            <p className="form-disclaimer">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </Reveal>
        </Reveal>
      </div>
    </main>
  );
}
