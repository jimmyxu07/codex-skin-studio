# CodexSkin.fun 正式 PRD v1 — 情绪身份 Codex Dream Skin Builder

日期：2026-07-22  
Owner：J少  
产品负责人：小禄 / Product  
状态：OFFICIAL_PRD_V1_FOR_DOWNSTREAM  
优先级：P0 reset / replaces pure-color PRD attempts

> 本文为 CodexSkin.fun 当前唯一正式 PRD v1。  
> `docs/PRD-codexskin-themed-customization-reset-2026-07-22.md` 是小齐临时纠偏备忘，不是正式 PRD；`docs/PRD-codexskin-redefinition-2026-07-21.md` 中“Dream Skin 包 + Builder + Install/Restore guide”的方向保留，但首发产品定义必须从“专业/中性/纯色可读主题”进一步纠正为“可定制情绪身份皮肤”。

---

## 0. 产品定义纠偏结论

J少最新反馈已经确认：用户不是要纯色皮肤，也不是深色/浅色 token 包。

CodexSkin.fun 的正式产品定义是：

```text
面向 Codex Desktop 用户的可定制情绪身份 Dream Skin Builder：
用原创主题模板或用户自有素材，把 Codex 变成动漫、偶像、体育、世界杯/国家队氛围、电竞、幻想、宠物/个人照片等身份工作台；
在浏览器本地预览和导出 data-only .dreamskin 包；
通过 macOS / Windows 平台边界清楚的 install / verify / restore 路径安全应用。
```

一句话定位（中文）：

> 把 Codex 变成你的动漫、偶像、球队、幻想或个人照片工作台，并导出可检查、可恢复的 `.dreamskin` 皮肤包。

One-liner（英文）：

> Build your own Codex Dream Skin — anime-style, idol-stage, sports-arena, fantasy, esports and personal-photo workspaces — then export a reviewable `.dreamskin` package with clear install, verify and restore paths.

### 0.1 不再成立的旧定义

以下不再作为首发主产品：

- pure dark theme / dark cinematic token pack；
- pure light neutral theme / professional color theme；
- Glass Desk / Executive Slate / Paper Workspace 作为 lead skins；
- 仅展示漂亮 UI mock 的皮肤图集；
- 仅下载 CSS / palette / recipe 文本；
- 技术 helper apply 成功即等于产品成功。

纯色/中性模板可以保留为 readability baseline 或 secondary utility，但不能占据首页首屏、gallery 主分类、首批 Owner Review。

### 0.2 对标站核心理解

对标 `codexskin.org` 首页、`/builder/`、`/docs/install/`、`/security/` 的实际结构是：

```text
强情绪视觉吸引
→ Open studio / Remix
→ 本地处理用户图片或原创模板
→ 调整 crop / dimming / blur / panel opacity / accent
→ Home / Task / Diff / Composer 预览
→ 导出 data-only recipe / .dreamskin
→ reviewed engine 安装、验证、恢复
→ 安全边界与付费 shortcut / custom 服务
```

对标站卖点不是颜色，而是：

- `Make Codex look impossible. Keep it safe to use.`
- personal photo / pop culture / portrait / playful / stage / pet / custom；
- local image processing；
- data-only package；
- reviewed engine；
- review-first install；
- restore-first trust boundary。

CodexSkin.fun 应复刻机制、页面结构和商业心理，但不得复制对标站图片、文案、源码、logo 或任何可识别 IP/人物/球队/赛事资产。

---

## 1. 目标用户 / ICP

### 1.1 主 ICP：Codex Desktop 重度用户 / AI coding 工具玩家

画像：

- 每天长时间使用 Codex Desktop / ChatGPT Desktop / coding agent；
- 觉得默认界面无聊、没有个人身份、没有工作台氛围；
- 会被“我的偶像 / 动漫世界 / 球队氛围 / 电竞房 / 魔法公会进入 Codex”的截图吸引；
- 有一定技术能力，愿意运行本地 helper 或 reviewed engine，但必须知道风险与恢复路径；
- 需要可读性，但可读性只是底线，不是购买/下载动机。

