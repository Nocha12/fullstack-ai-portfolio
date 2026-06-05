# 풀스택 + AI 포트폴리오 프로젝트 후보

작성일: 2026-06-05

## 결론

현재 로컬에서 확인한 기준으로는 아래 4개를 포트폴리오 핵심 프로젝트로 쓰는 구성이 가장 좋다.

1. `army-news` - 육군 공보/언론 대응용 뉴스 수집 + sLM 분석 플랫폼
2. `kr.onthelive.geni.teacher` - AI 교육/문제 생성/첨삭 플랫폼
3. `aea.web-neolab` - AI 서논술형 평가/첨삭 웹 서비스
4. `CALPASAIDL` - 산업용 머신비전 + 딥러닝 검사 시스템

보조 프로젝트로는 `aimm.eduapp`, `aimm.poll`, `KcBERT-Finetune`, `DevelopmentOfHangeulOCR`를 넣을 만하다.

## 1순위: Army News / 육군 공보 sLM 분석 플랫폼

- 경로: `/Users/junseok/Downloads/army-news-master (1)/army-news-master/army-news-master`
- 보조 산출물 경로: `/Users/junseok/Downloads/army-news`
- 포지션 적합도: 풀스택 + AI + 도메인 특화 모두 강함
- 형태: React + NestJS + FastAPI/Python + PostgreSQL + Redis + BullMQ + vLLM/LoRA 파이프라인
- 확인된 구성:
  - Web: `web/` React 18 + Vite + TypeScript
  - Backend: `server/` NestJS API + BullMQ workers
  - Python internal API: `python/` FastAPI, Playwright crawler, clustering, comments service
  - Infra: PostgreSQL, Redis, Docker, worker queue
  - AI/LLM: vLLM OpenAI-compatible server, LoRA routing
  - Report artifacts: `final_report/`, `data.csv`, `type_summary.md`, `type_counts.png`
- AI 포인트:
  - 일일단위 언론보도 요약자료 자동생성: `summary` LoRA
  - 뉴스기사의 육군 시점 논조 분석: `army-sentiment` LoRA
  - 인터넷 시민반응 분석: `citizen-reaction` LoRA
  - 공보 이슈 대응/전략적 소통 문안 생성: `pr-response` LoRA
  - multilingual-e5-base 기반 이슈 클러스터링
- 풀스택 포인트:
  - 네이버 뉴스 ingest -> Playwright crawl -> 기사 저장 -> 이슈 clustering -> LLM worker -> React UI까지 end-to-end 구조
  - BullMQ 큐를 ingest/crawl/cluster/llm/comments로 분리해 비동기 처리와 장애 격리를 설명 가능
  - 운영자가 날짜별 보고서 재생성, 복사, 이슈 상세, 댓글 분석 히스토리를 다루는 실무형 UI 보유
- 포트폴리오 제목 추천:
  - "육군 공보 sLM 분석 플랫폼: 뉴스 수집, 논조 분석, 시민반응, 대응문안 자동화"
- 보여줄 내용:
  - `기사수집/크롤링 -> 클러스터링 -> LoRA 추론 -> 보고서/논조/댓글/대응 UI` 아키텍처
  - summary, army-sentiment, citizen-reaction, pr-response 4개 태스크 분리
  - Postgres/Redis/BullMQ 기반 worker pipeline
  - React 화면: 일일 보고서, 논조 분석, 댓글 분석, 이슈 대응
  - 학습 손실 그래프와 최종 보고서 캡션 자료
- 공개 주의:
  - 국방/육군 관련 프로젝트이므로 원문 데이터, 실제 보고서, `.env`, 운영 서버, 내부 판단 기준은 반드시 마스킹한다.
  - 포트폴리오에는 구조, 역할, 기술 판단, 익명화된 화면/샘플 데이터만 사용한다.

## 2순위: 지니티쳐 / Geni Teacher

