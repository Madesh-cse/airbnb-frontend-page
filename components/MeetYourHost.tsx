import { HostProfile } from "../types/listing";
import brandImg from "../public/images/brand.jpg";

interface MeetYourHostProps {
  host: HostProfile;
}

const STATIC_CO_HOSTS = [
  {
    name: "Sharath",
    image: "/images/people-1.jpg",
  },
  {
    name: "Aman Dev Pahwa",
    image: "/images/people-2.jpg",
  },
  {
    name: "Maria Karen Priyanka",
    image: "/images/people-3.jpg",
  },
  {
    name: "Simran",
    image: "/images/people-4.jpg",
  },
  {
    name: "Pallavi",
    image: "/images/people-5.jpg",
  },
  {
    name: "Sanyukta",
    image: "/images/people-6.jpg",
  },
  {
    name: "Shruti",
    image: "/images/people-7.jpg",
  },
  {
    name: "Amisha",
    image: "/images/people-8.jpg",
  },
];

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-gray-700"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-6.7 7-11.5a7 7 0 1 0-14 0C5 14.3 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-gray-700"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6 10.7v4.3c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8v-4.3" />
      <path d="M22 8.5v6" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-gray-700"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-gray-700"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7 21l5-3 5 3-2-7.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 text-gray-700"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 3v5.5c0 4.6-3 8.2-7 9.5-4-1.3-7-4.9-7-9.5V6l7-3Z" />
    </svg>
  );
}

function getBulletIcon(text: string) {
  const lower = text.toLowerCase();

  if (
    lower.includes("school") ||
    lower.includes("study") ||
    lower.includes("went to") ||
    lower.includes("education")
  ) {
    return EducationIcon;
  }

  if (
    lower.includes("speak") ||
    lower.includes("language") ||
    lower.includes("english") ||
    lower.includes("hindi")
  ) {
    return LanguageIcon;
  }

  if (lower.includes("superhost")) {
    return BadgeIcon;
  }

  return LocationPinIcon;
}

export default function MeetYourHost({ host }: MeetYourHostProps) {
  return (
    <section className="mb-8 border-b border-gray-200 pb-8">
      <h2 className="mb-6 text-2xl font-semibold">Meet your host</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <div className="mb-6 h-[300px] rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
            <div className="flex h-full items-center gap-6">
              <div className="flex min-w-0 flex-1 flex-col items-center justify-center">
                <div className="relative h-24 w-24 shrink-0">
                  <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-emerald-900 text-lg font-semibold text-white">
                    <img
                      src={brandImg.src}
                      alt={host.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {host.isVerified && (
                    <span
                      className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-airbnbRed text-xs text-white"
                      aria-label="Verified host"
                    >
                      ✓
                    </span>
                  )}
                </div>

                <p className="mt-4 text-center text-xl font-semibold leading-tight">
                  {host.name}
                </p>
              </div>
              <div className="h-24 w-px shrink-0 bg-gray-200" />
              <div className="w-[105px] shrink-0">
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-xl font-semibold leading-none">
                    {host.reviewCount.toLocaleString("en-IN")}
                  </p>

                  <p className="mt-1 text-xs text-gray-700">Reviews</p>
                </div>

                <div className="border-b border-gray-200 py-3">
                  <p className="text-xl font-semibold leading-none">
                    {host.rating.toFixed(2)}
                    <span
                      className="ml-1 text-base"
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  </p>

                  <p className="mt-1 text-xs text-gray-700">Rating</p>
                </div>

                <div className="pt-3">
                  <p className="text-xl font-semibold leading-none">
                    {host.yearsHosting}
                  </p>

                  <p className="mt-1 text-xs text-gray-700">
                    Years hosting
                  </p>
                </div>
              </div>
            </div>
          </div>
          {host.aboutBullets.length > 0 && (
            <ul className="space-y-5">
              {host.aboutBullets.map((bullet, index) => {
                const text = bullet;
                const Icon = getBulletIcon(text);

                return (
                  <li
                    key={`${text}-${index}`}
                    className="flex items-center gap-3"
                  >
                    <Icon />

                    <span className="text-gray-700">
                      {text}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="md:col-span-2">
          <h3 className="mb-5 text-base font-semibold">
            Co-Hosts
          </h3>

          <div className="mb-9 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {STATIC_CO_HOSTS.map((coHost, index) => (
              <div
                key={`${coHost.name}-${index}`}
                className="flex min-w-0 items-center gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm font-semibold text-airbnbRed">
                  {coHost.image ? (
                    <img
                      src={coHost.image}
                      alt={coHost.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    coHost.name.charAt(0).toUpperCase()
                  )}
                </div>

                <span className="truncate text-sm text-gray-800">
                  {coHost.name}
                </span>
              </div>
            ))}
          </div>
          <h3 className="mb-4 text-base font-semibold">
            Host details
          </h3>

          <div className="space-y-1 text-sm text-gray-700">
            <p>
              Response rate: {host.responseRate}
            </p>

            <p>
              Responds within {host.respondsWithin}
            </p>
          </div>
          <button
            type="button"
            className="mb-7 mt-5 rounded-lg bg-gray-100 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-gray-200"
          >
            Message host
          </button>
          <div className="flex items-start gap-3 text-sm leading-6 text-gray-600">
            <ShieldIcon />

            <p>
              To help protect your payment, always use Airbnb
              to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}