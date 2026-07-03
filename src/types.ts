/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectAchievement {
  problem: string;
  causeAnalysis: string[];
  data: string[];
  solution: string[];
  result: string[];
  learned: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  category: "AI" | "Manufacturing" | "Circuit";
  achievement: ProjectAchievement;
  techStack: string[];
  iconName: string; // Lucide icon name
}

export interface ExperienceAchievement {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export interface Experience {
  id: string;
  company: string;
  period: string;
  role: string;
  summary: string;
  keyAchievements: ExperienceAchievement[];
  iconName: string;
}

export interface CoreStrength {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  details: string[];
  iconName: string;
}
