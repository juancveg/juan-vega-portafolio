import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import ExperienceEducation from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-base">
      <Navbar />
      <Hero />
      <Capabilities />
      <ExperienceEducation />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
