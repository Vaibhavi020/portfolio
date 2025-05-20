import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Timeline from "@/components/TimeLine";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Timeline />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
