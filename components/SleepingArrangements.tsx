import { SleepingSpace } from '../types/listing';

interface SleepingArrangementsProps {
  spaces?: SleepingSpace[];
}


function getImageUrl(url: string) {
  return url
}

export default function SleepingArrangements({
  spaces = [],
}: SleepingArrangementsProps) {
  return (
    <section className="mb-8 border-b border-gray-200 pb-8">
      <h2 className="mb-4 text-xl font-semibold">
        Where you&apos;ll sleep
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {spaces.map((space, index) => (
          <div key={`${space.name}-${index}`}>
            <div className="mb-3 h-[280px] overflow-hidden rounded-xl bg-gray-100">
              <img
                src={getImageUrl(space.image.url)}
                alt={space.image.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="font-semibold">
              {space.name}
            </p>

            <p className="text-sm text-gray-500">
              {space.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}