- 경로: `/Users/junseok/Downloads/kr.onthelive.geni.teacher`
- 포지션 적합도: 풀스택 매우 강함, AI 기능도 강함
- 확인된 구성:
  - Java 21 / Spring Boot backend
  - React 18 + Vite frontend
  - Docker, Kubernetes, OKE/AKS/EKS 배포 문서
  - 문항 생성, 첨삭, PDF, 수식, 채점/피드백 관련 문서 다수
- AI 포인트:
  - AI 문제 생성 실패 처리: `ErrorCode.GenerateAiFailed`
  - prompt/API 등급, 플랫폼별 AI 정책 관련 기록: `GOAL.md`
  - AI batch DB save, single-question API, nonsul rubric grading 관련 문서
- 풀스택 포인트:
  - 멀티테넌트, 인증, 결제, quota, PDF viewer, 수식 editor, React virtualization까지 범위가 큼
  - 운영 배포 문서가 풍부해서 실서비스 경험을 보여주기 좋음
- 포트폴리오 제목 추천:
  - "AI 기반 교육 문제 생성/첨삭 플랫폼: Spring Boot + React + Kubernetes"
- 보여줄 내용:
  - 문제 생성/첨삭 요청 흐름
  - prompt/profile/model 정책 설계
  - 무료 사용량 quota, Redis/cache, DB 정책
  - PDF/수식 editor UX 개선 사례
  - Kubernetes/OCI 배포 구조
- 공개 주의:
  - 운영 배포 정보, 인증 정보, 고객명, 내부 도메인, sops 파일은 절대 노출하지 않는다.

## 3순위: AEA / AI Essay Assist

- 경로: `/Users/junseok/Desktop/aea.web-neolab`
- 포지션 적합도: 풀스택 + AI 평가 서비스로 좋음
- 확인된 구성:
  - Spring Boot backend
  - React frontend
  - MySQL schema
  - AI scoring request JSON
  - prompt files
  - HWP/Word import sub-project
- AI 포인트:
  - 서논술형 AI 평가/피드백 도구
  - rubric, AI score, AI feedback, RAG 관련 DB 테이블
  - OCR request processing, project submissions, project rags
- 풀스택 포인트:
  - 평가 프로젝트/문항/제출/채점/피드백까지 도메인이 선명함
  - React UI, Spring API, DB schema, 배포 절차까지 설명 가능
- 포트폴리오 제목 추천:
  - "AI 서논술형 평가 시스템: Rubric 기반 자동 채점과 피드백 플랫폼"
- 보여줄 내용:
  - 제출 답안 -> OCR -> AI prompt -> scoring -> feedback 저장 흐름
  - rubric 기반 채점 데이터 모델
  - bulk scoring / feedback 관리 화면
  - 배포 자동화 또는 운영 반영 프로세스
- 공개 주의:
  - 실제 학생 답안, 평가 데이터, prompt 원문, 운영 서버 IP는 마스킹한다.

## 4순위: CALPASAIDL

- 경로: `/Users/junseok/Desktop/CALPASAIDL`
- 포지션 적합도: AI/컴퓨터비전 특화, 풀스택보다는 산업용 애플리케이션에 가까움
- 확인된 구성:
  - C# WinForms
  - HALCON 24.11
  - HALCON Deep Learning Python prototype
  - Cognex VisionPro -> HALCON migration docs
  - 성능/FPS/latency/ROI 최적화 문서
- AI 포인트:
  - 딥러닝 기반 검사, 분류, segmentation
  - ROI 기반 이물 검출
  - GPU/TensorRT/HALCON runtime 이슈 대응
- 기술 포인트:
  - 이미지 획득, 카메라 제어, 실시간 분석, 리포트 생성
  - legacy VisionPro 시스템을 HALCON으로 마이그레이션
  - UI thread, rendering, async pipeline, resource dispose 최적화
- 포트폴리오 제목 추천:
  - "산업용 머신비전 검사 시스템: Cognex VisionPro에서 HALCON Deep Learning으로 마이그레이션"
- 보여줄 내용:
  - 기존/신규 아키텍처 비교
  - 카메라 -> ROI -> DL inference -> defect result -> report 흐름
  - FPS 병목 분석과 개선 사례
  - HALCON handle/resource lifecycle 관리
