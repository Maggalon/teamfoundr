"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Star, Heart, ArrowLeft, MoreVertical } from "lucide-react";
import Image from "next/image";
import { type Founder } from "@/lib/types";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

interface ProfileDetailProps {
  founder: Founder | null;
  onClose: () => void;
  onSwipe: (direction: "left" | "right" | "super") => void;
}

export function ProfileDetail({ founder, onClose, onSwipe }: ProfileDetailProps) {
  if (!founder) return null;

  return (
    <Dialog open={!!founder}>
      <DialogContent className="max-w-md p-0 h-[calc(100vh-2rem)] overflow-auto">
        <VisuallyHidden>
          <DialogTitle>Founder Profile - {founder.name}</DialogTitle>
        </VisuallyHidden>
        <div className="relative">
          <div className="h-96 relative">
            <Image
              src={founder.imageUrl}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
                aria-label="Close profile"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              {/* <button 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
                aria-label="More options"
              >
                <MoreVertical className="h-5 w-5" />
              </button> */}
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  {founder.name}, {founder.age}
                </h2>
                <p className="text-muted-foreground">
                  {founder.role} • {founder.company}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                Active {founder.lastActive}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {founder.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="sticky bottom-0 bg-white pt-4 pb-6 border-t">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => onSwipe("left")}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg text-destructive hover:bg-destructive hover:text-white transition-colors"
                  aria-label="Pass"
                >
                  <X className="h-6 w-6" />
                </button>
                <button
                  onClick={() => onSwipe("super")}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg text-secondary hover:bg-secondary hover:text-white transition-colors"
                  aria-label="Super match"
                >
                  <Star className="h-6 w-6" />
                </button>
                <button
                  onClick={() => onSwipe("right")}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg text-success hover:bg-success hover:text-white transition-colors"
                  aria-label="Like"
                >
                  <Heart className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}