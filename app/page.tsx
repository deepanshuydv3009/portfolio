import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Skills, Education, Achievements, Contact } from "@/components/Sections";
import Projects from "@/components/Projects";
import Research from "@/components/Research";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-mute">© {new Date().getFullYear()} Deepanshu Yadav</footer>
    </>
  );
}
