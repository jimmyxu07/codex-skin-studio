# 三组原创模板详情页差异化设计返修 Brief

> 结论优先：不要再让三套详情页共享同一个 `TemplateDetail + TemplatePreview` 结构只换渐变色。三页必须拆出不同的 hero 构图、背景纹理、配方可视化和 CTA 语气，让用户在 3 秒内感知：Ink 是「静 / 山水 / 纸本」，Flame 是「动 / 炉火 / 炼制」，Urban Neon 是「夜 / 雨城 / 几何仪式」。所有视觉均用 CSS / SVG / React DOM 落地，不使用第三方图，不出现任何现成 IP 名、角色名、门派名、神器名。

## 全局返修原则

1. **详情页结构分流**：保留统一数据源，但对 `coverKind` 增加 `TemplateDetailVariant`：`detail-ink` / `detail-flame` / `detail-neon`，不要只在 `TemplatePreview` 内换背景。
2. **每页至少 4 个独有组件**：独有 hero、独有 ornament/texture、独有 recipe visualization、独有 CTA copy。
3. **IP 安全表达**：只能用通用意象：墨、山、纸、炉、火、金属、雨、霓虹、几何符号；禁止真实或近似的小说/动漫/影视专有名词、角色名、标志性武器、宗门/学院/势力、可识别符咒文字。
4. **实现限制**：优先 CSS gradients、pseudo-elements、inline SVG、clip-path、mask、repeating-linear-gradient、conic-gradient；不引入图片库或远程素材。
5. **响应式**：桌面 hero 可双栏/错位/浮层，移动端必须降级为单列，装饰不遮挡下载 CTA 和 recipe 文本。

---

## 1) Ink Mountain Scholar

### 1. 视觉主概念
**「纸上远山，雾里写代码」**。整体是低噪、静态、留白感强的书斋/纸本山水，不走人物封面，不做热血幻想。用户感知关键词：安静、长时间专注、文档/研究友好、墨色层次。

### 2. 独有 hero 构图
- Hero 改为 **横向山水卷轴式构图**：左侧标题与 recipe 摘要像纸签，右侧是宽幅 editor preview，底部叠三层远山剪影。
- 背景不居中发光，改为从左上到右下的「宣纸留白 + 山雾」。
- Preview 内部代码窗口应更“安静”：少量细线、淡玉 active line、长条注释感 line，不要出现圆环/火焰/霓虹块。
- Hero 顶部可加一个小型 `seal-pill`：文字建议 `Quiet focus recipe`，红印只做抽象方章，不能写真实篆字。

### 3. 独有 ornament / texture
- **宣纸纤维**：`repeating-linear-gradient(90deg, rgba(...,.035) 0 1px, transparent 1px 7px)` + 低透明噪点感 radial dots。
- **雾带**：两条大椭圆 blur layer，横向穿过山线和 preview 中段。
- **墨山剪影**：CSS `clip-path: polygon(...)` 做 2-3 层，前景深墨、远景松青、最后一层米白雾。
- **抽象笔触**：一条 SVG path 或 div border-radius 长条，做成低透明墨迹，不做可识别书法字。

### 4. 独有 recipe visualization
组件名建议：`InkLayerRecipe`。
- 展示为 **山水分层剖面**，不是通用 feature list。
- 4 层从下到上：`Ink base` / `Pine panels` / `Rice-paper surfaces` / `Jade focus states`。
- 每层用横向不规则波形 SVG path 或 clipped div，旁边标注颜色 token 与用途。
- 鼠标 hover 可让对应层轻微上浮 2px；移动端静态即可。

### 5. 独有 CTA 文案
- 主 CTA：`Download the Quiet Scholar Recipe`
- 次 CTA：`Request a calmer custom skin`
- CTA 辅助文案：`Best when you want Codex to feel like a quiet writing desk, not a dashboard.`

### 6. 前端实现 token / class 建议
```ts
coverKind: 'ink'
detailVariant: 'ink-scroll'
```
```css
.template-detail--ink {}
.detail-hero--ink-scroll {}
.ink-paper-texture {}
.ink-mountain-stack {}
.ink-mist-band {}
.ink-seal-pill {}
.recipe-viz--ink-layers {}
```
Token：
```css
--ink-bg: #101418;
--ink-pine: #123C3D;
--ink-paper: #E8E1CF;
--ink-jade: #BCE8D8;
--ink-mist: rgba(169,216,216,.26);
--ink-line: rgba(232,225,207,.22);
```

