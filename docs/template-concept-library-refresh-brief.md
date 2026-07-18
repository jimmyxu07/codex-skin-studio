# Codex Skin Studio 模板概念库返修 Brief：从颜色 Preset 升级为吸睛作品卡

> 结论优先：当前模板库的问题不是“颜色不够多”，而是大多数模板仍像换色 preset。返修方向是：每个模板都必须成为一张可传播、可点击、可打开详情页的 **full-frame Codex workspace concept card**。卡片第一眼要像原创 Codex 工作区皮肤作品截图，而不是色板、渐变球或普通 SaaS 模板。

---

## 0. 本次返修目标

### 要解决的核心问题

1. **Rose Orbit / Neon Terminal / Midnight Focus 等仍像颜色 preset**  
   现在的命名与画面都在表达“玫瑰色、绿色终端、深蓝专注”，缺少场景、构图、记忆点和可展示的 workspace 叙事。

2. **模板卡缺少 full-frame concept 感**  
   即使已有 Ink / Flame / Neon 三组原创方向，很多列表卡仍像统一组件换 palette，没有“这就是一张作品”的封面冲击力。

3. **用户无法在 3 秒内产生收藏/点击冲动**  
   模板需要像 CodexSkin Studio 的作品展：有名字、有画面钩子、有 mock screenshot、有详情页差异点，而不只是“适合深夜 coding 的颜色组合”。

### 新标准一句话

**每个模板都必须是一张 IP-safe、CSS/DOM/SVG 可原创落地的 Codex workspace 海报式作品卡：名字像作品，画面像截图，详情页像 concept work page。**

---

## 1. 全局风险限制 / 实现边界

必须遵守：

- 不使用真人、明星、动漫、影视、游戏、小说 IP。
- 不使用 OpenAI / Codex 官方截图，不复刻官方界面细节。
- 不使用可识别品牌 logo、品牌配色组合、产品截图、商标形状。
- 不使用第三方图片、图库、AI 生成人物图。
- 所有画面用 **CSS gradients / DOM div / inline SVG / clip-path / mask / border / shadow** 原创落地。
- 模板意象只能是通用抽象概念：纸、山、雾、炉火、雨、霓虹、星图、地图、温室、声波、蓝图、深海、日食、像素等。
- 详情页文案避免“inspired by 某作品/某品牌/某角色”，只描述工作情绪和视觉系统。

---

## 2. 模板库总策略

### 2.1 分类方式

建议不再按普通颜色分类主导，而按视觉作品类型组织：

- `Featured Concepts`：首页主推 3–6 张。
- `Focus Worlds`：安静、深度工作、低眩光。
- `High-Energy Systems`：高对比、调试、发布、演示。
- `Creative Workspaces`：更有个性、适合创作和展示。
- `Paper / Retro / Studio`：与首页 Retro Paper 风格相容的作品卡。

### 2.2 卡片最小规格

每张模板卡必须包含：

```text
┌────────────────────────────────┐
│ FREE TEMPLATE       CSS-XXX-000 │ metadata strip
├────────────────────────────────┤
│                                │
│   full-frame Codex workspace   │ 60–70% 卡片面积
│   titlebar/sidebar/main/input  │
│   unique concept ornament      │
│                                │
├────────────────────────────────┤
│ Template Name                  │
│ One-line hook                  │
│ palette strip + tags           │
│ [View Skin] [Download Recipe]  │
└────────────────────────────────┘
```

每张 mock screenshot 必须有：

- titlebar / window dots；
- sidebar 或 project rail；
- chat/editor/code panel；
- prompt input；
- active state；
- 一个和该模板绑定的原创装饰系统。

禁止：

- 只放渐变背景、色块、orb、抽象圆形。
- 只换背景色和 accent 色。
- 所有卡片共用同一套 layout，只改 palette。

---

## 3. 新模板概念库：9 张吸睛作品卡

> 说明：保留 Ink / Flame / Neon 三条资产线，但升级成更明确的作品命名和画面；新增 6 个高记忆点原创模板。下面每张都给公开英文名、视觉钩子、完整 mock screenshot 构成、palette、标签、卡片文案、详情页差异点。

---

### 01. Ink Mountain Scholar