核心需求：

> “我想让 Codex 看起来像我的世界，而且真的能用、能看清、能恢复。”

### 1.2 次 ICP：fandom / sports / anime / creator 用户

画像：

- 对明星、偶像、动漫、体育赛事、世界杯国家队、篮球/足球、电竞、宠物/个人照片有强情绪连接；
- 不一定会从零写 CSS，但愿意上传图片、调参数、导出包；
- 关心“能不能用我自己的图”，并默认希望私用；
- 需要明确版权/肖像/商标提示。

核心需求：

> “我能不能把我喜欢的明星感、球队感、动漫角色世界或自己的宠物做进 Codex？”

### 1.3 次 ICP：AI 工具站 / SEO / 小产品玩家

画像：

- 关注 `Codex Skin`、`Codex Dream Skin`、`Codex Desktop theme` 等热词；
- 需要可分享的模板、预览、安装说明、安全边界；
- 可能购买 guide / recipe pack / custom service；
- 需要明确不能做官方/侵权/IP 暗示。

---

## 2. 用户任务 / P0 Jobs To Be Done

### Job A — 情绪身份皮肤

用户想把 Codex 变成能表达自己的工作台：偶像舞台、动漫主角桌、足球国家队氛围、篮球场、电竞房、幻想公会、机甲驾驶舱、宠物陪伴等。

成功标准：

- 首页/画廊第一眼能看懂“这不是换色，是身份皮肤”；
- 每张卡有明确 emotional hook，不只是 palette；
- preview 是 Codex-like workspace，不是单张海报/壁纸；
- live skin 将主题分布到 sidebar/main/cards/composer/accent，而不是角落贴纸。

### Job B — 上传自有素材私用

用户想上传自己拥有权利的明星照、宠物照、自拍、授权同人、球队色彩灵感或品牌素材，生成私有 `.dreamskin`。

成功标准：

- Builder 支持本地上传 / crop / safe area / hero placement；
- 上传素材默认 local/private，不进公开 gallery、不进 sitemap、不生成公开分享页；
- 导出前必须确认素材权利；
- 导出包包含 user-assets notice；
- 平台不承诺用户拥有第三方内容权利。

### Job C — 安全导出与安装

用户想导出一个可以检查的皮肤包，并知道如何安装、验证、恢复。

成功标准：

- 默认导出 data-only `.dreamskin` 包；
- 页面清楚解释 theme package vs engine/helper；
- macOS / Windows 口径拆开；
- 安装说明包含 review-first、verify、restore；
- 不把 package 伪装成自安装 executable。

### Job D — 真实可用与可读

用户想皮肤好看，同时不影响 Codex 工作。

成功标准：

- Home / Task / Diff / Composer 至少三态预览；
- sidebar/main/composer 保护阅读；
- body text contrast ≥ 4.5:1，large/title ≥ 3.0:1，placeholder/muted ≥ 3.0:1；
- 通过真实 Codex screenshot/DOM evidence 后才能称 `USABILITY_GO`；
- Owner 认可视觉商品感后才能称 `FINAL_GO`。

---

## 3. 产品范围：MVP / NOT-DO

### 3.1 MVP 必须交付

#### P0.1 首页定位与强情绪首屏

- H1 改成情绪身份 Dream Skin Builder 口径；
- 首屏视觉使用 Idol Stage / Football Nation Arena / Anime Hero Desk 之一，不再用 Glass Desk / Paper / neutral；
- category rail 显示 Anime / Idol / Football / Basketball / Esports / Fantasy / Mecha / Pet / Upload your image；
- trust chips：Local image processing / Data-only package / Review-first install / Restore path / Rights-cleared public templates。

#### P0.2 公开模板 Gallery

首批至少 6 个 IP-safe 原创模板：

1. Idol Stage Skin；
2. Anime Hero Desk；
3. Football Nation Arena；
4. Basketball Court Lights；
5. Mecha Command Bay；
6. Fantasy Guild Desk。

可选扩展：Esports Neon Booth、Pet Companion Desk、Seasonal/Festival。

