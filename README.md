# 아이인위 (I in We) 홈페이지

[www.iinwe.org](https://www.iinwe.org) — 아이인위 공식 홈페이지.

## 구조

빌드 과정이 없는 **순수 정적 사이트**입니다. 이 저장소의 `main` 브랜치가 곧 사이트 원본입니다.

| 파일 | 설명 |
|------|------|
| `index.html` | 홈페이지 전체 (싱글 페이지) |
| `404.html` | 404 → 홈 리다이렉트 |
| `assets/` | 사진 이미지 |
| `iinwelogo.svg` | 로고 (컬러 — 밝은 배경용, 네비게이션) |
| `iinwelogowhitered.svg` | 로고 (흰색+빨강 — 어두운 배경용, 브랜드 CTA·플로팅 배너) |
| `CNAME` | 커스텀 도메인 (www.iinwe.org) |

## 배포

`main`에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 파일을 그대로 `gh-pages` 브랜치로 복사하고, GitHub Pages가 이를 서빙합니다. 별도 빌드·설치 과정이 없습니다.

## 이력 (중요)

- **2026-07 이전**: Astro 기반 멀티페이지 사이트였습니다. 그 소스는 [`legacy-astro`](../../tree/legacy-astro) 브랜치에 보존되어 있습니다. `develop` 브랜치에도 옛 Astro 코드가 남아 있으니 **main에 merge하지 마세요.**
- **2026-07**: 새 싱글 페이지 디자인(구 `Homepage/index-3.html`)으로 전면 교체. main = 정적 원본 구조로 전환.
