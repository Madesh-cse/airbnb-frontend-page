'use client';

import { useEffect, useState } from 'react';

interface StickySubNavProps {
  pricePerNight?: number;
  totalPrice?: number;
  nights?: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  onReserve?: () => void;
}

const TABS = ['Photos', 'Amenities', 'Reviews', 'Location'] as const;
type Tab = (typeof TABS)[number];

const TAB_TO_ID: Record<Tab, string> = {
  Photos: 'photos',
  Amenities: 'amenities',
  Reviews: 'reviews',
  Location: 'location',
};

export default function StickySubNav({
  pricePerNight = 0,
  totalPrice,
  nights = 0,
  currency = 'INR',
  rating = 0,
  reviewCount = 0,
  onReserve,
}: StickySubNavProps) {
  const [activeTab, setActiveTab] = useState<Tab>('Photos');
  const [visible, setVisible] = useState(false);

  const currencySymbol = currency === 'INR' ? '₹' : currency;

  // Use totalPrice if provided.
  // Otherwise calculate it from price per night × number of nights.
  const calculatedTotalPrice = totalPrice ?? pricePerNight * nights;

  // Show this nav only after the user scrolls past the PhotoGrid section
  useEffect(() => {
    const photoGrid = document.getElementById('photos');
    if (!photoGrid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once photoGrid's bottom has scrolled above the viewport, show the nav
        setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
      },
      { threshold: 0 }
    );

    observer.observe(photoGrid);

    return () => observer.disconnect();
  }, []);

  // Track which section is currently in view to highlight the matching tab
  useEffect(() => {
    const sections = TABS.map((tab) =>
      document.getElementById(TAB_TO_ID[tab])
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchedTab = TABS.find(
              (tab) => TAB_TO_ID[tab] === entry.target.id
            );
            if (matchedTab) setActiveTab(matchedTab);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);

    const el = document.getElementById(TAB_TO_ID[tab]);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">
        <nav className="flex items-center gap-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-sm pb-1 border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-black font-semibold text-black'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <div className="text-right text-sm">

            <p className="font-semibold">
              {currencySymbol}
              {calculatedTotalPrice.toLocaleString('en-IN')} for {nights} nights
            </p>
            <p className="text-gray-500">
              <span aria-hidden="true">★</span>{' '}
              {rating.toFixed(2)} · {reviewCount} reviews
            </p>
          </div>
          <button
            onClick={onReserve}
            className="bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] text-white font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}