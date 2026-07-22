# SEO-COPY-FREEZE — CodexSkin.fun Themed Dream Skin Builder MVP

Date: 2026-07-22  
Stage: SEO-Copy Freeze / weekend MVP  
Owner: J少  
Copy owner: 小瓶 / SEO-Copy  
Status: FROZEN_FOR_FRONTEND_DESIGN_QA  
Source of truth:

- Product PRD v1 dated 2026-07-22 (`docs/PRD-codexskin-...-v1-2026-07-22.md`)
- `docs/COMPLIANCE-codexskin-themed-fandom-boundary-2026-07-22.md`
- `docs/COMPETITOR-REDECOMPOSITION-codexskin-org-2026-07-22.md`

> This freeze replaces the 2026-07-21 pure/professional theme copy. CodexSkin.fun is now positioned as an emotional identity Codex Dream Skin Builder: original public templates, private local user uploads, data-only `.dreamskin` exports, and review / verify / restore guidance.

---

## 0. 中文摘要 / 给下游的一页结论

### 0.1 定位冻结

CodexSkin.fun 首发 MVP 不是纯色主题站，也不是只给 CSS token 的工具。正式定位是：

> 面向 Codex Desktop 用户的情绪身份 Dream Skin Builder：用户可从原创公开模板开始，或在本地上传自有/已授权素材，调整裁切、明暗、模糊、面板透明度、强调色和可读性预览，导出可检查、可恢复的 data-only `.dreamskin` 皮肤包。

英文一句话冻结：

> Build your own Codex Dream Skin from original themed templates or private local uploads, preview readable workspace states, and export a reviewable data-only `.dreamskin` package.

### 0.2 MVP 主卖点

- **情绪身份**：Idol Stage、Anime Hero Desk、Football Nation Arena 等原创泛风格模板，首屏必须一眼看出“这是我的工作台”，不是“换了颜色”。
- **原创公开模板**：公开 gallery / SEO / 下载示例只能使用原创或已授权素材；不能出现真实明星、动漫/游戏角色、球队、球员、赛事标识、品牌 logo、官方背书暗示。
- **私有用户上传**：用户可本地上传自有/已授权图片，默认 private/local，不自动公开、不进 sitemap、不作为平台素材复用。
- **data-only `.dreamskin`**：导出包只包含 manifest、theme tokens、背景、预览、许可、NOTICE、checksum；不包含脚本、可执行文件、凭据、API/provider config。
- **Review / Verify / Restore**：安装路径必须先解释“theme data vs engine/helper”；用户应先 review，再 apply/verify，失败时 restore。
- **平台口径拆分**：`.dreamskin` 是 platform-neutral data package；macOS/Windows apply path 只有在有真实证据时才能写 evidence-backed。当前 MVP copy 统一写 documented / review-required，不写未验证的平台成功口径。

### 0.3 禁词与替代表达

| 禁止/高风险表达 | 替代表达 |
|---|---|
| platform-approved / endorsed / sponsored / partner-style claim | independent customization tool / independent skin builder |
| affiliated-with-platform-maker wording / made-by-product-team wording | independent; no platform endorsement implied |
| instant installer wording | review-first install path / guided apply path |
| absolute safety or certainty wording | reviewable / restore-ready / clear boundary |
| Windows evidence claim without proof | Windows path documented; verify on your own setup unless evidence is shown |
| real celebrity / anime character / team / player / tournament name pages | original genre-inspired templates; private uploads only when the user has rights |
| protected sports-league / tournament / club / team names as SEO hooks | football arena / national color energy / court lights / tournament-season mood |

### 0.4 页面范围冻结

This document freezes English copy for these 10 MVP routes:

1. `/`
2. `/builder`
3. `/skins`
4. `/skins/idol-stage`
5. `/skins/anime-hero-desk`
6. `/skins/football-nation-arena`
7. `/docs/install`
8. `/docs/install/macos`
9. `/docs/install/windows`
10. `/security`

---

## 1. Global copy rules

### 1.1 Product truth boundary

Use these claims consistently:

| Claim area | Allowed copy | Do not write |
|---|---|---|
| Product | Codex Dream Skin Builder, skin templates, browser preview studio, `.dreamskin` package | platform-approved skin store, platform marketplace, partner integration |
| Templates | original public templates, genre-inspired, rights-cleared public artwork | real celebrity likeness, team crest, tournament mark, anime/game character, brand logo |
| User uploads | private local upload, rights-confirmed assets, not published by default | public remix feed for user IP, platform-provided celebrity/anime/team images |
| Package | data-only `.dreamskin`, inert review artifact, no executable | self-installing package, bundled helper in every skin, arbitrary code in theme package |
| Install | review source, apply through a separate engine/helper, verify, restore | instant, no-risk, certainty-claim wording, modifies platform files without disclosure |
| Platform | platform-neutral package; platform-specific apply paths | Windows success claim unless real Windows evidence exists |

### 1.2 Shared footer disclaimer

Use this exact public-safe footer on every route:

