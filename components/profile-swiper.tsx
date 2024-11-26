"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Heart } from "lucide-react";
import { mockFounders } from "@/lib/mock-data";
import { ProfileCard } from "./profile-card";
import { ProfileDetail } from "./profile-detail";
import { type Founder } from "@/lib/types";

export function ProfileSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState<Founder | null>(null);
  const currentProfile = mockFounders[currentIndex];

  const handleSwipe = (direction: "left" | "right" | "super") => {
    // Handle match logic here
    setCurrentIndex((prev) => Math.min(prev + 1, mockFounders.length - 1));
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <div className="relative h-[calc(100vh-12rem)]">
        <AnimatePresence>
          {currentProfile && (
            <motion.div
              key={currentProfile.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <ProfileCard
                founder={currentProfile}
                onSwipe={handleSwipe}
                onSelect={() => setSelectedProfile(currentProfile)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleSwipe("left")}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg text-destructive hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={() => handleSwipe("super")}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg text-secondary hover:bg-secondary hover:text-white transition-colors"
            >
              <Star className="h-6 w-6" />
            </button>
            <button
              onClick={() => handleSwipe("right")}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg text-success hover:bg-success hover:text-white transition-colors"
            >
              <Heart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <ProfileDetail
        founder={selectedProfile}
        onClose={() => setSelectedProfile(null)}
        onSwipe={handleSwipe}
      />
    </div>
  );
}