/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, CoreStrength } from "./types";

export const PERSONAL_INFO = {
  name: "윤태현",
  englishName: "Yoon Tae Hyun",
  role: "AI Problem Solver & Developer",
  tagline: "데이터와 AI로 복잡한 문제의 원인을 찾아 가장 단순한 해결책을 만드는 AI 개발자",
  email: "surf7978@gmail.com",
  phone: "010-XXXX-XXXX", // Standard privacy fallback or email contact focus
  location: "Daegu / Gyeongbuk, South Korea",
  github: "https://github.com",
  education: {
    school: "경북대학교 (Kyungpook National University)",
    degree: "전기공학 학사 (B.S. in Electrical Engineering)",
    period: "전공 졸업"
  },
  whyAI: "제조업 현장에서 직관과 경험에 의존한 의사결정보다, 데이터를 기반으로 문제의 원인을 추적할 때 가장 완벽하고 경제적인 해결책이 도출되는 것을 경험했습니다. 이제는 전기공학과 하드웨어 설계, 제조 공정 지식이라는 고유한 도메인 자산에 AI와 데이터 역량을 융합하여, 다양한 산업군의 실질적이고 복잡한 비즈니스 문제를 해결하는 개발자가 되고자 합니다."
};

export const CORE_KEYWORDS = [
  "Root Cause Analysis",
  "Data-driven Decision Making",
  "AI Problem Solving",
  "Process Optimization",
  "Execution"
];