> CodexSkin.fun is an independent customization tool. It is not endorsed by, sponsored by, or connected to the makers of Codex, any sports league, tournament organizer, team, celebrity, anime/game studio, or brand. Public templates use original, genre-inspired artwork only. Names and marks belong to their respective owners.

### 1.3 Shared upload rights text

Use next to any upload field:

> Upload only images you own, created yourself, licensed, or are otherwise allowed to use. Keep third-party celebrity, character, sports, brand, or private-person images private unless you have permission to share them.

Export checkbox:

> I confirm I have the rights or permission to use the uploaded assets, and I understand exported skins containing third-party materials are for my private use unless I have permission to share them.

Export warning:

> Your `.dreamskin` package may include user-provided assets. CodexSkin.fun does not grant rights to third-party content. Do not publish, sell, or share exported skins containing copyrighted, trademarked, or private-person materials unless you have permission.

### 1.4 Shared package anatomy text

Use this whenever the package is explained:

> A `.dreamskin` package is data-only. It may include `manifest.json`, `theme.json`, a background image, a preview image, `LICENSE.txt`, `NOTICE.md`, `user-assets-notice.txt` when needed, `sha256.txt`, and an unsigned export note. It does not include JavaScript, shell scripts, PowerShell scripts, executables, API keys, provider settings, or Codex account data.

### 1.5 Shared trust chips

- Original public templates
- Private local uploads
- Data-only `.dreamskin`
- Readable workspace previews
- Review before applying
- Verify after applying
- Restore anytime

---

## 2. Route × keyword × schema matrix

| Route | Index | Primary keyword cluster | Search intent | Schema |
|---|---:|---|---|---|
| `/` | yes | custom Codex Dream Skin builder | Understand product + start | WebSite + SoftwareApplication + FAQPage |
| `/builder` | yes | Codex skin builder, upload your own image Codex skin | Build/export package | WebApplication + FAQPage |
| `/skins` | yes | Codex skins, original Codex Dream Skin templates | Browse templates | CollectionPage + ItemList |
| `/skins/idol-stage` | yes | idol stage Codex skin template | Remix an idol-stage style | Product + FAQPage |
| `/skins/anime-hero-desk` | yes | anime-style Codex workspace theme | Remix anime-style original | Product + FAQPage |
| `/skins/football-nation-arena` | yes | football arena Codex theme, national color energy skin | Remix sports-arena style | Product + FAQPage |
| `/docs/install` | yes | install Codex skin safely | Understand apply/verify/restore | HowTo + TechArticle + FAQPage |
| `/docs/install/macos` | yes | Codex skin macOS install | macOS-specific path | HowTo + TechArticle |
| `/docs/install/windows` | yes | Codex skin Windows install | Windows documented path | TechArticle + FAQPage |
| `/security` | yes | Codex skin safety, data-only theme package | Trust/security boundary | TechArticle + FAQPage |

---

## 3. Shared navigation and CTA labels

### 3.1 Primary nav

- `Builder` → `/builder`
- `Skins` → `/skins`
- `Install` → `/docs/install`
- `Security` → `/security`

### 3.2 CTA labels

Use short, concrete CTAs:

- `Open Builder`
- `Browse Skins`
- `Remix this style`
- `Export .dreamskin`
- `Read install guide`
- `Review security notes`
- `Verify and restore`

Avoid vague CTAs such as `Learn More` unless used as a secondary text link.

---

## 4. Per-route English copy freeze

### 4.1 `/` — Home

**SEO title (≤60 chars):**  
Codex Dream Skin Builder · Original Codex Skins

**Meta description (≤160 chars):**  
Build Codex Dream Skins from original templates or private uploads. Preview readable states and export a data-only .dreamskin package.

**H1:**  
Build your own Codex Dream Skin.

**Eyebrow:**  
ORIGINAL TEMPLATES · PRIVATE UPLOADS · DATA-ONLY PACKAGE

**Hero copy:**

> Turn Codex into an anime-style desk, idol-stage workspace, sports-arena command room, fantasy guild, mecha bay, esports booth, or personal-photo setup.
>
> Start from original public templates or upload images you have rights to use. Tune crop, dimming, blur, panel opacity, accent color, and readable workspace states in the browser.
>
> Export a reviewable data-only `.dreamskin` package, then follow a clear review, verify, and restore path before applying it to your desktop.

**Above-fold CTAs:**

- Primary: `Open Builder` → `/builder`
- Secondary: `Browse Skins` → `/skins`
- Trust link: `Read install & security notes` → `/docs/install`

**Trust strip:**  
Original public templates · Private local uploads · Data-only `.dreamskin` · Home / Task / Diff / Composer previews · Review / verify / restore

**H2 section order and copy blocks:**

1. `H2 — Dream Skins are identity workspaces, not color swaps`
   - Copy: `A Codex Dream Skin wraps the whole workspace mood: sidebar, task cards, main surface, composer, background, badges, and accents. Color supports readability; identity creates the reason to use it.`
