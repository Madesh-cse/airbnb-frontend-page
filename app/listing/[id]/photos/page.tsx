import PhotoTourHeader from "../../../../components/PhotoTourHeader";
import PhotoTourThumbnailGrid from "../../../../components/PhotoTourThumbnailGrid";
import PhotoTourSection from "../../../../components/PhotoTourSection";
import type { ViewerPhoto } from "../../../../components/PhotoViewer";

const PHOTO_TOUR_ROOMS = [
  {
    name: "Living room",
    amenities: ["1 double bed"],
    images: [
      {
        url: "/images/Tour-image/living-room.jpg",
        alt: "Living room",
      },
      {
        url: "/images/Tour-image/living-room-1.jpg",
        alt: "Living room",
      },
      {
        url: "/images/Tour-image/living-room-2.jpg",
        alt: "Living room",
      },
      {
        url: "/images/Tour-image/living-room-3.jpg",
        alt: "Living room",
      },
    ],
  },
  {
    name: "shared full kitchen",
    amenities: ["1 sofa bed"],
    images: [
      {
        url: "/images/Tour-image/kitchen.jpg",
        alt: "Kitchen",
      },
      {
        url: "/images/Tour-image/kitchen-1.jpg",
        alt: "Kitchen",
      },
    ],
  },
  {
    name: "Dinning",
    amenities: ["Kitchen"],
    images: [
      {
        url: "/images/Tour-image/Dinning-1.jpg",
        alt: "Dinning",
      },
      {
        url: "/images/Tour-image/Dinning-1.jpg",
        alt: "Dinning",
      },
      {
        url: "/images/Tour-image/Dinning-2.jpg",
        alt: "Dinning",
      },
    ],
  },
  {
    name: "Bedroom",
    amenities: ["Private bathroom"],
    images: [
      {
        url: "/images/Tour-image/bedroom.jpg",
        alt: "Bathroom",
      },
      {
        url: "/images/Tour-image/bedroom-1.jpg",
        alt: "Bathroom",
      },
      {
        url: "/images/Tour-image/bedroom-2.jpg",
        alt: "Bathroom",
      },
      {
        url: "/images/Tour-image/bedroom-3.jpg",
        alt: "Bathroom",
      },
    ],
  },
  {
    name: "Bathroom",
    amenities: ["Private jacuzzi", "Rattan lounge"],
    images: [
      {
        url: "/images/Tour-image/bathroom.jpg",
        alt: "bathroom",
      },
      {
        url: "/images/Tour-image/bathroom-1.jpg",
        alt: "bathroom",
      },
      {
        url: "/images/Tour-image/bathroom-2.jpg",
        alt: "bathroom",
      },
      {
        url: "/images/Tour-image/bathroom-3.jpg",
        alt: "bathroom",
      },
    ],
  },
  {
    name: "Workspace",
    amenities: ["Private jacuzzi", "Rattan lounge"],
    images: [
      {
        url: "/images/Tour-image/workspace.jpg",
        alt: "WorkSpace",
      },
      {
        url: "/images/Tour-image/workspace-1.jpg",
        alt: "bathroom",
      },
      {
        url: "/images/Tour-image/workspace-2.jpg",
        alt: "bathroom",
      },
      {
        url: "/images/Tour-image/workspace-3.jpg",
        alt: "bathroom",
      },
    ],
  },
  {
    name: "Shared balcony",
    amenities: ["Private jacuzzi", "Rattan lounge"],
    images: [
      {
        url: "/images/Tour-image/balcony-1.jpg",
        alt: "WorkSpace",
      },
      {
        url: "/images/Tour-image/balcony-2.jpg",
        alt: "bathroom",
      },
      {
        url: "/images/Tour-image/balcony-3.jpg",
        alt: "balcony",
      },
      {
        url: "/images/Tour-image/balcony-4.jpg",
        alt: "bathroom",
      },
    ],
  },
  {
    name: "Shared laundry area",
    amenities: ["Clothes drying rack"],
    images: [
      {
        url: "/images/Tour-image/laundry-1.jpg",
        alt: "Clothes drying rack",
      },
    ],
  },
  {
    name: "Additional Photo",
    amenities: ["Clothes drying rack"],
    images: [
      {
        url: "/images/Tour-image/Additional.jpg",
        alt: "Additional Photo",
      },
      {
        url: "/images/Tour-image/Additional-1.jpg",
        alt: "Additional Photo",
      },
      {
        url: "/images/Tour-image/Additional-2.jpg",
        alt: "Additional Photo",
      },
      {
        url: "/images/Tour-image/Additional-3.jpg",
        alt: "Additional Photo",
      },
    ],
  },
];

export default function PhotosPage() {
  const allPhotos: ViewerPhoto[] = PHOTO_TOUR_ROOMS.flatMap((room) =>
    room.images.map((image) => ({
      ...image,
      roomName: room.name,
    })),
  );
  return (
    <main className="min-h-screen bg-white">
      <PhotoTourHeader backHref="/listing/ug10-mirashya-candolim" />

      <div className="mx-auto max-w-7xl">
        {/* Page title */}
        <div className="px-6 pt-8 lg:px-10">
          <h1 className="text-3xl font-semibold tracking-tight">Photo tour</h1>
        </div>

        {/* Room thumbnails */}
        <PhotoTourThumbnailGrid rooms={PHOTO_TOUR_ROOMS} />

        {/* Room sections */}
        <div>
          {PHOTO_TOUR_ROOMS.map((room) => (
            <PhotoTourSection
              key={room.name}
              room={room}
              allPhotos={allPhotos}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
