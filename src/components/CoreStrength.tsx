/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Search, TrendingUp, Workflow, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CORE_STRENGTHS } from "../data";

export default function CoreStrength() {
  const getIcon = (name: string) => {
    switch (name) {
      case "SearchCode":
        return <Search size={22} className="text-brand-primary" />;
      case "TrendingUp":
        return <TrendingUp size={22} className="text-brand-secondary" />;
      case "Workflow":
        return <Workflow size={22} className="text-emerald-600" />;
      case "ShieldCheck":
        return <ShieldCheck size={22} className="text-brand-accent" />;
      default:
        return <CheckCircle2 size={22} className="text-gray-500" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="strengths" className="py-24 px-6 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-200/50">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-brand-secondary font-bold uppercase mb-2 block">
              02 / Competency
            </span>
            <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
              Core Strengths
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs mt-2 md:mt-0">
            주관적 주장을 지양하고, 과거 실적과 데이터로 검증된 행동 패턴
          </p>
        </div>

        {/* 12-Column Grid or 2x2 Clean Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {CORE_STRENGTHS.map((strength) => (
            <motion.div
              id={`strength-card-${strength.id}`}
              key={strength.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/70 backdrop-blur-md border border-gray-100/80 rounded-[20px] p-8 shadow-2xs hover:shadow-xs transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle visual hover border accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start space-x-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gray-50/80 flex items-center justify-center border border-gray-100 shrink-0 shadow-3xs group-hover:bg-blue-50/45 transition-colors">
                  {getIcon(strength.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center">
                    <span>{strength.title}</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-0.5 block">
                    {strength.englishTitle}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 font-normal mb-6 leading-relaxed">
                {strength.description}
              </p>

              {/* Specific Bullet Details with High Legibility */}
              <ul className="space-y-2.5 border-t border-gray-50 pt-5">
                {strength.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-2.5 text-xs text-gray-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary/60 mt-2 shrink-0 animate-pulse" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
