# CodexSkin.fun Themed/Fandom/Sports/Anime/Idol 合规边界

Date: 2026-07-22  
Role: 小姚 / Law  
Scope: Codex Dream Skin Builder、公开模板库、用户上传私用、SEO/页面文案  
Status: Product compliance boundary, not legal advice

## 0. 一句话结论

CodexSkin.fun 可以做“可自定义的 fandom / idol / anime-style / sports-style / national-arena 氛围皮肤”，但公开模板必须是原创、泛风格、非官方、非可识别 IP；真实明星、球员、球队、国家队、世界杯/FIFA、动漫/游戏角色、品牌 logo 等只能允许用户在本地/私有上传场景自用，不能由站点公开提供、展示、索引、打包分发或暗示官方授权。明显违法、侵权、色情化未成年人、仇恨/暴力极端、隐私肖像等内容应完全禁止。

## 1. 三层边界：公开模板 / 用户自传私用 / 完全禁止

### A. 可以公开模板做（站点可展示、可 SEO、可下载示例包）

前提：素材、名称、描述、文件名、alt text、schema、社媒图都不能让用户 3 秒内识别到具体明星、球队、赛事、动漫/游戏 IP 或品牌来源。

| 类别 | 可公开做法 | 命名建议 | 必避坑 |
|---|---|---|---|
| Idol / Star mood | 原创虚构 cyber idol、舞台灯、应援棒、演唱会氛围、抽象剪影 | `Cyber Idol Stage Skin`、`Neon Concert Workspace` | 不用真人脸、真实艺名、粉丝名、经纪公司/团体 logo、专辑/应援色精确复刻 |
| Anime-style | 原创二次元角色/场景、校园/机甲/魔法/赛博等泛类型 | `Anime Hero Desk`、`Mecha Command Bay`、`Magical Study Room` | 不用已知角色发型/服装/武器/姿势/logo/台词，不写“像 X” |
| Sports-style | 泛球场灯光、抽象球衣纹理、比分牌 UI、原创颜色方案 | `Football Nation Arena`、`Basketball Court Lights` | 不用球员肖像、队徽、联赛 logo、国家队队徽/球衣、真实赛事奖杯 |
| National / tournament vibe | 抽象国家色彩情绪、非官方竞技氛围、无旗帜/无队徽 | `Red Gold Arena`、`Blue White Stadium Energy` | 不写 FIFA/World Cup 官方关联，不画大力神杯/官方标识，不复刻国家队球衣 |
| Esports / gaming vibe | 原创电竞房、HUD、霓虹键鼠、非真实战队符号 | `Esports Neon Booth` | 不用战队 logo、游戏 UI、英雄角色、赞助商品牌 |
| Fantasy / sci-fi / pet | 原创公会、魔法书、机器人、宠物伙伴 | `Fantasy Guild Desk`、`Pet Companion Workspace` | 不复刻哈利波特/魔戒/宝可梦/高达/EVA 等可识别元素 |

公开模板的生成/设计规则：
- 使用原创角色、原创纹章、原创配色名；
- 使用“inspired by genre / vibe / mood”而不是“based on [IP/person/team]”；
- 预览图必须是 Codex-like 工作区皮肤，不是明星海报/动漫海报；
- public package 的 `NOTICE.md` 写清素材来源：自制、AI 生成、开源可商用素材及许可；
- 不把 negative prompt 中列出的真实 IP/明星名暴露到页面、alt、文件名或 JSON 中。

### B. 只能用户自传私用（平台可支持上传/本地导出，但不公开展示/分发）

这些内容用户可能有授权、自己拍摄、购买素材，或仅作个人本地桌面私用。平台可以提供私有上传能力，但要做清晰权利提示，默认不进公开库、不被搜索引擎索引、不生成公开分享页。

| 内容 | 允许范围 | 产品限制 |
|---|---|---|
| 真实明星/偶像照片、AI 肖像 | 用户上传本地私用；用户确认拥有权利或合法使用权限 | 不做公开模板；不做官方示例；不允许平台托管公开下载；不暗示代言 |
| 真实球员/运动员照片或球衣形象 | 用户私用上传 | 不公开展示；不使用姓名/肖像做 landing SEO；不做“Messi skin / Ronaldo skin”等页面 |
| 真实球队/国家队徽章、球衣、旗帜组合 | 用户私用上传 | 不打包成站点模板；不使用 FIFA/World Cup/club/national-team 标识做素材 |
| 动漫/游戏角色图、同人图、截图 | 用户私用上传且用户承担权利责任 | 不作为公开 gallery；不复用用户上传素材训练/营销；不做公开 remix feed |
| 品牌 logo、赛事 logo、赞助商标 | 用户私用上传 | 不在公开模板/页面/广告中使用；不做“official”表述 |
| 用户自拍、朋友照片、宠物照片 | 用户私用或用户可选择本地导出 | 若涉及他人肖像需提示获得同意；默认不公开 |

