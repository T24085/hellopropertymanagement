import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons';
import { internalNav, utilityLinks } from '../data/siteData';
import { assetUrl } from '../utils/assetUrl';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const navRef = useRef(null);
  const hoveredLinkRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const node = hoveredLinkRef.current;
      if (!node || !navRef.current || !indicator.visible) return;
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = node.getBoundingClientRect();
      setIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        visible: true,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [indicator.visible]);

  const moveIndicator = (event) => {
    const navNode = navRef.current;
    const node = event.currentTarget;
    if (!navNode || !node) return;
    hoveredLinkRef.current = node;
    const navRect = navNode.getBoundingClientRect();
    const linkRect = node.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      visible: true,
    });
  };

  const hideIndicator = () => {
    hoveredLinkRef.current = null;
    setIndicator((current) => ({ ...current, visible: false }));
  };

  return (
    <header className="site-header">
      <div className="main-nav">
        <Link to="/" className="brand-lockup" aria-label="Hello Property Management home">
          <img src={assetUrl('images/logo.webp')} alt="" />
        </Link>

        <nav className="nav-links" aria-label="Primary" ref={navRef} onMouseLeave={hideIndicator}>
          <span
            className="nav-indicator"
            aria-hidden="true"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: `${indicator.width}px`,
              opacity: indicator.visible ? 1 : 0,
            }}
          />
          {internalNav.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onMouseEnter={moveIndicator}
              onFocus={moveIndicator}
            >
              {item.label}
            </Link>
          ))}

          <details className="more-menu">
            <summary>
              More
              <Icon name="arrow" />
            </summary>
            <div className="more-menu-panel">
              {utilityLinks.map((item) =>
                item.external ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <NavLink key={item.label} to={item.href}>
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>
          </details>
        </nav>

        <details className="portal-menu">
          <summary>
            Owner Portal
            <Icon name="arrow" />
          </summary>
          <div className="portal-menu-panel">
            <a
              href="https://www.rentcafe.com/residentservices/apartmentsforrent/userlogin.aspx?_yTrackUser=MzczMjQxODAzOSMxNDM4Mzc3MjMz-nQcbMVAC2dM%253d&_yTrackVisit=NjE0Nzk4OTAzNSMxMjU2NDY1NzA3-McDjyVvbBv8%253d&_yTrackReqDT=59042020251510"
              target="_blank"
              rel="noreferrer"
            >
              Resident Login
            </a>
            <Link to="/contact-us">Book Online</Link>
          </div>
        </details>

        <button className="mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {open ? (
        <div className="mobile-panel">
          <nav aria-label="Mobile primary">
            {internalNav.map((item) => (
              <NavLink key={item.label} to={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-panel-links">
            <div className="mobile-panel-group">
              <span className="mobile-panel-label">More</span>
              {utilityLinks.map((item) =>
                item.external ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <NavLink key={item.label} to={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
