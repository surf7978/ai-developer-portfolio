/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Settings, Cpu, ChevronRight, CheckCircle2, Factory } from "lucide-react";
import { EXPERIENCES } from "../data";

export default function ExperienceTimeline() {
  const getExpIcon = (iconName: string) => {
    switch (iconName) {
      case "Settings":
        return <Settings className="text-brand-secondary" size={20} />;
      case "Cpu":
        return <Cpu className="text-brand-primary" size={20} />;
      default:
        return <Factory className="text-gray-500" size={20} />;
    }
  };

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-200">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-brand-secondary font-bold uppercase mb-2 block">
              04 / Career History
            </span>
            <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs mt-2 md:mt-0">
            30초 안에 확인하는 제조 및 공정 엔지니어링 실무 경력
          </p>
        </div>

        {/* Timelines container */}
        <div className="relative border-l border-gray-200/80 ml-4 md:ml-32 pl-8 md:pl-16 space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div id={`experience-block-${exp.id}`} key={exp.id} className="relative group">
              {/* Year/Timeline Side Indicator for Desktop */}
              <div className="hidden md:block absolute -left-48 top-1 text-right w-36">
                <span className="text-xs font-mono font-bold text-gray-400 block">
                  {exp.period}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  {exp.id === "exp-1" ? "생산관리" : "회로 설계"}
                </span>
              </div>

              {/* Node Bullet Circle */}
              <div className="absolute -left-[45px] top-1.5 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-brand-secondary/60 group-hover:scale-105 transition-all duration-300 shadow-3xs z-10">
                {getExpIcon(exp.iconName)}
              </div>

              {/* Main Content Card with Apple Minimal Vibe */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-xs font-mono text-brand-secondary md:hidden block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-1">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-gray-600 font-normal max-w-3xl">
                  {exp.summary}
                </p>

                {/* Grid for Key Achievements / Actions taken */}
                <div className="mt-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold block mb-4">
                    Key Performance Indicators & Actions
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exp.keyAchievements.map((ach, achIdx) => (
                      <div
                        key={achIdx}
                        className="bg-white border border-gray-100/85 rounded-xl p-5 shadow-3xs relative overflow-hidden flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          {/* Title */}
                          <div className="flex items-center space-x-2 pb-2.5 border-b border-gray-50">
                            <CheckCircle2 size={13} className="text-brand-secondary shrink-0" />
                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-tight">
                              {ach.title}
                            </h4>
                          </div>

                          {/* Problem description */}
                          <div className="text-xs text-gray-500 leading-relaxed">
                            <span className="font-mono text-[9px] text-red-500 font-bold uppercase block mb-0.5">Problem</span>
                            <span>{ach.problem}</span>
                          </div>

                          {/* Action Solution */}
                          <div className="text-xs text-gray-500 leading-relaxed">
                            <span className="font-mono text-[9px] text-brand-primary font-bold uppercase block mb-0.5">Action Taken</span>
                            <span>{ach.solution}</span>
                          </div>
                        </div>

                        {/* Result Highlight */}
                        <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                          <span className="font-mono text-[9px] text-emerald-600 font-bold uppercase">Result Metric</span>
                          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                            {ach.result}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