- **公开英文名**：`Ink Mountain Scholar`
- **视觉钩子**：纸上远山，雾里写代码；安静书斋感 Codex workspace。
- **升级来源**：保留 Ink，但从“墨绿色主题”升级为“山水纸本工作区”。

#### 完整 Codex workspace mock screenshot 构成

- 外层像一张贴在米色纸面上的横向窗口，黑色粗边框。
- titlebar 写 `CSS-INK-001 / QUIET FOCUS`。
- 左侧 sidebar：深松青 panel，active row 是淡 jade 细线。
- 主区：一张 rice-paper editor card，内部有 prompt lines、code lines、注释长条。
- 底部 prompt input：淡 jade 边框，placeholder 可写 `draft calm refactor plan`。
- 窗口底部叠 2–3 层 CSS/SVG 山形剪影；中段有横向雾带。
- 右上角小红色抽象印章，只写 `STUDIO` 或 `CSS-001`，不能写真实书法字。

#### Palette

- `#101418` Ink base
- `#123C3D` Pine panels
- `#E8E1CF` Rice paper
- `#BCE8D8` Jade focus
- `#D94A32` Studio seal accent

#### 标签

`Quiet Focus` / `Paper Workspace` / `Ink System` / `Long Sessions`

#### 卡片文案

- Title：`Ink Mountain Scholar`
- Subtitle：`A quiet paper-and-mist Codex workspace for long focus sessions.`
- CTA：`View Skin` / `Download Quiet Scholar Recipe`

#### 详情页差异点

- Hero 是横向山水卷轴式构图。
- Recipe 可视化为 `InkLayerRecipe`：Ink base / Pine panels / Rice-paper surfaces / Jade focus states 四层山水剖面。
- Palette board 做成纸签 + 墨色 swatch，不用普通网格卡。
- CTA 文案：`Request a calmer custom skin`。

---

### 02. Forge Core Alchemist

- **公开英文名**：`Forge Core Alchemist`
- **视觉钩子**：暗炉炼色，热环驱动调试；像一块嵌着 Codex 的铸铁控制台。
- **升级来源**：保留 Flame，但从“橙红主题”升级为“炉芯配方工作台”。

#### 完整 Codex workspace mock screenshot 构成

- 外层窗口嵌在深炭黑铸铁面板中，边角斜切。
- titlebar 写 `CSS-FRG-002 / HEAT DISCIPLINE`。
- 背后有 conic-gradient 热环，但低透明，不遮挡阅读区。
- 左侧 sidebar 像金属刻度条，有 4 个 nav rows。
- 主 editor 是黑炭底，active command line 用 ember red。
- 右侧或底部有 3–4 条 forge gauge：Base / Cursor / Focus / Geometry。
- 点状火星 8–12 个，抽象粒子，不画真实火炉、徽章、神器。

#### Palette

- `#16110F` Charcoal base
- `#3B2118` Cast iron panel
- `#D6401F` Ember cursor
- `#FFB13B` Molten focus
- `#8A5A32` Bronze geometry

#### 标签

`High Energy` / `Debug Mode` / `Forge UI` / `Terminal Heavy`

#### 卡片文案

- Title：`Forge Core Alchemist`
- Subtitle：`A molten Codex control room for debugging with heat and discipline.`
- CTA：`View Skin` / `Download Forge Recipe`

#### 详情页差异点

- Hero 是中央炉芯 + 右侧控制台构图。
- Recipe 可视化为 `ForgeRecipeGauge`：半圆仪表或四段热量配比。
- UI states 展示 warning、active cursor、terminal output、progress gauge。
- CTA 文案：`Commission a hotter workspace skin`。

---

### 03. Rainstreet Neon Ritual

- **公开英文名**：`Rainstreet Neon Ritual`
- **视觉钩子**：雨夜街区、青紫霓虹、不可读几何竖牌；夜间 coding 的街头电流感。
- **升级来源**：保留 Neon，但从“绿色/霓虹终端”升级为“雨夜城市几何工作区”。

#### 完整 Codex workspace mock screenshot 构成