每张模板卡必须包含：

```text
16:9/16:10 Codex-like workspace preview
+ category chip
+ emotional one-liner
+ proof chips: Readable surfaces / Data-only package / Remixable
+ CTA: Remix / View full preview / Export .dreamskin
+ rights note
```

#### P0.3 Builder v0

Builder 必须围绕“用户能把自己的图变成 Codex skin”，不是调色板。

必须支持：

- 选择 preset / 上传本地图片；
- crop / focal point / hero zone；
- dimming / blur / panel opacity / readability mode；
- accent color / secondary / highlight；
- surface mode：Home / Task / Diff / Composer 预览；
- rights checkbox；
- export data-only `.dreamskin`；
- install/safety guide 入口。

#### P0.4 `.dreamskin` data package contract

默认主 CTA 导出 data-only package：

```text
<slug>.dreamskin.zip
├── manifest.json
├── theme.json
├── background.webp|jpg
├── preview.webp|jpg
├── LICENSE.txt
├── NOTICE.md
├── user-assets-notice.txt        # 若包含用户上传素材
├── sha256.txt
└── signature.json                # 本地导出可标 unsigned
```

必须声明：

- `.dreamskin` 是 inert data，不包含 JavaScript、shell、PowerShell、executables、API key、provider config；
- engine/helper 是单独信任层；
- 用户应先 review engine 再运行；
- package 本身不能自己安装。

#### P0.5 Install / Security / Restore 文档

必须提供：

- `/docs/install` 或 `/docs/install/macos` + `/docs/install/windows`；
- `/security`；
- theme data vs engine 的边界；
- local CDP 风险；
- official Codex files untouched claim 仅在真实机制支持时使用；
- restore sequence；
- macOS 与 Windows claims 拆分。

#### P0.6 首批设计 Owner Review 包

Design 下游首批应提交至少 3 个强情绪模板：

1. Idol Stage Skin；
2. Anime Hero Desk；
3. Football Nation Arena。

每个模板必须交付：

- marketplace-preview.png；
- live-background.png（无 UI 文字/无 logo/无真实 IP）；
- simulated-codex-overlay.png；
- sidebar / main / composer crops；
- asset.json；
- prompts / rights notes；
- 3 秒 IP 识别测试结论。

当前仓库已有 `design-xiu-themed-v1/` first 3 handoff，可作为 Owner Review 输入，但仍需 Owner 认可后再进入真实 app apply。

### 3.2 MVP 不做 / NOT-DO

- 不做纯色皮肤作为首发主线；
- 不做 Cute mascot / pet sticker 作为首发主视觉；
- 不做真实明星、动漫角色、球员、球队、国家队、World Cup/FIFA、NBA、游戏 IP 公开模板；
- 不做 `official Codex / OpenAI endorsed / sponsored / licensed` 说法；
- 不做未经实测的 `tested on Windows` claim；
- 不做“一个 ZIP 自动安装一切”的误导；
- 不把 arbitrary CSS / executable helper 放进 `.dreamskin` 主包；
- 不开放用户上传素材公开 gallery / share feed，除非先有审核、举报、下架机制；
- 不做支付、账号、云同步、创作者市场、签名跨平台 helper，除非安全、税务、退款、代码签名与 QA 准备完成。

---

## 4. 页面矩阵 / Route Contract

