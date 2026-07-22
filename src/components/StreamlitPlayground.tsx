/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { ExternalLink, AlertTriangle, Maximize2, Minimize2 } from "lucide-react";

interface StreamlitPlaygroundProps {
  url?: string;
  title?: string;
}

export default function StreamlitPlayground({
  url = "https://app-xjfw2rxeeg6gpfxydiqgnt.streamlit.app/",
  title = "Yoon Tae Hyun Streamlit Portfolio"
}: StreamlitPlaygroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {
          window.open(url, "_blank");
        });
      } else {
        window.open(url, "_blank");
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const embedUrl = url.endsWith("/") ? `${url}?embed=true` : `${url}/?embed=true`;

  return (
    <div 
      ref={containerRef}
      className={`w-full bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm transition-all ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none border-none h-screen" : ""
      }`}
    >
      {/* Top Bar with Fullscreen button on the right */}
      <div className="bg-white px-4 py-2 border-b border-gray-100 flex items-center justify-end">
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleFullscreen}
            className="flex items-center space-x-1.5 text-gray-700 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            title="Fullscreen"
          >
            {isFullscreen ? (
              <>
                <Minimize2 size={13} />
                <span>Exit Fullscreen</span>
              </>
            ) : (
              <>
                <span>Fullscreen</span>
                <Maximize2 size={13} />
              </>
            )}
          </button>

          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 hover:bg-gray-100 rounded-lg"
            title="새 탭에서 열기"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Main Content Area - White Background, Responsive & Clips Streamlit Footer */}
      <div className={`relative bg-white w-full overflow-hidden ${isFullscreen ? "h-[calc(100vh-45px)]" : "h-[580px] sm:h-[640px]"}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-[calc(100%+38px)] border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
        
        {/* Fallback warning helper if iframe is blocked by private browsers/security networks */}
        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-gray-50">
          <AlertTriangle size={24} className="text-amber-500 animate-pulse" />
          <h4 className="text-sm font-bold text-gray-800">네트워크 보안 등으로 임베딩이 표시되지 않나요?</h4>
          <p className="text-xs text-gray-500 max-w-sm">
            브라우저의 iframe 쿠키 권한 제한 또는 프라이빗 세션 환경에 따라 임베딩이 로드되지 않을 수 있습니다. 
            그럴 경우 우측 상단 Fullscreen/새 탭 버튼이나 아래 링크를 클릭하여 직접 확인해 보세요!
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