2. `H2 — Start with original public templates`
   - Copy: `Browse IP-safe templates such as Idol Stage, Anime Hero Desk, Football Nation Arena, Basketball Court Lights, Mecha Command Bay, and Fantasy Guild Desk. Each public template is original, genre-inspired, and remixable.`
3. `H2 — Upload your own image privately`
   - Copy: `Use your own art, pet photo, portrait, brand asset, or rights-cleared fandom image in the browser builder. User uploads stay private by default and are not added to the public gallery or sitemap.`
4. `H2 — Export a data-only .dreamskin package`
   - Copy: use §1.4 shared package anatomy.
5. `H2 — Review, verify, restore`
   - Copy: `The package is separate from the engine/helper that applies it. Review the files first, apply only through a path you trust, verify the skin in Codex, and restore if anything looks wrong.`
6. `H2 — FAQ`
   - Use shared FAQ items Q1, Q2, Q4, Q6, Q8.

**Template category rail:**  
`Idol Stage` · `Anime-style Originals` · `Football Arena Vibes` · `Basketball Court Lights` · `Esports Booth` · `Fantasy Guild` · `Mecha Bay` · `Pet / Personal Photo` · `Upload your image`

**Schema notes:**

- `SoftwareApplication.name`: `CodexSkin.fun Dream Skin Builder`
- `SoftwareApplication.description`: `Browser-based builder for original Codex Dream Skin templates, private local uploads, readable workspace previews, and data-only .dreamskin exports.`
- `FAQPage`: use canonical shared FAQ answers from §5.

---

### 4.2 `/builder` — Browser Builder

**SEO title:**  
Codex Skin Builder · Upload, Preview, Export .dreamskin

**Meta description:**  
Use the Codex Skin Builder to upload rights-cleared art, tune readability controls, preview workspace states, and export a data-only .dreamskin.

**H1:**  
Frame the art, preview Codex, export a safe recipe.

**Eyebrow:**  
BROWSER BUILDER · LOCAL PREVIEW · DATA-ONLY EXPORT

**Hero copy:**

> Pick an original template or add your own rights-cleared image. Place the hero area, protect the reading zone, tune panels, and preview the skin across Codex-style workspace states.
>
> The builder runs in your browser. Private uploads are not published by default. The export is a data-only `.dreamskin` package for review, verify, and restore workflows.

**Above-fold CTAs:**

- Primary: `Start building` → `#builder-controls`
- Secondary: `Try a template` → `/skins`
- Trust link: `Read install guide` → `/docs/install`

**Builder step labels:**

1. `Choose a style`
   - Helper: `Start from an original public template or begin with a blank private project.`
2. `Add your image`
   - Helper: `Use art, a pet photo, a portrait, a brand asset, or other material you have rights to use.`
3. `Frame the hero zone`
   - Helper: `Set crop, focal point, safe area, and whether the image sits right, center, full background, or companion-style.`
4. `Tune readable surfaces`
   - Helper: `Adjust dimming, blur, sidebar opacity, main/card opacity, composer contrast, and accent color.`
5. `Preview workspace states`
   - Helper: `Check Home, Task, Diff, and Composer views before export.`
6. `Export .dreamskin`
   - Helper: `Download a data-only package you can inspect before applying.`

**Mandatory upload copy:**

Use §1.3 shared upload rights text next to the upload box, the checkbox, and the export warning.

**Mandatory export microcopy:**

> Export creates a data package, not an installer. Applying a skin requires a separate reviewed engine/helper path. Read the install and security notes before running anything locally.

**H2 section order:**

1. `H2 — What you can customize`
2. `H2 — Local and private by default`
3. `H2 — Readability before export`
4. `H2 — What is inside the .dreamskin package`
5. `H2 — Install, verify, restore`
6. `H2 — Builder FAQ`

**Schema notes:**

- `@type`: `WebApplication`
- `operatingSystem`: `Any browser for building; desktop apply paths are platform-specific`
- `description`: `Local browser builder for original Codex Dream Skin templates, rights-confirmed user uploads, readable workspace previews, and data-only .dreamskin export.`

---

### 4.3 `/skins` — Template Gallery

**SEO title:**  
Original Codex Skins · Dream Skin Template Gallery

**Meta description:**  
Browse original Codex Dream Skin templates: idol-stage, anime-style, sports-arena, mecha, fantasy, esports, pet, and personal-photo styles.

**H1:**  
Browse original Codex Dream Skins.

**Eyebrow:**  
PUBLIC TEMPLATES · GENRE-INSPIRED · REMIXABLE

**Hero copy:**

> Start with a public-safe Codex Dream Skin template, then remix it in the builder. Each template is designed as a full workspace mood — background, panels, cards, composer, badges, and accents.
>
> Public templates use original, genre-inspired artwork. They do not include real celebrity likenesses, team marks, tournament logos, anime/game characters, or brand logos.

**Above-fold CTAs:**

- Primary: `Remix a template` → `/builder`
- Secondary: `View install guide` → `/docs/install`
- Trust link: `Read template rights notes` → `/security`

**Gallery category filters:**