| Route | Index | 页面目标 | 主词/意图 | H1 建议 | CTA | Schema/备注 |
|---|---:|---|---|---|---|---|
| `/` | yes | 解释 CodexSkin 是情绪身份 Dream Skin Builder | custom Codex dream skin builder | Build your own Codex Dream Skin | Open Builder / Browse Skins | SoftwareApplication + FAQ；首屏用强情绪 workspace preview |
| `/builder` | yes | 本地上传/预览/导出 `.dreamskin` | Codex skin builder / upload your own image Codex skin | Frame the art, preview Codex, export a safe recipe | Export .dreamskin / Read install guide | 明确 local/private；上传权利 checkbox |
| `/skins` | yes | 模板库与 category 导航 | Codex skins / anime-style / sports-arena / idol-stage | Browse original Codex Dream Skins | Remix / View / Export | CollectionPage；只索引原创 public templates |
| `/skins/idol-stage` | yes | 偶像舞台原创模板详情 | idol stage Codex skin template | Idol Stage Skin for Codex | Remix this style | 禁止真实艺人名、团名、肖像 |
| `/skins/anime-hero-desk` | yes | 原创二次元风模板详情 | anime-style Codex workspace theme | Anime Hero Desk | Remix this style | 禁止已知角色/作品名 |
| `/skins/football-nation-arena` | yes | 球场/国家队氛围模板详情 | football arena Codex theme / national color energy | Football Nation Arena | Remix this style | 不使用真实国家队、旗帜、队徽、FIFA/World Cup marks |
| `/skins/basketball-court-lights` | yes | 篮球场灯光模板详情 | basketball court workspace theme | Basketball Court Lights | Remix this style | 不使用 NBA/team/player likeness |
| `/skins/mecha-command-bay` | yes | 原创机甲驾驶舱模板详情 | mecha cockpit Codex theme | Mecha Command Bay | Remix this style | 不使用 Gundam/EVA/Transformers 可识别设计 |
| `/skins/fantasy-guild-desk` | yes | 魔法公会/幻想模板详情 | fantasy guild coding workspace skin | Fantasy Guild Desk | Remix this style | 不使用 HP/Tolkien/game franchise symbols |
| `/docs/install` | yes | 总安装指南 | install Codex skin safely | Install a Codex skin safely, then restore anytime | Review source / Build package | 解释 native vs enhanced；macOS/Windows 路径分流 |
| `/docs/install/macos` | yes | macOS 平台路径 | Codex skin macOS install | Install and verify on macOS | Review engine / Restore | 只有有证据才写 `tested on macOS` |
| `/docs/install/windows` | yes | Windows 平台路径 | Codex skin Windows install | Windows install path and restore checklist | Read Windows path | 未真机证据前只写 `Windows path documented` |
| `/security` | yes | 安全与隐私边界 | Codex skin safety / data-only theme package | Codex skin safety begins with clear boundaries | Read before install | Security/FAQ；CDP threat model；theme data vs engine |
| `/custom-codex-skin` | yes | 用户自有素材/定制入口 | custom Codex skin with your image | Turn your own rights-cleared image into a Codex skin | Start custom / Open Builder | 强 rights-cleared，不展示用户 IP 样例 |
| `/free-codex-skins` | yes | 免费原创模板与 data recipes | free Codex skins | Free original Codex Dream Skin recipes | Browse / Export | 只列 public-safe originals |
| `/privacy` | yes | 隐私政策 | privacy | Privacy Policy | - | 说明本地处理/上传策略 |
| `/terms` | yes | 服务条款 | terms | Terms of Use | - | 用户上传权利责任、禁止内容 |

### 4.1 不应建立的 SEO 页面

不要建这些公开 index 页面：

- `/skins/messi`、`/skins/ronaldo`、`/skins/taylor-swift`、`/skins/bts`；
- `/skins/naruto`、`/skins/one-piece`、`/skins/gundam`；
- `/skins/world-cup`、`/skins/fifa`、`/skins/lakers`、`/skins/argentina-national-team`；
- 任何真实明星/球队/动漫/赛事/品牌主词页面。

如用户询问，可放在 FAQ 中用非索引/泛化方式回答：只有在拥有权利时才能本地私用上传，不得无权公开分发。

---

## 5. Builder 数据流 / Data Flow

### 5.1 主流程

```text
Entry
  → choose preset OR upload local image
  → rights confirmation for uploads
  → browser-only decode / resize / WebP conversion
  → palette extraction / suggested accents
  → choose identity layout
      right hero zone / center hero / full background / pet companion
  → tune readability
      dimming / blur / sidebar opacity / main panel opacity / composer contrast
  → preview states
      Home / Task / Diff / Composer
  → run local validation
      file size / dimensions / contrast approximations / forbidden public fields
  → export .dreamskin.zip
  → show install / verify / restore guide
```

