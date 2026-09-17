# AI-Assisted Development Prompts

## Project

Airbnb Clone Take-Home Assignment

## Goal

Recreate the provided Airbnb listing reference with high visual and behavioral fidelity using an original implementation.

Reference:
https://airbnb-clone-umber-two.vercel.app

---

# Prompt 01 — Analyze the Reference

Analyze the provided Airbnb listing reference from a frontend engineering perspective.

Identify:

- Overall page structure
- Header
- Listing title section
- Hero image grid
- Sticky navigation
- Main content layout
- Booking card
- Highlights
- Description
- Sleeping arrangements
- Amenities
- Calendar
- Ratings
- Reviews
- Location
- Host section
- Things to know
- Nearby listings
- Photo tour
- Lightbox

Do not copy source code from the reference.

Instead, describe the visual and behavioral requirements that an original implementation should reproduce.

---

# Prompt 02 — Component Architecture

Design a clean Next.js + TypeScript component architecture for reproducing the Airbnb listing page.

The implementation should be component-based and maintainable.

Separate:

- Page-level components
- Reusable UI components
- Data
- Types
- Photo gallery components
- Interactive components

Avoid unnecessary backend dependencies.

---

# Prompt 03 — Local Frontend Data

Convert the listing information into strongly typed local TypeScript data.

Create:

- Listing type
- Host type
- Image type
- Review type
- Amenity type
- Rating type
- Sleeping arrangement type

Store the data locally so the application does not require a backend.

---

# Prompt 04 — Listing Page

Implement the main listing page using Next.js and TypeScript.

Requirements:

- Match the reference layout
- Desktop-first design
- Correct content hierarchy
- Correct spacing
- Correct typography
- Correct borders
- Correct rounded corners
- Correct shadows
- Correct image dimensions

Do not change the reference design unnecessarily.

---

# Prompt 05 — Hero Photo Grid

Implement the listing hero photo grid.

Requirements:

- Match the reference image arrangement
- Correct aspect ratios
- Correct rounded corners
- Correct spacing
- Hover behavior
- Accessible image alt text

Clicking a hero image should open the Photo Tour.

---

# Prompt 06 — Photo Tour

Implement the Photo Tour view.

Requirements:

- Full gallery
- Room/category sections
- Room headings
- Sticky room information on desktop
- Correct image layout
- Smooth scrolling
- Deep-linkable room sections

Example:

/listing/{listingId}/photos#bedroom

---

# Prompt 07 — Lightbox

Implement a reusable full-screen lightbox.

Requirements:

- White background
- Centered image
- Room name at top
- Image counter
- Previous button
- Next button
- Close button
- Keyboard ArrowLeft
- Keyboard ArrowRight
- Escape to close
- Prevent background scrolling
- Smooth transition between images
- Focus management
- Accessible labels

---

# Prompt 08 — Photo Navigation

Connect all photo interactions.

The following should work:

Hero image
→ Photo Tour

Show all photos
→ Photo Tour

Photo Tour image
→ Lightbox

Lightbox previous
→ Previous image

Lightbox next
→ Next image

Escape
→ Close Lightbox

---

# Prompt 09 — Pixel-Perfect Review

Review the implementation against the reference.

Inspect:

- Widths
- Heights
- Margins
- Padding
- Grid proportions
- Font sizes
- Font weights
- Line heights
- Border radius
- Shadows
- Icon sizes
- Image cropping
- Button dimensions
- Sticky positioning

Do not redesign the UI.

Only make changes required to improve fidelity to the reference.

---

# Prompt 10 — Accessibility Review

Review the application for accessibility.

Check:

- Keyboard navigation
- Focus states
- Button labels
- Image alt text
- Semantic HTML
- Dialog behavior
- Escape key handling
- Focus management
- Screen-reader labels
- Color contrast

Fix accessibility problems without changing the visual design.

---

# Prompt 11 — TypeScript Review

Review the entire project for TypeScript issues.

Check:

- Props
- Interfaces
- Optional values
- Event handlers
- Component return types
- Dynamic routes
- Image data
- Gallery data

Do not use unnecessary `any`.

---

# Prompt 12 — Production Frontend Review

Review the application as if it were going to production.

Check:

- Component structure
- Unnecessary dependencies
- Image loading
- Rendering performance
- React keys
- Error handling
- Static data organization
- Accessibility
- Build configuration

Recommend only practical improvements.

---

# Prompt 13 — Final Build Verification

Run the production build and identify all errors.

Fix errors one at a time.

Do not modify unrelated components.

After every fix, verify:

npm run build

The final application must compile successfully.

---

# Prompt 14 — Final Submission Review

Review the project against the take-home requirements.

Verify:

- Listing Page
- Photo Tour
- Lightbox
- Desktop experience
- Animations
- Keyboard navigation
- Accessibility
- Architecture diagram
- AI prompt documentation
- AI agent/skill configuration
- Clean project structure

Identify anything missing before submission.