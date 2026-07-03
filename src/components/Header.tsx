/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "strengths", label: "Strengths" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/55"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <button
          id="header-logo-btn"
          onClick={() => handleNavClick("hero")}
          className="flex items-center space-x-2.5 font-display font-bold text-lg text-brand-primary hover:opacity-85 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white">
            <Terminal size={16} />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-sm font-semibold tracking-wide text-gray-900">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono text-gray-400 font-medium">
              AI PROBLEM SOLVER
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-brand-secondary bg-blue-50/50"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            id="header-cta-btn"
            onClick={() => handleNavClick("contact")}
            className="flex items-center space-x-1.5 bg-brand-primary hover:bg-brand-primary/95 text-white px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>Recruit Me</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 px-6 py-4 flex flex-col space-y-2 absolute top-16 left-0 right-0 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "text-brand-secondary bg-blue-50/70"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-gray-100">
            <button
              id="mobile-cta-btn"
              onClick={() => handleNavClick("contact")}
              className="w-full flex items-center justify-center space-x-1.5 bg-brand-primary text-white py-2.5 rounded-xl text-sm font-medium"
            >
              <span>Recruit Me</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
