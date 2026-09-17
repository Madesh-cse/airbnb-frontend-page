interface GuestFavouriteBannerProps {
  rating: number;
  reviewCount: number;
}

function LaurelBranch({ className }: { className?: string }) {
  const leaves = [
    { cx: 20, cy: 8, rx: 7, ry: 4.2, rotate: 100 },
    { cx: 16, cy: 15, rx: 7.5, ry: 4.4, rotate: 108 },
    { cx: 13, cy: 23, rx: 8, ry: 4.6, rotate: 116 },
    { cx: 11, cy: 32, rx: 8.2, ry: 4.8, rotate: 124 },
    { cx: 10, cy: 41, rx: 8.2, ry: 4.8, rotate: 132 },
    { cx: 11, cy: 50, rx: 7.8, ry: 4.6, rotate: 142 },
    { cx: 14, cy: 58, rx: 7, ry: 4.2, rotate: 152 },
  ];

  return (
    <svg viewBox="0 0 32 64" className={className} fill="currentColor">
      <path
        d="M15 4C10 16 8 34 15 60"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      {leaves.map((leaf, i) => (
        <ellipse
          key={i}
          cx={leaf.cx}
          cy={leaf.cy}
          rx={leaf.rx}
          ry={leaf.ry}
          transform={`rotate(${leaf.rotate} ${leaf.cx} ${leaf.cy})`}
        />
      ))}
    </svg>
  );
}

export default function GuestFavouriteBanner({
  rating,
  reviewCount,
}: GuestFavouriteBannerProps) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 flex items-center justify-between mb-8 gap-6">
      <div className="flex items-center gap-4 min-w-0">
        <div className="flex items-center gap-0.5 shrink-0" aria-hidden="true">
          <LaurelBranch className="w-6 h-11 text-gray-900" />
          <p className="text-center text-sm font-semibold leading-tight px-1">
            Guest
            <br />
            favourite
          </p>
          <LaurelBranch className="w-6 h-11 text-gray-900 scale-x-[-1]" />
        </div>

        <p className="text-sm text-gray-600">
          One of the most loved homes on Airbnb, according to guests
        </p>
      </div>

      <div className="flex items-center gap-6 shrink-0 pl-6">
        <div className="text-center">
          <p className="text-2xl font-semibold leading-none">
            {rating.toFixed(2)}
          </p>
          <p className="text-xs mt-1" aria-hidden="true">
            ★★★★★
          </p>
        </div>

        <div className="w-px h-10 bg-gray-300" />

        <div className="text-center">
          <p className="text-2xl font-semibold leading-none">
            {reviewCount}
          </p>
          <p className="text-xs text-gray-500 mt-1">Reviews</p>
        </div>
      </div>
    </div>
  );
}