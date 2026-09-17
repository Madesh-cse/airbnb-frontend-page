import { Host } from '../types/listing';
import hostImage from "../public/images/Host.webp"

interface HostInfoProps {
  host: Host;
}

export default function HostInfo({ host }: HostInfoProps) {
  return (
    <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
      <div className="w-14 h-14 rounded-full bg-gray-800 text-white flex items-center justify-center overflow-hidden shrink-0">
        {host.avatarUrl ? (
          <img src={host.avatarUrl} alt={host.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-lg font-semibold">
            <img src={hostImage.src} alt="HOST" />
          </span>
        )}
      </div>
      <div>
        <p className="font-semibold">Hosted by {host.name}</p>
        <p className="text-sm text-gray-500">{host.yearsHosting} years hosting</p>
      </div>
    </div>
  );
}
