"use client";

import { useEffect, useState } from "react";

export interface ViewerPhoto {
  url: string;
  alt: string;
  roomName: string;
}

interface PhotoViewerProps {
  photos: ViewerPhoto[];
  initialIndex: number;
  onClose: () => void;
}

export default function PhotoViewer({
  photos,
  initialIndex,
  onClose,
}: PhotoViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentPhoto = photos[currentIndex];

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white">
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-center px-6 py-5">
        <div className="text-lg font-semibold text-gray-900">
          {currentPhoto.roomName}
        </div>
      </div>

      <div className="absolute right-6 top-5 z-20 text-sm font-medium text-gray-600">
        {currentIndex + 1} / {photos.length}
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="
          absolute
          right-20
          top-4
          z-30
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          text-gray-800
          transition
          hover:bg-gray-100
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* PREVIOUS BUTTON */}
      <button
        type="button"
        onClick={goPrevious}
        aria-label="Previous photo"
        className="
          absolute
          left-6
          top-1/2
          z-20
          flex
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          shadow-md
          transition
          hover:scale-105
          hover:shadow-lg
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* NEXT BUTTON */}
      <button
        type="button"
        onClick={goNext}
        aria-label="Next photo"
        className="
          absolute
          right-6
          top-1/2
          z-20
          flex
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          shadow-md
          transition
          hover:scale-105
          hover:shadow-lg
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      <div className="flex h-full w-full items-center justify-center px-20 py-20">
        <img
          key={currentPhoto.url}
          src={currentPhoto.url}
          alt={currentPhoto.alt}
          className="
            max-h-full
            max-w-full
            object-contain
            animate-[photoIn_220ms_ease-out]
          "
        />
      </div>
    </div>
  );
}
