# Full-Stack AI Portfolio

GitHub Pages에 바로 배포 가능한 정적 포트폴리오입니다. 빌드 도구가 필요 없고, `index.html`을 루트에 둔 상태로 Pages를 켜면 사이트가 열립니다.

## 로컬 확인

```bash
npm run serve
```

브라우저에서 `http://localhost:4173`을 엽니다.

## PDF 저장

사이트의 `PDF 저장` 버튼은 브라우저 인쇄 창을 열고, `styles.css`의 `@media print` 규칙으로 A4 문서형 레이아웃을 적용합니다.

1. `PDF 저장` 클릭
2. 대상에서 `PDF로 저장` 선택
3. 파일명 지정 후 저장

## GitHub Pages 배포

1. 이 폴더를 GitHub 저장소 루트로 push합니다.
2. GitHub 저장소의 `Settings > Pages`로 이동합니다.
3. Source를 `Deploy from a branch`로 선택합니다.
4. Branch는 `main`, folder는 `/root`를 선택합니다.

배포에 필요한 핵심 파일은 다음입니다.

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

## 검증

```bash
npm test
```
