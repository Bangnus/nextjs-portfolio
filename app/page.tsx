'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contect from './components/contact';
import { Featured_Projects } from './components/projects';
import { Technologies } from './components/technologies';
import { Services } from './components/services';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden">

      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* ์navigation bar */}
      <Navbar />


      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="container mx-auto px-6 text-center z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium tracking-wide">
            Available for Freelance Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Building Digital <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Experiences That Matter
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            I'm a Full-Stack Developer & UI Designer turning complex problems into
            elegant, pixel-perfect web solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('projects')} className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all backdrop-blur-sm">
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown />
        </div>
      </section>

      {/* Services / What I Do */}
      <Services />

      {/* Featured Projects */}
      <Featured_Projects />

      {/* Skills Marquee / Grid */}
      <Technologies />

      {/* Contact Section */}
      <Contect />

      {/* Footer */}
      <Footer />
    </main>
  );
}