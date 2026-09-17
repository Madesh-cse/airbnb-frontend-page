interface AmenityIconProps {
  icon: string;
  className?: string;
}

interface SvgProps {
  className: string;
}

const commonProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function Kitchen({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...commonProps}>
      <path d="M9 4v9a3 3 0 0 1-6 0V4" />
      <path d="M6 4v24" />
      <path d="M13 4c-1.5 2-2 5-2 7 0 2.5 1.3 4 3 4.6V28" />
      <path d="M25 4c-2 0-4 3-4 8s2 5 4 5" />
      <path d="M25 4v24" />
    </svg>
  );
}

function Wifi({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...commonProps}>
      <path d="M5 12.5c6-6 16-6 22 0" />
      <path d="M9.5 17.5c3.8-3.8 9.2-3.8 13 0" />
      <path d="M14 22.5c1.2-1.2 2.8-1.2 4 0" />
      <circle cx="16" cy="26.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Workspace({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...commonProps}>
      <rect x="4" y="6" width="24" height="15" rx="1.5" />
      <path d="M4 17h24" />
      <path d="M12 26h8" />
      <path d="M16 21v5" />
    </svg>
  );
}

function Parking({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...commonProps}>
      <path d="M6 20l2.2-8.5A3 3 0 0 1 11.1 9h9.8a3 3 0 0 1 2.9 2.5L26 20" />
      <path d="M5.5 20h21v5a1 1 0 0 1-1 1H23a1 1 0 0 1-1-1v-2H10v2a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1v-5z" />
      <circle cx="10" cy="20" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="22" cy="20" r="1.6" fill="currentColor" stroke="none" />
      <path d="M8 14h16" />
    </svg>
  );
}

function Pool({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...commonProps}>
      <path d="M3 13c1.6 1.6 3.2 1.6 4.8 0 1.6-1.6 3.2-1.6 4.8 0 1.6 1.6 3.2 1.6 4.8 0 1.6-1.6 3.2-1.6 4.8 0 1.6 1.6 3.2 1.6 4.8 0" />
      <path d="M3 19c1.6 1.6 3.2 1.6 4.8 0 1.6-1.6 3.2-1.6 4.8 0 1.6 1.6 3.2 1.6 4.8 0 1.6-1.6 3.2-1.6 4.8 0 1.6 1.6 3.2 1.6 4.8 0" />
      <path d="M9 13V6.5a2 2 0 0 1 3.6-1.2L14 7" />
    </svg>
  );
}

function HotTub({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...commonProps}>
      <path d="M4 18h24v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4z" />
      <path d="M4 18v-2a2 2 0 0 1 2-2h1" />
      <path d="M27 18v-2a2 2 0 0 0-2-2h-1" />
      <circle cx="16" cy="18" r="2" />
      <path d="M11 8c-1 1-1 2 0 3s1 2 0 3" />
      <path d="M16 6c-1 1-1 2 0 3s1 2 0 3" />
      <path d="M21 8c-1 1-1 2 0 3s1 2 0 3" />
    </svg>
  );
}

function Pets({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
      <ellipse cx="16" cy="21" rx="6" ry="5" />
      <ellipse cx="8" cy="14" rx="2.6" ry="3.2" />
      <ellipse cx="24" cy="14" rx="2.6" ry="3.2" />
      <ellipse cx="12.5" cy="9.5" rx="2.4" ry="3" />
      <ellipse cx="19.5" cy="9.5" rx="2.4" ry="3" />
    </svg>
  );
}

function SecurityCamera({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...commonProps}>
      <path d="M4 9l12-3 2 8-12 3z" />
      <circle cx="10.5" cy="12.5" r="2.2" />
      <path d="M18 8l6-2v10l-6-2" />
      <path d="M14 17l-2 8" />
      <path d="M8 27h8" />
      <path d="M21 12c1.6 0.6 1.6 3.4 0 4" />
    </svg>
  );
}

function Detector({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...commonProps}>
      <rect x="5" y="5" width="22" height="22" rx="4" />
      <path d="M11 20c1.4-3 2.7-3 4-3s2.6 0 4 3" />
      <circle cx="16" cy="12" r="2.4" />
      <path d="M3 3l26 26" />
    </svg>
  );
}

const ICONS: Record<string, React.ComponentType<SvgProps>> = {
  kitchen: Kitchen,
  wifi: Wifi,
  workspace: Workspace,
  parking: Parking,
  pool: Pool,
  hottub: HotTub,
  pets: Pets,
  cameras: SecurityCamera,
  co_alarm: Detector,
  smoke_alarm: Detector,
};

export default function AmenityIcon({ icon, className = 'w-6 h-6' }: AmenityIconProps) {
  const Icon = ICONS[icon];
  if (!Icon) {
    return (
      <svg viewBox="0 0 32 32" className={className} {...commonProps}>
        <circle cx="16" cy="16" r="10" />
      </svg>
    );
  }
  return <Icon className={className} />;
}
