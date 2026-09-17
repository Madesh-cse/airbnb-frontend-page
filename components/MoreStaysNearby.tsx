'use client';

import { useRef, useState } from 'react';

interface NearbyStayItem {
  title: string;
  image: string;
  price: number;
  currency: string;
  rating: number;
}

const stays: NearbyStayItem[] = [
  {
    title: 'Beautiful Studio with a view to die for',
    image: '/images/nearby-1.jpg',
    price: 23600,
    currency: 'INR',
    rating: 4.91,
  },
  {
    title: 'NAQAB - 1bhk with private pool',
    image: '/images/nearby-2.jpg',
    price: 42218,
    currency: 'INR',
    rating: 4.95,
  },
  {
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    image: '/images/nearby-3.jpg',
    price: 44506,
    currency: 'INR',
    rating: 4.94,
  },
  {
    title: 'The Tropical Studio | 5 mins to Beach',
    image: '/images/nearby-4.jpg',
    price: 22824,
    currency: 'INR',
    rating: 4.96,
  },
  {
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    image: '/images/nearby-5.jpg',
    price: 39942,
    currency: 'INR',
    rating: 4.95,
  },
  {
    title: 'Kanso by Earthen Window | Peaceful Stay',
    image: '/images/nearby-6.jpg',
    price: 31500,
    currency: 'INR',
    rating: 4.89,
  },
  {
    title: 'Luxury Art | Private Pool | Candolim',
    image: '/images/nearby-7.jpg',
    price: 27800,
    currency: 'INR',
    rating: 4.92,
  },
  {
    title: 'Serendipity Cottage - Calm & Cozy',
    image: '/images/nearby-8.jpg',
    price: 19900,
    currency: 'INR',
    rating: 4.87,
  },
  {
    title: 'Modern Goa Retreat',
    image: '/images/nearby-9.jpg',
    price: 35200,
    currency: 'INR',
    rating: 4.9,
  },
  {
    title: 'Cozy Candolim Villa',
    image: '/images/nearby-10.jpg',
    price: 28700,
    currency: 'INR',
    rating: 4.93,
  },
];

const PER_PAGE = 5;

function currencySymbolFor(code: string) {
  return code === 'INR' ? '₹' : code;
}

export default function MoreStaysNearby() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(stays.length / PER_PAGE);

  const goToPage = (newPage: number) => {
    if (!scrollRef.current) return;

    const nextPage = Math.max(
      1,
      Math.min(totalPages, newPage)
    );

    scrollRef.current.scrollTo({
      left:
        scrollRef.current.clientWidth *
        (nextPage - 1),
      behavior: 'smooth',
    });

    setPage(nextPage);
  };

  return (
    <section className="mb-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          More stays nearby
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-xl transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-xl transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ›
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {Array.from({ length: totalPages }).map(
          (_, pageIndex) => {
            const pageStays = stays.slice(
              pageIndex * PER_PAGE,
              pageIndex * PER_PAGE + PER_PAGE
            );

            return (
              <div
                key={pageIndex}
                className="grid w-full shrink-0 grid-cols-5 gap-4"
              >
                {pageStays.map((stay, index) => (
                  <div
                    key={`${stay.title}-${index}`}
                    className="group min-w-0 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="mb-2 aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={stay.image}
                        alt={stay.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="line-clamp-2 text-sm text-gray-900 mb-1">
                      {stay.title}
                    </p>
                    <p className="flex items-center gap-1.5 text-sm text-gray-900">
                      <span className="font-semibold">
                        {currencySymbolFor(stay.currency)}
                        {stay.price.toLocaleString('en-IN')}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <span aria-hidden="true">★</span>
                        <span>{stay.rating.toFixed(2)}</span>
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}