# 对标站拆解：为什么不是纯色皮肤

Date: 2026-07-22  
Project: CodexSkin.fun  
Scope: 基于 `https://codexskin.org`、本地 PRD/brief 与对标图重新拆解产品心理和页面结构。

---

## 结论先行

**CodexSkin.fun 不能继续做“深色 / 浅色 / 中性色 token 模板”作为主商品。**

对标站实际卖的是：

> 用一张有情绪身份的图（明星感、动漫感、舞台感、宠物/个人照片、流行文化、讽刺梗、节庆好运等）+ 可读 UI surfaces + data-only recipe / engine 边界，把 Codex Desktop 变成“我的工作台”。

用户点击的不是 `#111827` 或 `Catppuccin Latte`，而是：

> “我能不能把 Codex 变成我喜欢的偶像舞台 / 动漫角色世界 / 足球国家队氛围 / 篮球场 / 电竞房 / 魔法工会 / 我的猫狗？”

纯色主题只能解决“能不能看清”，不能解决“为什么我要下载、分享、定制、付费”。可读性是约束，不是卖点。

---

## 1. 对标站实际卖点

### 1.1 首屏卖点不是颜色，而是“安全地让 Codex 看起来不可能”

对标站首屏文案：

- `Make Codex look impossible. Keep it safe to use.`
- `Start free in the browser... $1.99 skin guide / $4.99 pet playbook / $9.99 recipe pack / $49 custom skin`
- `Local image processing / One-time ZIPs / Review-first install`

这里的产品锚点有四个：

1. **视觉惊喜**：Make Codex look impossible，不是 make Codex dark/light。
2. **个人化入口**：browser studio、personal photo、remix preset。
3. **安全边界**：local processing、data-only recipe、engine separate、review-first install。
4. **低价 shortcut / custom 服务**：免费试，付费买捷径或人工定制。

### 1.2 Gallery 卖的是“情绪身份模板”

对标 gallery 的概念包括：

- Rose Orbit：粉色人像 / 个人化 / 温柔工作台；
- Prosperity Protocol：红金好运 / 财神梗 / 成本优化与赚钱心理；
- Digital Pop：二次元流行文化 / 虚拟歌姬感 / 粉蓝高饱和；
- Stage Gold / Midnight Idol：黑金舞台 / 粉丝专属 / 明星应援；
- Retro Command：政治讽刺海报感；
- Strawberry Debugger：草莓、漫画感、轻松玩梗；
- Pet from photo：我的狗、猫、自画像、品牌 mascot。

这些不是颜色分类，而是**身份、 fandom、梗、场景、个人故事**分类。

### 1.3 对标图的共同结构

从 KUN / Miku / 财神三类图看，复用结构非常清楚：

```text
完整 Codex-like desktop window
+ 左侧 native sidebar / 项目 / 任务列表
+ 中央 hero banner：大人物 / 场景 / 情绪钩子
+ 3-4 张任务卡：把真实 Codex action 包装成主题语言
+ 底部 composer：仍然是可输入工作区
+ 右下角贴纸 / 拍立得 / 徽章 / ID 卡增强收藏感
+ 全局主题 token：图标、按钮、边框、状态 chip 都跟主题统一
```

重要的是：**角色/舞台/财神/动漫人物不是单独壁纸，而是包进 Codex 工作流。** 任务卡、sidebar、composer 都在讲同一个主题故事。

### 1.4 对标站真正的商业闭环

页面不是单纯展示图，而是串成这个 funnel：

```text
强情绪首图 / gallery
→ Remix / Open Studio
→ 上传或替换自己有权使用的图
→ 调整 crop / dim / blur / panel opacity / accent / readable colors
→ Home / Task / Diff 预览
→ 导出 data-only .dreamskin recipe
→ 通过 reviewed engine 安装、验证、恢复
→ 需要省时间再买 guide / recipe pack / pet playbook / custom skin
```

也就是说，它卖的是**“可定制情绪皮肤制作路径”**，不是“下载一组 CSS 颜色”。

---

