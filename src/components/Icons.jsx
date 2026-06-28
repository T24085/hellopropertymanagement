const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function Icon({ name, className = '' }) {
  switch (name) {
    case 'arrow':
      return (
        <svg {...iconProps} className={className}>
          <path d="M5 12h14" />
          <path d="m13 5 7 7-7 7" />
        </svg>
      );
    case 'play':
      return (
        <svg {...iconProps} className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="m10 8 6 4-6 4z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'house':
      return (
        <svg {...iconProps} className={className}>
          <path d="M4 11.5 12 5l8 6.5" />
          <path d="M6.5 10.5V19h11v-8.5" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case 'building':
      return (
        <svg {...iconProps} className={className}>
          <path d="M6 19V7l6-2v14" />
          <path d="M14 19V5l4 1.5V19" />
          <path d="M4 19h16" />
          <path d="M8 10h1" />
          <path d="M8 13h1" />
          <path d="M16 9h1" />
          <path d="M16 12h1" />
        </svg>
      );
    case 'community':
      return (
        <svg {...iconProps} className={className}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="15.5" cy="9.5" r="2.25" />
          <path d="M4.5 18c.6-2.5 2.4-4 4.5-4s3.9 1.5 4.5 4" />
          <path d="M12.5 18c.4-2 1.7-3.1 3.5-3.1 1.5 0 2.8.9 3.5 3.1" />
        </svg>
      );
    case 'tools':
      return (
        <svg {...iconProps} className={className}>
          <path d="m14.5 5.5 4 4" />
          <path d="M11 9 5 15l4 4 6-6" />
          <path d="M14.2 12.2 19 17" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...iconProps} className={className}>
          <path d="M8.5 4.8 10 8.4l-1.6 1.3c1.2 2.5 2.8 4.1 5.3 5.3l1.3-1.6 3.6 1.5c-.6 1.7-2.2 2.9-3.9 2.9C9.5 18 6 14.5 6 10c0-1.7 1.2-3.3 2.5-5.2z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...iconProps} className={className}>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="m5.5 7.5 6.5 5 6.5-5" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...iconProps} className={className}>
          <path d="M12 21s5-4.5 5-10a5 5 0 0 0-10 0c0 5.5 5 10 5 10z" />
          <circle cx="12" cy="11" r="1.8" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...iconProps} className={className}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...iconProps} className={className}>
          <path d="m5 5 14 14" />
          <path d="M19 5 5 19" />
        </svg>
      );
    default:
      return null;
  }
}
