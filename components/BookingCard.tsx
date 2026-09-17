interface BookingCardProps {
  pricePerNight: number;
  totalPrice?: number;
  currency: string;
  nights: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  freeCancellationBefore: string;
}

function formatShortDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) {
    return dateStr;
  }
  return d.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
}

function TagIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M27 15.6 16.4 26.2a2 2 0 0 1-2.83 0L5 17.6V6a1 1 0 0 1 1-1h11.6a2 2 0 0 1 1.41.59L27 14.2a2 2 0 0 1 0 2.83Z" />
      <circle cx="12.5" cy="11.5" r="2" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5.5 8 10l5-4.5" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 1.5v13" />
      <path d="M3 2.5h8.5l-2 3 2 3H3" />
    </svg>
  );
}

export default function BookingCard({
  pricePerNight,
  totalPrice,
  currency,
  nights,
  checkIn,
  checkOut,
  guests,
  freeCancellationBefore,
}: BookingCardProps) {
  const currencySymbol = currency === 'INR' ? '₹' : currency;
  const calculatedTotalPrice = totalPrice ?? pricePerNight * nights;

  return (
    <aside>
      <div className="sticky top-24">
        <div className="w-full lg:w-[400px] border border-gray-200 rounded-2xl mb-4 shadow-md p-5 flex items-center gap-3">
          <TagIcon />
          <div className="flex-1 text-sm leading-snug">
            <p className="font-semibold">Get 10% off your next stay.</p>
            <button className="underline">Terms apply</button>
          </div>
          <button className="border border-gray-800 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-50 shrink-0">
            Claim
          </button>
        </div>
        <div className="w-full lg:w-[400px] border border-gray-200 rounded-2xl shadow-lg p-6">
          <p className="text-2xl font-semibold mb-4">
            <span className="underline decoration-2 underline-offset-2">
              {currencySymbol}
              {calculatedTotalPrice.toLocaleString('en-IN')}
            </span>{' '}
            <span className="text-base font-normal text-gray-500">for {nights} nights</span>
          </p>
          <div className="border border-gray-300 rounded-t-xl grid grid-cols-2 divide-x divide-gray-300 overflow-hidden">
            <div className="p-3">
              <p className="text-[10px] font-bold tracking-wide text-gray-800">CHECK-IN</p>
              <p className="text-sm text-gray-700">{formatShortDate(checkIn)}</p>
            </div>
            <div className="p-3">
              <p className="text-[10px] font-bold tracking-wide text-gray-800">CHECKOUT</p>
              <p className="text-sm text-gray-700">{formatShortDate(checkOut)}</p>
            </div>
          </div>
          <button className="w-full border border-t-0 border-gray-300 rounded-b-xl p-3 flex items-center justify-between mb-4 text-left hover:bg-gray-50">
            <div>
              <p className="text-[10px] font-bold tracking-wide text-gray-800">GUESTS</p>
              <p className="text-sm text-gray-700">{guests} guests</p>
            </div>
            <ChevronDown />
          </button>
          <p className="text-center text-sm bg-gray-50 rounded-lg py-3 mb-4 text-gray-800">
            Free cancellation before{' '}
            <span className="font-semibold">{freeCancellationBefore}</span>
          </p>
          <button className="w-full text-white font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466]">
            Reserve
          </button>

          <p className="text-center text-sm text-gray-500 mt-3">You won&apos;t be charged yet</p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="flex items-center gap-2 text-sm underline text-gray-700">
            <FlagIcon />
            Report this listing
          </button>
        </div>
      </div>
    </aside>
  );
}