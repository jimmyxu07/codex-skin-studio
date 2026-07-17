# Codex Skin Studio 首页与三组模板详情页重做设计 Brief

> 结论优先：这次不要在现有深色 SaaS 卡片上继续补装饰。整体重做为 **Codex Skin Studio / 复古纸面作品集**：粗黑边框、米黄色纸底、淡网格背景、gallery 大图卡片、Studio 风格按钮、像“皮肤作品展”而不是“抽象 CSS 组件库”。首页要先让用户看到真实可感的 Codex App skin mock screenshot；Ink / Flame / Neon 三组要各自成为完整原创 Codex workspace concept card；详情页要像作品页，有大幅 mock screenshot、metadata、palette、recipe 和 request custom skin CTA。

---

## 0. 本次设计判定

### J少反馈要解决的问题
- 现状三组模板“只有颜色和少量装饰差异”，没有新意。
- 首页 gallery 仍像抽象组件展示，不像真实皮肤截图。
- 详情页虽有 hero / recipe，但仍是前端组件感，不是作品页 / concept gallery。

### 新方向一句话
**把 Codex Skin Studio 变成一个复古纸面风格的 Codex workspace skin gallery：用户一进来就像在翻一组可下载的原创 Codex 皮肤概念海报。**

### 对标截图可借鉴的视觉语言
允许借鉴：
- 粗黑描边 / black outline
- 复古纸底 / aged paper background
- 细网格、印刷噪点、贴纸标签
- 大图 gallery 卡片
- 强按钮：`Studio` / `View Skin` / `Request Custom`
- 概念展示感：像设计稿、作品卡、封面页

不能借鉴：
- 不能直接使用对标截图图片。
- 不能使用真人、明星、动漫角色、游戏角色、小说 IP、品牌图形。
- 不能复刻 OpenAI / Codex 官方产品截图。
- 不能出现“剑来 / 斗破 / 一人之下”等任何可识别 IP 文案或视觉暗示。

---

## 1. 新视觉系统：Retro Paper Codex Studio

### 1.1 视觉关键词
- **Paper gallery**：米色纸张、黑色印刷线、轻噪点。
- **Bold studio**：粗边框、大标题、大按钮、清楚的作品卡层级。
- **Mock screenshot first**：每张模板卡优先展示“Codex App 皮肤截图感”的大画面。
- **IP-neutral concept art**：全部通过 CSS / SVG / React DOM 画原创工作区截图，不用第三方图片。

### 1.2 全局色彩 token
```css
--paper: #F4E7C8;
--paper-warm: #E8D3A4;
--paper-dark: #2B2118;
--ink-black: #111111;
--grid-line: rgba(17,17,17,.11);
--stamp-red: #D94A32;
--studio-blue: #2F6BFF;
--studio-green: #6ECF7A;
--shadow-hard: 8px 8px 0 #111111;
```

三组模板保留独立 palette：
- Ink：`#101418 / #123C3D / #E8E1CF / #BCE8D8`
- Flame：`#16110F / #3B2118 / #D6401F / #FFB13B`
- Neon：`#080B12 / #2C3A4A / #16D9E3 / #D946EF / #F6C85F`

### 1.3 字体与排版
- 标题：系统 sans-serif，但使用 **超粗、紧字距、全大写或 Title Case**，避免默认 SaaS 柔和感。
- 正文：系统 sans-serif，较高行距。
- 标签/metadata：等宽或 pseudo-mono 风格，小号全大写。
- 视觉重点：标题不要渐变；用黑字 + 粗边框 + 贴纸色块制造冲击。

### 1.4 背景与容器
页面背景：
- 底色 `--paper`。
- 叠加细网格：水平/垂直 24px 间距，低透明黑线。
- 叠加轻纸纹：radial dot / noise-like gradient。

主容器：
- 所有核心卡片统一 `border: 3px solid #111`。
- 圆角控制在 `16px` 以下，避免过度 SaaS。
- 投影用硬阴影 `8px 8px 0 #111`，不用柔光大阴影。

---

## 2. 首页重做 Brief

