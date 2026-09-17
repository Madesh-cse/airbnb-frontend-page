import { getListingById } from "../../../data/listings";

import Navbar from "../../../components/Navbar";
import ListingHeader from "../../../components/ListingHeader";
import PhotoGrid from "../../../components/PhotoGrid";
import StickySubNav from "../../../components/StickySubNav";
import GuestFavouriteBanner from "../../../components/GuestFavouriteBanner";
import HostInfo from "../../../components/HostInfo";
import Highlights from "../../../components/Highlights";
import Description from "../../../components/Description";
import SleepingArrangements from "../../../components/SleepingArrangements";
import Amenities from "../../../components/Amenities";
import Calendar from "../../../components/Calendar";
import RatingOverview from "../../../components/RatingOverview";
import BookingCard from "../../../components/BookingCard";
import RatingBreakdown from "../../../components/RatingBreakdown";
import ReviewCategoryTags from "../../../components/ReviewCategoryTags";
import ReviewsList from "../../../components/ReviewsList";
import LocationSection from "../../../components/LocationSection";
import NeighbourhoodHighlights from "../../../components/NeighbourhoodHighlights";
import MeetYourHost from "../../../components/MeetYourHost";
import ThingsToKnow from "../../../components/ThingsToKnow";
import MoreStaysNearby from "../../../components/MoreStaysNearby";
import ListingSummary from "../../../components/ListingSummary";

interface ListingPageProps {
  params: {
    id: string;
  };
}

export default function ListingPage({ params }: ListingPageProps) {
  const listing = getListingById(params.id);

  if (!listing) {
    return (
      <>
        <Navbar />

        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <h1 className="mb-3 text-2xl font-semibold">Listing not found</h1>

          <p className="text-gray-600">
            The listing you are looking for does not exist.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1120px] px-6 pt-8 lg:px-10">
        <ListingHeader title={listing.title} />

        <PhotoGrid listingId={listing.id} images={listing.images} />
        <ListingSummary
          type={listing.type}
          location={listing.location}
          guests={listing.guests}
          bedrooms={listing.bedrooms}
          beds={listing.beds}
          baths={listing.baths}
        />
      </div>
      <StickySubNav
        totalPrice={listing.totalPrice}
        nights={listing.nights}
        currency={listing.currency}
        rating={listing.rating}
        reviewCount={listing.reviewCount}
      />
      <main className="mx-auto max-w-[1120px] px-6 py-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            {listing.isGuestFavourite && (
              <GuestFavouriteBanner
                rating={listing.rating}
                reviewCount={listing.reviewCount}
              />
            )}
            <HostInfo host={listing.host} />
            <Highlights highlights={listing.highlights} />
            <Description
              text={listing.description}
              isTranslated={listing.isTranslated}
            />
            <SleepingArrangements spaces={listing.sleepingArrangements} />
            <Amenities
              amenities={listing.amenities}
              totalCount={listing.totalAmenitiesCount}
            />
            <Calendar
              checkIn={listing.checkIn}
              checkOut={listing.checkOut}
              nights={listing.nights}
              location={listing.location}
            />
          </div>
          <BookingCard
            pricePerNight={listing.pricePerNight}
            totalPrice={listing.totalPrice}
            currency={listing.currency}
            nights={listing.nights}
            checkIn={listing.checkIn}
            checkOut={listing.checkOut}
            guests={listing.guests}
            freeCancellationBefore={listing.freeCancellationBefore}
          />
        </div>
        <div>
          <RatingOverview rating={listing.rating} />
          <RatingBreakdown
            overall={listing.overallRating}
            categories={listing.ratingCategories}
          />
          <ReviewCategoryTags tags={listing.reviewTags} />
          <ReviewsList reviews={listing.reviews} />
          <LocationSection location={listing.location} />
          <NeighbourhoodHighlights />
          <MeetYourHost host={listing.hostProfile} />
          <ThingsToKnow />
          <MoreStaysNearby />
        </div>
      </main>
    </>
  );
}