### 7. QA 验收点
- 首屏截图不看标题也能判断是「山水纸本」，不是只换成绿色。
- 至少出现 2 层以上山形剪影 + 1 个纸质纹理 + 1 条雾带。
- Recipe visualization 是山水分层，不是普通列表。
- 不出现任何真实书法文字、门派、武器、角色、作品名。
- 移动端山形和雾带不压住 CTA；正文对比度仍可读。

---

## 2) Flame Alchemist

### 1. 视觉主概念
**「暗炉炼色，热量驱动工作流」**。它必须是三组里最具动势和机械秩序的一页：炉膛、熔金、刻度、热环、金属板，而不是普通橙色卡片。

### 2. 独有 hero 构图
- Hero 改为 **中央炉芯 / 右侧控制台**：左侧是大标题，右侧 preview 像被嵌入一块铸铁面板，中间有一个 conic-gradient 热环作为视觉锚点。
- 使用 **斜切金属卡片**：hero card 边角用 `clip-path` 或 pseudo-element 做铆钉/切角。
- Preview 内可加 “heat gauge” 小条：3 段 ember / gold / bronze，表现调色配方被“炼制”。
- 动效允许：热环慢速旋转、ember 粒子轻微上浮；必须 respects `prefers-reduced-motion`。

### 3. 独有 ornament / texture
- **炉火环**：`conic-gradient(from 20deg, transparent, #D6401F, #FFB13B, transparent)` + radial mask 成环。
- **锻造网格**：低透明 `repeating-linear-gradient` 纵横线，像金属工作台刻度。
- **火星粒子**：8-12 个 absolutely positioned span，大小 2-5px，颜色 ember/gold，随机延迟；移动端可减少。
- **铸铁边框**：深棕/炭黑厚边 + 内发光金线，不要柔雾。

### 4. 独有 recipe visualization
组件名建议：`ForgeRecipeGauge`。
- 展示为 **炼炉仪表盘 / 合金配比表**。
- 三个主模块：`Charcoal base 52%`、`Ember cursor 18%`、`Molten focus 20%`、`Bronze geometry 10%`。
- 用半圆仪表、温度条或四段环形配比图实现；每段对应 palette 色。
- 下方用短句解释：`Base keeps glare down` / `Ember guides attention` / `Gold marks focus` / `Bronze adds structure`。

### 5. 独有 CTA 文案
- 主 CTA：`Download the Forge Recipe`
- 次 CTA：`Commission a hotter workspace skin`
- CTA 辅助文案：`Use it when debugging needs heat, but the interface still needs discipline.`

### 6. 前端实现 token / class 建议
```ts
coverKind: 'flame'
detailVariant: 'forge-core'
```
```css
.template-detail--flame {}
.detail-hero--forge-core {}
.forge-core-ring {}
.forge-metal-grid {}
.forge-ember-field {}
.forge-cut-card {}
.recipe-viz--forge-gauge {}
```
Token：
```css
--forge-bg: #16110F;
--forge-panel: #3B2118;
--forge-ember: #D6401F;
--forge-gold: #FFB13B;
--forge-bronze: #8A5A32;
--forge-ash: #7B6C63;
```

### 7. QA 验收点
- 首屏必须有明显炉芯/热环/金属控制台，不只是橙色渐变。
- 至少出现 1 个 conic heat ring + 1 个金属网格 + 6 个以上火星点。
- Recipe visualization 是仪表/配比，不是通用 bullet list。
- 动效关闭时页面仍成立；`prefers-reduced-motion` 下热环和粒子停止或显著减弱。
- 不出现炼丹炉、学院徽章、真实神器、IP 术语或可识别标志。

---

## 3) Urban Taoist Neon

### 1. 视觉主概念
**「雨夜天台上的霓虹几何调试台」**。它不是传统古风，也不是纯赛博；核心是雨、城市斜线、霓虹、不可读几何符号。用户感知关键词：夜跑、雨滴、招牌光、速度、城市幻想但 IP-neutral。

### 2. 独有 hero 构图
- Hero 改为 **倾斜城市海报式构图**：preview 卡片倾斜 2-3°，后方有霓虹招牌框和雨线。
- 顶部或右侧放一个 **abstract talisman panel**：长竖卡片，但内部只放线段、圆点、菱形、短横，不放文字/符号。
- 背景用深沥青 + cyan/magenta 双光源：左下青色，右上品红，中间有雨幕。
- Hero 布局比 Ink 更拥挤、比 Flame 更街头：可有 diagonal divider、rooftop silhouette、反光地面。

