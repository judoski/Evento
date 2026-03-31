# Evento --- Event Discovery Platform

Evento is a modern **Next.js 13+ full‑stack event discovery
application** that allows users to search and browse events by city,
view event details, and navigate through paginated results.

The project demonstrates production‑ready patterns using:

-   Next.js App Router
-   Server Components & Client Components
-   Prisma ORM
-   Tailwind CSS
-   Framer Motion animations
-   Suspense & Streaming
-   Caching with `unstable_cache`
-   Zod validation
-   Middleware routing
-   SEO metadata generation

---

# Live Concept

Users can:

-   Search events by city
-   Browse paginated event listings
-   View detailed event pages
-   Navigate using animated UI
-   Handle loading and error states
-   Experience optimized performance via caching

---

# Tech Stack

## Frontend

-   Next.js 14+ (App Router)
-   React
-   TypeScript
-   Tailwind CSS
-   Framer Motion
-   Radix Icons

## Backend

-   Prisma ORM
-   PostgreSQL (or compatible database)
-   Next.js Server Components
-   Next.js Middleware

## Validation

-   Zod

---

# Features

-   Event search by city
-   Paginated event listing
-   Dynamic event pages
-   Loading skeletons
-   Error boundaries
-   SEO metadata generation
-   Image optimization
-   Server-side caching
-   Middleware redirects
-   Responsive design
-   Smooth animations
-   Type-safe database queries

---

# Project Architecture

src/

app/\
├── components/\
│ ├── container.tsx\
│ ├── event-card.tsx\
│ ├── event-lists.tsx\
│ ├── footer.tsx\
│ ├── header.tsx\
│ ├── logo.tsx\
│ ├── pagination-controls.tsx\
│ ├── search-form.tsx\
│ ├── skeleton.tsx\
│ └── skeleton-card.tsx

lib/\
├── db.ts\
├── server-utils.ts\
├── utils.ts\
└── cities.ts

middleware.ts

---

# Core Concepts Demonstrated

## 1) Server Components

Used for:

-   EventList
-   EventPage
-   EventsPage
-   RootLayout

Benefits:

-   Faster rendering
-   Reduced client bundle size
-   Secure database access

---

## 2) Client Components

Used for:

-   Header
-   SearchForm
-   EventCard
-   Error boundary

Required when:

-   Using state
-   Using browser APIs
-   Handling user interaction
-   Using animations

---

## 3) Caching

Next.js caching is implemented using:

unstable_cache()

Used in:

getEvents()\
getEvent()

Benefits:

-   Faster performance
-   Reduced database load
-   Improved scalability

---

# Routing System

The application uses dynamic routing.

Routes:

/\
/events/\[city\]\
/event/\[slug\]\
/terms-conditions\
/privacy-policy

---

# Middleware

File:

middleware.ts

Behavior:

Redirects:

/events → /events/all

---

# Database Model

Prisma Model:

eventoEvent

Fields:

id\
name\
slug\
date\
location\
organizerName\
imageUrl\
city

---

# Pagination Logic

Events are loaded in pages.

Rules:

-   6 events per page
-   Next button appears if more data exists
-   Previous button appears if page \> 1

---

# Validation

Zod is used for query validation.

Example:

pageNumberSchema

Ensures:

-   number
-   integer
-   positive

---

# Search Flow

User types city\
→ Form submit\
→ Router navigation\
→ Server fetch\
→ Events rendered

---

# Event Fetching

Function:

getEvents(city, page)

Responsibilities:

-   Validate city
-   Query database
-   Apply pagination
-   Return total count

---

# Error Handling

The app includes:

-   Global error boundary
-   Not found page
-   Loading states
-   Graceful recovery

---

# Loading States

Skeleton components provide visual feedback while data loads.

Examples:

-   Event list loading
-   Page loading
-   Suspense fallback

---

# SEO Features

Dynamic metadata generation.

Example:

generateMetadata()

Used for:

-   Page titles
-   Event titles
-   Social sharing

---

# Performance Optimizations

-   Server Components
-   Image optimization
-   Database caching
-   Pagination
-   Suspense
-   Streaming
-   Tailwind utility classes

---

# Installation

Clone repository:

git clone `<your-repo-url>`{=html}

Install dependencies:

npm install

Run development server:

npm run dev

---

# Environment Variables

Create:

.env

Example:

DATABASE_URL=postgresql://user:password@localhost:5432/evento

---

# Available Scripts

npm run dev\
npm run build\
npm run start\
npm run lint

---

# Example Usage

Search:

Austin

Navigation:

/events/austin

Result:

Paginated event list

---

# Future Improvements

-   Authentication
-   Ticket purchasing
-   Favorites system
-   Event categories
-   Admin dashboard
-   API routes
-   Unit testing
-   E2E testing
-   Analytics

---

# Author

ByteGrad

---

# License

Educational / Learning Project