- 外层 workspace 卡片轻微倾斜 2°，像贴在夜雨海报上。
- titlebar 写 `CSS-NEO-003 / NIGHT BUILD`。
- 背景是 asphalt 黑蓝，叠雨线 repeating gradient。
- 左后方有 cyan neon frame，右侧有 magenta vertical panel。
- vertical panel 内只放圆点、短线、菱形，不放文字，不像真实符咒。
- 主区 code/chat panels 使用 cyan active focus；底部 prompt input 发青色 glow。
- 底部有一条水面反光 strip，cyan/magenta/amber 混合。

#### Palette

- `#080B12` Night base
- `#2C3A4A` Wet asphalt
- `#16D9E3` Cyan focus
- `#D946EF` Magenta scan
- `#F6C85F` Amber geometry

#### 标签

`Night Coding` / `Neon City` / `Rain Lines` / `High Contrast`

#### 卡片文案

- Title：`Rainstreet Neon Ritual`
- Subtitle：`A rain-lit Codex workspace with cyan focus and magenta motion.`
- CTA：`View Skin` / `Download Neon Ritual Recipe`

#### 详情页差异点

- Hero 是倾斜城市海报式构图。
- Recipe 可视化为 `NeonCircuitRecipe`：5 个节点的雨城线路图。
- 详情页需要同时出现雨线、霓虹边框、几何竖牌。
- CTA 文案：`Request a city-night custom skin`。

---

### 04. Rose Orbit Observatory

- **公开英文名**：`Rose Orbit Observatory`
- **视觉钩子**：玫瑰色轨道观测台；柔和但不是少女粉 preset，而是星图规划工作区。
- **升级来源**：改造 Rose Orbit。

#### 完整 Codex workspace mock screenshot 构成

- 外层像一个小型天文观测台界面，纸卡上叠深 plum 窗口。
- titlebar 写 `CSS-OBS-004 / PLAN MODE`。
- 背景有 3 条细线 elliptical orbit，使用 SVG 或 border-radius div，围绕主 editor 区。
- 左 sidebar 是暗 plum；主卡是 pearl/pink planning board。
- 中央有一个“任务星图”：5 个小节点用细线连接，表示 plan / code / review / ship / log。
- 底部 prompt input 写 `map next sprint`。
- 装饰只用抽象轨道、星点、坐标线，不用真实星座图案或品牌符号。

#### Palette

- `#2A1023` Deep plum
- `#FFF1F7` Pearl surface
- `#F8B4D9` Rose panel
- `#C084FC` Violet orbit
- `#FDE68A` Star note

#### 标签

`Planning` / `Soft Focus` / `Orbit Map` / `Creator Desk`

#### 卡片文案

- Title：`Rose Orbit Observatory`
- Subtitle：`A soft planning workspace with orbit lines, task nodes, and pearl panels.`
- CTA：`View Skin` / `Download Orbit Recipe`

#### 详情页差异点

- Hero 是 observatory planning board：左文案 + 右侧大星图 mock。
- Recipe 可视化为 `OrbitPlanningMap`：palette token 变成轨道节点。
- UI states 强调 plan cards、active task、review note，而非 terminal。
- CTA 文案：`Request a softer planning skin`。

---

### 05. Midnight Blueprint Room

- **公开英文名**：`Midnight Blueprint Room`
- **视觉钩子**：深夜蓝图室；低眩光但有工程图纸感。
- **升级来源**：改造 Midnight Focus。

#### 完整 Codex workspace mock screenshot 构成

- 外层是深蓝黑工作台，内部像一张 blueprint sheet。
- titlebar 写 `CSS-BLU-005 / DEEP WORK`。
- 背景用细蓝网格、角标、测量线、虚线框。
- sidebar 是 slate/navy；active row 是 electric blue 细描边。
- 主 editor 卡包含代码行、diff block、review checklist。
- 右下角有一个小 blueprint inset：3 个矩形模块和连接线，表示 architecture sketch。
- 底部 prompt input 写 `review system boundary`。

#### Palette

- `#07111F` Midnight base
- `#111827` Slate panel
- `#1E3A8A` Blueprint blue
- `#60A5FA` Focus line
- `#C7D2FE` Soft text

#### 标签

`Deep Work` / `Blueprint` / `Architecture` / `Low Glare`

#### 卡片文案

- Title：`Midnight Blueprint Room`
- Subtitle：`A low-glare Codex skin shaped like an engineering blueprint desk.`
- CTA：`View Skin` / `Download Blueprint Recipe`

#### 详情页差异点

