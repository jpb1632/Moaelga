# 모아엘가 분양 랜딩페이지

양주 백석 모아엘가 그랑데 분양 랜딩페이지 저장소입니다.  
현재 GitHub Pages로 배포 중인 정적 사이트를 관리하고 있습니다.

## 운영 주소

- https://jpb1632.github.io/Moaelga/

## 기술 스택

- HTML
- CSS
- Vanilla JavaScript
- Gulp
- GitHub Pages
- Google Apps Script
- Kakao RoughMap

## 주요 기능

- 메인 랜딩페이지 구성
- 메뉴 상세 페이지 제공
- PC/모바일 전화 CTA
- 하단 빠른 상담 바
- 일반 상담폼
- 빠른 상담신청 폼
- Open Graph, Twitter 메타 태그 적용
- 카카오 지도 연동

## 폼 처리 로직

- 이름은 한글 또는 영문만 입력 가능
- 휴대폰 번호는 `010`으로 시작하는 11자리 숫자만 입력 가능
- 개인정보 수집/이용 동의 여부 확인
- 일반 상담폼은 상담 목적 최소 1개 선택 필요
- 입력값 sanitize 처리 후 전송
- honeypot 필드로 단순 스팸 요청 차단
- webhook URL 존재 여부 확인
- `https://script.google.com` 호스트만 전송 허용
- 서버 응답 코드에 따라 중복 요청, 과다 요청, 스팸 차단, 메일 발송 한도 초과 메시지 처리

## 메뉴 페이지 처리

- `group`, `tab`, `variant` 쿼리스트링 기반으로 페이지 상태 관리
- 잘못된 파라미터가 들어오면 기본값으로 보정
- 타입안내 메뉴는 variant 탭 전환 지원
- 상세 정보 테이블과 안내 문구 렌더링 시 HTML escape 처리
- 지도 스크립트 로드 실패 시 placeholder 표시

## 주요 파일

- `index.html`: GitHub Pages 루트 진입 파일
- `static/프로젝트/부동산 (oLWSmCRkmlw6kEpt)/첫페이지 (AdKpMlw6KePt)/첫페이지 (AdKpMlw6KePt).html`: 현재 운영 페이지
- `static/프로젝트/부동산 (oLWSmCRkmlw6kEpt)/첫페이지 (AdKpMlw6KePt)/lead-submit.js`: 상담폼 검증 및 전송 로직
- `static/프로젝트/부동산 (oLWSmCRkmlw6kEpt)/첫페이지 (AdKpMlw6KePt)/menu-page.js`: 메뉴 상세 페이지 렌더링 로직
- `gulpfile.mjs`: 미리보기/정적 산출물 생성 스크립트

## 배포 메모

- GitHub Pages는 `main` 브랜치 `/(root)` 기준으로 배포
- 루트 진입 파일은 `index.html`
- 실제 운영 페이지는 `index.html` 안의 iframe으로 연결
- 현재 운영 기준 경로는 `static/프로젝트/부동산 (oLWSmCRkmlw6kEpt)/첫페이지 (AdKpMlw6KePt)/첫페이지 (AdKpMlw6KePt).html`