- `Idol Stage Originals`
- `Anime-style Originals`
- `Football Arena Vibes`
- `Basketball Court Lights`
- `Esports Booths`
- `Fantasy Guilds`
- `Mecha Command Bays`
- `Pet / Personal Photo`
- `Readable Baselines`

**Required card fields:**

- Template name
- Category chip
- Emotional one-liner
- Preview state chips: `Home` / `Task` / `Diff` / `Composer`
- Proof chips: `Readable surfaces` · `Data-only package` · `Remixable`
- CTA: `Remix this style`
- Rights note: `Original public template. Upload rights-cleared images only.`

**Six MVP template card one-liners:**

1. `Idol Stage Skin` — `Turn Codex into a concert-stage workspace built around an original cyber-idol mood.`
2. `Anime Hero Desk` — `Code inside an original anime-style hero desk with protected reading surfaces.`
3. `Football Nation Arena` — `Build in a tournament-season arena mood with abstract national color energy and no team marks.`
4. `Basketball Court Lights` — `Turn Codex into a late-night court command desk with spotlight panels and tactical cards.`
5. `Mecha Command Bay` — `Run agents from an original command cockpit with HUD accents and readable panels.`
6. `Fantasy Guild Desk` — `Make Codex feel like a magical research desk with guild notes, warm panels, and clear composer contrast.`

**H2 section order:**

1. `H2 — Featured original Dream Skins`
2. `H2 — Identity categories`
3. `H2 — What every template includes`
4. `H2 — Remix with your own image`
5. `H2 — Rights-safe public templates`
6. `H2 — Gallery FAQ`

**Schema notes:**

- `CollectionPage.name`: `Original Codex Dream Skin Template Gallery`
- `ItemList`: include only public-safe original templates.
- Do not generate schema entries for user-uploaded private exports.

---

### 4.4 `/skins/idol-stage` — Idol Stage Skin

**SEO title:**  
Idol Stage Codex Skin Template · Original Dream Skin

**Meta description:**  
Remix an original idol-stage Codex skin template with concert lights, readable panels, data-only export, and clear rights boundaries.

**H1:**  
Idol Stage Skin for Codex.

**Eyebrow:**  
ORIGINAL IDOL-STAGE TEMPLATE · NO REAL PERSON LIKENESS

**Hero copy:**

> Turn Codex into a concert-stage workspace with spotlight energy, fan-card accents, and an original cyber-idol mood. The skin is designed for a full workspace preview, not a poster pasted behind the app.
>
> Remix this style with your own rights-cleared image, tune the hero zone and panel opacity, then export a reviewable data-only `.dreamskin` package.

**Above-fold CTAs:**

- Primary: `Remix this style` → `/builder?template=idol-stage`
- Secondary: `Browse more skins` → `/skins`
- Trust link: `Read safety boundary` → `/security`

**Feature copy:**

- `Stage-first workspace`: `Sidebar, task cards, badge accents, composer, and background share one concert-stage system.`
- `Readable by design`: `Dimming, frosted panels, and composer contrast keep the skin usable while preserving the stage mood.`
- `Private remix path`: `Bring your own idol-inspired image only if you have rights or permission. Private exports are not public templates.`
- `Data-only export`: use §1.4 shared package anatomy.

**Rights note (mandatory):**

> This public template is an original genre-inspired design. It does not include real performer likenesses, stage brand marks, group names, fan names, album art, logos, or sponsorship marks. If you customize it with your own images, you are responsible for having the rights to use and share those assets.

**H2 section order:**

1. `H2 — Concert-stage workspace preview`
2. `H2 — Readable surfaces and theme tokens`
3. `H2 — Remix controls`
4. `H2 — What exports in the package`
5. `H2 — Rights and private-use boundary`
6. `H2 — Related original skins`

**Related links:**  
`Anime Hero Desk` · `Football Nation Arena` · `Esports Booths`

**Schema notes:**

- `Product.name`: `Idol Stage Skin for Codex`
- `Product.description`: `Original idol-stage Codex Dream Skin template with readable workspace preview and data-only .dreamskin export.`
- `brand.name`: `CodexSkin.fun`
- `isFamilyFriendly`: `true`

---

### 4.5 `/skins/anime-hero-desk` — Anime Hero Desk

**SEO title:**  
Anime-Style Codex Workspace Theme · Anime Hero Desk

**Meta description:**  
Remix Anime Hero Desk, an original anime-style Codex workspace template with protected reading surfaces and data-only .dreamskin export.

**H1:**  
Anime Hero Desk.

**Eyebrow:**  
ORIGINAL ANIME-STYLE WORKSPACE · NO KNOWN CHARACTER IP

**Hero copy:**

> Code inside an original anime-style hero workspace: a bright character-world mood, protected reading surfaces, themed task cards, and a composer that still feels ready for real work.
>
> Start from this public-safe template or add your own rights-cleared art privately. Preview Home, Task, Diff, and Composer states before exporting a data-only `.dreamskin` package.

**Above-fold CTAs:**