- Hero 用大型 blueprint grid，而不是普通深蓝卡。
- Recipe 可视化为 `BlueprintTokenSpec`：颜色 token 标注在工程图尺寸线上。
- 详情页 section 可以叫 `Workspace Schematics`，展示 sidebar/editor/prompt 的 token 用途。
- CTA 文案：`Request a deep-work system skin`。

---

### 06. Glasshouse Sprint Lab

- **公开英文名**：`Glasshouse Sprint Lab`
- **视觉钩子**：温室实验室 + 透明 sprint board；轻盈、清洁、有生长感。
- **升级来源**：改造 Soft Glass。

#### 完整 Codex workspace mock screenshot 构成

- 外层像一座抽象 glasshouse，不画真实植物照片，只用 CSS 线框拱顶和叶片几何。
- titlebar 写 `CSS-GLH-006 / SPRINT LAB`。
- 背景是 light paper + pale mint，叠透明网格和温室弧线。
- workspace panels 使用 frosted white，但要有足够黑字对比。
- 主区是 sprint board：Today / Review / Ship 三列微型卡。
- 右侧有一个 tiny lab meter：focus / clarity / speed 三条线。
- prompt input 写 `grow feature branch`。

#### Palette

- `#F8FAFC` Frosted white
- `#DFF7EA` Greenhouse mist
- `#38BDF8` Clean blue
- `#34D399` Growth mint
- `#0F172A` Ink text

#### 标签

`Sprint Board` / `Clean UI` / `Glasshouse` / `Light Mode`

#### 卡片文案

- Title：`Glasshouse Sprint Lab`
- Subtitle：`A clean sprint workspace with frosted panels and greenhouse geometry.`
- CTA：`View Skin` / `Download Lab Recipe`

#### 详情页差异点

- Hero 是温室实验台，背景有拱形线框。
- Recipe 可视化为 `GrowthMeterRecipe`：三条成长曲线分别对应 clarity、focus、ship。
- UI states 展示 light mode 可读性：selected card、active prompt、success state。
- CTA 文案：`Request a cleaner sprint skin`。

---

### 07. Blackbox Gold Premiere

- **公开英文名**：`Blackbox Gold Premiere`
- **视觉钩子**：黑金首映控制台；适合 demo、launch、presentation。
- **升级来源**：改造 Stage Gold。

#### 完整 Codex workspace mock screenshot 构成

- 外层像黑色硬壳展示箱，粗黑边 + 金色内线。
- titlebar 写 `CSS-PRM-007 / DEMO READY`。
- 背景是 matte black；中心 workspace 像舞台屏幕。
- 左侧 sidebar 是暗灰；active row 用 gold underline。
- 主区有 demo script panel、terminal output panel、CTA checklist。
- 顶部或底部有 stage light beams，但用 CSS gradient 抽象表达。
- 右上角有 `LIVE DEMO` 小贴纸，但不要使用任何可识别直播/品牌元素。

#### Palette

- `#050505` Matte black
- `#1F2937` Charcoal panel
- `#F59E0B` Stage gold
- `#FDE68A` Soft spotlight
- `#E5E7EB` Presenter text

#### 标签

`Showcase` / `Demo Mode` / `Black Gold` / `Launch`

#### 卡片文案

- Title：`Blackbox Gold Premiere`
- Subtitle：`A dramatic black-and-gold Codex skin for launch demos and showcase sessions.`
- CTA：`View Skin` / `Download Premiere Recipe`

#### 详情页差异点

- Hero 是 stage screen / presenter console。
- Recipe 可视化为 `PremiereCueSheet`：Intro / Demo / Proof / Ask 四段 cue 条。
- UI states 要突出 presentation readability：large prompt、highlight state、warning 与 gold 的区分。
- CTA 文案：`Request a launch-ready custom skin`。

---

### 08. Pixel Bento Arcade

- **公开英文名**：`Pixel Bento Arcade`
- **视觉钩子**：像素便当盒工作区；高能、块状、多彩，但不碰任何游戏 IP。
- **升级来源**：改造 Pixel Pop。

#### 完整 Codex workspace mock screenshot 构成

