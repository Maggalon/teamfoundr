import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { type Founder } from "@/lib/types";

interface MatchCardProps {
  founder: Founder;
}

export function MatchCard({ founder }: MatchCardProps) {
  const handleTelegramClick = () => {
    window.open(`https://t.me/${founder.telegram.replace("@", "")}`, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex items-center p-4 gap-4">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src={founder.imageUrl}
            alt={founder.name}
            fill
            className="object-cover rounded-xl"
            sizes="80px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-lg truncate">{founder.name}</h3>
              <p className="text-muted-foreground text-sm truncate">
                {founder.role} • {founder.company}
              </p>
            </div>
            <div className="flex-shrink-0 text-sm font-medium text-secondary">
              {founder.matchPercentage}% Match
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {founder.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={handleTelegramClick}
          className="w-full py-2 px-4 bg-secondary text-white rounded-xl flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          <span>Open Telegram</span>
        </button>
      </div>
    </div>
  );
}