### 2.1 首页信息架构
推荐顺序：
1. **Hero：Codex Skin Studio 主标题 + 大幅 studio board**
2. **Featured Gallery：三张大图皮肤卡 Ink / Flame / Neon**
3. **Template List：全部免费模板列表，统一 gallery 样式**
4. **Custom Skin Request：定制入口，像 studio order card**
5. **Safety / Manual Recipe：说明免费模板是 reviewable recipe，不是危险 installer**

### 2.2 Hero 首屏布局
桌面：双栏，但视觉重心右侧大画面。

左侧文案：
- Eyebrow：`CODEX SKIN STUDIO`
- H1：`Free Codex Skin Templates, Built Like Studio Concepts`
- Lede：`Download reviewable Codex skin recipes, preview original workspace concepts, or request a custom skin direction for your own setup.`
- 主按钮：`Browse Free Templates`
- 次按钮：`Request Custom Skin`
- 小标签：`CSS/SVG mockups · IP-safe concepts · Manual recipes`

右侧 hero board：
- 一个大号粗边框纸卡，标题栏写：`STUDIO BOARD / 003 SKINS FEATURED`
- 内部放一个 2x2 collage：
  - 大卡：Ink screenshot mock
  - 小卡：Flame screenshot mock
  - 小卡：Neon screenshot mock
  - 底部：`Custom request queue` 横条
- 每张截图都要像一个 Codex App workspace：titlebar、sidebar、chat/editor panel、prompt input、diff/code lines、active state。

### 2.3 首页 Gallery 大图卡片
重点：**卡片上的图不能再是抽象 orb、色块、小组件；必须是“皮肤截图/大图”感觉。**

每张 Featured Gallery 卡结构：
```text
┌──────────────────────────────┐
│ FREE TEMPLATE     STUDIO 01   │  metadata 顶栏
├──────────────────────────────┤
│                              │
│   大幅 Codex workspace mock   │  占卡片 60–70% 高度
│   sidebar / editor / input   │
│                              │
├──────────────────────────────┤
│ Ink Mountain Scholar          │
│ Quiet paper, mist, jade focus │
│ [View Skin] [Download Recipe] │
└──────────────────────────────┘
```

卡片样式：
- 背景纸底，黑色 3px border，硬阴影。
- 卡片内截图也有 3px 黑边，但截图内部允许深色主题。
- 鼠标 hover：卡片整体 `translate(-3px, -3px)`，shadow 加到 `11px 11px 0 #111`。
- 大图比例建议 `16:10` 或 `4:3`，不要小 preview。

### 2.4 首页三张重点 Gallery 卡视觉

#### A. Ink Mountain Scholar Gallery Card
截图 mock 内容：
- Codex App 深墨主题窗口。
- 左侧 sidebar 是松青色 panel。
- 主编辑区是米白“rice paper note”卡片，叠几行代码/对话。
- 底部有淡 jade prompt input。
- 背后/底部用 CSS 山形剪影和雾带。
- 画面顶部小贴纸：`QUIET FOCUS`。

卡片文案：
- Title：`Ink Mountain Scholar`
- Subtitle：`A quiet paper-and-mist Codex workspace for long focus sessions.`
- Meta chips：`Ink base` / `Pine panels` / `Jade focus`
- CTA：`View Skin` / `Download Recipe`

#### B. Flame Alchemist Gallery Card
截图 mock 内容：
- 窗口像嵌在铸铁面板里。
- 深炭黑 editor，右侧/底部有 ember command strip。
- 中间可见 conic heat ring 背景，但不能遮挡界面。
- 有 3–4 个 gauge / progress bars 表示 recipe ratio。
- 火星粒子是抽象点，不要炉、人物、徽章。

卡片文案：
- Title：`Flame Alchemist`
- Subtitle：`A forge-fire Codex skin with ember focus and disciplined contrast.`
- Meta chips：`Charcoal base` / `Ember cursor` / `Molten focus`
- CTA：`View Skin` / `Download Recipe`

#### C. Urban Taoist Neon Gallery Card
截图 mock 内容：
- 夜色 workspace，cyan/magenta 双光源。
- 窗口轻微倾斜或有斜切 framing。
- 背景有雨线、霓虹框、抽象几何竖牌。
- 主区显示 chat/editor lines；底部 prompt input 发 cyan glow。
- 几何符号只能是圆点、短线、菱形，不可读、不像真实符咒。

