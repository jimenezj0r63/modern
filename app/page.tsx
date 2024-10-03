import { navItems } from "@/data";

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import Clients from "@/components/Clients";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experience />
        <RecentProjects />
        <FeaturesSectionDemo />
        <CanvasRevealEffectDemo />
        <Clients />
        <LayoutGridDemo />
        <Footer />
      </div>
    </main>
  );
}
