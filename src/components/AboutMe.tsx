/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Award, Lightbulb, Compass, Factory } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function AboutMe() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-100">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-brand-secondary font-bold uppercase mb-2 block">
            01 / Identity
          </span>
          <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
            About Me
          </h2>
        </div>
        <p className="text-gray-400 font-mono text-xs mt-2 md:mt-0">
          30초 안에 읽어보는 윤태현의 커리어 터닝포인트
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Summary Profile Card with Apple Developer vibe */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="lg:col-span-5 bg-white border border-gray-100/70 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300"
        >
          {/* Subtle overlay accent band */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-primary" />

          <div className="flex items-start space-x-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-primary border border-gray-100 shadow-3xs">
              <Compass size={24} />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-gray-900">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-gray-400 mt-0.5">
                {PERSONAL_INFO.englishName}
              </p>
              <div className="flex items-center space-x-1.5 mt-2 bg-blue-50/70 border border-blue-100/40 px-2 py-0.5 rounded-md text-[10px] font-medium text-brand-secondary">
                <Factory size={11} />
                <span>제조 엔지니어 출신 AI 개발자</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-50">
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider block">
                Education
              </span>
              <div className="flex items-start space-x-2 mt-1">
                <GraduationCap size={15} className="text-brand-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    {PERSONAL_INFO.education.school}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {PERSONAL_INFO.education.degree}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider block">
                Primary Contact
              </span>
              <p className="text-xs font-mono text-gray-700 mt-1 font-medium bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg inline-block">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider block">
                Location
              </span>
              <p className="text-xs text-gray-600 mt-1">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Highly Legible Notion-style Story Telling & Turning Point */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="lg:col-span-7 flex flex-col justify-between h-full"
        >
          <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-8 relative">
            <div className="absolute top-5 right-5 text-gray-200 pointer-events-none">
              <Lightbulb size={40} />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Award size={18} className="text-brand-accent shrink-0" />
              <span>제조 현장에서 발견한 데이터와 AI의 진가</span>
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-gray-600 font-normal">
              <p>
                LED 하드웨어 설계실에서부터 산업용 직조 직물 생산 기지까지, 저는 현장에서 발생하는 고질적인 품질 불량과 가동 정지 등 <strong className="text-gray-900 font-semibold">복잡하게 얽힌 문제들을 직접 해결하는 임무</strong>를 수행해 왔습니다.
              </p>
              <p>
                그 과정에서 뼈저리게 느낀 점은 단순 직관이나 경력자의 감에 의존한 의사결정은 또 다른 시행착오와 공정 지연을 낳을 뿐이라는 사실이었습니다. 반면, <strong className="text-brand-primary font-semibold">설비의 작은 진동 센서, 가동 유압 프레스의 수치, 공조 온습도 로그</strong>와 같이 축적된 숫자 속에서 원인을 찾을 때 가장 확실하고 단순한 해답이 나왔습니다.
              </p>
              <p className="bg-white border-l-4 border-brand-secondary/40 p-4 rounded-r-xl italic text-gray-700 font-medium">
                "{PERSONAL_INFO.whyAI}"
              </p>
              <p>
                하드웨어 제어 논리와 신뢰성 분석 노하우에 소프트웨어 아키텍처 및 기계학습 이상 탐지 기술을 입혀, 실질적인 기업 가치 사슬 전반의 병목을 부숴내는 해결사가 되는 것. 그것이 제가 걷는 AI 개발자로서의 명확한 지향점입니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
