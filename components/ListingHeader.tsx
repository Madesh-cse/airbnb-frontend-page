'use client';

import { useEffect, useRef, useState } from 'react';

interface ListingHeaderProps {
  title: string;
}

export default function ListingHeader({ title }: ListingHeaderProps) {
  const [saved, setSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setShowToast(true);
    // Reset any existing timer so repeated clicks restart the 3s countdown
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex items-start justify-between gap-4 mb-4">
      <h1 className="text-2xl md:text-[26px] font-semibold leading-tight">
        {title}
      </h1>

      <div className="flex items-center gap-2 shrink-0 pt-1">
        {/* Share button */}
        <button
          type="button"
          onClick={handleShare}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold underline transition-colors duration-200 hover:bg-gray-100"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
            <path
              stroke="currentColor"
              strokeWidth={1.2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 0 L8 10 M8 0 L4.5 3.5 M8 0 L11.5 3.5 M2 8 L2 14 A1 1 0 0 0 3 15 L13 15 A1 1 0 0 0 14 14 L14 8"
            />
          </svg>
          Share
        </button>
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold underline transition-colors duration-200 hover:bg-gray-100 ${
            saved ? 'text-[#E31C5F]' : 'text-black'
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            className={`w-4 h-4 transition-transform duration-300 ${
              saved ? 'scale-125' : 'scale-100'
            }`}
            aria-hidden="true"
          >
            <path
              fill={saved ? '#E31C5F' : 'none'}
              stroke={saved ? '#E31C5F' : 'currentColor'}
              strokeWidth={1.4}
              d="M8 14.2 C4 11 1.5 8.6 1.5 5.8 1.5 3.6 3.2 2 5.3 2 6.5 2 7.5 2.6 8 3.5 8.5 2.6 9.5 2 10.7 2 12.8 2 14.5 3.6 14.5 5.8 14.5 8.6 12 11 8 14.2Z"
            />
          </svg>
          {saved ? 'Saved' : 'Save'}
        </button>
      </div>

      {/* Toast notification */}
      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 ease-out ${
          showToast
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        Share options
      </div>
    </div>
  );
}