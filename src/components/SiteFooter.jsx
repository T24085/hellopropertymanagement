import { Link } from 'react-router-dom';
import { corporateLinks, socialLinks, utilityLinks } from '../data/siteData';
import { Icon } from './Icons';

const footerColumns = [
  {
    title: 'Services',
    links: ['Property Management', 'Apartment Buildings', 'HOA Management', 'Maintenance'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'News'],
  },
  {
    title: 'Resources',
    links: ['Owner Portal', 'Documents', 'FAQs', 'Blog'],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/assets/images/logo.webp" alt="Hello Property Management" />
          <p>Premium property management for discerning owners in Greater Boston.</p>
          <div className="social-links">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                <span>{item.label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((label) => (
                <li key={label}>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-column contact-column">
          <h3>Contact</h3>
          <a href="mailto:info@hellopropertymanagement.com">
            <Icon name="mail" />
            info@hellopropertymanagement.com
          </a>
          <p>
            <Icon name="pin" />
            121 Portland Street, Suite B
            <br />
            Boston, Massachusetts 02114
          </p>
          <p>
            <Icon name="phone" />
            Monday - Friday: 9am - 5pm
            <br />
            Saturday: By appointment
          </p>
        </div>
      </div>

      <div className="footer-utility">
        <div className="footer-utility-links">
          {utilityLinks.map((item) =>
            item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </div>
        <div className="footer-legal">
          <span>© 2022 Hello Property Management. All Rights Reserved.</span>
          <div>
            {corporateLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