### 3. 独有 ornament / texture
- **雨线**：`repeating-linear-gradient(105deg, rgba(234,248,255,.16) 0 1px, transparent 1px 13px)`，叠加 mask 限制区域。
- **霓虹招牌边框**：cyan/magenta 双 box-shadow，矩形或菱形。
- **几何符纸**：SVG/DOM 组合：竖向矩形 + 3 个 diamond + 6 条短线 + 圆点，全部 abstract。
- **路面积水反光**：底部 `linear-gradient(90deg, transparent, rgba(22,217,227,.22), rgba(217,70,239,.18), transparent)` + blur。

### 4. 独有 recipe visualization
组件名建议：`NeonCircuitRecipe`。
- 展示为 **雨城线路图 / neon circuit map**。
- 用 SVG polyline 连接 5 个节点：`Asphalt base`、`Rain panel`、`Cyan focus`、`Magenta scan`、`Amber geometry`。
- 节点像地铁线路/电路板，不像传统列表；hover 节点时对应短文案亮起。
- 节点色彩必须至少 cyan + magenta + amber 三色并存，避免“只有蓝色”。

### 5. 独有 CTA 文案
- 主 CTA：`Download the Neon Ritual Recipe`
- 次 CTA：`Request a city-night custom skin`
- CTA 辅助文案：`For night coding sessions that need motion, contrast, and a little street-level electricity.`

### 6. 前端实现 token / class 建议
```ts
coverKind: 'neon'
detailVariant: 'rain-city'
```
```css
.template-detail--neon {}
.detail-hero--rain-city {}
.neon-rain-field {}
.neon-sign-frame {}
.neon-talisman-panel {}
.neon-reflection-strip {}
.recipe-viz--neon-circuit {}
```
Token：
```css
--neon-bg: #080B12;
--neon-asphalt: #2C3A4A;
--neon-cyan: #16D9E3;
--neon-magenta: #D946EF;
--neon-amber: #F6C85F;
--neon-white: #EAF8FF;
```

### 7. QA 验收点
- 首屏必须同时出现雨线、霓虹边框、几何竖符面板三者；不看标题也能判断是雨夜城市霓虹。
- Recipe visualization 是电路/线路节点图，不是通用列表或普通色块。
- Cyan、magenta、amber 都在关键视觉中出现，不能只剩青色。
- 几何符号不可读，不像真实宗教符咒、品牌 logo 或 IP 标志。
- 移动端倾斜卡片角度可降为 0°，但雨线和几何面板仍保留。

---

## 建议落地优先级

### P0：必须做，解决 J少反馈
1. `TemplateDetail` 按 `coverKind` 输出三套 detail class 和独有 hero。
2. 三个 recipe visualization 组件：`InkLayerRecipe` / `ForgeRecipeGauge` / `NeonCircuitRecipe`。
3. 三套独有 ornament：山水纸纹、炉火金属、雨夜霓虹。
4. 替换三页 CTA 文案，避免通用按钮感。

### P1：增强质感
1. `prefers-reduced-motion` 动效兜底。
2. Hover 层级反馈：Ink 层浮、Flame 仪表 glow、Neon 节点亮起。
3. 三页移动端专门布局：Ink 保留山形，Flame 保留热环，Neon 保留雨线 + 符面板。

### P2：后续可加
1. 模板列表卡片也同步轻量差异化，但不要抢详情页资源。
2. 下载 txt recipe 可追加对应视觉系统名和 token 名，方便用户理解。

## 前端验收总清单

- [ ] 三个 URL 首屏截图并排时，除颜色外，构图、纹理、recipe 可视化完全不同。
- [ ] 每页至少一个专属组件，不是同一组件传不同颜色。
- [ ] 没有第三方图、没有远程图片、没有 IP 名/角色名/专有标志。
- [ ] CSS/SVG/React 即可实现；不新增重依赖。
- [ ] 桌面 1440px、平板 900px、移动 390px 都能读 CTA 和 recipe。
- [ ] Lighthouse/人工检查无明显 CLS：装饰元素要有固定尺寸或 absolute containment。
- [ ] `prefers-reduced-motion` 下 Flame/Neon 动效可停用。