- Primary: `Remix this style` → `/builder?template=anime-hero-desk`
- Secondary: `Browse original skins` → `/skins`
- Trust link: `Read install guide` → `/docs/install`

**Feature copy:**

- `Original hero-world mood`: `Built around a fictional anime-style workspace, not a known character, scene, logo, weapon, outfit, phrase, or franchise.`
- `Workspace-first preview`: `The preview shows sidebar, hero surface, task cards, and composer as one usable Codex-like desk.`
- `Readability controls`: `Tune dimming, blur, safe area, panel opacity, and accent strength before export.`
- `Reviewable package`: `The exported .dreamskin is data-only and can be inspected before any apply path is used.`

**Rights note (mandatory):**

> This public template is an original anime-style design. It does not include known anime/game characters, studio marks, series names, costumes, weapons, dialogue, or logos. User-provided character art must stay private unless you have permission to share it.

**H2 section order:**

1. `H2 — Original anime-style workspace`
2. `H2 — Preview states`
3. `H2 — Remix controls for hero art`
4. `H2 — Data-only package contents`
5. `H2 — Character art rights boundary`
6. `H2 — Related original skins`

**Related links:**  
`Idol Stage Skin` · `Mecha Command Bay` · `Fantasy Guild Desk`

**Schema notes:**

- `Product.name`: `Anime Hero Desk`
- `Product.description`: `Original anime-style Codex Dream Skin template with private remix controls, readable states, and data-only .dreamskin export.`

---

### 4.6 `/skins/football-nation-arena` — Football Nation Arena

**SEO title:**  
Football Arena Codex Theme · Original Dream Skin

**Meta description:**  
Remix an original football-arena Codex theme with abstract national color energy, readable panels, and data-only .dreamskin export.

**H1:**  
Football Nation Arena.

**Eyebrow:**  
ORIGINAL SPORTS-ARENA TEMPLATE · NO TEAM OR TOURNAMENT MARKS

**Hero copy:**

> Build in a tournament-season arena mood: stadium light, tactical panels, abstract jersey texture, national color energy, and a Codex-like command desk that stays readable.
>
> This is an original sports-arena template. It does not use real flags, crests, player likenesses, league marks, tournament logos, or protected team designs. Remix it with your own rights-cleared image only when you have permission.

**Above-fold CTAs:**

- Primary: `Remix this style` → `/builder?template=football-nation-arena`
- Secondary: `Browse sports styles` → `/skins?category=sports`
- Trust link: `Review security notes` → `/security`

**Feature copy:**

- `Arena mood without protected marks`: `Use lights, stripes, score-inspired cards, and color energy without copying real teams, players, leagues, tournaments, flags, crests, or kits.`
- `Readable command desk`: `Panels and composer contrast are tuned so the arena stays useful for coding, review, and agent tasks.`
- `Private fan remixes`: `If you upload team, player, or event-related material, keep it private unless you have permission to share it.`
- `Data-only package`: use §1.4 shared package anatomy.

**Rights note (mandatory):**

> This public template is an original sports-arena design. It does not include real team crests, flags, player likenesses, league identifiers, tournament marks, authentic jerseys, trophies, or brand logos. User uploads are your responsibility and should remain private unless you have sharing rights.

**H2 section order:**

1. `H2 — Tournament-season workspace mood`
2. `H2 — Abstract national color energy`
3. `H2 — Readable panels for real work`
4. `H2 — Remix controls`
5. `H2 — Sports rights boundary`
6. `H2 — Related original skins`

**Related links:**  
`Basketball Court Lights` · `Idol Stage Skin` · `Esports Booths`

**Schema notes:**

- `Product.name`: `Football Nation Arena`
- `Product.description`: `Original football-arena Codex Dream Skin template with abstract national color energy, readable workspace surfaces, and data-only .dreamskin export.`

---

### 4.7 `/docs/install` — Install Overview

**SEO title:**  
Install Codex Skins Safely · Review, Verify, Restore

**Meta description:**  
Learn how Codex Dream Skin packages work: review the data-only .dreamskin, use a separate apply path, verify the result, and restore anytime.

**H1:**  
Install a Codex skin safely, then restore anytime.

**Eyebrow:**  
INSTALL GUIDE · REVIEW FIRST · VERIFY · RESTORE

**Hero copy:**

> A Codex Dream Skin has two parts: the `.dreamskin` data package you can inspect, and the separate engine/helper path that applies it to your desktop environment.
>
> Start by reviewing the package contents. Then choose the platform guide, apply only through a path you trust, verify the result, and restore if the skin is not readable or not what you expected.

**Above-fold CTAs:**

- Primary: `Read macOS path` → `/docs/install/macos`
- Secondary: `Read Windows path` → `/docs/install/windows`
- Trust link: `Review security notes` → `/security`

**Install flow labels:**

1. `Review package`
   - Copy: `Open the .dreamskin zip and inspect manifest, theme tokens, images, license, NOTICE, and checksum.`
2. `Review engine/helper`
   - Copy: `The data package cannot apply itself. Review the separate engine or helper before running it.`