## 2. 为什么纯色模板没有需求

### 2.1 纯色没有“拥有感”

用户不会因为一个纯黑、纯白、灰蓝、米白模板产生：

- 这是我的偶像；
- 这是我的球队；
- 这是我喜欢的动漫世界；
- 这是世界杯期间的工作台；
- 这是我家猫狗陪我 coding；
- 这是我想截图发出去的 Codex。

纯色最多是“更顺眼”，不是“想收藏/下载/分享”。

### 2.2 纯色无法承接热点

用户明确要明星 / 动漫 / 体育 / 世界杯国家队等可定制情绪皮肤。热点承接靠的是：

- 赛季、世界杯、欧冠、NBA、电竞比赛；
- 新番、角色、二创风格；
- 明星舞台、粉丝应援、演唱会；
- 节庆和梗文化；
- personal photo。

这些热点都需要**视觉符号 + 情绪场景 + 用户替换能力**，纯色模板没有入口。

### 2.3 纯色只有工具属性，没有商品属性

纯色主题的价值类似设置项：

```text
背景色 / 前景色 / accent / border
```

对标 skin 的价值像商品：

```text
名字 / 人设 / 场景 / badge / preview / category / remix / package / install proof
```

商品化需要“这张卡我想点开”，纯色卡天然弱。

### 2.4 纯色不能解释 $49 custom skin

如果产品只是配色，用户不会理解为什么需要 custom skin。  
但如果产品是“用我授权的照片/角色/球队氛围做一套 Home/Task/Diff 可读皮肤”，$49 custom 才成立。

### 2.5 纯色会让团队误判成功标准

纯色路线容易让 Dev/QA 把成功标准降为：

- route 200；
- CSS 生效；
- contrast pass；
- screenshot 没坏。

但真实 gate 应该是：

```text
TECH_GO + USABILITY_GO + VISUAL_GO + OWNER_REVIEW_GO
```

纯色即使 TECH_GO，也大概率 VISUAL_NO_GO / OWNER_REVIEW_NO_GO。

---

## 3. 我们应复刻的页面 / 模板结构

### 3.1 可复刻，不可照搬的东西

可以复刻：

- Hero + Studio + Gallery + Builder + Install + Security + FAQ 结构；
- Codex-like workspace preview 的构图；
- local image processing / data-only package / reviewed engine / restore-first 边界；
- category chip、Remix CTA、full-size preview、Home/Task/Diff preview；
- 情绪模板类别：idol、anime、sports、pet、fantasy、esports、mecha。

不能复刻：

- 对标站图片；
- 真人明星脸、真实动漫角色、球队 crest、FIFA/World Cup 官方标志；
- 官方授权暗示；
- 未测试平台的 tested claim；
- 把 executable 伪装成 data-only recipe。

### 3.2 首页推荐结构

```text
1. Hero：一句话定位 + 强皮肤工作台预览
2. Category chips：Anime / Idol / Football / Basketball / Esports / Fantasy / Pet / Upload your image
3. Featured Dream Skins：6-8 张强情绪模板卡
4. Builder Preview：上传图 → 调 crop/dim/panels → 三态预览 → export .dreamskin
5. How it works：Choose style → Customize safely → Export recipe → Install / Verify / Restore
6. Safety boundary：theme data vs engine，local processing，rights warning
7. Custom / Personal photo：把你的照片、宠物、授权素材变成 Codex skin
8. FAQ：版权、安装、Windows/macOS、recipe 是否自安装
```

### 3.3 Gallery / skin card 结构

每张卡必须有：

```text
- 16:9 / 16:10 Codex workspace preview
- 主题名：例如 Idol Stage / Anime Hero Desk / Football Nation Arena
- category chip：Idol / Anime / Sports / Fantasy ...
- emotional one-liner：Turn Codex into ...
- three proof chips：Readable surfaces / Data-only package / Remixable
- CTA：Remix / View full preview / Export recipe
- rights note：Original template; upload rights-cleared images only
```

不要再出现：

