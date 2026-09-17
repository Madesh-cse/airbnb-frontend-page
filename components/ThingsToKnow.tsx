function CancellationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-gray-900"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18" />
      <path d="M8 3v3" />
      <path d="M16 3v3" />
      <path d="M9.5 13.5l5 5" />
      <path d="M14.5 13.5l-5 5" />
    </svg>
  );
}

function HouseRulesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-gray-900"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="6.5" />
      <circle cx="10" cy="10" r="2" />
      <path d="M14.6 14.6L21 21" />
    </svg>
  );
}

function SafetyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-gray-900"
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

export default function ThingsToKnow() {
  return (
    <section className="mb-8 border-b border-gray-200 pb-8">
      <h2 className="mb-6 text-2xl font-semibold">Things to know</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <span className="mb-4 block" aria-hidden="true">
            <CancellationIcon />
          </span>
          <p className="mb-4 font-semibold">Cancellation policy</p>
          <div className="space-y-2 text-sm leading-relaxed text-gray-700">
            <p>
              Free cancellation before 17 October. Cancel before check-in on 18 October for a
              partial refund.
            </p>
            <p>Review this host&apos;s full policy for details.</p>
          </div>
          <button type="button" className="mt-3 text-sm font-semibold underline">
            Learn more
          </button>
        </div>
        <div>
          <span className="mb-4 block" aria-hidden="true">
            <HouseRulesIcon />
          </span>
          <p className="mb-4 font-semibold">House rules</p>
          <div className="space-y-2 text-sm leading-relaxed text-gray-700">
            <p>Check-in after 2:00 pm</p>
            <p>Checkout before 11:00 am</p>
            <p>3 guests maximum</p>
          </div>
          <button type="button" className="mt-3 text-sm font-semibold underline">
            Learn more
          </button>
        </div>
        <div>
          <span className="mb-4 block" aria-hidden="true">
            <SafetyIcon />
          </span>
          <p className="mb-4 font-semibold">Safety &amp; property</p>
          <div className="space-y-2 text-sm leading-relaxed text-gray-700">
            <p>Carbon monoxide alarm not reported</p>
            <p>Smoke alarm not reported</p>
            <p>Exterior security cameras on property</p>
          </div>
          <button type="button" className="mt-3 text-sm font-semibold underline">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}