卡片文案：
- Title：`Urban Taoist Neon`
- Subtitle：`Rain-lit neon geometry for night coding sessions.`
- Meta chips：`Asphalt base` / `Cyan focus` / `Magenta scan`
- CTA：`View Skin` / `Download Recipe`

### 2.5 Template List 页面 / 首页列表区
`/templates` 和首页下方列表统一改成 gallery list，不要普通三栏 SaaS 卡。

推荐：
- 页面标题：`Browse Free Codex Skin Templates`
- 筛选 chip：`All / Calm / Dark / Bright / Showcase / Original Concepts`
- 列表：3列 desktop，2列 tablet，1列 mobile。
- 每张卡都包含：大幅 mock screenshot + title + 1 行 use case + palette strip + CTA。
- 非三组重点模板可以用更简单的 mock，但仍必须像 workspace screenshot。

列表卡最小要求：
- 截图区域高度至少 220px desktop / 180px mobile。
- 每张卡内有 titlebar、sidebar、main panel、prompt input 四个 Codex App screenshot 元素。
- 禁止只放渐变球、抽象头像、色条。

---

## 3. 三组详情页通用作品页结构

### 3.1 详情页不是普通模板页，而是 “Skin Concept Work Page”
每个详情页都用统一信息骨架，但视觉构图不同：

1. **Work Hero**：大幅 mock screenshot + 标题 + metadata
2. **Concept Statement**：这套皮肤解决什么工作情绪
3. **Palette Board**：大色块 + token 名 + 用途
4. **Recipe System**：该模板独有配方可视化
5. **UI States Mock**：active tab / prompt / code / warning / selection 小状态
6. **Download + Custom Request CTA**

### 3.2 通用 metadata 设计
Hero 旁边放作品信息板，像设计展签：
```text
SKIN ID        CSS-INK-001
TYPE           Free Codex skin template
MOOD           Quiet / Paper / Mist
BEST FOR       Long writing-and-coding sessions
FORMAT         Reviewable recipe TXT
ASSETS         CSS / SVG / DOM only
STATUS         Free preview
```

样式：纸底、黑框、等宽小字、左右对齐。不要透明玻璃卡。

### 3.3 通用大幅 mock screenshot 规范
所有详情页都必须有一个 `ConceptScreenshot` 级别的大图，不是小 preview。

大图必须包含：
- 外层 app shell：titlebar + window buttons。
- 左侧 sidebar：至少 4 个 nav rows。
- 主区：assistant/code/editor cards。
- 底部 prompt input。
- 主题 active state：当前模板的重点色。
- 至少 1 个状态小组件：palette chip、diff line、command tag 或 recipe badge。

实现方式：
- React DOM div + CSS gradients。
- Inline SVG 只用于山形、线路、波形、几何面板。
- 不用任何真实截图，不复刻官方 Codex UI。

---

## 4. Ink Mountain Scholar 详情页 Brief

### 4.1 概念
**「纸上远山，雾里写代码」**。它要像一张安静的纸本作品页：留白、远山、墨色 workspace、jade focus。

### 4.2 Hero 构图
- 整个 hero 像一张横向卷轴贴在纸面上。
- 左侧：标题 + metadata 展签。
- 右侧：超大 Codex workspace screenshot，底部叠 2–3 层山形剪影。
- 背景：米纸底 + 轻墨点 + 横向雾带。
- 页面角落可有红色抽象方章，但只能写 `CSS-001` / `STUDIO` 这种非 IP 文案。

### 4.3 大幅 mock screenshot 细节
- App shell 背景：`#101418`。
- Sidebar：`#123C3D`，active row 用 `#BCE8D8` 细线。
- 主区：米白 paper card，显示 prompt/code lines。
- Input：淡 jade 边框。
- 装饰：远山 SVG / CSS clip-path，雾带 blur。

### 4.4 Palette Board
四个大色块横排：
- `Ink base #101418` — app shell / deep background
- `Pine panels #123C3D` — sidebar / cards
- `Rice paper #E8E1CF` — reading surfaces
- `Jade focus #BCE8D8` — active tab / cursor / prompt

### 4.5 Recipe Visualization
组件方向：`InkLayerRecipe` 但视觉升级为“山水分层剖面”。
- 四层波形山线从下往上叠。
- 每层旁边有 token 名、hex、用途。
- Hover：该层向上浮 2px，线条变粗。

