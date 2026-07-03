/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, BrainCircuit, CheckCircle2, ChevronRight } from "lucide-react";
import { PERSONAL_INFO, CORE_KEYWORDS } from "../data";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-radial from-gray-50 via-white to-gray-50"
    >
      {/* Sleek architectural grid line pattern matching Vercel/Linear design */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      {/* Decorative subtle ambient soft glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-100/20 rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Label Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/10 px-3 py-1.5 rounded-full mb-8 shadow-xs"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
            </span>
            <span className="text-[11px] font-mono tracking-widest text-brand-primary font-semibold uppercase">
              AI Problem Solver & Developer
            </span>
          </motion.div>

          {/* Display Name and Big Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-display font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6 max-w-3xl"
          >
            복잡한 문제의 원인을 찾아 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-blue-500">
              가장 단순한 해결책
            </span>
            을 만드는  <br /> 개발자
          </motion.h1>

          {/* Subtitle / Brand Persona Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg text-gray-500 font-normal leading-relaxed max-w-2xl mb-10 px-4"
          >
            안녕하세요, <strong className="text-gray-900 font-semibold">{PERSONAL_INFO.name}</strong>입니다. <br />
            제조 하드웨어 엔지니어링 및 생산 관리 경험과 AI 모델링을 융합하여,
            단순 현상 분석을 넘어 <span className="underline decoration-brand-accent decoration-2 underline-offset-4 font-medium text-gray-800">도메인 데이터 기반의 근본 원인(Root Cause)</span>을 명쾌하게 증명하고 해결합니다.
          </motion.p>

          {/* Meta Keywords Pills with Vercel/Linear-like minimal styling */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl"
          >
            {CORE_KEYWORDS.map((keyword, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200/80 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-gray-600 shadow-2xs hover:border-brand-secondary/30 hover:text-brand-primary transition-all duration-200 flex items-center space-x-1"
              >
                <BrainCircuit size={12} className="text-brand-secondary/70" />
                <span>{keyword}</span>
              </div>
            ))}
          </motion.div>

          {/* Primary CTA and secondary link */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <button
              id="hero-primary-cta"
              onClick={() => onNavigate("projects")}
              className="group flex items-center space-x-2 bg-brand-primary hover:bg-brand-primary/95 text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>문제 해결 사례 보기</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={() => onNavigate("about")}
              className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <span>스토리 읽기</span>
            </button>
          </motion.div>

          {/* Animated Down indicator */}
          <motion.button
            id="hero-scroll-down"
            onClick={() => onNavigate("about")}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-gray-400 hover:text-brand-secondary transition-colors cursor-pointer p-2 flex flex-col items-center"
            aria-label="Scroll down to about section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase mb-1.5">Scroll to explore</span>
            <ArrowDown size={14} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