export const CORE_STRENGTHS: CoreStrength[] = [
  {
    id: "strength-1",
    title: "문제의 근본 원인 분석 능력",
    englishTitle: "Root Cause Analysis",
    description: "현상에 치중하기보다 문제의 원인을 추적하여 근본을 해결합니다.",
    details: [
      "LED 방수 성적 저하 원인을 추적해 실링 도포 공정 및 대안 원자재 정밀 분석",
      "경험적 예측 대신 센서 데이터 전수 수집 및 원인-결과 인과관계 매핑",
      "5-Why 분석 기법을 통하여 공정 정지의 숨겨진 논리적 오류 규명"
    ],
    iconName: "SearchCode"
  },
  {
    id: "strength-2",
    title: "데이터 기반 해결책 도출",
    englishTitle: "Data-driven Analytics",
    description: "주관적 의견이 아닌 정량화된 수치와 수집된 데이터로 검증합니다.",
    details: [
      "공정 센서의 10분 주기 시계열 데이터와 원단 오염 간의 상관관계(R=0.84) 입증",
      "수십만 건의 기계적 편차 누적 데이터를 활용한 주기적 보정 알고리즘 구축",
      "FFT 및 LSTM Autoencoder 모델을 사용한 비정상 예측 파이프라인 검증"
    ],
    iconName: "TrendingUp"
  },
  {
    id: "strength-3",
    title: "현장 이해와 실행 중심 혁신",
    englishTitle: "Field Execution",
    description: "사무실에만 머무르지 않고 실제 작업 현장에서 답을 찾습니다.",
    details: [
      "작업 현장 및 가동 상태의 직접 참관 분석과 현장 숙련자와의 밀착 협업",
      "공정 마킹 센서 오동작 문제를 소프트웨어 제어로 현장에서 즉각 반영 및 디버깅",
      "도메인 지식을 바탕으로 현업 작업자들이 수용 가능한 실현 가능한 제안 및 실행"
    ],
    iconName: "Workflow"
  },
  {
    id: "strength-4",
    title: "신중함과 철저한 시간 준수",
    englishTitle: "Meticulous & Punctual",
    description: "공정 일정 준수와 리스크 최소화를 위한 신중한 검토 습관을 가집니다.",
    details: [
      "철저한 사전 시뮬레이션 및 데이터 시트 크로스체크로 시행착오 방지",
      "프로젝트 일정 마일스톤의 엄격한 준수로 타 부서 공정 일정 안정화",
      "예외 상황(Exception)에 대비한 상시 백업 시나리오 설계"
    ],
    iconName: "ShieldCheck"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-mnist",
    title: "PyTorch & Streamlit 기반 MNIST CNN 손글씨 숫자 인식 분류 모델",
    subtitle: "Interactive Computer Vision & Real-time Drawing Demo",
    period: "2026.01 - 2026.02",
    role: "AI Developer",
    category: "AI",
    techStack: ["Python", "PyTorch", "CNN", "Streamlit", "Computer Vision", "Cloud Deployment"],
    iconName: "Terminal",
    demoUrl: "https://mnistcnn-xppgzn6nkgkwcyyszibde7.streamlit.app/",
    achievement: {
      problem: "CNN 딥러닝 이미지 분류 모델의 추론 과정 및 클래스별 확률 분포를 사용자가 직접 웹 화면에서 필기체를 그리며 실시간 검증할 수 있는 대화형 웹 인터페이스 환경 구축.",
      causeAnalysis: [
        "단순 정적 테스트 데이터셋 평가표 방식은 필기체 변형에 대한 모델의 실시간 인퍼런스 및 유저 경험 검증에 한계 존재.",
        "웹 캔버스 드로잉 입력 영상을 28x28 픽셀 전처리 및 텐서 변환으로 실시간 연동하는 초경량 웹 서빙 파이프라인 필요성 식별."
      ],
      data: [
        "MNIST 70,000건 손글씨 데이터셋 학습 및 데이터 증강(Augmentation) 파이프라인 적용.",
        "PyTorch 기반 합성곱 신경망(CNN) 모델 설계 및 테스트 정확도(Accuracy) 99% 이상 달성."
      ],
      solution: [
        "PyTorch를 활용하여 Conv2D, BatchNorm, MaxPool, Dropout 및 Fully Connected Layer 기반의 정밀 CNN 분류 아키텍처 구축.",
        "Streamlit 드로잉 캔버스 컴포넌트를 연동하여 사용자가 그린 필기체 이미지를 실시간 정규화 후 CNN 모델 추론 연산으로 연결하는 시각화 UI 개발."
      ],
      result: [
        "Streamlit Cloud에 MNIST CNN 실시간 인퍼런스 웹 앱을 성공적으로 실배포하여 대화형 모델 인터랙션 데모 제공.",
        "0~9 각 숫자에 대한 실시간 예측 확률(Probability Distribution) 바 차트를 시각화하여 AI 모델의 투명한 추론 근거 제시."
      ],
      learned: "딥러닝 비전 모델 설계부터 캔버스 전처리, 실시간 인터랙티브 웹 연동 및 클라우드 배포까지 이어지는 AI End-to-End 서비스 개발 경험을 내재화했습니다."
    }
  },
  {
    id: "proj-5",
    title: "Streamlit 기반 AI Anomaly Detection 실시간 시각화 대시보드 구축",
    subtitle: "Interactive Web Sandbox & Deployment",
    period: "2025.11 - 2025.12",
    role: "Full-Stack Developer",
    category: "AI",
    techStack: ["Python", "Streamlit", "PyTorch", "Data Simulation", "Cloud Deployment"],
    iconName: "Terminal",
    demoUrl: "https://app-xjfw2rxeeg6gpfxydiqgnt.streamlit.app/",
    achievement: {
      problem: "인공지능 모델의 이상 탐지 결과 및 고주파 센서 데이터를 하드웨어 담당자 및 현장 조장들이 복잡한 코드나 터미널 조작 없이 대화형으로 직접 시뮬레이션하고 통제할 수 있는 경량 웹 대시보드 환경 부재.",
      causeAnalysis: [
        "기존 무거운 리액트나 장고 기반 풀스택 구축은 필드 단위의 빠른 피드백과 소형 프로토타이핑을 가로막는 리소스 병목 요인으로 작동.",
        "작업자들이 임계 시그마(σ) 가이드라인을 미세 제어하며 오탐지율 변화를 모니터링할 수 있는 대화식 하이퍼파라미터 튜닝 기구 미비."
      ],
      data: [
        "전체 웹 서비스 아키텍처 인프라 구축 소요 기간을 90% 이상 획기적으로 압축할 목표 설계.",
        "실적 클라우드 환경 배포 및 가상 대시보드 연동 시 0.15초 이내의 빠른 연산 피드백 인터랙션 레이턴시 확보."
      ],
      solution: [
        "Python의 최고 경량 데이터 시각화 웹 프레임워크인 Streamlit을 기반으로 이상 탐지 파이프라인의 UI 구성 요소를 미니멀하게 설계.",
        "임계치(Threshold) 및 오차 스펙트럼 분석 시뮬레이션을 내장하여, 사용자가 슬라이더 조작을 통해 실시간으로 딥러닝 예측 결과 변화를 직접 검증 가능한 반응형 앱 엔진 구현."
      ],
      result: [
        "Streamlit Cloud 환경에 웹 대시보드를 즉각 성공적으로 실배포하여, 협업 부서 및 인사 담당자에게 인터랙티브 포트폴리오 형태로 실시간 가동 데모 증명 완료.",
        "필드 오작동 진단 및 파라미터 조정 시간을 수십 분에서 단 3초 단위의 슬라이더 조절 시각화로 단축하는 혁신 프로토타입 제시."
      ],
      learned: "고도화된 딥러닝 수치 모델 역시, 현장의 최종 관리자가 한눈에 파악하고 직관적으로 통제할 수 있는 반응형 UI/UX가 결합할 때 비로소 완성된 '실제 비즈니스 가치'로 거듭난다는 진리를 절감했습니다."
    }
  },
  {
    id: "proj-1",
    title: "딥러닝 기반 실시간 제조 설비 이상 탐지 및 모니터링 시스템 개발",
    subtitle: "AI Anomaly Detection",
    period: "2025.07 - 2025.10",
    role: "AI Developer (개인 사이드 프로젝트)",
    category: "AI",
    techStack: ["Python", "PyTorch", "Oracle", "SQL", "Pandas", "Scikit-Learn"],
    iconName: "Activity",
    achievement: {
      problem: "사후 정비 방식의 부품 관리로 인해 핵심 제조 설비의 돌발 고장 발생 시 막대한 장비 폐기 비용 및 생산 라인 정지 피해가 발생함.",
      causeAnalysis: [
        "진동 센서 및 부하 전류 센서에서 대용량 실시간 노이즈 데이터가 유입되나 미세한 마모 징후는 일반적인 통계 규칙이나 단일 임계값으로 탐지 불가능.",
        "정상 구동 상태와 미세 고장 상태 간의 경계면 분석을 위한 비지도 학습 차원 축소 필요성 식별."
      ],
      data: [
        "24시간 동안 수집된 12개 가속도 진동 주파수 채널의 1,200만 건 시계열 데이터 수집.",
        "기존 수작업 정비 일지 내 고장 발생 5시간 전의 주파수 스펙트럼 변동 데이터 매핑."
      ],
      solution: [
        "Fast Fourier Transform (FFT)을 통한 진동 센서 신호의 주파수 대역별 특징 가공 전처리 파이프라인 구축.",
        "시계열 데이터 재구성 오차(Reconstruction Error)를 활용해 이상 징후를 판별하는 LSTM Autoencoder 기반 비지도 학습 탐지 모델 설계.",
        "실시간 고장 예보 알림 발송을 위해 Oracle DB의 배치 스케줄러와 연동 및 예측 모니터링 웹 인터페이스 연계."
      ],
      result: [
        "설비 돌발 고장 3시간 전 사전 예측 신뢰도 및 탐지 정확도 (F1-Score) 94.2% 달성.",
        "주요 고장 징후 사전 예방 조치율 상승으로 예상 다운타임 비용 연간 30% 절감 시뮬레이션 성공."
      ],
      learned: "현장의 복잡한 도메인 지식과 대용량 시계열 특징 추출 기법이 결합했을 때, 미정형 AI 모델이 지닌 수치적 예측력이 비로소 현실 가치로 환수된다는 것을 깨달았습니다."
    }
  },
  {
    id: "proj-2",
    title: "산업용 원단 오염 불량 개선 및 세척 공정 제어 조건 최적화",
    subtitle: "Manufacturing Optimization",
    period: "2024.02 - 2024.08",
    role: "생산관리 담당자",
    category: "Manufacturing",
    techStack: ["Process Analysis", "Correlation Analysis", "Excel Data Mapping", "Field Collaboration"],
    iconName: "Layers",
    achievement: {
      problem: "원단 직조 및 세척 공정 중 불명확한 요인으로 인해 가끔씩 원단 표면에 미세 기름 오염 불량이 누적되어 월평균 폐기 단가 상승 및 품질 신뢰도 훼손.",
      causeAnalysis: [
        "작업자의 경험적 추측(공급 부품 하자)에만 의존하던 중, 가동 모터의 고속 회전 시 미세 노즐 주변의 공조 냉각 효율 및 내부 온도 분석 필요성 확인.",
        "직조 헤드의 진동과 고온 냉각 유량 압력의 상호 작용이 불량의 주요 누적 트리거임을 분석."
      ],
      data: [
        "가동 시간별 센서 온도(55°C ~ 72°C) 및 오일 가습량 압력 로그 데이터 전수 매핑.",
        "상관관계 분석을 통해 설비 온도가 65°C를 초과하며 압력이 낮을 때 불량률이 8.7% 급증하는 양의 상관성(r = 0.84) 입증."
      ],
      solution: [
        "현장 기술자 및 설비 엔지니어들과 태스크포스(TF) 팀을 구성하여 노즐 직하단 기화 오일 비산 방지용 맞춤형 격벽 가이드 설계 및 설치.",
        "공조기 가동 로직을 직조기 RPM 시계열 회전수 연동 실시간 자동 피드백 방식으로 소프트웨어 세부 설정 변경."
      ],
      result: [
        "기름 오염 원단 불량률 기존 8.7%에서 0.3% 수준으로 96.5% 급감 성공.",
        "폐기 원자재 절감 및 품질 비용 개선을 통한 연간 절감 이익 약 4,500만 원 확보."
      ],
      learned: "단순히 경험적 추측에 매몰되지 않고, 현장의 실가동 원천 데이터 수치를 도출해 상관관계를 명확히 규명할 때 비즈니스 손실을 최소화하는 지름길이 열림을 체감했습니다."
    }
  },
  {
    id: "proj-3",
    title: "PCB 생산라인 마킹 자동화 공정 좌표 정밀 보정 및 제어 로직 적용",
    subtitle: "PCB Automation Error Correction",
    period: "2023.05 - 2023.11",
    role: "설비 생산 기술자",
    category: "Manufacturing",
    techStack: ["PLC Programming", "Calibration Logic", "Sensor Tracking", "Optimization"],
    iconName: "Cpu",
    achievement: {
      problem: "자동 PCB 마킹 장비의 잦은 마킹 정렬 오류로 인해 센서가 오류를 감지하여 비정기적으로 전체 라인이 중단(Line-Stop)되는 고비용 병목현상 상시 발생.",
      causeAnalysis: [
        "인쇄 헤드의 고속 회전에 의한 물리적 미세 기계 진동이 축적되어 정렬 좌표가 미세하게 흘러가는 물리 편차 축적 현상 분석.",
        "가동 시간이 4시간 경과한 시점부터 좌표계 변위가 광학 센서 허용 임계값(±0.2mm)을 무조건 초과하는 구조적 한계 규명."
      ],
      data: [
        "일 평균 불량 및 라인 중단 횟수 5.2회 기록 (평균 다운타임 85분).",
        "비접촉 마이크로미터 게이지 측정 결과, 1만 회 마킹 구동 주기마다 평균 0.05mm의 누적 X-Y축 이격 거리 편차 검출."
      ],
      solution: [
        "마킹 헤드의 구동 사이클 카운트를 추적하는 감지 소프트웨어 카운팅 로직을 PLC에 탑재.",
        "매 8,000회 구동 직후, 광학 정렬용 미세 오차 좌표 변위값(Offset)만큼 부호가 반대인 역방향 피드 궤적을 펌웨어 제어 조건에 자동 주입하여 누적 편차를 수치적으로 선제 상쇄(Zero-Drift Calibration)."
      ],
      result: [
        "조정 패치 반영 후 좌표 누적 이탈 불량률 0% 달성 및 라인 중단 일절 없음 (Downtime 85분 -> 0분).",
        "인력 재조정 및 가동 정지 해소를 통해 해당 공정 라인 일간 생산 수량 22% 대폭 증대."
      ],
      learned: "하드웨어가 가진 미세한 기계적 변형이나 정밀도 한계를 소프트웨어 알고리즘과 수학적 보정 로직을 응용하여 효과적으로 정밀 제어할 수 있음을 입증한 귀중한 공정 혁신 경험이었습니다."
    }
  },
  {
    id: "proj-4",
    title: "LED 조명 하드웨어 방수 성능 보증 및 신소재 원가 혁신 설계",
    subtitle: "LED HW Waterproofing & Cost Engineering",
    period: "2022.01 - 2022.10",
    role: "하드웨어 회로 설계 R&D 엔지니어",
    category: "Circuit",
    techStack: ["Circuit Design", "Physical Test", "Datasheet Verification", "Cost Minimization"],
    iconName: "Zap",
    achievement: {
      problem: "외곽 가혹 환경에 노출되는 산업용 LED 제품이 가열 후 냉각 시 발생하는 기압 수축 편차로 인해 습기가 침투하여 미세 단락 및 발광 성적이 불량해지는 현상 제기.",
      causeAnalysis: [
        "가혹 환경 온도 가열 시 기존 사용되던 고가 불소 수지 실링재의 팽창계수와 알루미늄 하우징의 수축율 간 열적 불일치(CTE Mismatch)로 인해 접합면 미세 기포 틈새가 벌어지는 점 규명."
      ],
      data: [
        "실내 고온다습 85°C/85% 상대습도 수명 챔버 테스트 시 불량률 12.4% 도달.",
        "기존 방수 부자재 및 실란트의 적용 원가가 단위 기판당 80원으로 과다하여 경쟁력 하락 요인 확인."
      ],
      solution: [
        "실리콘 및 폴리우레탄 화학 특성 데이터 시트를 전수 대조하여 접착력과 신장률이 극대화된 새로운 개질 실리콘 하이브리드 수지로 변경하는 방안 도출.",
        "도포 두께와 표면 가습 경화 온도를 자동으로 조절해 기포 유입을 완벽 차단하는 자동 분사 밸브 최적 가동 파라미터 제안."
      ],
      result: [
        "항온항습 가속 신뢰성 챔버 검증 결과 불량률 12.4%에서 0.1% 미만으로 사실상 제로화 달성.",
        "방수 부자재 및 실런트 단가를 단위 기판당 기존 80원에서 20원으로 75% 파격 감축 성공."
      ],
      learned: "물리 소자의 한계 특성 데이터 시트를 정확하고 깊게 이해하고 적재적소의 저단가 신소재로 기하학적인 기하 구조를 정밀 대체할 때, 성능 증명과 원가 경쟁력이라는 상충되는 두 목표를 동시 해결할 수 있음을 확신했습니다."
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "산업용 원단 제조업 (생산관리 본부)",
    period: "2023.01 - 2024.11",
    role: "생산관리 및 공정 데이터 분석 담당",
    summary: "공정 현장에서 매일 생성되는 무형의 물리 로그와 현상들을 정량 데이터로 변환하여 병목 구간을 탐색하고, 작업자와의 밀착 소통을 통해 오염 및 마킹 등 고질적 품질 리스크를 해결했습니다.",
    iconName: "Settings",
    keyAchievements: [
      {
        title: "기름 오염 불량률 극적 해소",
        problem: "기화 오염에 의한 고품질 원단 오염 발생 (불량률 8.7%).",
        solution: "온도-압력 시계열 데이터 수집 및 상관분석을 통해 냉각 공조 자동 제어 및 차단 벽 설계.",
        result: "불량률 0.3% 미만 감소 및 품질 비용 절감."
      },
      {
        title: "PCB 인쇄 라인 좌표 보정 패치 적용",
        problem: "마킹 오차 축적으로 자동화 라인이 하루 평균 5.2회 멈추는 다운타임 상시화.",
        solution: "동적 누적 오차를 무효화하는 역좌표 오프셋 보정 로직을 PLC에 탑재.",
        result: "정지 다운타임 85분에서 0분으로 단축 및 일일 생산수량 22% 대폭 확대."
      }
    ]
  },
  {
    id: "exp-2",
    company: "LED 조명 솔루션 전문 기업 (하드웨어 R&D 본부)",
    period: "2021.03 - 2022.11",
    role: "하드웨어 회로설계 및 신뢰성 평가 연구원",
    summary: "LED 회로 및 하우징 내부 가혹도 평가를 전담하며, 원자재 스펙 데이터를 분석하고 기구적 수축 팽창에 대응하는 친환경 저원가 회로 보호 방수 구조를 설계했습니다.",
    iconName: "Cpu",
    keyAchievements: [
      {
        title: "고온다습 수명 테스트 통과 및 원가 절감",
        problem: "항온항습 내구 수명 챔버 테스트 중 습기 유입으로 LED 소자 합선 발생 (불량률 12.4%).",
        solution: "팽창 지수가 다른 하이브리드 도포 원재료 교체 및 도포 공정 압력 파라미터 셋업.",
        result: "불량률 0.1% 미만 하향 안정화 및 방수 원가 단가 80원에서 20원으로 75% 절감 성공."
      }
    ]
  }
];

export const TECH_STACK = {
  languages: [
    { name: "Python", level: "Advanced", usage: "데이터 수집 및 전처리, 딥러닝/머신러닝 모델링 (Pandas, PyTorch, Scikit-Learn)", score: 90 },
    { name: "Java", level: "Intermediate", usage: "웹 백엔드 비즈니스 로직 작성 및 객체지향 서비스 설계", score: 80 },
    { name: "JSP / Spring", level: "Intermediate", usage: "Spring MVC 패턴 기반 엔터프라이즈 프레임워크 및 데이터 바인딩", score: 75 },
    { name: "JavaScript", level: "Intermediate", usage: "ES6+ 문법, 비동기 통신 처리 및 동적 이벤트 핸들링", score: 80 },
    { name: "jQuery / HTML5 / CSS3", level: "Advanced", usage: "반응형 마크업 설계, 동적 DOM 애니메이션 및 이벤트 바인딩", score: 85 }
  ],
  databases: [
    { name: "Oracle DB", usage: "대용량 테이블 인덱싱 및 조인 최적화, PL/SQL 프로시저 및 정기 배치 처리", score: 85 },
    { name: "MSSQL", usage: "공정 이력 데이터 분산 수집, 복잡한 통계 쿼리 및 성능 튜닝", score: 80 }
  ],
  environments: [
    { name: "Linux", usage: "배시 셸 스크립팅, 리눅스 서버 배포 환경 관리 및 서비스 로그 추적", score: 75 },
    { name: "Windows", usage: "하드웨어 장치 연동 드라이버 제어 및 자동화 환경 구성", score: 85 }
  ],
  tools: [
    { name: "PowerPoint", usage: "도해식 레이아웃을 사용한 직관적인 기술 제안서 및 문제 해결 결과 장표 작성" },
    { name: "Excel", usage: "피벗 테이블, 고급 통계 함수, 차트를 활용한 1차 데이터 탐색 및 전처리" },
    { name: "Word", usage: "시스템 운영 가이드 및 표준 행동 절차(SOP)의 명확한 구조적 문서화" }
  ]
};
