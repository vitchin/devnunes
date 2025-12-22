import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />

      <header id="home">
        <Hero />
      </header>

      <main>
        <section id="about" className="py-5">
          <About />
        </section>

        <section id="projects" className="py-5 bg-light">
          <Projects />
        </section>

        <section id="contact" className="py-5">
          <Contact />
        </section>
      </main>

      <footer className="text-center p-4 mt-auto py-3 bg-light">
        <p className="mb-0">© 2025 Your DevNunes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