```text
- Dark / Light / Blue / Pink 作为主分类
- 只有 palette 的卡
- 只有背景图，没有 Codex workspace
- 只有 mascot sticker
- 默认 UI + 小图标
```

### 3.4 单个模板详情页结构

```text
Hero：大预览 + emotional hook + Remix CTA
Preview states：Home / Task / Diff / Composer
Customize controls：image / crop / dim / blur / panel opacity / accent / safe area
Package anatomy：manifest.json / theme.json / background / preview / LICENSE / signature
Install boundary：data package vs reviewed engine
Rights boundary：public template is original; user-upload is user responsibility
Related skins：同类 3 张
```

### 3.5 Builder 结构

Builder 不应只是调颜色，而要让用户感觉“我能把我的图变成皮肤”：

```text
Step 1: Pick a style / upload image
Step 2: Choose identity layout
  - right hero zone
  - left safe reading zone
  - full background + dimming
Step 3: Tune surfaces
  - sidebar opacity
  - main/card opacity
  - composer contrast
  - accent color
Step 4: Preview states
  - Home
  - Task
  - Diff
Step 5: Export .dreamskin data package
Step 6: Read install / restore guide
```

---

## 4. 首页首屏建议

### 4.1 首屏文案建议

H1：

> Build your own Codex Dream Skin — anime, idol, sports and fantasy workspaces.

中文方向：

> 把 Codex 变成你的动漫、偶像、球队和幻想工作台。

Sub：

> Start with an original themed template or upload rights-cleared art. Tune dimming, panels and accents, preview Home / Task / Diff, then export a data-only `.dreamskin` package with install, verify and restore guidance.

中文方向：

> 从原创模板开始，或上传你有权使用的图片；调整明暗、面板、位置和强调色，预览 Home / Task / Diff，再导出可检查的 `.dreamskin` 数据包。

CTA：

- Primary: `Open Skin Builder`
- Secondary: `Browse Dream Skins`
- Trust link: `Read install & safety boundary`

### 4.2 首屏视觉结构

```text
左侧：H1 / Sub / CTA / trust chips
右侧：一张强 Codex workspace skin preview
  - 不用纯色
  - 推荐 Idol Stage 或 Football Nation Arena
  - 显示 sidebar / hero banner / task cards / composer / badge
底部横排 category chips
```

Trust chips：

- Local image processing
- Data-only package
- Install / verify / restore guide
- Rights-cleared public templates

### 4.3 首屏主图优先级

优先用：

1. **Football Nation Arena**：最能承接世界杯/体育热点，避免纯色，用户需求直观。
2. **Idol Stage Skin**：最能表达明星/粉丝/应援心理，但 public version 必须原创虚构人物。
3. **Anime Hero Desk**：二次元需求强，但要 IP-safe。

不建议首屏用：

- Glass Desk / Executive Slate / Paper 等中性模板；
- pure dark cyber terminal；
- pet-only sticker；
- abstract gradient。

---

## 5. Gallery 分类建议

### P0 分类（首页和 `/skins` 首批展示）

1. **Idol / Stage**  
   原创偶像、演唱会灯光、应援卡、黑金/粉紫舞台。

2. **Anime / Character World**  
   原创二次元角色、校园/赛博/训练室/魔法学习桌。

3. **Football / Nation Arena**  
   国家队氛围、球场灯光、抽象球衣纹理；不得用真实旗帜、队徽、FIFA/World Cup 标志、球员脸。

4. **Basketball / Court Lights**  
   球场聚光灯、记分牌、球衣纹理；不得用 NBA、球队 logo、球星脸。

5. **Esports / Stream Booth**  
   直播间、霓虹屏幕、电竞座舱；不得用真实战队 logo。

6. **Fantasy / Guild Desk**  
   魔法工会、图书馆、符文、羊皮纸；避免可识别 HP/Tolkien/game symbols。

7. **Mecha / Command Bay**  
   原创机甲驾驶舱、HUD、工程指挥台；避免高达/EVA/变形金刚等可识别设计。

