/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, AlertTriangle } from "lucide-react";

interface StreamlitPlaygroundProps {
  url?: string;
  title?: string;
}

export default function StreamlitPlayground({
  url = "https://app-xjfw2rxeeg6gpfxydiqgnt.streamlit.app/",
  title = "Yoon Tae Hyun Streamlit Portfolio"
}: StreamlitPlaygroundProps) {
  const embedUrl = url.endsWith("/") ? `${url}?embed=true` : `${url}/?embed=true`;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      {/* Main Content Area - Responsive & Fit Embedded Iframe */}
      <div className="relative bg-slate-900 h-[580px] sm:h-[640px] w-full">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
        
        {/* Fallback warning helper if iframe is blocked by private browsers/security networks */}
        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-slate-950">
          <AlertTriangle size={24} className="text-slate-500 animate-pulse" />
          <h4 className="text-sm font-bold text-slate-300">네트워크 보안 등으로 임베딩이 표시되지 않나요?</h4>
          <p className="text-xs text-slate-500 max-w-sm">
            브라우저의 iframe 쿠키 권한 제한 또는 프라이빗 세션 환경에 따라 임베딩이 로드되지 않을 수 있습니다. 
            그럴 경우 우측 상단이나 아래 버튼을 클릭하여 직접 새 탭에서 확인해 보세요!
          </p>
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all inline-flex items-center space-x-1.5 cursor-pointer shadow-md"
          >
            <span>🚀 Streamlit 앱 직접 가기</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
