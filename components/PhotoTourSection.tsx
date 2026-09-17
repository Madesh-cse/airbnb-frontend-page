'use client';

import { useState } from 'react';
import { PhotoTourRoom } from '../types/listing';
import PhotoViewer, { ViewerPhoto } from './PhotoViewer';

function slugifyRoomName(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface PhotoTourSectionProps {
  room: PhotoTourRoom;
  allPhotos: ViewerPhoto[];
}

export default function PhotoTourSection({
  room,
  allPhotos,
}: PhotoTourSectionProps) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openViewer = (imageUrl: string) => {
    const index = allPhotos.findIndex(
      (photo) => photo.url === imageUrl
    );

    setSelectedIndex(index >= 0 ? index : 0);
    setViewerOpen(true);
  };

  return (
    <>
      <section
        id={slugifyRoomName(room.name)}
        className="
          grid
          grid-cols-1
          gap-8
          px-6
          py-10
          scroll-mt-20
          lg:grid-cols-2
          lg:px-10
        "
      >
        <div className="lg:relative">
          <div className="lg:sticky lg:top-24">
            <h2 className="mb-3 text-3xl font-semibold tracking-tight">
              {room.name}
            </h2>

            {room.amenities && room.amenities.length > 0 && (
              <p className="text-gray-600">
                {room.amenities.join(' · ')}
              </p>
            )}
          </div>
        </div>
        <div className="min-w-0">
          <div className="grid grid-cols-2 gap-3">
            {room.images.map((image, i) => (
              <button
                key={`${image.url}-${i}`}
                type="button"
                onClick={() => openViewer(image.url)}
                className={`group overflow-hidden rounded-xl bg-gray-100 text-left ${
                  i % 3 === 0
                    ? 'col-span-2 h-[420px]'
                    : 'h-[260px]'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-[1.02]
                  "
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      {viewerOpen && (
        <PhotoViewer
          photos={allPhotos}
          initialIndex={selectedIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </>
  );
}