### 4.6 页面文案
- H1：`Ink Mountain Scholar`
- Hero line：`A quiet paper-and-mist Codex workspace for long focus sessions.`
- Concept：`Designed for builders who want Codex to feel like a quiet writing desk: dark enough for code, warm enough for notes, and calm enough for long reasoning loops.`
- 主 CTA：`Download Quiet Scholar Recipe`
- 次 CTA：`Request a calmer custom skin`

### 4.7 Ink QA
- [ ] 不看标题也能感知“纸 / 山 / 雾 / 安静”。
- [ ] 大图像真实 workspace screenshot，不是抽象封面。
- [ ] 不能出现书法字、人物、门派、武器、山水名画复刻。
- [ ] 移动端保留山形和 paper texture，但不遮挡 CTA。

---

## 5. Flame Alchemist 详情页 Brief

### 5.1 概念
**「暗炉炼色，热量驱动工作流」**。它要像一个 forge console 作品页：粗黑铸铁边、热环、仪表、ember focus。

### 5.2 Hero 构图
- Hero 不做卷轴，而做“铸铁工作台”。
- 左侧：大标题压在粗黑框纸卡上。
- 中间/右侧：大幅 screenshot 嵌在斜切 metal frame 中。
- 背后：conic heat ring + metal grid + 少量 ember particles。
- 卡片边角做切角或铆钉感，但不要真实炉具或符号。

### 5.3 大幅 mock screenshot 细节
- App shell 背景：`#16110F`。
- Panel：`#3B2118`。
- Active cursor / command chip：`#D6401F`。
- Focus line / selected prompt：`#FFB13B`。
- 右侧放小 gauge stack：`Base 52 / Ember 18 / Focus 20 / Bronze 10`。
- 底部 prompt input 像热金属边框。

### 5.4 Palette Board
做成“合金配比卡”：
- 大圆环或横向配比条。
- 每个颜色 token 有百分比和用途。
- 避免普通色块列表。

### 5.5 Recipe Visualization
组件方向：`ForgeRecipeGauge`。
- 半圆仪表盘 + 4 条配比 bar。
- 热环可以慢速旋转；必须支持 `prefers-reduced-motion`。
- Hover 某个 bar 时，对应截图中的小状态高亮。

### 5.6 页面文案
- H1：`Flame Alchemist`
- Hero line：`A forge-fire Codex skin with ember focus and disciplined contrast.`
- Concept：`Built for debugging sprints and launch crunch: the interface feels hot, but the reading surfaces stay controlled.`
- 主 CTA：`Download Forge Recipe`
- 次 CTA：`Commission a hotter workspace skin`

### 5.7 Flame QA
- [ ] 首屏必须出现 heat ring / metal grid / gauge 中至少两种。
- [ ] 大图必须像 Codex workspace，而不是火焰海报。
- [ ] 火星粒子不能抢正文可读性。
- [ ] 不出现炼丹炉、徽章、学院、神器、可识别 IP 词。
- [ ] `prefers-reduced-motion` 下热环和粒子停用或明显减弱。

---

## 6. Urban Taoist Neon 详情页 Brief

### 6.1 概念
**「雨夜天台上的霓虹几何调试台」**。它要像夜城海报 + Codex workspace：雨线、霓虹框、几何竖牌、cyan/magenta focus。

### 6.2 Hero 构图
- Hero 是倾斜城市海报式作品页。
- 大幅 screenshot 可轻微 rotate `-1.5deg`，外框仍粗黑。
- 背后有 neon sign frame、雨线、地面积水反光。
- 一侧放 abstract geometry panel，形似竖向标识牌，但内部只允许点、线、菱形。
- 不能有真实文字招牌、宗教符号、品牌 logo。

### 6.3 大幅 mock screenshot 细节
- App shell 背景：`#080B12`。
- Sidebar / panels：`#2C3A4A`。
- Active prompt border：cyan `#16D9E3`。
- Secondary scan line：magenta `#D946EF`。
- Small geometry chips：amber `#F6C85F`。
- 主区显示类似 chat/editor 的 stacked cards；顶部可有 `night-runner prompt` 之类中性文案，不要 IP。

