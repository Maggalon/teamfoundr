"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type Founder } from "@/lib/types";

interface ProfileCardProps {
  founder: Founder;
  onSwipe: (direction: "left" | "right" | "super") => void;
  onSelect: () => void;
}

export function ProfileCard({ founder, onSwipe, onSelect }: ProfileCardProps) {
  return (
    <motion.div
      className="profile-card w-full h-5/6 rounded-[20px] overflow-hidden shadow-lg bg-white cursor-pointer"
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="profile-card-inner relative w-full h-full">
        <div className="absolute inset-0">
          <Image
            src={founder.imageUrl}
            alt={founder.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
        <div className="profile-card-gradient absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold mb-1">
            {founder.name}, {founder.age}
          </h2>
          <p className="text-lg opacity-90">
            {founder.role} • {founder.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}