### 5.2 数据边界

| 数据 | 是否上传服务器 | 默认可见性 | 说明 |
|---|---:|---|---|
| Public template preset metadata | 可随站点公开 | public | 原创/授权模板，进入 sitemap |
| Public template preview/background | 可公开托管 | public | 必须通过 IP-safe 审核 |
| User uploaded image | P0 默认不上传 | local/private | 浏览器本地处理；如未来云端保存必须 opt-in private |
| User generated `.dreamskin` | 本地下载 | private | 不自动分享、不进 gallery、不进 sitemap |
| Analytics | 可收集匿名事件 | aggregate | 不收集图片、Codex conversations、API keys、provider settings |
| Engine/helper | 单独下载/跳转 | review-required | 不嵌入 data package；由 install docs 解释 |

### 5.3 `.dreamskin` schema 要点

`manifest.json`：

```json
{
  "schemaVersion": "codexskin.dreamskin.v1",
  "id": "football-nation-arena",
  "name": "Football Nation Arena",
  "category": "sports-arena",
  "packageType": "data-only",
  "engine": "external-reviewed-engine-required",
  "createdBy": "CodexSkin.fun",
  "visibility": "public-template|private-export",
  "rights": {
    "publicTemplate": "original",
    "userAssets": "none|user-provided-unreviewed"
  },
  "platform": {
    "dataPackage": "cross-platform",
    "macOS": "tested|documented|not-tested",
    "windows": "documented|tested|not-tested"
  }
}
```

`theme.json` 应包含：

- background path；
- preview path；
- focusX / focusY；
- safeArea；
- dimming；
- blur；
- panelOpacity：sidebar/main/card/composer；
- accent / secondary / highlight；
- readabilityMode；
- statePreview notes：Home/Task/Diff/Composer。

### 5.4 导出前 Validation

- public template：`ip_risk=low`、`contains_real_person=false`、`contains_trademark=false`、`rights_source=original|licensed`；
- user export：rights checkbox 必填；
- image dimensions ≥ MVP minimum（建议 1920×1080 起）；
- generated package 不包含 `.js`、`.sh`、`.ps1`、`.command`、`.exe`、`.app`、任意 API/provider config；
- package manifest 标明 unsigned/local export；
- checksum 生成成功；
- `NOTICE.md` 存在。

---

## 6. 模板 Taxonomy

### 6.1 P0 主分类

| Category | 用户心理 | Public-safe 方向 | 禁止 |
|---|---|---|---|
| Idol / Stage | 偶像、明星感、演唱会、应援 | 原创虚构 cyber idol、舞台灯、应援棒、黑金/粉紫/霓虹舞台 | 真实明星脸/艺名/团名/logo/应援色精确复刻 |
| Anime-style / Character World | 二次元角色世界、主角感 | 原创动漫风角色、校园/赛博/训练室/魔法学习桌 | 已知角色、服装、武器、姿势、作品 logo/台词 |
| Football / Nation Arena | 世界杯/国家队/足球比赛氛围 | 泛球场灯光、抽象球衣纹理、原创 mood colorways | 旗帜、队徽、球员脸、FIFA/World Cup 官方 marks、真实国家队球衣 |
| Basketball / Court Lights | 球星感、球场灯光、战术板 | 球场聚光灯、scoreboard-like abstract shapes、原创配色 | NBA、球队 logo、球星肖像、联赛 marks |
| Esports / Stream Booth | 游戏直播间、电竞座舱 | 原创电竞房、HUD、霓虹屏幕、非真实战队符号 | 战队 logo、游戏 UI、英雄角色、赞助商品牌 |
| Fantasy / Guild Desk | 魔法、公会、幻想学习桌 | 原创公会符号、魔法书、粒子、羊皮纸卡片 | HP/Tolkien/具体游戏 franchise symbols |
| Mecha / Command Bay | 机甲驾驶舱、指挥中心 | 原创 robot silhouettes、cockpit HUD、系统模块卡 | Gundam/EVA/Transformers 可识别造型 |
| Pet / Personal Photo | 自己的猫狗/头像/品牌 mascot | 用户上传私用，或原创宠物工作台 | 平台公开使用用户宠物/私人照片，未经同意公开分享 |