### 6.4 Palette Board
做成“neon circuit board”：
- SVG polyline 连接五个颜色节点。
- 每个节点有 token 名和用途。
- cyan / magenta / amber 必须同时出现。

### 6.5 Recipe Visualization
组件方向：`NeonCircuitRecipe`。
- 地铁线路 / 电路图混合感。
- Hover 节点时节点发光，下面描述亮起。
- 雨线是背景 texture，不进入文字层。

### 6.6 页面文案
- H1：`Urban Taoist Neon`
- Hero line：`Rain-lit neon geometry for night coding sessions.`
- Concept：`For late-night builds that need motion and contrast without turning the workspace into a noisy cyberpunk cliché.`
- 主 CTA：`Download Neon Ritual Recipe`
- 次 CTA：`Request a city-night custom skin`

### 6.7 Neon QA
- [ ] 首屏必须有雨线、霓虹边框、几何竖牌。
- [ ] 几何面板不可读，不像真实符咒、品牌或 logo。
- [ ] 大图像 workspace screenshot，不是单纯霓虹背景。
- [ ] 移动端可以取消倾斜，但必须保留雨线和几何 panel。

---

## 7. 自定义皮肤 Request 区块

### 7.1 首页底部 CTA
做成一张“Studio Order Form”纸卡：
```text
CUSTOM SKIN REQUEST
Tell us the workspace mood, palette, and safety constraints.
We turn it into a reviewable Codex skin direction.

[Request Custom Skin]
```

左侧放三行 form preview：
- `Mood: calm / high energy / branded / night mode`
- `Palette: attach colors or describe feeling`
- `Constraints: no IP, no official UI copy, readability first`

右侧放小型 before/after mock：默认灰色 Codex workspace → 定制皮肤 workspace。

### 7.2 文案重点
要让用户知道：
- 免费模板可以直接下载 recipe。
- 定制服务是下一步变现入口。
- 所有 skin 都需要用户手动 review / adapt，不承诺一键安装。

---

## 8. 前端落地组件建议（不实现代码，仅 handoff）

### 8.1 新组件命名
```text
PaperGridBackground
StudioButton
StudioTag
SkinGalleryCard
CodexWorkspaceMock
FeaturedStudioBoard
SkinMetadataPanel
PaletteBoard
InkConceptScreenshot
FlameConceptScreenshot
NeonConceptScreenshot
InkLayerRecipe
ForgeRecipeGauge
NeonCircuitRecipe
CustomRequestOrderCard
```

### 8.2 CSS 关键 class
```css
.retro-paper-page {}
.paper-grid-bg {}
.studio-card {}
.studio-button {}
.skin-gallery-card {}
.workspace-mock {}
.workspace-mock--ink {}
.workspace-mock--flame {}
.workspace-mock--neon {}
.metadata-panel {}
.palette-board {}
.recipe-board {}
.detail-work-page {}
```

### 8.3 Mock screenshot 内部 DOM 结构
```text
.workspace-mock
  .mock-titlebar
  .mock-body
    .mock-sidebar
    .mock-main
      .mock-chat-card
      .mock-code-card
      .mock-status-row
      .mock-prompt-input
```

每个模板只改 token 不够，必须改：
- screenshot 构图
- 背景纹理
- 状态组件
- recipe board
- metadata 展签语气

---

## 9. 必须替换/避免的现有表达

### 9.1 首页文案替换
现有 `Original Guoman-inspired skins` 建议替换为：
- `Original Codex Skin Concepts`
或
- `Featured Studio Skins`

原因：`Guoman-inspired` 容易把用户联想到具体国漫/IP，不符合安全约束。

### 9.2 避免默认 AI SaaS 感
不要再用：
- 深色渐变 + 毛玻璃卡片作为主视觉。
- 圆角 pill 到处堆。
- 抽象发光球 / 人形剪影 / orb 当模板图。
- 三张卡只换 accent color。

### 9.3 IP / 合规禁区
禁止出现：
- 剑来、斗破、一人之下、任何小说/动漫/影视/游戏名。
- 明星、真人照片、动漫角色、可识别服装/发型/武器。
- OpenAI / Codex 官方截图复刻、官方 logo、官方 UI 精确复制。
- 可读符咒、宗教符号、品牌 logo、现成艺术作品。

