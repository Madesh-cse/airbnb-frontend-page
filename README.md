# Airbnb Listing Clone

A pixel-perfect frontend implementation of an Airbnb-inspired property listing experience built with **Next.js, React, TypeScript, and Tailwind CSS**.

The project focuses on recreating the provided listing-page reference with a strong emphasis on visual accuracy, reusable components, responsive layouts, interactive photo experiences, keyboard accessibility, and clean frontend architecture.

---

## 🚀 Live Demo

**https://airbnb-frontend-page.vercel.app/listing/ug10-mirashya-candolim**

---

## 📌 Project Overview

This project was developed as a frontend take-home assignment based on the provided Airbnb listing reference.

The implementation recreates the core property listing experience, including the listing details page, image gallery, photo tour, full-screen image viewer, booking card, reviews, host information, location details, and supporting sections.

The application is implemented entirely on the frontend using **local TypeScript data and local image assets**. No backend service or external database is required for the current implementation.

### Main Objectives

* Recreate the provided Airbnb-style listing experience
* Build reusable and maintainable React components
* Implement responsive layouts
* Create an interactive photo gallery and lightbox
* Support keyboard navigation and accessibility
* Maintain strongly typed TypeScript data
* Keep the application simple and easy to run
* Demonstrate production-oriented frontend development practices

---

# ✨ Features

## 🏠 Listing Page

The main listing page includes:

* Property title and location
* Rating and review information
* Guest Favourite badge
* Property image gallery
* Listing highlights
* Property description
* Sleeping arrangements
* Amenities
* Booking card
* Reviews and rating breakdown
* Host information
* Location section
* Neighbourhood highlights
* Things to know
* Nearby stays
* Sticky navigation

---

## 📸 Photo Gallery

The property gallery provides an Airbnb-inspired visual layout with:

* Multiple property images
* Responsive image grid
* Room and area categorization
* Image hover interactions
* Photo Tour navigation
* Full-screen image viewing

### Included Areas

* Living room
* Kitchen
* Dining area
* Bedroom
* Bathroom
* Workspace
* Balcony
* Laundry area
* Additional property photos

---

## 🔍 Photo Tour & Image Lightbox

The Photo Tour provides a dedicated experience for browsing all property images.

The Lightbox supports:

* Full-screen image viewing
* Previous image navigation
* Next image navigation
* Image counter
* Room/area name
* Close button
* Keyboard navigation
* Background scroll locking

### Keyboard Controls

```text
←    Previous image
→    Next image
Esc  Close viewer
```

The image viewer also prevents background page scrolling while it is open.

---

# 🎨 UI / UX

The interface follows an Airbnb-inspired visual design while using an original component-based implementation.

### UI Features

* Airbnb-inspired visual design
* Responsive layouts
* Reusable React components
* Tailwind CSS styling
* Smooth transitions
* Hover interactions
* Sticky navigation
* Scroll behavior
* Interactive image gallery
* Full-screen image viewer
* Keyboard accessibility
* Focus management
* Accessibility considerations
* Consistent spacing and typography
* Responsive mobile and desktop layouts

---

# 🧩 Component Architecture

The application is divided into reusable components to keep the codebase maintainable, scalable, and easy to understand.

## Listing Components

* `Navbar`
* `ListingHeader`
* `PhotoGrid`
* `StickySubNav`
* `GuestFavouriteBanner`
* `HostInfo`
* `Highlights`
* `Description`
* `SleepingArrangements`
* `Amenities`
* `Calendar`
* `BookingCard`

## Review Components

* `RatingOverview`
* `RatingBreakdown`
* `ReviewCategoryTags`
* `ReviewsList`

## Host & Location Components

* `MeetYourHost`
* `LocationSection`
* `NeighbourhoodHighlights`
* `ThingsToKnow`
* `MoreStaysNearby`

## Photo Components

* `PhotoGrid`
* `PhotoTourSection`
* `PhotoViewer`

This component-based architecture allows individual UI sections to be developed, tested, and maintained independently.

---

# 🛠️ Tech Stack

## Frontend

* **Next.js 14**
* **React**
* **TypeScript**
* **Tailwind CSS**

## Development Tools

* **Git**
* **GitHub**
* **Vercel**
* **ESLint**

## Data & Assets

* Local TypeScript data
* Local image assets
* Next.js `public` directory

No backend service is required for the current implementation.

---

# 📁 Project Structure

```text
airbnb-clone/
│
├── app/
│   ├── listing/
│   │   └── [listingId]/
│   │       ├── page.tsx
│   │       └── photos/
│   │           └── page.tsx
│   │
│   ├── globals.css
│   └── ...
│
├── components/
│   ├── Navbar.tsx
│   ├── ListingHeader.tsx
│   ├── PhotoGrid.tsx
│   ├── PhotoTourSection.tsx
│   ├── PhotoViewer.tsx
│   ├── BookingCard.tsx
│   ├── Highlights.tsx
│   ├── Amenities.tsx
│   ├── ReviewsList.tsx
│   ├── MeetYourHost.tsx
│   └── ...
│
├── data/
│   └── listings.ts
│
├── types/
│   └── listing.ts
│
├── public/
│   └── images/
│
├── .ai/
│   ├── agents/
│   └── skills/
│
├── docs/
│   ├── architecture.pdf
│   ├── AI_PROMPTS.md
│   └── IMPLEMENTATION_NOTES.md
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

# 🗂️ Data Management

The application uses **local TypeScript data** instead of a backend API.

Listing information is stored in:

```text
data/listings.ts
```

Type definitions are maintained in:

```text
types/listing.ts
```

Images are stored locally in:

```text
public/images/
```

This approach keeps the project:

* Simple
* Portable
* Easy to run locally
* Independent of external APIs
* Easy to modify during development

---

# 📸 Image Management

All property images are served from the Next.js `public` directory.

Example:

```text
public/images/
├── lounge-wide.jpg
├── lounge-corner.jpg
├── jacuzzi.jpg
├── bedroom.jpg
├── bedroom-1.jpg
├── kitchen.jpg
├── bathroom.jpg
└── ...
```

Images are referenced using paths such as:

```text
/images/bedroom.jpg
```

---

# 🏗️ Architecture

The application follows a component-based Next.js architecture.

```text
                    ┌─────────────────────┐
                    │       Browser       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Next.js App    │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       Listing Page       Photo Tour       Lightbox
              │                │                │
              └────────────────┼────────────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Reusable Components │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Local TypeScript    │
                    │       Data          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Local Image Assets │
                    │    public/images    │
                    └─────────────────────┘
