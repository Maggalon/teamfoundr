import { ProfileForm } from "@/components/profile/profile-form";
import { ProfileHeader } from "@/components/profile/profile-header";

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <ProfileHeader />
      <ProfileForm />
    </div>
  );
}