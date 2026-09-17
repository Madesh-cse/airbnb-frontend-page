interface GuestFavouriteDetailProps {
  description?: string;
}

export default function GuestFavouriteDetail({
  description = 'This home is a guest favourite based on ratings, reviews and reliability',
}: GuestFavouriteDetailProps) {
  return (
    <div className="text-center max-w-xl mx-auto mb-12">
      <h2 className="text-2xl font-semibold mb-3">Guest favourite</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <button className="underline font-semibold text-sm">How reviews work</button>
    </div>
  );
}