- 공개 주의:
  - 고객사, 장비 세부값, 실제 불량 이미지, 라이선스 정보는 제외한다.

## 보조 후보

### PMiNG / AIMM Edu App

- 경로: `/Users/junseok/Desktop/aimm.eduapp`
- 장점:
  - Spring Boot backend, React web, FastAPI AI service, Python data pipeline, Flutter app이 있는 모노레포
  - OpenAI, TTS, AI topic/data pipeline 관련 요소 확인
  - DDD/domain docs와 API contract 기반 설명 가능
- 약점:
  - `army-news`보다 포트폴리오 메시지가 덜 선명함
- 추천 용도:
  - 메인에서는 제외하고 "풀스택 서비스 모노레포 경험" 보조 프로젝트로 짧게 언급

### AIMM Poll

- 경로: `/Users/junseok/Desktop/aimm.poll`
- 장점:
  - Spring Boot + React
  - AI API, TTS, STT, embedding API 설정 확인
  - avatar/cache/question/history DB 구조가 있어 RAG형 서비스로 설명 가능
- 약점:
  - README가 짧아서 포트폴리오용 설명 보강이 필요함
- 추천 용도:
  - 메인보다는 "AI avatar/RAG polling service prototype" 보조 프로젝트

### KcBERT-Finetune

- 경로: `/Users/junseok/Desktop/KcBERT-Finetune`
- 장점:
  - KcBERT/KcELECTRA fine-tuning
  - NSMC, KorNLI, PAWS, question-pair, KorSTS, NER, KorQuAD 등 NLP benchmark 수행 가능
- 약점:
  - 서비스형 풀스택 프로젝트는 아님
- 추천 용도:
  - AI/NLP 역량 보조 섹션

### DevelopmentOfHangeulOCR

- 경로: `/Users/junseok/Desktop/DevelopmentOfHangeulOCR`
- 장점:
  - 한글 OCR
  - YOLOv8 객체 감지 + ResNet 인식 모델
  - README에 데이터, 모델 선정, 학습 결과 이미지가 있음
- 약점:
  - 오래된 학습 프로젝트 성격
- 추천 용도:
  - AI 모델링 경험, 컴퓨터비전 학습 프로젝트 섹션

## 추천 포트폴리오 구성

### 메인 3개 구성

1. `army-news`
   - 육군 공보/언론 대응 sLM 분석 플랫폼 대표 프로젝트
2. `kr.onthelive.geni.teacher`
   - 실서비스 운영/배포/AI 교육 플랫폼 대표 프로젝트
3. `aea.web-neolab`
   - AI 평가/피드백 도메인 특화 프로젝트

### AI 깊이 보강 1개

4. `CALPASAIDL`
   - 컴퓨터비전/딥러닝/성능 최적화 프로젝트

### 짧게 넣을 보조 2개

5. `KcBERT-Finetune`
   - NLP fine-tuning 경험
6. `DevelopmentOfHangeulOCR`
   - OCR/YOLO/ResNet 모델링 경험

## 포트폴리오에서 강조할 큰 메시지

- 단순 CRUD 개발자가 아니라, AI 기능을 실제 운영형 서비스 흐름에 붙여본 풀스택 개발자
- React/NestJS/Spring Boot/FastAPI 기반 서비스 구현뿐 아니라 Python crawler, worker queue, vLLM/LoRA, RAG, OCR, 머신비전까지 다뤄본 경험
- 뉴스 수집, 이슈 클러스터링, 논조 분석, 댓글 반응 분석, 대응 문안 생성, 교육 첨삭, PDF/수식 처리, AI 결과 저장/피드백 UX까지 end-to-end로 설명 가능

## 다음 작업 제안

각 프로젝트별로 아래 형식의 포트폴리오 원고를 만들면 된다.

```text
프로젝트명:
한 줄 설명:
기간:
역할:
기술 스택:
문제 상황:
내가 구현한 기능:
기술적 고민:
해결 방법:
성과:
스크린샷/다이어그램:
공개 가능한 링크:
```