```

A production-scale architecture diagram is included in:

```text
docs/architecture.pdf
```

---

# ⌨️ Keyboard Accessibility

The Lightbox provides keyboard controls for improved usability.

| Key   | Action         |
| ----- | -------------- |
| `←`   | Previous image |
| `→`   | Next image     |
| `Esc` | Close viewer   |

Additional accessibility considerations include:

* Keyboard-friendly interactions
* Focus management
* Interactive button states
* Accessible navigation controls
* Background scroll locking while the Lightbox is open
* Semantic UI structure

---

# 🧪 Build Verification

The project has been verified using the Next.js production build.

Run:

```bash
npm run build
```

Expected build process:

```text
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Collecting build traces
✓ Finalizing page optimization
```

---

# ⚙️ Getting Started

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 2. Navigate to the Project

```bash
cd airbnb-clone/frontend
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Development Server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

---

# 🔗 Available Routes

## Listing Page

```text
/listing/ug10-mirashya-candolim
```

## Photo Tour

```text
/listing/ug10-mirashya-candolim/photos
```

---

# 💻 Development Scripts

## Start Development Server

```bash
npm run dev
```

## Create Production Build

```bash
npm run build
```

## Start Production Server

```bash
npm run start
```

## Run Linter

```bash
npm run lint
```

---

# 🚀 Deployment

The application is deployed using **Vercel**.

### Deployment Flow

```text
GitHub
   │
   ▼
Vercel
   │
   ▼
Next.js Production Build
   │
   ▼
Live Application
```

## Production URL

**[View Live Application](YOUR_VERCEL_URL)**

The application can also be deployed to other platforms that support Next.js applications.

---

# 🌐 Deployment Requirements

The project can be deployed using:

* Vercel
* Next.js hosting platforms
* Other platforms supporting Next.js applications

### Recommended Workflow

```text
Local Development
       ↓
Git
       ↓
GitHub
       ↓
Vercel
       ↓
Production
```

---

# 🔒 Environment Variables

The current frontend implementation does not require backend environment variables.

If environment variables are added in the future, sensitive values should be stored in local `.env` files and should never be committed to GitHub.

Example:

```text
.env.local
```

Sensitive environment files should be included in:

```text
.gitignore
```

---

# 🤖 AI-Assisted Development

AI tools were used during development as development assistants for:

* Component planning
* TypeScript debugging
* UI implementation
* Code review
* Accessibility review
* Pixel-perfect UI review
* Build troubleshooting
* Development documentation

The AI prompts used during development are documented in:

```text
docs/AI_PROMPTS.md
```

Implementation notes are available in:

```text
docs/IMPLEMENTATION_NOTES.md
```

AI agent and skill configuration files are available under:

```text
.ai/
```

AI tools were used to assist the development process; the final application was implemented, reviewed, and integrated into the project codebase.

---

# 📐 Design Reference

The application was developed by analyzing the provided Airbnb listing reference and recreating the interface using an original component-based implementation.

The reference application's source code was **not directly copied or reused**.

The implementation focuses on reproducing the following aspects of the reference experience:

* Layout
* Spacing
* Typography
* Colors
* Image galleries
* Interactions
* Navigation
* Lightbox behavior
* Visual hierarchy
* Responsive behavior

The goal was to achieve a visually accurate experience while maintaining an independently structured React/Next.js codebase.

---

# 📦 Assignment Deliverables

The project includes:

* Next.js source code
* TypeScript implementation
* Tailwind CSS styling
* Listing page
* Photo Tour
* Image Lightbox
* Local image assets
* Reusable React components
* Keyboard navigation
* Accessibility considerations
* Architecture diagram
* AI prompt documentation
* AI agent configurations
* Frontend implementation notes
* Project README
* Vercel deployment

---

# 🎯 Project Goals

The primary goals of this project are:

* Recreate the provided Airbnb listing experience
* Build reusable frontend components
* Maintain clean TypeScript types
* Implement interactive photo experiences
* Support keyboard navigation
* Create responsive layouts
* Keep the application frontend-only
* Maintain a clear project structure
* Demonstrate production-oriented frontend development practices
* Create a maintainable and scalable UI architecture

---

# 👨‍💻 Author

## Madesh M

**2026 Computer Science Graduate** with a strong interest in **AI and Full-Stack Development**.

### Technical Skills

* React.js
* Next.js
* TypeScript
* JavaScript
* Tailwind CSS
* Python
* FastAPI
* PostgreSQL
* Docker
* Git
* GitHub

---

# 📄 License

This project was created for educational, portfolio, and assignment purposes.

The implementation is an independent frontend recreation based on the provided design reference and is not affiliated with or officially associated with Airbnb.
