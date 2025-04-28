import HeroSection from "../pages/components/hero-section";
import FooterSection from "../pages/components/footer-section";
import StatisticsSection from "../pages/components/statistics-section";
import VideoMessageSection from "../pages/components/video-secction";

export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col bg-[var(--colors-primary-25,#fffbf5)]  ">
      <main className="flex-grow overflow-hidden ">
        <HeroSection />

        <div className="container mx-auto px-4 py-16">
          <StatisticsSection />
        </div>
        <VideoMessageSection />
      </main>
      <FooterSection />
    </div>
  );
}
