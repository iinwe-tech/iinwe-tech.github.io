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

## 작업 저장소와의 관계

- 리디자인 작업본은 [`iinwetech/Homepage`](https://github.com/iinwetech/Homepage) repo의 `index-3.html`입니다. 이 repo의 `index.html`은 그 파일에 SEO 메타·`sr-only` h1·svg 로고 경로를 얹은 것으로, **수정 시 양쪽에 함께 반영**해 주세요.
- 운영진 사진은 구글 드라이브 썸네일 + 코드 내 `STAFF_PHOTOS`(파일 ID)·`STAFF_FOCUS`(얼굴 위치·확대 배율) 맵으로 원형 크롭됩니다. **사진을 교체하면 `STAFF_FOCUS` 값도 다시 잡아야** 얼굴이 중앙에 옵니다.
- 뉴스레터 섹션의 `/api/newsletters` 프록시는 구 Vercel 함수라 GitHub Pages에서는 동작하지 않으며, 정적 폴백 카드가 표시됩니다(정상 동작).

## 이력 (중요)

- **2026-07 이전**: Astro 기반 멀티페이지 사이트였습니다. 그 소스는 [`legacy-astro`](../../tree/legacy-astro) 브랜치에 보존되어 있습니다. `develop` 브랜치에도 옛 Astro 코드가 남아 있으니 **main에 merge하지 마세요.**
- **2026-07**: 새 싱글 페이지 디자인(구 `Homepage/index-3.html`)으로 전면 교체. main = 정적 원본 구조로 전환.
