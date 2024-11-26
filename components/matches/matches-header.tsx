import { ArrowDownWideNarrow } from "lucide-react";

export function MatchesHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Matches</h1>
        <button 
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-muted-foreground"
          aria-label="Sort matches"
        >
          <ArrowDownWideNarrow className="h-5 w-5" />
          <span className="text-sm font-medium">Sort</span>
        </button>
      </div>
    </header>
  );
}