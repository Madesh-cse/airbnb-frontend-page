interface IconProps {
  className?: string;
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function CleanlinessIcon({ className }: IconProps) {
  // spray bottle
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M13 10V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4" />
      <path d="M11 10h8l2 3v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V13z" />
      <path d="M19 10h4l2-2" />
      <path d="M25 8h2" />
      <path d="M24 5.5h2" />
      <path d="M22.5 11h1.7" />
      <path d="M14 18h4" />
      <path d="M14 22h4" />
    </svg>
  );
}

function AccuracyIcon({ className }: IconProps) {
  // circle with checkmark
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <circle cx="16" cy="16" r="12" />
      <path d="M11 16.5l3.3 3.3L21.5 12.5" />
    </svg>
  );
}

function CheckInIcon({ className }: IconProps) {
  // magnifying glass with a key
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <circle cx="14" cy="14" r="9" />
      <circle cx="14" cy="11.5" r="2.6" />
      <path d="M14 14v5" />
      <path d="M20.3 20.3 27 27" />
    </svg>
  );
}

function CommunicationIcon({ className }: IconProps) {
  // speech bubble
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M5 8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H14l-6 5v-5H7a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function LocationIcon({ className }: IconProps) {
  // folded map
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M11 6 4 8.5v18L11 24l10 3 7-2.5v-18l-7 2.5-10-3Z" />
      <path d="M11 6v18" />
      <path d="M21 9v18" />
    </svg>
  );
}

function ValueIcon({ className }: IconProps) {
  // price tag
  return (
    <svg viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M27 15.6 16.4 26.2a2 2 0 0 1-2.83 0L5 17.6V6a1 1 0 0 1 1-1h11.6a2 2 0 0 1 1.41.59L27 14.2a2 2 0 0 1 0 2.83Z" />
      <circle cx="12.5" cy="11.5" r="2" />
    </svg>
  );
}

const ICONS: Record<string, React.ComponentType<IconProps>> = {
  cleanliness: CleanlinessIcon,
  accuracy: AccuracyIcon,
  checkin: CheckInIcon,
  communication: CommunicationIcon,
  location: LocationIcon,
  value: ValueIcon,
};

interface RatingIconProps {
  icon: string;
  className?: string;
}

export default function RatingIcon({ icon, className = 'w-6 h-6' }: RatingIconProps) {
  const Icon = ICONS[icon];
  if (!Icon) {
    return (
      <svg viewBox="0 0 32 32" className={className} {...stroke}>
        <circle cx="16" cy="16" r="10" />
      </svg>
    );
  }
  return <Icon className={className} />;
}