### 6.2 Secondary 分类

- Professional / Neutral：readability baseline，只作为工具辅助；
- Developer / Terminal Pro：必须是 command center / workspace 场景，不是黑底绿字；
- Seasonal / Festival：节庆、考试季、毕业季、赛季热点；
- Brand / Team Custom：只走 custom/team scope，不做未经授权公开模板。

### 6.3 模板详情页字段

每个模板 asset.json 至少包含：

```json
{
  "slug": "idol-stage-skin",
  "name": "Idol Stage Skin",
  "category": "idol-stage",
  "hook": "Turn Codex into a concert-stage workspace around an original cyber idol vibe.",
  "preview": "marketplace-preview.png",
  "background": "live-background.png",
  "safeArea": "left-reading-right-hero",
  "focus": { "x": 0.72, "y": 0.48 },
  "tokens": {
    "accent": "#...",
    "secondary": "#...",
    "surface": "rgba(...)"
  },
  "readability": {
    "sidebar": "mock-pass|real-pass|fail",
    "main": "mock-pass|real-pass|fail",
    "composer": "mock-pass|real-pass|fail"
  },
  "rights": {
    "source": "original/self-generated/licensed",
    "containsRealPerson": false,
    "containsTrademark": false,
    "ipRisk": "low",
    "notes": "No real celebrity, team, tournament, anime/game IP, or brand assets."
  }
}
```

---

## 7. 合规边界

### 7.1 三层边界

#### A. 可公开模板

允许公开展示、SEO、下载示例包的只有：

- 原创 / 自生成 / 已授权素材；
- 泛风格而非具体 IP；
- 用户 3 秒内不能识别到具体明星、球队、赛事、动漫/游戏角色、品牌；
- 页面、slug、alt、schema、文件名、package metadata 都不能暴露真实权利方名称。

#### B. 用户上传私用

Builder 可以支持用户上传：

- 明星/偶像照片；
- 动漫/游戏图；
- 球员/球队/国家队相关图；
- 宠物/自拍/朋友照片；
- 公司品牌素材。

但必须满足：

- 用户主动上传；
- 用户确认拥有权利或仅限合法私用；
- 默认 local/private；
- 不自动公开、不进 SEO、不复用为平台素材；
- 导出包包含权利责任提示；
- 不暗示平台授权这些素材。

#### C. 完全禁止

- 非自愿亲密图像、性化真人肖像、深度伪造色情；
- 未成年人性化内容；
- 仇恨/恐怖/极端主义标志或美化；
- 侵犯隐私、冒充、虚假代言；
- 盗版素材包、反规避、恶意代码；
- 任何试图把行为权限、脚本、凭据窃取藏进 theme package 的内容。

### 7.2 必备文案

全站 Footer：

> CodexSkin.fun is an independent customization tool and is not affiliated with, endorsed by, or sponsored by OpenAI, Codex, any sports league, tournament organizer, team, celebrity, anime/game studio, or brand. Public templates use original, genre-inspired artwork only. All trademarks, names, and logos belong to their respective owners.

Builder 上传旁：

> Upload only images you own, created yourself, licensed, or are otherwise allowed to use. Do not upload or redistribute copyrighted celebrity, anime, sports team, player, brand, or private-person images without permission.

导出前 checkbox：

> I confirm I have the rights or permission to use the uploaded assets, and I understand exported skins containing third-party materials are for my private use unless I have permission to share them.

模板详情页：

> This public template is an original genre-inspired design. It does not include official team crests, tournament marks, celebrity likenesses, anime/game characters, or brand logos.

### 7.3 合规验收

公开模板 GO 条件：

- `rights_source` 明确；
- `ip_risk=low`；
- 无真实人物肖像 / 商标 / 队徽 / 赛事标识 / 可识别角色；
- 通过 3 秒识别测试；
- NOTICE/免责声明存在；
- SEO 主词、slug、alt、schema 均为泛风格命名。

---