建议技术/产品限制：
- Builder 默认采用“local/private project”模式；
- 上传素材不自动进入公开 gallery；
- 如果有云端保存，设为 private，提供删除入口；
- 导出包含 `user-assets-notice.txt`，写明用户素材未获得平台授权审查，用户不得无权再分发；
- 若未来开放公开分享，必须加人工/自动审核：肖像、IP、商标、未成年人、成人内容、仇恨符号、隐私信息。

### C. 完全禁止（即使用户上传也不应支持/应在 ToS 与审核中禁止）

| 禁止内容 | 原因 |
|---|---|
| 非自愿亲密图像、性化真人肖像、深度伪造色情 | 高风险违法与平台安全风险 |
| 未成年人性化、疑似未成年人色情化动漫/真人内容 | 零容忍 |
| 侵犯隐私的偷拍、人脸冒充、误导性名人代言 | 肖像权/隐私/欺诈风险 |
| 仇恨组织标志、恐怖主义、极端主义招募或美化 | 安全与合规风险 |
| 用真实个人/明星/球员制造“官方推荐/本人使用/赞助”假象 | 虚假代言与商标/肖像风险 |
| 绕过版权保护、盗版素材包、批量下载第三方付费素材 | 版权与反规避风险 |
| 恶意代码、跟踪脚本、窃取 Codex/系统数据的主题包 | 安全风险；`.dreamskin` 应保持数据包，不执行任意代码 |

## 2. 页面免责声明建议

### 全站 Footer / About / Gallery 下方

> CodexSkin.fun is an independent customization tool and is not affiliated with, endorsed by, or sponsored by OpenAI, Codex, any sports league, tournament organizer, team, celebrity, anime/game studio, or brand. Public templates use original, genre-inspired artwork only. All trademarks, names, and logos belong to their respective owners.

中文：

> CodexSkin.fun 是独立的个性化工具，与 OpenAI、Codex、任何体育联盟/赛事组织、球队、明星、动漫/游戏公司或品牌不存在从属、赞助、背书或官方合作关系。公开模板仅使用原创的泛风格设计。所有商标、名称和标识归其各自权利人所有。

### 模板详情页 / 下载页

> This public template is an original genre-inspired design. It does not include official team crests, tournament marks, celebrity likenesses, anime/game characters, or brand logos. If you customize it with your own images, you are responsible for ensuring you have the rights to use and share those assets.

中文：

> 本公开模板是原创泛风格设计，不包含官方队徽、赛事标识、明星/球员肖像、动漫/游戏角色或品牌 logo。若你用自己的图片进行自定义，请确保你拥有相应使用和分享权利。

### 用户上传 / Builder 上传框旁

短版：

> Upload only images you own, created yourself, licensed, or are otherwise allowed to use. Do not upload or redistribute copyrighted celebrity, anime, sports team, player, brand, or private-person images without permission.

中文短版：

> 请仅上传你自己拥有、创作、已获授权或依法可使用的图片。未经许可，不要上传或再分发受版权/肖像权/商标保护的明星、动漫、球队、球员、品牌或他人私人照片。

确认 checkbox：

> I confirm I have the rights or permission to use the uploaded assets, and I understand exported skins containing third-party materials are for my private use unless I have permission to share them.

中文 checkbox：

> 我确认我拥有或已获得上传素材的使用权限；我理解包含第三方素材的导出皮肤仅限个人私用，除非我已获得公开分享/分发授权。

导出前提示：

> Your `.dreamskin` package may include user-provided assets. CodexSkin.fun does not grant rights to third-party content. Do not publish or sell exported skins containing copyrighted or trademarked materials unless you have permission.

中文：

> 你的 `.dreamskin` 包可能包含用户自传素材。CodexSkin.fun 不授予任何第三方内容权利。除非你已获得许可，否则不要发布、销售或公开分发包含版权/商标素材的导出皮肤。

## 3. SEO 与文案边界：怎样避开侵权

### 可以做的 SEO 词

用“类型 + 氛围 + 原创 + builder/customizer”组合，不绑定具体权利主体：

- `Codex anime style skin builder`
- `anime inspired Codex workspace theme`
- `idol stage Codex skin template`
- `concert stage coding workspace skin`
- `football arena Codex theme`
- `national colors coding workspace skin`
- `basketball court workspace theme`
- `esports neon Codex skin`
- `mecha cockpit Codex theme`
- `fantasy guild coding workspace skin`
- `custom Codex dream skin builder`
- `upload your own image Codex skin`

中文页面可用：

