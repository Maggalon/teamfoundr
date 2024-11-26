"use client";

import { motion } from "framer-motion";
import { MatchCard } from "./match-card";
import { mockFounders } from "@/lib/mock-data";
import { EmptyState } from "./empty-state";

export function MatchesList() {
  const matches = mockFounders.filter((founder) => founder.matchPercentage > 80);

  if (matches.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <div className="grid gap-4">
        {matches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MatchCard founder={match} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}