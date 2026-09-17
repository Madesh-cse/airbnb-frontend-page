import Link from 'next/link';

interface PhotoTourHeaderProps {
  backHref: string;
}

export default function PhotoTourHeader({ backHref }: PhotoTourHeaderProps) {
  return (
    <div className="sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between px-6 lg:px-10 py-5">
        <Link
          href={backHref}
          aria-label="Back to listing"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <svg viewBox="0 0 16 16" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13 5 8l5-5" />
          </svg>
        </Link>

        <h1 className="text-base font-semibold">Photo tour</h1>

        <div className="flex items-center gap-4">
          <button aria-label="Share" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 0 L8 10 M8 0 L4.5 3.5 M8 0 L11.5 3.5 M2 8 L2 14 A1 1 0 0 0 3 15 L13 15 A1 1 0 0 0 14 14 L14 8" />
            </svg>
          </button>
          <button aria-label="Save" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.4}>
              <path d="M8 14.2 C4 11 1.5 8.6 1.5 5.8 1.5 3.6 3.2 2 5.3 2 6.5 2 7.5 2.6 8 3.5 8.5 2.6 9.5 2 10.7 2 12.8 2 14.5 3.6 14.5 5.8 14.5 8.6 12 11 8 14.2Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200" />
    </div>
  );
}
