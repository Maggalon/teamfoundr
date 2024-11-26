import { ProfileSwiper } from "@/components/profile-swiper";
import { Header } from "@/components/header";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Header />
      <ProfileSwiper />
    </div>
  );
}