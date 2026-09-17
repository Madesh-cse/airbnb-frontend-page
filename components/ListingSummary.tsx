interface ListingSummaryProps {
  type: string;
  location: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

export default function ListingSummary({
  type,
  location,
  guests,
  bedrooms,
  beds,
  baths,
}: ListingSummaryProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-1">
        {type} in {location}
      </h2>

      <p className="text-base text-gray-800">
        {guests} guests · {bedrooms} bedrooms · {beds} beds · {baths} bathrooms
      </p>

      <div className="mt-3">
        <span className="inline-block rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800">
          Free cancellation
        </span>
      </div>
    </div>
  );
}