import { Highlight } from '../types/listing';
import type { ReactElement } from 'react';

function OutdoorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 text-gray-900"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v6" />
      <path d="M12 9c-3 0-5.5 2-5.5 5.5S9 20 12 20s5.5-2.4 5.5-5.5S15 9 12 9Z" />
      <path d="M4 21h16" />
    </svg>
  );
}

function FanIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 text-gray-900"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1.6" />
      <path d="M12 10.4C11 7 9 5 6.5 5.5 4.8 5.8 4 7.3 4.6 8.8 5.5 11 8.5 12 12 10.4Z" />
      <path d="M13.6 12C17 11 19 9 18.5 6.5 18.2 4.8 16.7 4 15.2 4.6 13 5.5 12 8.5 13.6 12Z" />
      <path d="M13.6 12C17 13 19 15 18.5 17.5 18.2 19.2 16.7 20 15.2 19.4 13 18.5 12 15.5 13.6 12Z" />
      <path d="M10.4 12C7 13 5 15 5.5 17.5 5.8 19.2 7.3 20 8.8 19.4 11 18.5 12 15.5 10.4 12Z" />
    </svg>
  );
}

function DoorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 text-gray-900"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="2.5" width="12" height="19" rx="1" />
      <circle cx="14.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONS: Record<string, () => ReactElement> = {
  location: OutdoorIcon,
  outdoor: OutdoorIcon,
  jacuzzi: FanIcon,
  cooling: FanIcon,
  bed: DoorIcon,
  checkin: DoorIcon,
};

interface HighlightsProps {
  highlights?: Highlight[];
}

export default function Highlights({ highlights = [] }: HighlightsProps) {
  return (
    <div className="mb-8 pb-8 border-b border-gray-200 space-y-6">
      {highlights.map((item, i) => {
        const Icon = ICONS[item.icon] ?? OutdoorIcon;

        return (
          <div key={i} className="flex items-start gap-4">
            <Icon />

            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}