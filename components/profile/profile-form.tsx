"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Camera, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { GradientSlider } from "../ui/gradient-slider";

const profileSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role is required"),
  telegram: z.string().min(1, "Telegram username is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  skills: z.string().min(2, "Skills are required"),
  experience: z.string().min(10, "Experience details are required"),
  projectDescription: z.string().min(10, "Project description is required"),
  lookingFor: z.string().min(10, "Please describe what you're looking for"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const [currentRole, setCurrentRole] = useState<'Founder' | 'Executor'>('Founder')

  const handleRoleChange = (role: 'Founder' | 'Executor') => {
    setCurrentRole(role)
    console.log(`Switched to ${role} role`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-8 flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <div className={cn(
            "w-full h-full rounded-full border-2 border-secondary flex items-center justify-center bg-muted",
            imagePreview ? "overflow-hidden" : ""
          )}>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera className="w-8 h-8 text-muted-foreground" />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="profile-image"
          />
          <label
            htmlFor="profile-image"
            className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full cursor-pointer hover:bg-secondary/90 transition-colors"
          >
            <Camera className="w-4 h-4" />
          </label>
        </div>
      </div>

      <div className="space-y-6">

        <div className="flex justify-center">
          <GradientSlider onRoleChange={handleRoleChange} />
        </div>

        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            className="mt-1"
            error={errors.fullName?.message}
          />
        </div>

        <div>
          <Label htmlFor="role">Professional Role</Label>
          <Input
            id="role"
            {...register("role")}
            className="mt-1"
            error={errors.role?.message}
          />
        </div>

        <div>
          <Label htmlFor="telegram">Telegram Username</Label>
          <Input
            id="telegram"
            {...register("telegram")}
            className="mt-1"
            placeholder="@username"
            error={errors.telegram?.message}
          />
        </div>

        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            {...register("bio")}
            className="mt-1"
            rows={4}
            error={errors.bio?.message}
          />
        </div>

        <div>
          <Label htmlFor="skills">Skills (comma separated)</Label>
          <Input
            id="skills"
            {...register("skills")}
            className="mt-1"
            placeholder="React, TypeScript, Product Management"
            error={errors.skills?.message}
          />
        </div>

        <div>
          <Label htmlFor="experience">Experience</Label>
          <Textarea
            id="experience"
            {...register("experience")}
            className="mt-1"
            rows={4}
            error={errors.experience?.message}
          />
        </div>

        <div>
          <Label htmlFor="projectDescription">Current Project</Label>
          <Textarea
            id="projectDescription"
            {...register("projectDescription")}
            className="mt-1"
            rows={4}
            error={errors.projectDescription?.message}
          />
        </div>

        <div>
          <Label htmlFor="lookingFor">What You&apos;re Looking For</Label>
          <Textarea
            id="lookingFor"
            {...register("lookingFor")}
            className="mt-1"
            rows={4}
            error={errors.lookingFor?.message}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Profile"
          )}
        </Button>
      </div>
    </form>
  );
}