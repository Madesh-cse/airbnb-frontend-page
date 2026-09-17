import { OverallRatingBreakdown, RatingCategory } from '../types/listing';
import RatingIcon from './RatingIcon';

interface RatingBreakdownProps {
  overall: OverallRatingBreakdown;
  categories: RatingCategory[];
}

export default function RatingBreakdown({
  overall,
  categories,
}: RatingBreakdownProps) {
  if (!overall) {
    return (
      <div className="mb-12">
        <p className="font-semibold">Rating breakdown data is missing.</p>
      </div>
    );
  }

  const maxCount = Math.max(...overall.distribution, 1);

  return (
    <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-8 divide-x divide-gray-200 sm:grid-cols-4 lg:grid-cols-7">
      
      {/* Overall rating */}
      <div className="pr-8">
        <p className="mb-3 text-base font-semibold">
          Overall rating
        </p>

        <div className="space-y-1">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = overall.distribution[star - 1];
            const widthPct = (count / maxCount) * 100;

            return (
              <div
                key={star}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <span className="w-2">{star}</span>

                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gray-800"
                    style={{
                      width: `${count > 0 ? Math.max(widthPct, 4) : 0}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {categories.map((category) => (
        <div key={category.label} className="pl-8">
          <p className="mb-2 text-base font-semibold">
            {category.label}
          </p>
          <p className="mb-2 text-2xl font-medium">
            {category.score.toFixed(1)}
          </p>
          <RatingIcon
            icon={category.icon}
            className="h-9 w-9 text-gray-800"
          />
        </div>
      ))}
    </div>
  );
}