3. `Apply`
   - Copy: `Use the platform-specific path only after review. Keep the skin package separate from executable code.`
4. `Verify`
   - Copy: `Check that the expected skin is active and that sidebar, main content, cards, and composer remain readable.`
5. `Restore`
   - Copy: `Return Codex to its prior appearance if the skin fails, is unreadable, or you simply want to undo it.`

**Platform status block:**

> `.dreamskin` packages are platform-neutral review artifacts. Applying them is platform-specific. Do not treat a documented path as evidence-tested unless a page shows real install, apply, verify, and restore evidence for that platform and version.

**H2 section order:**

1. `H2 — Before you start`
2. `H2 — What a .dreamskin package can and cannot do`
3. `H2 — macOS path`
4. `H2 — Windows path`
5. `H2 — Verify readability after applying`
6. `H2 — Restore and recover`
7. `H2 — Install FAQ`

**Schema notes:**

- `HowTo.name`: `Install a Codex Dream Skin package safely`
- Steps: `Review package`, `Review engine`, `Apply`, `Verify`, `Restore`.
- `TechArticle.description`: `Review-first install guide for data-only Codex Dream Skin packages, platform-specific apply paths, verification, and restore.`

---

### 4.8 `/docs/install/macos` — macOS Guide

**SEO title:**  
Codex Skin macOS Install Guide · Verify and Restore

**Meta description:**  
macOS guide for Codex Dream Skin packages: review the data-only .dreamskin, run a trusted apply path, verify readability, and restore.

**H1:**  
Install and verify a Codex Dream Skin on macOS.

**Eyebrow:**  
MACOS PATH · REVIEW PACKAGE · VERIFY RESULT · RESTORE

**Hero copy:**

> On macOS, treat the `.dreamskin` file as a data package and the apply helper as a separate trust decision. Review both before running anything.
>
> After applying a skin, verify that the theme appears in the expected Codex window and that the sidebar, main work area, cards, and composer remain readable. If anything fails, restore first.

**Above-fold CTAs:**

- Primary: `Review package contents` → `#package-review`
- Secondary: `Read security notes` → `/security`
- Trust link: `Back to install overview` → `/docs/install`

**macOS step copy:**

1. `Step 1 — Inspect the .dreamskin package`
   - `Confirm the package contains only data files: manifest, theme tokens, images, license, NOTICE, checksum, and optional user-assets notice.`
2. `Step 2 — Review the macOS apply path`
   - `The apply helper is the active component. Review its source and understand what it changes before running it.`
3. `Step 3 — Apply to a running desktop session`
   - `Apply only from a local path you trust. Keep the package and helper separate so the theme data remains inspectable.`
4. `Step 4 — Verify the result`
   - `Check that the intended skin is visible and that body text, muted text, buttons, cards, and composer remain readable.`
5. `Step 5 — Restore`
   - `Run the restore path and relaunch if the skin fails, becomes unreadable, or you want to return to the prior appearance.`

**Mandatory claim note:**

> Only write “tested on macOS” for a specific package/version after real install, apply, verify screenshot, and restore evidence exists. If evidence is missing, use “macOS path documented; verify on your own version.”

**H2 section order:**

1. `H2 — Package review`
2. `H2 — Helper review`
3. `H2 — Apply path`
4. `H2 — Verify readability`
5. `H2 — Restore path`
6. `H2 — macOS FAQ`

**Schema notes:**

- `HowTo.name`: `Install and verify a Codex Dream Skin on macOS`
- Keep claims evidence-scoped per package/version.

---

### 4.9 `/docs/install/windows` — Windows Guide

**SEO title:**  
Codex Skin Windows Guide · Documented Apply Path

**Meta description:**  
Windows guide for Codex Dream Skin packages. Review the data-only .dreamskin, inspect any helper path, verify locally, and restore if needed.

**H1:**  
Windows install path and restore checklist.

**Eyebrow:**  
WINDOWS PATH · DOCUMENTED · REVIEW REQUIRED

**Hero copy:**

> A `.dreamskin` package is platform-neutral data, but applying it on Windows requires a Windows-specific path that must be reviewed and verified on your own setup unless evidence is shown.
>
> Do not treat a data package as a working Windows apply flow. Inspect the package, inspect any script or helper separately, run only on a machine you control, verify the visible result, and restore if anything looks wrong.

**Above-fold CTAs:**

- Primary: `Review Windows checklist` → `#windows-checklist`
- Secondary: `Read security notes` → `/security`
- Trust link: `Back to install overview` → `/docs/install`

**Windows checklist copy:**

1. `Inspect the .dreamskin package`
   - `Confirm it contains only data files and no executable code.`
2. `Inspect the Windows apply path`
   - `Read any PowerShell or helper source before running it. A helper is a separate trust layer, not part of the data package.`
3. `Run locally only if you accept the risk`
   - `Use a machine you control. Do not bypass security prompts you do not understand.`
4. `Verify the skin`
   - `Capture or inspect the result. Confirm the intended skin is active and core text remains readable.`
5. `Restore`
   - `Run the documented restore path, relaunch, and confirm the prior appearance returns.`

