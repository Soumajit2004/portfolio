import HeroSection from "./sections/hero.section.tsx";
import ProjectSection from "./sections/project.section.tsx";

export default function Home() {
  return (
    <main className={"overflow-x-hidden w-screen"}>
      <HeroSection/>

      <ProjectSection/>
    </main>
  );
}