import Link from 'next/link';
import { ListingImage } from '../types/listing';
import { getImageUrl } from '../lib/imageUrl';

interface PhotoGridProps {
  images: ListingImage[];
  listingId: string;
}

/**
 * Decide which Photo Tour room an image belongs to.
 */
function getRoomForImage(url: string) {
  const fileName = url.toLowerCase();

  if (fileName.includes('bedroom')) {
    return 'bedroom';
  }

  if (
    fileName.includes('living-room') ||
    fileName.includes('lounge')
  ) {
    return 'living-room';
  }

  if (fileName.includes('kitchen')) {
    return 'shared-full-kitchen';
  }

  if (fileName.includes('dinning')) {
    return 'dinning';
  }

  if (fileName.includes('bathroom')) {
    return 'bathroom';
  }

  if (fileName.includes('workspace')) {
    return 'workspace';
  }

  if (fileName.includes('balcony')) {
    return 'shared-balcony';
  }

  if (fileName.includes('laundry')) {
    return 'shared-laundry-area';
  }

  if (fileName.includes('additional')) {
    return 'additional-photo';
  }

  return 'living-room';
}

export default function PhotoGrid({
  images,
  listingId,
}: PhotoGridProps) {
  const [main, ...rest] = images;
  const smalls = rest.slice(0, 4);

  const getPhotoHref = (image: ListingImage) => {
    const room = getRoomForImage(image.url);

    return `/listing/${listingId}/photos#${room}`;
  };

  return (
    <div
      id="photos"
      className="relative mb-8 grid h-[420px] grid-cols-4 grid-rows-2 gap-2"
    >
      {/* MAIN IMAGE */}
      {main && (
        <Link
          href={getPhotoHref(main)}
          className="
            relative
            col-span-2
            row-span-2
            overflow-hidden
            rounded-l-xl
            bg-gray-100
          "
        >
          <img
            src={getImageUrl(main.url)}
            alt={main.alt}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-300
              hover:scale-[1.02]
            "
          />
        </Link>
      )}

      {/* SMALL IMAGES */}
      {smalls.map((img, index) => {
        const isTopRight = index === 1;
        const isBottomRight =
          index === smalls.length - 1;

        return (
          <Link
            key={`${img.url}-${index}`}
            href={getPhotoHref(img)}
            className={`
              relative
              overflow-hidden
              bg-gray-100
              ${
                isTopRight
                  ? 'rounded-tr-xl'
                  : ''
              }
              ${
                isBottomRight
                  ? 'rounded-br-xl'
                  : ''
              }
            `}
          >
            <img
              src={getImageUrl(img.url)}
              alt={img.alt}
              className="
                h-full
                w-full
                object-cover
                transition
                duration-300
                hover:scale-[1.02]
              "
            />
          </Link>
        );
      })}

      {/* SHOW ALL PHOTOS */}
      <Link
        href={`/listing/${listingId}/photos`}
        className="
          absolute
          bottom-4
          right-4
          flex
          items-center
          gap-2
          rounded-lg
          bg-white
          px-4
          py-2
          text-sm
          font-semibold
          shadow
          transition
          hover:bg-gray-50
        "
      >
        <svg
          viewBox="0 0 16 16"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M2 3h4v2H4v2H2V3zm10 0h4v4h-2V5h-2V3zM2 9h2v2h2v2H2V9zm10 4h2v-2h2v4h-4v-2z"
          />
        </svg>

        Show all photos
      </Link>
    </div>
  );
}