- 外层卡片像一个 bento grid，里面每个 panel 是 pixel block 风格。
- titlebar 写 `CSS-PXL-008 / CREATIVE BUILD`。
- 背景深色；所有 panel 用 4px stepped corners 或 box-shadow 模拟像素边。
- 主区分成 4 个小模块：chat、code、preview、tasks。
- sidebar 是竖向色块，不放角色、道具、游戏图标。
- 底部 prompt input 像 pixel command bar。
- 装饰是抽象 8-bit squares、dots、scanline，不出现游戏机、手柄、角色形象。

#### Palette

- `#111827` Dark canvas
- `#FB7185` Coral block
- `#22D3EE` Cyan block
- `#FACC15` Yellow highlight
- `#A78BFA` Violet chip

#### 标签

`Creative Coding` / `Pixel Grid` / `Playful` / `Bento Layout`

#### 卡片文案

- Title：`Pixel Bento Arcade`
- Subtitle：`A playful block-grid Codex skin for creative builds and personal projects.`
- CTA：`View Skin` / `Download Bento Recipe`

#### 详情页差异点

- Hero 是 4-panel bento workspace，而不是单一 editor。
- Recipe 可视化为 `PixelTileRecipe`：每个 tile 代表一种 UI 状态。
- UI states 展示 hover tile、active command、selection block。
- CTA 文案：`Request a more playful coding skin`。

---

### 09. Deepsea Sonar Console

- **公开英文名**：`Deepsea Sonar Console`
- **视觉钩子**：深海声呐控制台；安静、科技、层层水压感。
- **新增原创模板**。

#### 完整 Codex workspace mock screenshot 构成

- 外层像深海控制台窗口，深蓝黑底，边缘有微弱 cyan pressure glow。
- titlebar 写 `CSS-SON-009 / SIGNAL TRACE`。
- 背景有同心 sonar rings，从左下或右上扩散。
- 左 sidebar 是深海 navy；active row 是 cyan pulse。
- 主区 editor card 用低对比海蓝，code lines 像 sonar waveform。
- 右侧有 signal stack：3 条波形线、2 个 round sensor dots。
- 底部 prompt input 写 `trace quiet failure`。
- 装饰只用抽象波纹、水层线、圆点，不画潜艇、动物、军事符号。

#### Palette

- `#030B16` Abyss base
- `#0B2545` Deep navy
- `#0E7490` Sonar teal
- `#67E8F9` Cyan pulse
- `#D9F99D` Signal lime

#### 标签

`Diagnostics` / `Sonar UI` / `Calm Tech` / `Signal Trace`

#### 卡片文案

- Title：`Deepsea Sonar Console`
- Subtitle：`A quiet diagnostic workspace with sonar rings, waveforms, and deep-sea contrast.`
- CTA：`View Skin` / `Download Sonar Recipe`

#### 详情页差异点

- Hero 是 underwater console：大 sonar ring + editor panel。
- Recipe 可视化为 `SonarSignalStack`：Base / Depth / Pulse / Signal 四层波形。
- UI states 强调 error trace、log scanning、diagnostic focus。
- CTA 文案：`Request a calmer diagnostic skin`。

---

## 4. 首页 Featured 推荐组合

### P0 首页先放 3 张

如果小良只能先做最小返修，首页 Featured 先上：

1. `Ink Mountain Scholar`：与 Retro Paper 首页最贴合，证明站点审美方向。
2. `Forge Core Alchemist`：高能、强对比，解决“模板不吸睛”。
3. `Rainstreet Neon Ritual`：夜雨霓虹，最容易形成传播记忆点。

### P1 首页扩到 6 张

再追加：

4. `Rose Orbit Observatory`：替代 Rose Orbit，保留柔和用户群但增强作品感。
5. `Midnight Blueprint Room`：替代 Midnight Focus，补足低眩光/工程用户。
6. `Blackbox Gold Premiere`：服务 launch/demo 场景，商业感强。

### P2 /templates 补齐 9 张

再加入：

7. `Glasshouse Sprint Lab`
8. `Pixel Bento Arcade`
9. `Deepsea Sonar Console`

---

## 5. /templates 页面返修要求

### 页面标题

`Browse Free Codex Skin Concepts`

### 副标题

`Each template is an original Codex workspace concept built with CSS, DOM, and SVG — no screenshots, no third-party art, no IP references.`

### 筛选 chips 建议

