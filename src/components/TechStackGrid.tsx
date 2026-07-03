/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Terminal, Database, Shield, BookOpen, HardDrive, Cpu } from "lucide-react";
import { TECH_STACK } from "../data";

export default function TechStackGrid() {
  return (
    <section id="tech-stack" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-100">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-brand-secondary font-bold uppercase mb-2 block">
            05 / Toolkit
          </span>
          <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
            Technical Expertise
          </h2>
        </div>
        <p className="text-gray-400 font-mono text-xs mt-2 md:mt-0">
          단순 키워드가 아닌, 실무 가치로 전환할 수 있는 기술 역량
        </p>
      </div>

      <div className="space-y-12">
        {/* Languages & Frameworks */}
        <div>
          <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 font-bold mb-6 flex items-center">
            <Terminal size={14} className="mr-2 text-brand-secondary" />
            Languages & Frameworks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.languages.map((tech) => (
              <div
                key={tech.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-3xs hover:shadow-2xs hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-base font-bold text-gray-900">{tech.name}</h4>
                  <span className="text-[10px] font-mono bg-blue-50 text-brand-secondary px-2.5 py-0.5 rounded-full font-bold uppercase">
                    {tech.level}
                  </span>
                </div>
                {/* Visual score slider */}
                <div className="w-full bg-gray-100 h-1 rounded-full mb-4 relative">
                  <div
                    className="absolute top-0 bottom-0 left-0 bg-brand-secondary rounded-full"
                    style={{ width: `${tech.score}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  {tech.usage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Databases & Environments (2-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-gray-100">
          {/* Databases */}
          <div className="lg:col-span-6">
            <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 font-bold mb-6 flex items-center">
              <Database size={14} className="mr-2 text-brand-primary" />
              Databases
            </h3>
            <div className="space-y-4">
              {TECH_STACK.databases.map((db) => (
                <div
                  key={db.name}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-3xs hover:border-brand-primary/20 transition-all flex items-start space-x-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 text-brand-primary shrink-0">
                    <Database size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-sm font-bold text-gray-900">{db.name}</h4>
                      <span className="text-[10px] font-mono font-bold text-gray-400">{db.score}%</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{db.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OS & Environments */}
          <div className="lg:col-span-6">
            <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 font-bold mb-6 flex items-center">
              <HardDrive size={14} className="mr-2 text-emerald-600" />
              Environments & OS
            </h3>
            <div className="space-y-4">
              {TECH_STACK.environments.map((env) => (
                <div
                  key={env.name}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-3xs hover:border-emerald-100 transition-all flex items-start space-x-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 text-emerald-600 shrink-0">
                    <Cpu size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-sm font-bold text-gray-900">{env.name}</h4>
                      <span className="text-[10px] font-mono font-bold text-gray-400">{env.score}%</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{env.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Office & Documentation */}
        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 font-bold mb-6 flex items-center">
            <BookOpen size={14} className="mr-2 text-brand-accent" />
            Office & Structural Documentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_STACK.tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-gray-50/50 border border-gray-100/60 rounded-xl p-5 relative group hover:bg-white hover:border-brand-accent/35 transition-all"
              >
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold block mb-1">
                  Productivity tool
                </span>
                <h4 className="text-sm font-bold text-gray-900 mb-2">{tool.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{tool.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
