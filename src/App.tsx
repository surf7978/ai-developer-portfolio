/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import CoreStrength from "./components/CoreStrength";
import ProjectsList from "./components/ProjectsList";
import ExperienceTimeline from "./components/ExperienceTimeline";
import TechStackGrid from "./components/TechStackGrid";
import ContactSection from "./components/ContactSection";
import { PERSONAL_INFO } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Intersection Observer to trace scrolling and update current navigation tab
  useEffect(() => {
    const sections = ["hero", "about", "strengths", "projects", "experience", "tech-stack", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px" // Triggers when the section dominates the center viewport
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-gray-50/20 text-gray-800 font-sans antialiased selection:bg-blue-100 selection:text-brand-secondary">
      {/* Dynamic Floating Glass Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main id="portfolio-main-content">
        <Hero onNavigate={handleNavigate} />
        <AboutMe />
        <CoreStrength />
        <ProjectsList />
        <ExperienceTimeline />
        <TechStackGrid />
        <ContactSection />
      </main>

      {/* Elegant Architectural Footer */}
      <footer id="portfolio-footer" className="bg-white border-t border-gray-100 py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 font-display font-bold text-gray-800">
            <span className="text-sm font-semibold tracking-wide text-gray-900">
              {PERSONAL_INFO.name} Portfolio
            </span>
            <span className="text-[10px] font-mono text-gray-400 font-medium">
              V1.2.0
            </span>
          </div>

          <p className="text-xs text-gray-400 font-normal leading-relaxed max-w-md">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="text-[10px] font-mono text-gray-400/80 pt-4 border-t border-gray-50 w-full max-w-xs">
            © 2026 {PERSONAL_INFO.englishName}. All rights reserved. <br />
            Designed with Apple & Vercel aesthetics.
          </div>
        </div>
      </footer>
    </div>
  );
}
