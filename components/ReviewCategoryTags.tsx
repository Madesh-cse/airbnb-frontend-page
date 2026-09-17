import { ReviewTag } from '../types/listing';

const ICONS: Record<string, string> = {
  comfort: '🛏️',
  accuracy: '✅',
  hottub: '🛁',
  condition: '🎁',
  hospitality: '🎁',
  cleanliness: '🧴',
  amenities: '🎒',
};

interface ReviewCategoryTagsProps {
  tags?: ReviewTag[];
}

export default function ReviewCategoryTags({
  tags = [],
}: ReviewCategoryTagsProps) {
  return (
    <div className="relative mb-10">
      <div className="pointer-events-none absolute left-0 top-0 bottom-2 z-10 w-8 bg-gradient-to-r from-white to-transparent" />
      <div
        className="
          flex
          gap-3
          overflow-x-auto
          overflow-y-hidden
          pb-3
          px-1
          scroll-smooth
          snap-x
          snap-mandatory
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {tags.map((tag) => (
          <button
            key={`${tag.icon}-${tag.label}`}
            type="button"
            className="
              group
              flex
              shrink-0
              snap-start
              items-center
              gap-2
              rounded-full
              border
              border-gray-200
              bg-white
              px-4
              py-2.5
              text-sm
              font-medium
              whitespace-nowrap
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-gray-400
              hover:shadow-md
              active:scale-[0.97]
            "
          >
            <span
              aria-hidden="true"
              className="
                text-base
                transition-transform
                duration-200
                group-hover:scale-110
              "
            >
              {ICONS[tag.icon] || '•'}
            </span>
            <span className="font-semibold text-gray-800">
              {tag.label}
            </span>
            <span className="text-gray-500">
              {tag.count}
            </span>
          </button>
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-2 z-10 w-10 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}