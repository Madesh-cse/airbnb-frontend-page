import { PhotoTourRoom } from "../types/listing";

interface PhotoTourThumbnailGridProps {
  rooms: PhotoTourRoom[];
}

export function slugifyRoomName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function PhotoTourThumbnailGrid({
  rooms,
}: PhotoTourThumbnailGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8 px-6 lg:px-10 pt-8 pb-10">
      {rooms.map((room, i) => {
        const cover = room.images[0];
        return (
          <a
            key={i}
            href={`#${slugifyRoomName(room.name)}`}
            className="block group"
          >
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 mb-2 ring-1 ring-transparent group-hover:ring-gray-300 transition-shadow">
              {cover && (
                <img
                  src={cover.url}
                  alt={cover.alt}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <p className="text-sm">{room.name}</p>
          </a>
        );
      })}
    </div>
  );
}
