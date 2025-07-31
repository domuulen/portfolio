import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