**Mandatory status disclosure:**

> Windows path status: documented and review-required unless a specific package page shows real Windows install, apply, verify, screenshot, manual interaction, restore, and relaunch evidence. Until then, do not describe the path as tested.

**H2 section order:**

1. `H2 — What is cross-platform`
2. `H2 — What is Windows-specific`
3. `H2 — Windows checklist`
4. `H2 — Verify before trusting the result`
5. `H2 — Restore and relaunch`
6. `H2 — Windows FAQ`

**Schema notes:**

- `TechArticle.headline`: `Codex Skin Windows Guide`
- `TechArticle.description`: `Documented Windows checklist for reviewing data-only Codex Dream Skin packages, inspecting any apply helper, verifying locally, and restoring.`
- Do not use `HowTo` wording that implies tested completion unless evidence exists.

---

### 4.10 `/security` — Safety Boundary

**SEO title:**  
Codex Skin Safety · Data-Only Packages and Restore

**Meta description:**  
Understand CodexSkin.fun safety boundaries: original templates, private uploads, data-only .dreamskin packages, separate apply paths, verify, restore.

**H1:**  
Codex skin safety begins with clear boundaries.

**Eyebrow:**  
SECURITY · RIGHTS · DATA PACKAGE · RESTORE

**Hero copy:**

> CodexSkin.fun separates creative skin data from the engine/helper that applies it. The `.dreamskin` package is designed to be inspectable, inert, and separate from any local apply path.
>
> Public templates are original and genre-inspired. User uploads are private by default and require rights confirmation before export. Applying a skin should always follow review, verify, and restore steps.

**Above-fold CTAs:**

- Primary: `Read install guide` → `/docs/install`
- Secondary: `Open Builder` → `/builder`
- Trust link: `Browse original templates` → `/skins`

**Boundary blocks:**

1. `Data package boundary`
   - `A .dreamskin package contains theme data and assets for review. It does not install itself, execute code, collect Codex conversations, or include API/provider settings.`
2. `Engine/helper boundary`
   - `Any helper that applies a skin is a separate trust layer. Review it before running and restore if the result is wrong or unreadable.`
3. `Public template boundary`
   - `Public templates use original, genre-inspired artwork only. They do not contain real performer likenesses, team marks, tournament marks, anime/game characters, or brand logos.`
4. `User upload boundary`
   - `Private uploads are for assets you own, created, licensed, or are otherwise allowed to use. Do not publish exported skins containing third-party materials unless you have permission.`
5. `Restore boundary`
   - `Every apply path must include a restore path. If verification fails, restore before further experimentation.`

**H2 section order:**

1. `H2 — Theme data vs apply engine`
2. `H2 — What .dreamskin packages do not include`
3. `H2 — Public templates and IP boundaries`
4. `H2 — Private uploads and rights confirmation`
5. `H2 — Platform claims and evidence`
6. `H2 — Verify and restore`
7. `H2 — Safety FAQ`

**Mandatory platform claim copy:**

> `.dreamskin` packages are platform-neutral data. macOS and Windows apply paths are platform-specific and evidence-scoped. Do not rely on a platform claim unless the page shows real install, apply, verify, and restore evidence for that package/version.

**Schema notes:**

- `TechArticle.headline`: `CodexSkin.fun Safety Boundary`
- `TechArticle.description`: `Security, rights, and restore boundaries for original Codex Dream Skin templates, private uploads, data-only .dreamskin packages, and platform-specific apply paths.`

---

## 5. Shared FAQ block

Use these answer-level copies verbatim where relevant. Do not create SEO pages around protected names or real people/teams/characters.

**Q1. What is a Codex Dream Skin?**  
A Codex Dream Skin is a workspace skin recipe for Codex-style desktop use. It combines a background, safe areas, readable panels, accents, and preview states so the workspace feels like an identity theme instead of a simple color swap.

**Q2. What is a `.dreamskin` package?**  
A `.dreamskin` package is a data-only review artifact. It can include a manifest, theme tokens, background image, preview image, license, NOTICE, checksum, and optional user-assets notice. It does not include executable code or credentials.

**Q3. Does the Builder upload my image?**  
The MVP builder is written for local/private uploads by default. User images should not be added to the public gallery, sitemap, marketing screenshots, or shared packages unless a future reviewed sharing flow is built and you choose to publish.

**Q4. Can I use my own fandom, sports, character, celebrity, or brand image?**  
You may upload assets only if you own them, created them, licensed them, or are otherwise allowed to use them. If the asset contains third-party material, keep the export private unless you have permission to share or distribute it.

**Q5. Why are public templates generic instead of using real names?**  
Public templates must be original and genre-inspired. They cannot use real performer likenesses, team marks, tournament identifiers, anime/game characters, brand logos, or names that imply permission or endorsement.

**Q6. Does a `.dreamskin` install itself?**  
No. A `.dreamskin` package is inert data. Applying it requires a separate engine/helper path that you should review before running.