- `All`
- `Featured Concepts`
- `Focus Worlds`
- `High-Energy Systems`
- `Creative Workspaces`
- `Light / Paper`
- `Dark / Terminal`

### 列表卡规范

- desktop 3 列，tablet 2 列，mobile 1 列。
- 每张卡截图区占 60–70% 高度，最少 220px。
- 卡片文案保持短：title + subtitle + 3–4 个 tags + palette strip。
- 每张卡必须有独有 ornament，不允许共用同一 mock。
- hover 可以移动整张纸卡，增加硬阴影，不要柔光 SaaS shadow。

---

## 6. 详情页返修结构

每个模板详情页统一骨架，但视觉必须分流：

1. **Work Hero**：大幅 mock screenshot + 标题 + metadata 展签。
2. **Concept Statement**：一句话讲这套皮肤解决的工作情绪。
3. **Palette Board**：色块 + token 名 + UI 用途。
4. **Recipe Visualization**：该模板独有的配方图，不是 bullet list。
5. **UI States Mock**：active tab / prompt / code / warning / selection。
6. **Download + Custom Request CTA**：下载 recipe + 定制入口。

### Metadata 展签统一格式

```text
SKIN ID      CSS-XXX-000
TYPE         Free Codex skin concept
MOOD         ...
BEST FOR     ...
FORMAT       Reviewable recipe TXT
ASSETS       CSS / SVG / DOM only
STATUS       Free preview
```

### 各详情页必须不同的部分

- Hero 构图不同。
- 背景纹理不同。
- Recipe visualization 不同。
- CTA 语气不同。
- UI state 侧重点不同。

---

## 7. 给小良的实现优先级

### P0：先解决首页 Featured 3 张

目标：最快回应 J少“模板没吸睛之处”的反馈。

1. 保留现有 Retro Paper 首页基调。
2. 先把首页 Featured 改成 3 张大图作品卡：
   - `Ink Mountain Scholar`
   - `Forge Core Alchemist`
   - `Rainstreet Neon Ritual`
3. 每张卡必须是 full-frame Codex workspace mock screenshot。
4. 首页 hero board 也优先使用这 3 张，不要再放抽象 preview。
5. 卡片 CTA：`View Skin` / `Download Recipe`。

验收标准：

- 首页首屏截图给 J少看时，不用解释也能看出模板像作品卡。
- 三张 Featured 除颜色外，构图和装饰系统完全不同。

### P1：再重做 /templates

目标：让模板库整体从 preset list 变成 gallery。

1. 把 9 张模板数据补齐。
2. `/templates` 使用统一作品卡 grid。
3. Rose / Midnight / Glass / Gold / Pixel 等旧模板全部改名并换概念，不再保留普通 preset 感。
4. 筛选从颜色情绪切到作品类型。

验收标准：

- 任意 6 张卡并排看，不会像同一组件换色。
- 每张都有 titlebar/sidebar/main/prompt input 四件套。

### P2：最后做详情页

目标：提升深度与转化，但不阻塞首页观感修复。

1. 先做 Featured 3 张详情页：Ink / Forge / Neon。
2. 再补 Rose / Midnight / Gold 三张。
3. 最后补 Glasshouse / Pixel / Deepsea。
4. 每页至少有一个独有 recipe visualization。

验收标准：

- 详情页不是模板数据页，而像 concept work page。
- 每页都能回答：这个皮肤适合什么工作状态？它和其他模板哪里不同？为什么值得下载或定制？

---

## 8. 最终验收清单

- [ ] 首页 Featured 至少 3 张作品卡，不再是颜色 preset。
- [ ] `/templates` 至少 9 张模板，每张都有明确英文名、视觉钩子和 mock screenshot 构成。
- [ ] Rose Orbit / Neon Terminal / Midnight Focus 不再以旧名旧画面出现；都升级为具体 concept。
- [ ] Ink / Flame / Neon 被保留，但命名和画面更像作品。
- [ ] 每张卡都能用 CSS/DOM/SVG 原创实现，不依赖第三方图。
- [ ] 不出现真人、明星、动漫、影视、游戏、小说 IP、官方截图、可识别品牌。
- [ ] 详情页首屏之间构图不同，不只是换色。
- [ ] 文案强调 `reviewable recipe`、`manual adaptation`、`IP-safe concept`。
