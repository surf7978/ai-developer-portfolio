/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Mail, Clipboard, Check, MapPin, ExternalLink, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderCompany, setSenderCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!senderName || !message) return;

    setIsSending(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: senderName,
          company: senderCompany,
          message: message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setSenderName("");
        setSenderCompany("");
        setMessage("");
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-200">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-brand-secondary font-bold uppercase mb-2 block">
              06 / Connection
            </span>
            <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
              Contact & Inquiries
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs mt-2 md:mt-0">
            도메인 데이터 해결사와의 직접 소통 통로
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Elegant Direct Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-3xs relative overflow-hidden">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold block mb-4">
                Primary Channel
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                채용 및 기술 제안 문의
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
                제조 공정 인프라 개선, 센서 모니터링 분석, 딥러닝 기반 이상 탐지 모델 설계 및 제조 도메인 내의 다양한 문제 해결 기획에 대한 파트너십/채용 제안을 적극 환영합니다.
              </p>

              {/* Email Copier Field */}
              <div className="bg-gray-50 border border-gray-100/80 rounded-xl p-4 flex items-center justify-between mb-6 group hover:border-brand-secondary/3 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/70 border border-blue-100 flex items-center justify-center text-brand-secondary">
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block font-bold leading-tight">E-MAIL ADDRESS</span>
                    <span className="text-xs font-mono font-semibold text-gray-700">{PERSONAL_INFO.email}</span>
                  </div>
                </div>

                <button
                  id="email-copy-btn"
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-300 transition-all cursor-pointer shadow-3xs relative"
                  title="Copy email address"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Clipboard size={14} />}
                </button>
              </div>

              {/* Physical Location */}
              <div className="flex items-start space-x-3 text-xs text-gray-500">
                <MapPin size={14} className="text-gray-400 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-700 block">Location basis</span>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Link/Call Action Cards */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-3xs flex items-center justify-between group hover:border-brand-primary/20 transition-all">
              <div className="flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50/50 group-hover:text-brand-primary transition-colors border border-gray-100">
                  <ExternalLink size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-tight">GitHub Repository</h4>
                  <p className="text-[11px] text-gray-400 font-mono">github.com/taehyun-yoon</p>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-gray-400 hover:text-brand-secondary hover:bg-gray-50 transition-colors"
                aria-label="GitHub Profile External Link"
              >
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Side: Sleek Simple Recruiter Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-3xs">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold block mb-4">
                Send a Message
              </span>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                    <Check size={20} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">전송 완료되었습니다.</h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                    메시지를 확인한 후, 남겨주신 연락처로 24시간 이내에 신중하게 연락드리겠습니다. 감사합니다.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name-input" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Name *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="성함 또는 기업명"
                        className="w-full bg-gray-50 border border-gray-200/80 rounded-xl px-4 py-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-secondary focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="company-input" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company-input"
                        type="text"
                        value={senderCompany}
                        onChange={(e) => setSenderCompany(e.target.value)}
                        placeholder="기업 정보 (선택)"
                        className="w-full bg-gray-50 border border-gray-200/80 rounded-xl px-4 py-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-secondary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message-input" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Message Inquiry *
                    </label>
                    <textarea
                      id="message-input"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="제안 주실 내용 및 회신 받으실 이메일/연락처 정보를 기재해주시면 신중하고 빠른 답변을 보장합니다."
                      className="w-full bg-gray-50 border border-gray-200/80 rounded-xl px-4 py-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-secondary focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center space-x-2 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      <AlertCircle size={14} className="text-red-500 shrink-0" />
                      <p className="text-[11px] text-red-600 font-medium">{error}</p>
                    </div>
                  )}

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center space-x-2 bg-brand-primary hover:bg-brand-primary/95 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer transition-all shadow-xs"
                  >
                    {isSending ? (
                      <>
                        <Loader2 size={13} className="animate-spin" />
                        <span>전송 중...</span>
                      </>
                    ) : (
                      <>
                        <span>문의 메시지 보내기</span>
                        <ArrowRight size={13} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