8. **Pet / Personal Photo**  
   我的狗、猫、自画像、公司 mascot；重点是 personal transformation，不是宠物目录。

### Secondary 分类

- Professional / Neutral：只作为可读性 baseline，不做首屏主卖点。
- Seasonal / Festival：春节、圣诞、毕业季、黑五等，可快速追热点。
- Developer / Terminal Pro：可保留，但必须有 command center / HUD / workspace 场景，不是黑底绿字。

---

## 6. 首批模板建议

### 1. Idol Stage Skin

Hook：

> Turn Codex into a concert-stage workspace around your favorite idol vibe.

结构：右侧原创虚构 cyber idol / 舞台灯；左侧和任务卡用 frosted dark/gold/pink surfaces；composer 作为“fan message / command input”。

### 2. Anime Hero Desk

Hook：

> Code inside an original anime-style hero workspace.

结构：右侧原创主角/训练室/赛博窗景；左侧保护阅读；task cards 用技能/任务状态语言。

### 3. Football Nation Arena

Hook：

> Build in a tournament-season Codex arena inspired by national-team energy.

结构：右侧 stadium lights + 抽象 jersey stripes；任务卡像赛术板 / match tasks；composer 像赛后指令区。Public 版不用真实国家名、旗帜、队徽、FIFA/World Cup mark。

### 4. Basketball Court Lights

Hook：

> Turn Codex into a late-night court command desk.

结构：球场灯、记分牌、战术线、原创球衣色块；无球星/联盟/球队标。

### 5. Mecha Command Bay

Hook：

> Run agents from an original mecha cockpit.

结构：驾驶舱 HUD、任务卡像系统模块、composer 像指令台。

### 6. Fantasy Guild Desk

Hook：

> Make Codex feel like a magical guild research desk.

结构：魔法书、符文、烛光、羊皮纸任务卡；无具体 franchise 符号。

---

## 7. 给当前项目的执行修正

1. **停止把 Glass Desk / Executive Slate / Paper 当首发主皮肤。** 这些只能是 readability baseline。
2. **首页首屏换成强情绪模板。** 推荐 Football Nation Arena 或 Idol Stage。
3. **导航从 Themes 改成 Skins / Builder / Install / Safety。** 不再强调 theme JSON。
4. **Gallery 分类从 Dark/Light 改成 Identity categories。** Anime、Idol、Football、Basketball、Esports、Fantasy、Mecha、Pet。
5. **每张模板卡必须展示 Codex workspace，而不是单图 wallpaper。**
6. **Builder 必须支持 user-upload / crop / dim / panel opacity / safe area。** 颜色只是其中一个参数。
7. **所有 public 模板 IP-safe 原创。** 明星、动漫、球队、球员、World Cup/FIFA 只作为用户私有上传方向和 SEO/说明语境，不能作为 public 素材。
8. **对外口径坚持 data-only package + reviewed engine。** 安装/验证/恢复是信任闭环。

---

## 8. 最短可落地首页 IA

```text
Hero
  H1: Build your own Codex Dream Skin
  Sub: Anime, idol, sports, fantasy and personal-photo workspaces — export safe .dreamskin recipes.
  CTA: Open Builder / Browse Skins
  Visual: Football Nation Arena or Idol Stage full workspace preview

Category Rail
  Idol Stage / Anime Hero / Football Arena / Basketball Court / Esports Booth / Fantasy Guild / Mecha Bay / Pet Photo

Featured Skins
  6 cards, each with preview + hook + Remix CTA

Builder Strip
  Upload image → Frame hero zone → Tune panels → Preview Home/Task/Diff → Export .dreamskin

Safety Strip
  Local image processing / data-only package / reviewed engine / restore path

Custom CTA
  Bring your own idol/anime/team/pet art if you have rights; we help turn it into a readable Codex workspace.
```

---

## Final product principle

> CodexSkin.fun 的首发皮肤必须让用户一秒钟看出“这是我的世界进入了 Codex”，而不是“Codex 换了一个颜色”。

颜色负责可读性，**身份负责需求**。