---

## 10. 响应式要求

### Desktop ≥ 1200px
- Hero 双栏。
- Featured gallery 三列大卡。
- Detail hero：大图占 55–65% 宽度。

### Tablet 768–1199px
- Hero 可上下堆叠。
- Gallery 两列。
- Detail metadata 和 palette 下移。

### Mobile ≤ 767px
- 单列。
- Gallery card screenshot 保持至少 180px 高。
- 粗边框缩到 2px，硬阴影缩到 `5px 5px 0`。
- Neon 取消倾斜；Flame 减少粒子；Ink 雾带降低透明度。
- CTA 按钮全宽或 2 行清晰排列。

---

## 11. QA 验收总清单

### 首页
- [ ] 首屏一眼能看出是 Codex skin gallery / studio，不是普通 SaaS landing。
- [ ] Hero 右侧有大幅 studio board，里面至少 3 个 workspace mock screenshot。
- [ ] Featured gallery 三张卡都有“真实皮肤截图感”，不是抽象 CSS 小组件。
- [ ] 主页视觉具备粗黑边框、纸底、网格、gallery 大图、Studio 按钮。
- [ ] `Request Custom Skin` 是明确可点击的变现入口。

### `/templates`
- [ ] 列表卡截图区域足够大，至少含 titlebar/sidebar/main/input。
- [ ] Ink / Flame / Neon 三张在隐藏标题后仍可区分。
- [ ] 非重点模板也不再只是渐变色块。

### 三个详情页
- [ ] 每页都有大幅 mock screenshot、metadata、palette、recipe。
- [ ] 三页构图明显不同：Ink 卷轴/山水，Flame 铸铁/热环，Neon 雨夜/霓虹。
- [ ] 每页 recipe visualization 不同：山水层、仪表配比、电路节点。
- [ ] CTA 文案与模板主题一致。
- [ ] 没有第三方图、真人、动漫/IP、官方截图复刻。

### 技术可落地
- [ ] 全部可用 CSS / SVG / React DOM 完成。
- [ ] 不新增图片依赖，不需要外部素材库。
- [ ] 动效有 `prefers-reduced-motion` 兜底。
- [ ] 390px / 768px / 1440px 三档可读性通过。

---

## 12. 前端执行优先级

### P0：直接解决“不忍直视”
1. 全局切到 `retro-paper-page`：纸底、网格、粗黑边、硬阴影。
2. 重做首页 hero 为 studio board。
3. 重做 `SkinGalleryCard`，大图区域变成 workspace mock screenshot。
4. 三个详情页都加入大幅 `ConceptScreenshot` + metadata panel + palette board + recipe board。
5. 替换 `Original Guoman-inspired skins` 等不安全/不准确文案。

### P1：增强作品感
1. Gallery card hover / pressed 状态。
2. 三组详情页专属状态组件：Ink paper note、Flame gauge、Neon circuit。
3. 移动端专门排版。

### P2：后续优化
1. 增加 screenshot contact sheet 区块：三套皮肤并排比较。
2. 增加 `Copy palette` / `Copy recipe` 交互。
3. 加 template filter chips。

---

## 13. 下游交接摘要

- 状态：`NEEDS_IMPLEMENTATION`
- 一句话结论：按 CodexSkin 对标截图的粗黑边框、复古纸底、网格背景、gallery 大图和 Studio 概念展示感，重做 Codex Skin Studio；所有模板图都要变成原创 CSS/DOM Codex workspace mock screenshot。
- 前端必须读取：本 brief + 现有 `docs/original-template-detail-redesign-brief.md` 的三套主题差异化要求。
- 前端不能假设：不能使用第三方图片、官方截图、真人/角色/IP 素材；不能只换颜色交付。
- 建议启动实现 Prompt：
```text
你是前端开发。请基于 docs/codexskin-studio-full-redesign-brief.md 重做 Codex Skin Studio 首页、/templates 和 Ink/Flame/Neon 三个详情页视觉。技术栈 Vite React TS 手写 CSS。不要引入图片素材；用 CSS/SVG/React DOM 生成 workspace mock screenshot。完成后跑 build，并截图/人工 QA 对照 brief 验收。
```

[DONE]
