import { MessageSquare, User } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-primary">For You</h1>
      </div>
    </header>
  );
}