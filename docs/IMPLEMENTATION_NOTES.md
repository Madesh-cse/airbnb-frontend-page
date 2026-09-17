# Implementation Notes

## Project Type

Frontend-only Airbnb listing clone.

## Framework

Next.js 14
React
TypeScript
Tailwind CSS

## Data Strategy

Listing data is stored locally in TypeScript.

No backend is required for the take-home implementation.

## Image Strategy

Images are served from:

public/images/

Example:

/images/bedroom.jpg

## Main Views

### Listing Page

Route:

/listing/[listingId]

Responsibilities:

- Listing information
- Hero gallery
- Host information
- Amenities
- Reviews
- Booking information
- Location

### Photo Tour

Route:

/listing/[listingId]/photos

Responsibilities:

- Complete photo gallery
- Room categories
- Room navigation

### Lightbox

Interactive overlay opened from gallery images.

Responsibilities:

- Image navigation
- Keyboard navigation
- Image counter
- Room name
- Close behavior
- Focus management

## Backend

No backend is required for this implementation.

## Deployment

Frontend can be deployed using Vercel.

## Production Architecture

The architecture diagram describes how a production-scale vacation rental platform could evolve beyond this take-home implementation.