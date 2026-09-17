interface LocationSectionProps {
  location: string;
  note?: string;
}

export default function LocationSection({
  location,
  note = 'Exact location will be provided after booking.',
}: LocationSectionProps) {
  return (
    <section
      id="location"
      className=" border-t border-gray-200 mt-12 mb-10 border-b border-gray-200 pb-10"
    >
      <h2 className="text-2xl mt-5 font-semibold mb-1">
        Where you&apos;ll be
      </h2>

      <p className="text-gray-700 mb-6">
        {location}
      </p>

      <div className="relative h-[420px] w-full overflow-hidden rounded-xl bg-[#dce9d5]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 800 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <rect
            width="800"
            height="420"
            fill="#dfe9d8"
          />
          <polygon
            points="0,0 320,0 0,420"
            fill="#bcd6ea"
          />
          <circle
            cx="270"
            cy="240"
            r="60"
            fill="#c7ddb8"
          />

          <circle
            cx="500"
            cy="290"
            r="70"
            fill="#c7ddb8"
          />
          <path
            d="M80 360 C180 300, 240 330, 330 260 S520 170, 720 220"
            stroke="#ffffff"
            strokeWidth="12"
            fill="none"
            opacity="0.9"
          />

          <path
            d="M150 80 C220 150, 300 170, 390 150 S580 100, 700 60"
            stroke="#ffffff"
            strokeWidth="8"
            fill="none"
            opacity="0.9"
          />

          <path
            d="M430 20 C420 120, 460 190, 450 400"
            stroke="#ffffff"
            strokeWidth="7"
            fill="none"
            opacity="0.8"
          />
        </svg>
        <button
          type="button"
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
          aria-label="Search this area"
        >
          🔍
        </button>
        <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border-b border-gray-200 text-xl transition hover:bg-gray-50"
            aria-label="Zoom in"
          >
            +
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-xl transition hover:bg-gray-50"
            aria-label="Zoom out"
          >
            −
          </button>
        </div>
        <div
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-900 text-xl text-white shadow-lg"
          aria-label={`Location: ${location}`}
        >
          🏠
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        {note}
      </p>
    </section>
  );
}