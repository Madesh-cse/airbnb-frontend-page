'use client';

import { useEffect } from 'react';
import { Amenity } from '../types/listing';
import AmenityIcon from './AmenityIcon';

interface AmenitiesModalProps {
  amenities: Amenity[];
  totalCount: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function AmenitiesModal({
  amenities,
  totalCount,
  isOpen,
  onClose,
}: AmenitiesModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="All amenities"
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-6 py-4 border-b border-gray-200 shrink-0">
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 -ml-2"
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4">
              <path
                fill="currentColor"
                d="M8 6.94 12.72 2.2l1.06 1.06L9.06 8l4.72 4.72-1.06 1.06L8 9.06l-4.72 4.72-1.06-1.06L6.94 8 2.22 3.26l1.06-1.06z"
              />
            </svg>
          </button>
          <h2 className="flex-1 text-center font-semibold pr-9">
            What this place offers ({totalCount})
          </h2>
        </div>

        <div className="overflow-y-auto px-6 py-6 space-y-5">
          {amenities.map((amenity, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 pb-5 border-b border-gray-100 last:border-b-0 ${
                !amenity.available ? 'text-gray-400' : ''
              }`}
            >
              <AmenityIcon icon={amenity.icon} className="w-7 h-7 shrink-0" />
              <span className={!amenity.available ? 'line-through' : ''}>{amenity.name}</span>
              {!amenity.available && <span className="text-sm ml-auto">Unavailable</span>}
            </div>
          ))}

          {totalCount > amenities.length && (
            <p className="text-sm text-gray-500 pt-2">
              {totalCount - amenities.length} more amenities aren&apos;t listed yet — add them to
              the listing data to show up here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
