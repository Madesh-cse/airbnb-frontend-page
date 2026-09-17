"use client";

import { useState } from "react";
import { Amenity } from "../types/listing";
import AmenityIcon from "./AmenityIcon";
import AmenitiesModal from "./AmenitiesModal";

interface AmenitiesProps {
  amenities: Amenity[];
  totalCount: number;
}

export default function Amenities({ amenities, totalCount }: AmenitiesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const visible = amenities.slice(0, 8);

  return (
    <div id="amenities" className="mb-8 pb-8 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
        {visible.map((amenity, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 ${!amenity.available ? "text-gray-400" : ""}`}
          >
            <AmenityIcon icon={amenity.icon} className="w-6 h-6 shrink-0" />
            <span
              className={`text-base sm:text-lg ${
                !amenity.available ? "line-through" : ""
              }`}
            >
              {amenity.name}
            </span>
          </div>
        ))}
      </div>

      {(totalCount > amenities.length || amenities.length > 8) && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="border border-gray-800 rounded-lg px-5 py-3 text-sm font-semibold hover:bg-gray-50"
        >
          Show all {totalCount} amenities
        </button>
      )}

      <AmenitiesModal
        amenities={amenities}
        totalCount={totalCount}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}