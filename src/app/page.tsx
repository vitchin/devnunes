import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <header id="home">
        <Hero />
      </header>

      <main className="flex-grow">
        <section id="about" className="py-20">
          <About />
        </section>

        <section id="projects" className="py-20 bg-gray-100">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <footer className="text-center p-4 bg-gray-100">
        <p className="text-sm text-gray-600">© 2024 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