- `Codex 二次元风格皮肤生成器`
- `Codex 偶像舞台风皮肤`
- `Codex 足球球场氛围主题`
- `Codex 国家队配色灵感皮肤`（注意页面内解释为“非官方、无队徽/旗帜/赛事标识”）
- `Codex 电竞霓虹皮肤`
- `Codex 机甲驾驶舱主题`
- `Codex 梦幻皮肤自定义工具`

### 不建议/禁止做的 SEO 词

不要用具体受保护名称做页面主词、slug、title、H1、alt、下载包名或结构化数据：

- 明星/偶像：`Taylor Swift Codex skin`、`BTS skin`、`BLACKPINK Codex theme`、任何真实艺人/团名；
- 体育：`Messi Codex skin`、`Ronaldo Codex theme`、`NBA team skin`、`Lakers Codex skin`、`Argentina national team Codex skin`；
- 赛事/组织：`FIFA World Cup Codex skin`、`UEFA Champions League theme`、`Olympics skin`；
- 动漫/游戏：`Naruto Codex skin`、`One Piece Codex theme`、`Genshin Codex skin`、`Gundam cockpit skin`、`Evangelion skin`；
- 品牌/官方：`official Codex skin`、`OpenAI official theme`、`sponsored by...`、`licensed [brand] skin`（除非真实授权）。

### 如果用户需求里出现真实 IP/明星词

可在 builder 文案中接住需求，但页面不做索引化落地：

- 不建 `/skins/messi`、`/skins/naruto`、`/skins/world-cup`；
- 可以在非索引帮助文档中写泛化说明：`Can I upload my favorite celebrity/anime/sports image?`，回答强调“only if you have rights; private use; do not redistribute”；
- 搜索页对这类词不要生成自动 SEO 页面；
- 内部 prompt 可以把用户的真实 IP 请求转换为原创泛风格：`famous footballer poster` → `original football arena hero silhouette`。

## 4. 产品实现要求

1. 公开模板库只上原创模板：模板审核字段 `ip_risk: low`、`rights_source: original/self-generated/licensed`、`contains_real_person: false`、`contains_trademark: false`。
2. Builder 上传需有权利确认 checkbox；未勾选不能导出。
3. 用户上传默认 private/local；不进 sitemap、不进 gallery、不出现在 OpenGraph 图。
4. `.dreamskin` 包建议包含 `manifest.json` 与 `NOTICE.md`：标明 public template assets 与 user-provided assets 的来源/责任。
5. 公共下载包不得包含真实明星、动漫、球队、赛事、品牌素材。
6. 如果开放社区分享，必须先做审核队列与举报/下架机制；没有审核能力前不要开放公开分享。
7. 所有页面避免“official / endorsed / licensed / World Cup / FIFA / NBA / anime character name / celebrity name”等误导性表达。
8. 视觉 QA 增加“3 秒识别测试”：如果审核人能快速识别出来源 IP/明星/球队，公开模板 NO-GO。

## 5. 推荐页面微文案

### Hero 合规版

> Build your own Codex Dream Skin — anime-style, idol-stage, sports-arena, fantasy, esports, and personal-photo themes. Start from original templates or upload images you have rights to use.

中文：

> 打造你的 Codex Dream Skin：二次元风、偶像舞台、球场氛围、幻想、公会、电竞或个人照片主题。可从原创模板开始，也可上传你拥有使用权的素材。

### Gallery 分类名

- `Anime-style Originals`，不要写 `Anime Characters`；
- `Idol Stage Originals`，不要写真实团名/艺名；
- `Football Arena Vibes`，不要写 `World Cup Team Skins`；
- `National Color Energy`，不要写具体国家队；
- `Basketball Court Lights`，不要写 NBA/球队/球星；
- `Mecha Command Originals`，不要写 Gundam/EVA。

### Builder 空状态

> Add your own hero image, pet, team-color mood, or character art. Keep it private unless you have permission to share the assets.

中文：

> 添加你自己的主视觉、宠物、球队配色氛围或角色图。除非你拥有分享授权，否则请仅作私用。

## 6. GO / NO-GO 判定

公开模板 GO：
- 原创或可商用授权素材；
- 无真实人物肖像、无商标、无队徽、无赛事标识、无可识别角色；
- 页面、slug、alt、schema、包名均为泛风格命名；
- NOTICE/免责声明存在；
- 通过“3 秒识别测试”。

用户私用 GO：
- 用户主动上传；
- 明确确认拥有权利/私用限制；
- 默认 private/local；
- 不自动公开、不进 SEO、不作为平台素材复用。

NO-GO：
- 平台公开提供真实明星/球员/动漫角色/球队/赛事/品牌素材；
- 页面用权利方名称截流 SEO；
- 暗示官方、授权、代言、赞助；
- 用户上传内容被无审核公开分享；
- 任何完全禁止内容。
