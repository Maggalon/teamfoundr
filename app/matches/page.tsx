import { MatchesList } from "@/components/matches/matches-list";
import { MatchesHeader } from "@/components/matches/matches-header";

export default function MatchesPage() {
  return (
    <div className="min-h-screen">
      <MatchesHeader />
      <MatchesList />
    </div>
  );
}