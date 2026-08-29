# Goyang AI 교육 프로젝트 - 프로젝트 설정 가이드

## 📋 프로젝트 개요
**Goyang 바이브 코딩 실습** - 고양 지역 AI 교육 프로젝트입니다.

## 📁 프로젝트 구조

```
Goyang/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 파일
├── README.md           # 프로젝트 설명
├── .gitignore          # Git 무시 파일 목록
└── .git/               # Git 저장소
```

## 🚀 시작하기

### 1. 기본 설정
- 프로젝트는 Git 저장소로 초기화되어 있습니다
- 모든 필수 파일이 준비되어 있습니다

### 2. 개발 시작
프로젝트 폴더에서 다음 명령을 실행할 수 있습니다:

```bash
# 로컬 서버 실행 (Python)
python -m http.server 8000

# 또는 Node.js 사용
npx http-server
```

그 후 브라우저에서 `http://localhost:8000`으로 접속하세요.

## 📝 파일 설명

### index.html
- DOCTYPE과 메타 태그를 포함한 완전한 HTML5 구조
- style.css와 script.js를 연결
- 반응형 디자인 지원

### style.css
- 모던 그래디언트 배경 디자인
- 반응형 컨테이너 레이아웃
- 깔끔한 타이포그래피 스타일

### script.js
- DOMContentLoaded 이벤트 처리
- 기본 헬퍼 함수 포함
- 콘솔 로깅 활성화

## 🔧 Git 사용

```bash
# 변경사항 추가
git add .

# 커밋
git commit -m "메시지"

# 푸시 (리모트 설정 후)
git push origin main
```

## 📚 다음 단계
- HTML 콘텐츠 추가
- 새로운 기능 개발
- CSS 스타일 커스터마이징
- JavaScript 기능 확장

---
**프로젝트 초기화 완료**: 2026-08-29
