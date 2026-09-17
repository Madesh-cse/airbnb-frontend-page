'use client';

import { useState } from 'react';
import { Review } from '../types/listing';

function Stars({ count }: { count: number }) {
  return (
    <span aria-hidden="true" className="text-xs">
      {'★'.repeat(count)}
      {'☆'.repeat(5 - count)}
    </span>
  );
}

const AVATAR_COLORS = [
  'bg-orange-100 text-orange-800',
  'bg-purple-100 text-purple-800',
  'bg-pink-100 text-pink-800',
  'bg-blue-100 text-blue-800',
  'bg-green-100 text-green-800',
  'bg-yellow-100 text-yellow-800',
  'bg-red-100 text-red-800',
  'bg-teal-100 text-teal-800',
];

function getAvatarColor(name: string) {
  const index =
    name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = review.text.length > 220;
  const shown =
    expanded || !isLong
      ? review.text
      : `${review.text.slice(0, 220)}…`;

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center overflow-hidden font-semibold shrink-0 ${getAvatarColor(
            review.authorName
          )}`}
        >
          {review.authorAvatarUrl ? (
            <img
              src={review.authorAvatarUrl}
              alt={review.authorName}
              className="w-full h-full object-cover"
            />
          ) : (
            review.authorName.charAt(0).toUpperCase()
          )}
        </div>

        <div>
          <p className="font-semibold text-sm text-black">
            {review.authorName}
          </p>

          <p className="text-xs text-gray-500">
            {review.tenure}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-2 flex items-center gap-2">
        <Stars count={review.starRating} />
        <span>·</span>
        <span>{review.timeAgo}</span>
      </p>

      <p className="text-sm text-black leading-relaxed">
        {shown}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 text-sm font-semibold underline text-black"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}

interface ReviewsListProps {
  reviews?: Review[];
  initialCount?: number;
}

export default function ReviewsList({
  reviews = [],
  initialCount = 6,
}: ReviewsListProps) {
  const [visibleCount, setVisibleCount] =
    useState(initialCount);

  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <div id="reviews">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
        {visibleReviews.map((review, i) => (
          <ReviewCard
            key={`${review.authorName}-${i}`}
            review={review}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-start">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((c) => c + initialCount)
            }
            className="rounded-lg border border-black px-6 py-3 text-sm font-semibold text-black hover:bg-gray-50 transition"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}