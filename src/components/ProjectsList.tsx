/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  Layers,
  Cpu,
  Zap,
  AlertTriangle,
  FileSearch,
  Database,
  Terminal,
  TrendingUp,
  Lightbulb,
  Check,
  ChevronRight,
  Code
} from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import StreamlitPlayground from "./StreamlitPlayground";

export default function ProjectsList() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "AI" | "Manufacturing" | "Circuit">("All");
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS[0]);
  const [activeStep, setActiveStep] = useState<number>(0);

  const categories = ["All", "AI", "Manufacturing", "Circuit"] as const;

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === "All") return true;
    return proj.category === selectedCategory;
  });

  const getProjectIcon = (iconName: string, className: string = "text-brand-primary") => {
    switch (iconName) {
      case "Activity":
        return <Activity className={className} size={18} />;
      case "Layers":
        return <Layers className={className} size={18} />;
      case "Cpu":
        return <Cpu className={className} size={18} />;
      case "Zap":
        return <Zap className={className} size={18} />;
      default:
        return <Terminal className={className} size={18} />;
    }
  };

  const steps = [
    { title: "Problem", label: "문제 정의", icon: <AlertTriangle size={15} />, color: "border-red-500 text-red-600 bg-red-50/50" },
    { title: "Cause Analysis", label: "원인 분석", icon: <FileSearch size={15} />, color: "border-amber-500 text-amber-600 bg-amber-50/50" },
    { title: "Data", label: "수치 데이터", icon: <Database size={15} />, color: "border-blue-500 text-blue-600 bg-blue-50/50" },
    { title: "Solution", label: "해결 방안", icon: <Terminal size={15} />, color: "border-brand-primary text-brand-primary bg-blue-50/50" },
    { title: "Result", label: "개선 성과", icon: <TrendingUp size={15} />, color: "border-emerald-500 text-emerald-600 bg-emerald-50/50" },
    { title: "Learned", label: "학습 교훈", icon: <Lightbulb size={15} />, color: "border-purple-500 text-purple-600 bg-purple-50/50" }
  ];

  // Helper to render step specific UI cards (charts/metrics)
  const renderStepContent = (stepIdx: number, project: Project) => {
    const ach = project.achievement;
    switch (stepIdx) {
      case 0: // Problem
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 px-3.5 py-2 rounded-xl border border-red-100/60 inline-flex">
              <AlertTriangle size={14} className="shrink-0 animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase">Critial Issue Identified</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-700 font-normal">
              {ach.problem}
            </p>
          </div>
        );
      case 1: // Cause Analysis
        return (
          <div className="space-y-3.5">
            <div className="flex items-center space-x-2 text-amber-600 bg-amber-50 px-3.5 py-2 rounded-xl border border-amber-100/60 inline-flex">
              <FileSearch size={14} className="shrink-0" />
              <span className="text-xs font-mono font-semibold uppercase">Root Cause Investigation</span>
            </div>
            <ul className="space-y-3">
              {ach.causeAnalysis.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-700 shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 2: // Data
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-600 bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-100/60 inline-flex">
              <Database size={14} className="shrink-0" />
              <span className="text-xs font-mono font-semibold uppercase">Quantified Metrics Logging</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ach.data.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-4 rounded-xl shadow-2xs">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">DATA LOG {idx + 1}</span>
                  <p className="text-xs font-medium text-gray-800 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 3: // Solution
        return (
          <div className="space-y-3.5">
            <div className="flex items-center space-x-2 text-brand-primary bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-100/60 inline-flex">
              <Terminal size={14} className="shrink-0" />
              <span className="text-xs font-mono font-semibold uppercase">AI & Algorithmic Intervention</span>
            </div>
            <ul className="space-y-3">
              {ach.solution.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-secondary shrink-0 mt-0.5">
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 4: // Result
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-100/60 inline-flex">
              <TrendingUp size={14} className="shrink-0" />
              <span className="text-xs font-mono font-semibold uppercase">Business & Process Success</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ach.result.map((item, idx) => (
                <div key={idx} className="bg-emerald-50/20 border border-emerald-100/60 p-5 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100/20 rounded-bl-3xl -z-10 transition-transform group-hover:scale-110" />
                  <span className="text-[10px] font-mono text-emerald-600 block mb-1 font-bold">MEASURABLE OUTCOME {idx + 1}</span>
                  <p className="text-sm font-bold text-gray-900 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 5: // Learned
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-purple-600 bg-purple-50 px-3.5 py-2 rounded-xl border border-purple-100/60 inline-flex">
              <Lightbulb size={14} className="shrink-0 animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase">Key Architectural Takeaway</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-700 italic border-l-4 border-purple-200 pl-4 py-1.5 font-medium bg-purple-50/10 rounded-r-xl">
              "{ach.learned}"
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const selectProject = (proj: Project) => {
    setActiveProject(proj);
    setActiveStep(0); // Reset stepper back to Problem
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gray-100">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-brand-secondary font-bold uppercase mb-2 block">
            03 / Showcase
          </span>
          <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
            Problem-solving Projects
          </h2>
        </div>
        <p className="text-gray-400 font-mono text-xs mt-2 md:mt-0">
          기술 나열이 아닙니다. 문제 해결 시나리오의 정밀 전개도입니다.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              // Set the active project to the first one matching category
              const match = PROJECTS.find((p) => cat === "All" || p.category === cat);
              if (match) {
                selectProject(match);
              }
            }}
            className={`px-4.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-brand-primary text-white shadow-xs"
                : "bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200/70"
            }`}
          >
            {cat === "All" ? "전체 보기" : cat === "AI" ? "AI & 딥러닝" : cat === "Manufacturing" ? "제조 공정 최적화" : "회로 설계 R&D"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column: Compact list of projects under filtered category */}
        <div className="lg:col-span-3 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-1 font-bold px-1">
            Select Project ({filteredProjects.length})
          </span>
          <div className="space-y-2.5 max-h-[680px] overflow-y-auto pr-1.5 custom-scrollbar">
            {filteredProjects.map((proj) => {
              const isActive = activeProject.id === proj.id;
              return (
                <button
                  id={`project-item-${proj.id}`}
                  key={proj.id}
                  onClick={() => selectProject(proj)}
                  className={`w-full text-left p-3.5 rounded-[16px] border transition-all duration-300 transform hover:scale-[1.01] flex flex-col items-start relative overflow-hidden cursor-pointer ${
                    isActive
                      ? "bg-white border-brand-primary shadow-xs"
                      : "bg-white border-gray-100 hover:bg-gray-50/50 hover:border-gray-200"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-brand-primary" />
                  )}

                  {/* Project Tag & Badge */}
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-[8.5px] font-mono tracking-wider bg-gray-100 px-2 py-0.5 rounded-md text-gray-500 font-bold uppercase truncate max-w-[100px]">
                      {proj.category}
                    </span>
                    <span className="text-[9.5px] font-mono text-gray-400 shrink-0">{proj.period}</span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start space-x-2.5 w-full">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${isActive ? "bg-blue-50 text-brand-secondary" : "bg-gray-50 text-gray-400"}`}>
                      {getProjectIcon(proj.iconName, isActive ? "text-brand-secondary animate-pulse" : "text-gray-400")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs font-bold text-gray-900 leading-snug line-clamp-2">
                        {proj.title}
                      </h3>
                      <p className="text-[10px] font-mono text-gray-400 mt-0.5 line-clamp-1">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Mini summary metrics for quick scanning */}
                  <div className="mt-2.5 pt-2 border-t border-gray-50 w-full flex items-center justify-between text-[10px] text-gray-500">
                    <span className="font-medium text-gray-400 truncate">역할: {proj.role.split(" ")[0]}</span>
                    <div className="flex items-center text-brand-secondary font-semibold shrink-0">
                      <span>상세</span>
                      <ChevronRight size={10} className="ml-0.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: Expanded interactive preview and problem solving storybook */}
        <div className="lg:col-span-9 max-h-[720px] overflow-y-auto pr-2 custom-scrollbar space-y-8">
          {activeProject.demoUrl ? (
            <div className="bg-white border border-gray-100/70 rounded-[20px] p-4 sm:p-5 shadow-sm">
              {/* Integrated Streamlit Playground */}
              <StreamlitPlayground url={activeProject.demoUrl} title={activeProject.title} />

              {/* Bottom code technology stack strip */}
              <div className="mt-5 pt-4 border-t border-gray-100/70 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase font-bold text-gray-400 mr-2 flex items-center">
                  <Code size={12} className="mr-1 text-gray-400" />
                  Applied Technologies:
                </span>
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-50/70 border border-gray-100 text-gray-600 text-[11px] font-medium font-mono px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-100/70 rounded-[20px] p-6 sm:p-8 shadow-sm">
              {/* Project Header details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-[10px] font-mono bg-blue-50 text-brand-secondary px-2.5 py-1 rounded-md font-bold uppercase">
                      {activeProject.category} PROJECT
                    </span>
                    <span className="text-xs font-mono text-gray-400">| {activeProject.period}</span>
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-gray-900 leading-snug">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mt-1">
                    담당 역할 : <span className="text-gray-700 font-semibold">{activeProject.role}</span>
                  </p>
                </div>
              </div>

              {/* Stepper Tabs - Problem to Learned */}
              <div className="flex items-center overflow-x-auto pb-4 gap-1 sm:gap-1.5 scrollbar-none mb-8 border-b border-gray-50">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.title}
                      onClick={() => setActiveStep(idx)}
                      className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-medium cursor-pointer shrink-0 transition-all ${
                        isActive
                          ? `${step.color} shadow-3xs font-bold scale-[1.02] border`
                          : "bg-gray-50/70 border border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <span className="shrink-0">{step.icon}</span>
                      <span className="hidden sm:inline">{step.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Storybook interactive content panel with fade-in animation */}
              <div className="min-h-[250px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeProject.id}-${activeStep}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                        PHASE 0{activeStep + 1} / {steps[activeStep].title}
                      </span>
                      <span className="text-xs font-mono text-brand-secondary font-semibold bg-blue-50/50 px-2 py-0.5 rounded-md">
                        {steps[activeStep].label}
                      </span>
                    </div>

                    {/* Main content render */}
                    {renderStepContent(activeStep, activeProject)}

                    {/* Next Step / Prev Step quick navigator */}
                    <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                      <button
                        disabled={activeStep === 0}
                        onClick={() => setActiveStep((prev) => prev - 1)}
                        className="text-xs font-semibold text-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:pointer-events-none cursor-pointer p-2 rounded-lg hover:bg-gray-50"
                      >
                        ← 이전 단계
                      </button>

                      <div className="flex items-center space-x-1">
                        {steps.map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeStep === i ? "bg-brand-secondary w-3" : "bg-gray-200"}`}
                          />
                        ))}
                      </div>

                      {activeStep < 5 ? (
                        <button
                          onClick={() => setActiveStep((prev) => prev + 1)}
                          className="text-xs font-bold text-brand-secondary hover:text-brand-primary cursor-pointer p-2 rounded-lg hover:bg-blue-50/50"
                        >
                          다음 단계 →
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            const nextProjIdx = (PROJECTS.findIndex((p) => p.id === activeProject.id) + 1) % PROJECTS.length;
                            selectProject(PROJECTS[nextProjIdx]);
                          }}
                          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer p-2 rounded-lg hover:bg-emerald-50/50"
                        >
                          다른 프로젝트 보기 →
                        </button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom code technology stack strip */}
              <div className="mt-8 pt-5 border-t border-gray-100/70 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase font-bold text-gray-400 mr-2 flex items-center">
                  <Code size={12} className="mr-1 text-gray-400" />
                  Applied Technologies:
                </span>
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-50/70 border border-gray-100 text-gray-600 text-[11px] font-medium font-mono px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