## 8. macOS / Windows Claims

### 8.1 Claim 原则

必须拆分三层：

```text
.dreamskin data package = platform-neutral inert data
macOS engine/helper path = platform-specific apply/verify/restore
Windows PowerShell/engine path = platform-specific apply/verify/restore
```

### 8.2 允许口径

| Claim | 允许条件 | 对外文案 |
|---|---|---|
| `Data package works cross-platform` | `.dreamskin` 仅为 inert data，schema-valid，无执行代码 | `.dreamskin packages are platform-neutral review artifacts.` |
| `tested on macOS` | 有真实 macOS install/apply/verify screenshot/restore 证据 | `macOS path tested for this package/version.` |
| `macOS guide available` | 有文档但未对该包跑完整证据 | `macOS install path documented; verify on your own version.` |
| `Windows path documented` | 有 Windows install/start/verify/restore 文档或上游路径 | `Windows path documented; not yet tested by CodexSkin.fun unless stated.` |
| `tested on Windows` | 有 Windows 真机 install/start/apply/verify screenshot/restore 证据 | `Windows path tested for this package/version.` |

### 8.3 禁止口径

- 未 Windows 真机验证不得写 `Windows tested`、`Windows supported`、`works on Windows`；
- data package 存在不等于平台 apply 支持；
- 不得说 `one-click install`，除非有签名、reviewed、tested、restore-ready helper；
- 不得说 `100% safe`、`guaranteed`、`official`；
- 不得暗示修改官方 Codex 文件，除非技术方案真实且合规披露。

---

## 9. 产品验收 Gates

### 9.1 分层 Gate

最终 GO 必须同时满足：

```text
TECH_GO
+ USABILITY_GO
+ VISUAL_GO
+ COMPLIANCE_GO
+ OWNER_REVIEW_GO
= FINAL_GO
```

任一失败，不得称 launch-ready。

### 9.2 TECH_GO

- route 200；
- build pass；
- `.dreamskin` package 真实下载且 file 为 zip；
- package 内容符合 contract；
- no executable in data package；
- install/docs/security links 可访问；
- 若声明 macOS tested，有真实 apply/verify/restore logs/screenshots；
- 若声明 Windows tested，有真实 Windows 证据。

### 9.3 USABILITY_GO

- Home / Task / Diff / Composer 预览完整；
- sidebar/main/composer 文本可读；
- contrast thresholds：body ≥ 4.5:1，large/title ≥ 3.0:1，placeholder/muted ≥ 3.0:1；
- real Codex screenshot gate 通过后才能称真实 usability；
- markers.main=true / markers.composer=true 只能证明 TECH，不证明 usability。

### 9.4 VISUAL_GO

- 1 秒内看出情绪身份：idol/anime/sports/fantasy/esports/mecha/pet 等；
- 5 秒内看懂 sidebar/main/cards/composer 都属于同一皮肤系统；
- 不是纯色、不是 sticker、不是默认 UI 小改；
- 具备商品感：名字、vibe、badge、CTA、可收藏/可分享；
- 至少 3 张候选图给 Owner 过目；Owner 不认可即 VISUAL_NO_GO。

### 9.5 COMPLIANCE_GO

- public templates 原创 / 授权；
- 无真实明星、动漫/游戏角色、球队、队徽、球员、FIFA/World Cup/NBA/品牌 marks；
- 用户上传默认 private/local 且有 rights checkbox；
- 全站 disclaimers 存在；
- 3 秒识别测试通过；
- no official / endorsed / sponsored claims。

### 9.6 OWNER_REVIEW_GO

Owner Review 需要看的不是 build log，而是：

1. 首页首屏实际截图；
2. `/skins` 首批模板截图；
3. `/builder` 上传/调参/导出流程截图；
4. 1–2 个被选模板的 real Codex apply/verify/restore screenshot（仅在 Owner 选中后执行）；
5. macOS/Windows claim 文案截图；
6. 合规/安全关键文案截图。

---

## 10. 下游交接

### 10.1 给小秀 / Design

必须停止纯色/中性首发方向。设计目标是情绪身份模板，而不是 wallpaper 或 UI mock。

