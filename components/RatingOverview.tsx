interface RatingOverviewProps {
  rating: number;
}

export default function RatingOverview({ rating }: RatingOverviewProps) {
  return (
    <div className="pt-10 pb-10 mb-8 border-b border-gray-200 text-center">
      <div className="flex items-center justify-center gap-6">
        <img
          src="/images/rating-left.jpg"
          alt=""
          aria-hidden="true"
          className="w-18 h-32 object-contain"
        />

        <span className="text-8xl font-semibold">{rating.toFixed(2)}</span>

        <img
          src="/images/rating-right.jpg"
          alt=""
          aria-hidden="true"
          className="w-18 h-32 object-contain"
        />
      </div>

      <h2 className="mt-6 text-2xl font-semibold">Guest favourite</h2>

      <p className="mt-2 text-base text-gray-700 max-w-md mx-auto">
        This home is a guest favourite based on ratings, reviews and
        reliability
      </p>

      <button
        type="button"
        className="mt-4 text-sm font-semibold underline"
      >
        How reviews work
      </button>
    </div>
  );
}