**Q7. How do I know a skin is readable?**  
Preview Home, Task, Diff, and Composer states before export. After applying, verify sidebar text, main content, cards, buttons, muted text, and composer contrast. Restore if the skin interferes with work.

**Q8. Is Windows supported?**  
The package format is platform-neutral data. A Windows apply path is documented only when available, and it should be reviewed and verified on your own setup unless a specific page shows real Windows evidence for that package/version.

**Q9. How do I undo a skin?**  
Use the restore path for the engine/helper you used, then relaunch and confirm the prior appearance returns. If verification fails, restore before trying another package.

**Q10. Is CodexSkin.fun connected to Codex or any rights holder?**  
No. CodexSkin.fun is an independent customization tool. Public templates are original, genre-inspired designs, and no endorsement by any platform, sports organization, team, celebrity, anime/game studio, or brand is implied.

---

## 6. Inter-page link plan

| From route | Required visible links |
|---|---|
| `/` | `/builder`, `/skins`, `/docs/install`, `/security` |
| `/builder` | `/skins`, `/docs/install`, `/security` |
| `/skins` | `/builder`, all 3 MVP detail routes, `/security` |
| `/skins/idol-stage` | `/builder?template=idol-stage`, `/skins`, `/security` |
| `/skins/anime-hero-desk` | `/builder?template=anime-hero-desk`, `/skins`, `/docs/install` |
| `/skins/football-nation-arena` | `/builder?template=football-nation-arena`, `/skins`, `/security` |
| `/docs/install` | `/docs/install/macos`, `/docs/install/windows`, `/security`, `/builder` |
| `/docs/install/macos` | `/docs/install`, `/security`, `/skins` |
| `/docs/install/windows` | `/docs/install`, `/security`, `/skins` |
| `/security` | `/docs/install`, `/builder`, `/skins` |

---

## 7. Design / frontend implementation notes

### 7.1 Above-fold visual requirement

The homepage and `/skins` must not lead with neutral/pure color cards. Use one of:

- Football Nation Arena
- Idol Stage Skin
- Anime Hero Desk

Visuals must show a Codex-like workspace: sidebar, main area, task cards, composer, and a themed hero zone. Do not use a standalone poster or wallpaper as the product preview.

### 7.2 Template detail layout contract

Each template route should include:

1. Hero preview + emotional hook
2. `Remix this style` CTA
3. Home / Task / Diff / Composer preview states
4. Readability controls summary
5. `.dreamskin` package anatomy
6. Rights note
7. Install/security link
8. Related original templates

### 7.3 Builder UI copy contract

The builder must show these controls in user language:

- Style preset
- Upload image
- Crop / focal point
- Hero zone
- Safe reading area
- Dimming
- Blur
- Sidebar opacity
- Main/card opacity
- Composer contrast
- Accent color
- Preview state: Home / Task / Diff / Composer
- Rights checkbox
- Export `.dreamskin`

---

## 8. Compliance scan checklist

Before implementation sign-off, every route must pass:

- [ ] No claim of platform approval, endorsement, sponsorship, partnership, or direct connection to Codex makers.
- [ ] No absolute-safety, no-risk, certainty-claim, or unsupported instant-install language.
- [ ] No Windows evidence claim unless real Windows install/apply/verify/restore evidence exists for that package/version.
- [ ] Every download/export CTA calls `.dreamskin` data-only or reviewable.
- [ ] Every install page separates theme data from engine/helper.
- [ ] Every install/security page includes verify and restore.
- [ ] Public templates avoid real people, team marks, tournament marks, anime/game characters, brand logos, and specific protected names.
- [ ] User upload copy includes rights confirmation and private-use warning.
- [ ] User-uploaded outputs are not indexed, added to gallery, or used as public examples by default.
- [ ] Schema entries use generic/original template names only.
- [ ] Footer disclaimer appears on every route.

---

## 9. Acceptance checklist

- [ ] All 10 requested routes have title, meta, H1, hero copy, CTAs, H2 order, schema notes, and compliance copy.
- [ ] Chinese summary exists for product/design/dev/compliance handoff.
- [ ] English page copy is implementation-ready.
- [ ] `/`, `/builder`, `/skins`, 3 detail routes, install overview, macOS, Windows, and security all mention data-only package or review boundary.
- [ ] The three required detail routes are original public templates with explicit rights notes.
- [ ] macOS/Windows claims are evidence-scoped and do not overstate support.
- [ ] Public copy emphasizes original templates + private uploads + review/verify/restore.

---

## 10. Status

[DONE: SEO_COPY_FREEZE]

Frozen output file: `docs/SEO-COPY-FREEZE-codexskin-themed-mvp-2026-07-22.md`

Next downstream stages:

1. Design should produce marketplace previews and live-background decomposition for Idol Stage / Anime Hero Desk / Football Nation Arena.
2. Frontend should wire copy and route structure exactly from this freeze; do not rewrite page messaging during implementation.
3. Compliance should run route/page/schema/alt/package-name review before launch.
4. QA should verify TECH / USABILITY / VISUAL / COMPLIANCE / OWNER gates separately.