P0 输入：

- 主题：Idol Stage、Anime Hero Desk、Football Nation Arena 优先；
- 每套两张图：marketplace preview + live background；
- marketplace preview 可以夸张、有 Codex-like workspace、有情绪 hero；
- live background 必须无 UI 文字、无 logo、无真实 IP，能放在真实 Codex 后面；
- 交付 crops：sidebar/main/composer；
- asset.json 包含 safe area、focus、tokens、rights notes；
- public template 必须 IP-safe original。

禁止：

- 真实明星/角色/球队/赛事/品牌；
- 一张海报直接当 live wallpaper；
- 角落贴纸；
- Glass Desk / Paper 继续当 lead；
- 只交美图不交 live decomposition。

### 10.2 给小良/小北 / Dev

P0 实现顺序：

1. 首页/导航/文案换成正式 PRD 口径；
2. `/skins` + 6 个模板详情路由；
3. Builder v0：preset/upload/crop/dim/panel/accent/state previews/export；
4. `.dreamskin` data package export contract；
5. `/docs/install`、`/docs/install/macos`、`/docs/install/windows`、`/security`；
6. upload rights checkbox + package NOTICE；
7. asset/package validation；
8. public zip verification；
9. only after Owner chooses 1–2 skins: real macOS apply/verify/restore；
10. Windows 只写 documented path，除非有真机完整证据。

工程边界：

- 主 package 不含 executable；
- helper/engine 为 advanced/reviewed path；
- 不把 user upload 自动上传或公开；
- 不新增付费/账号/云同步。

### 10.3 给小姚 / Compliance

P0 审查：

- 模板命名、slug、alt、schema、package metadata；
- 3 秒识别测试；
- user upload rights flow；
- `.dreamskin` NOTICE 与 user-assets notice；
- 官方/平台/赛事/明星/球队 disclaimers；
- Windows/macOS claims；
- 禁止内容/ToS/Privacy。

### 10.4 给小朱 / QA

QA 报告必须分层：

```text
TECH_GO / TECH_NO_GO
USABILITY_GO / USABILITY_NO_GO
VISUAL_GO / VISUAL_NO_GO
COMPLIANCE_GO / COMPLIANCE_NO_GO
OWNER_REVIEW_GO / OWNER_REVIEW_NO_GO
FINAL_GO only if all pass
```

必须包含：

- route/build evidence；
- package unzip evidence；
- no-executable evidence；
- visual screenshot comparison；
- readability measurements；
- real Codex screenshot gate（仅 Owner 选择的候选）；
- restore evidence；
- platform claim audit。

### 10.5 给小齐 / Orchestrator

小齐负责协调，不再代写正式 PRD 或覆盖产品定义。

下一步 Kanban 建议：

```text
P0 Product Freeze：本 PRD v1 作为唯一事实源
P0 Design Owner Review：Idol / Anime / Football first 3
P0 Compliance Pass：template taxonomy + upload rights + claims
P0 Frontend IA Reset：首页 / skins / builder / install / security
P0 Package Contract：.dreamskin export + NOTICE + validation
P1 macOS Real Apply：Owner 选中 1–2 个后执行
P1 Windows Path：documented path + evidence checklist
P1 Owner Review：FINAL_GO only after all gates
```

---

## 11. 决策摘要

当前正式结论：

- CodexSkin.fun = 情绪身份 Codex Dream Skin Builder，不是纯色主题站；
- 公开模板 = 原创、泛风格、可 SEO、可下载，不含真实 IP/明星/球队/赛事；
- Builder = 支持用户自有素材 private/local 上传与 `.dreamskin` 导出；
- Package = data-only inert recipe，engine/helper 分离；
- macOS/Windows = claims 必须按证据分层；
- 成功 = TECH + USABILITY + VISUAL + COMPLIANCE + OWNER REVIEW；
- 下一轮下游应先按本 PRD 进行 Design Owner Review 和 Frontend IA Reset，不应继续开发纯色模板。

[DONE: OFFICIAL_PRD_V1]
