import { Listing } from "../types/listing";

export const listings: Listing[] = [
  {
    id: "ug10-mirashya-candolim",
    title: "The Brooklyn Loft",
    type: "Entire serviced apartment",
    location: "Candolim, India",

    description:
      "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
      isTranslated: false,

    host: {
      name: "Mirashya Homes",
      yearsHosting: 5,
    },

    hostProfile: {
      name: "Amor de Goa",
      avatarUrl: "",
      isVerified: true,
      reviewCount: 87,
      rating: 4.92,
      yearsHosting: 5,
      responseRate: "100%",
      respondsWithin: "an hour",

      aboutBullets: [
        "Born in Goa",
        "Lives in Candolim",
        "Speaks English and Hindi",
        "Superhost",
      ],

      coHosts: [
        {
          name: "Riya",
        },
        {
          name: "Arjun",
        },
      ],
    },

    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,

    pricePerNight: 4200,
    currency: "INR",
    nights: 5,
    totalPrice: 21000,

    rating: 4.92,
    reviewCount: 87,

    overallRating: {
      distribution: [1, 2, 5, 18, 61],
    },

    ratingCategories: [
      {
        label: "Cleanliness",
        icon: "cleanliness",
        score: 4.9,
      },
      {
        label: "Accuracy",
        icon: "accuracy",
        score: 4.9,
      },
      {
        label: "Check-in",
        icon: "checkin",
        score: 4.9,
      },
      {
        label: "Communication",
        icon: "communication",
        score: 4.9,
      },
      {
        label: "Location",
        icon: "location",
        score: 4.8,
      },
      {
        label: "Value",
        icon: "value",
        score: 4.8,
      },
    ],

    isGuestFavourite: true,

    checkIn: "2026-10-18",
    checkOut: "2026-10-23",
    freeCancellationBefore: "17 October",

    highlights: [
      {
        icon: "location",
        title: "Outdoor entertainment",
        description: "The pool and alfresco dining are great for summer trips.",
      },
      {
        icon: "jacuzzi",
        title: "Designed for staying cool",
        description: "Beat the heat with the A/C and ceiling fan.",
      },
      {
        icon: "bed",
        title: "Self check-in",
        description: "You can check in with the building staff.",
      },
    ],

    sleepingArrangements: [
      {
        name: "Bedroom",
        detail: "1 double bed",
        image: {
          url: "/images/bedroom-1.jpg",
          alt: "Bright bedroom with a double bed and hardwood floors",
        },
      },
      {
        name: "Living room",
        detail: "1 sofa bed",
        image: {
          url: "/images/bedroom-2.jpg",
          alt: "Living room with comfortable sofa and lounge seating",
        },
      },
    ],

    amenities: [
      {
        name: "Kitchen",
        icon: "kitchen",
        available: true,
      },
      {
        name: "Wifi",
        icon: "wifi",
        available: true,
      },
      {
        name: "Dedicated workspace",
        icon: "workspace",
        available: true,
      },
      {
        name: "Free parking",
        icon: "parking",
        available: true,
      },
      {
        name: "Pool",
        icon: "pool",
        available: true,
      },
      {
        name: "Hot tub",
        icon: "hottub",
        available: true,
      },
      {
        name: "Pets allowed",
        icon: "pets",
        available: true,
      },
      {
        name: "Security cameras",
        icon: "cameras",
        available: true,
      },
      {
        name: "Carbon monoxide alarm",
        icon: "co_alarm",
        available: true,
      },
      {
        name: "Smoke alarm",
        icon: "smoke_alarm",
        available: true,
      },
    ],

    reviewTags: [
      {
        icon: "comfort",
        label: "Comfortable",
        count: 24,
      },
      {
        icon: "accuracy",
        label: "Exactly as described",
        count: 19,
      },
      {
        icon: "hottub",
        label: "Amazing hot tub",
        count: 17,
      },
      {
        icon: "hospitality",
        label: "Great hospitality",
        count: 15,
      },
      {
        icon: "cleanliness",
        label: "Very clean",
        count: 14,
      },
      {
        icon: "amenities",
        label: "Great amenities",
        count: 12,
      },
    ],

    reviews: [
      {
        authorName: "Sarah",
        authorAvatarUrl: "/images/people-3.jpg",
        tenure: "3 years on Airbnb",
        starRating: 5,
        timeAgo: "1 week ago",
        text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
      },
      {
        authorName: "Rahul",
        authorAvatarUrl: "/images/people-1.jpg",
        tenure: "2 years on Airbnb",
        starRating: 5,
        timeAgo: "2 weeks ago",
        text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
      },
      {
        authorName: "Emily",
        authorAvatarUrl: "/images/people-4.jpg",
        tenure: "5 years on Airbnb",
        starRating: 5,
        timeAgo: "1 month ago",
        text: "Beautiful apartment with a lovely terrace and jacuzzi. Very comfortable bedroom and excellent amenities.",
      },
      {
        authorName: "Arjun",
        authorAvatarUrl: "/images/people-2.jpg",
        tenure: "1 year on Airbnb",
        starRating: 5,
        timeAgo: "2 months ago",
        text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.",
      },
      {
        authorName: "Madesh",
        authorAvatarUrl: "/images/people-5.jpg",
        tenure: "5 years on Airbnb",
        starRating: 5,
        timeAgo: "1 month ago",
        text: "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too.",
      },
      {
        authorName: "Naveen",
        authorAvatarUrl: "/images/people-1.jpg",
        tenure: "1 year on Airbnb",
        starRating: 5,
        timeAgo: "2 months ago",
        text: "Great place. Exactly as described in the listing.",
      },
      {
        authorName: "Naveen",
        authorAvatarUrl: "/images/people-1.jpg",
        tenure: "1 year on Airbnb",
        starRating: 5,
        timeAgo: "2 months ago",
        text: "Great place. Exactly as described in the listing.",
      },
    ],

    totalAmenitiesCount: 10,

    images: [
      {
        url: "/images/lounge-wide.jpg",
        alt: "Outdoor rattan lounge seating with jacuzzi terrace",
      },
      {
        url: "/images/lounge-corner.jpg",
        alt: "Corner lounge seating area",
      },
      {
        url: "/images/jacuzzi.jpg",
        alt: "Private wooden-deck jacuzzi",
      },
      {
        url: "/images/bedroom.jpg",
        alt: "Bedroom with hardwood floors",
      },
      {
        url: "/images/building.jpg",
        alt: "Exterior of Amor de Goa building",
      },
    ],
  },
];

export function getListingById(id: string): Listing | undefined {
  return listings.find((listing) => listing.id === id);
}
