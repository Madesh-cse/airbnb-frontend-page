export interface ListingImage {
  url: string;
  alt: string;
}

export interface SleepingSpace {
  name: string;
  detail: string;
  image: ListingImage;
}

export interface Amenity {
  name: string;
  icon: string;
  available: boolean;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface Host {
  name: string;
  avatarUrl?: string;
  isSuperhost?: boolean;
  yearsHosting: number;
}

export interface RatingCategory {
  label: string;
  icon: string;
  score: number;
}

export interface OverallRatingBreakdown {
  distribution: [number, number, number, number, number];
}

export interface ReviewTag {
  icon: string;
  label: string;
  count: number;
}

export interface Review {
  authorName: string;
  authorAvatarUrl?: string;
  tenure: string;
  starRating: number;
  timeAgo: string;
  text: string;
}

export interface CoHost {
  name: string;
  avatarUrl?: string;
}

export interface HostProfile {
  name: string;
  avatarUrl?: string;
  isVerified: boolean;
  reviewCount: number;
  rating: number;
  yearsHosting: number;
  responseRate: string;
  respondsWithin: string;

  /*
   * The listing data stores these as simple strings.
   */
  aboutBullets: string[];

  coHosts: CoHost[];
}

export interface HouseRule {
  icon: string;
  title: string;
  details: string[];
  learnMoreUrl?: string;
}

export interface NearbyStay {
  title: string;
  image: ListingImage;
  url?: string;
}

export interface PhotoTourRoom {
  name: string;
  amenities?: string[];
  images: ListingImage[];
}

export interface Listing {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  isTranslated: boolean;

  host: Host;
  hostProfile: HostProfile;

  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;

  pricePerNight: number;
  currency: string;
  nights: number;
  totalPrice: number;

  rating: number;
  reviewCount: number;

  overallRating: OverallRatingBreakdown;
  ratingCategories: RatingCategory[];
  reviewTags: ReviewTag[];

  isGuestFavourite: boolean;

  checkIn: string;
  checkOut: string;
  freeCancellationBefore: string;

  highlights: Highlight[];
  sleepingArrangements: SleepingSpace[];

  amenities: Amenity[];
  totalAmenitiesCount: number;

  reviews: Review[];

  images: ListingImage[];
}