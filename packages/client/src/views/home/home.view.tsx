import HeroSection from "./sections/hero.section.tsx";
import ProjectSection from "./sections/project.section.tsx";
import TechnologiesSection from "./sections/technologies.section.tsx";

export default function HomeView() {
  return (
    <main className={"overflow-x-hidden w-screen"}>
      <HeroSection/>

      <TechnologiesSection/>

      <ProjectSection/>

    </main>
  );
}