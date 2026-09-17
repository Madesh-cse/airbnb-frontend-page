
'use client';

export default function NeighbourhoodHighlights() {
  return (
    <section className="mb-8 border-b border-gray-200 pb-8">
      <h2 className="mb-3 text-xl font-semibold">
        Neighbourhood highlights
      </h2>

      <p className="mb-2 leading-relaxed text-gray-700">
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
      </p>

      <button
        type="button"
        className="flex items-center gap-1 text-sm font-semibold underline"
      >
        Show more

        <span aria-hidden="true">›</span>
      </button>
    </section>
  );
}
