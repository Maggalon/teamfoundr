import { Users } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
        <Users className="h-8 w-8 text-secondary" />
      </div>
      <h2 className="text-xl font-semibold mb-2">No matches yet</h2>
      <p className="text-muted-foreground max-w-sm">
        Keep swiping to find your perfect co-founder match. Your next great
        collaboration could be just a swipe away!
      </p>
    </div>
  );
}