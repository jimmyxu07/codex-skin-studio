#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const ROOT = '/Users/leyantech/Projects/codex-personalization-kits';
const OUT = path.join(ROOT, 'design-xiu-themed-v1');

const skins = [
  {
    slug: 'idol-stage-skin',
    name: 'Idol Stage Skin',
    category: 'Idol / stage workspace',
    hook: 'Turn Codex into a concert-stage workspace around an original cyber idol vibe.',
    mood: 'fan-light energy, premium concert glass, soft pink-violet spotlights, collectible backstage pass UI',
    palette: {
      canvas: '#FFF5FB', panelSoft: '#F8E8F3', panelWhite: '#FFFFFF', textPrimary: '#251326', mutedText: '#735C72',
      accent: '#E83E8C', accentAlt: '#7C3AED', glow: '#FFD2EA', border: '#E8CFE0', heroInk: '#3A1736'
    },
    bg: 'radial-gradient(circle at 78% 22%, rgba(232,62,140,.24), transparent 21%), radial-gradient(circle at 92% 58%, rgba(124,58,237,.18), transparent 24%), linear-gradient(135deg,#FFF7FC 0%,#FDE8F5 44%,#F7EDFF 100%)',
    motif: 'idol',
    artZone: 'Right 42% reserved for an original faceless cyber-idol silhouette on a round concert platform, light sticks, fan-card shapes, no celebrity likeness.',
    negative: 'no real celebrity face or name, no agency logo, no concert poster copy, no copied outfit, no watermark, no competitor screenshot'
  },
  {
    slug: 'anime-hero-desk',
    name: 'Anime Hero Desk',
    category: 'Anime-style hero coding desk',
    hook: 'Anime-style coding desk with heroic protagonist energy, built from an original character world.',
    mood: 'morning training-room confidence, original anime protagonist silhouette, school desk meets cyber-city task board',
    palette: {
      canvas: '#F4FBFF', panelSoft: '#E3F1FA', panelWhite: '#FFFFFF', textPrimary: '#102033', mutedText: '#4D657C',
      accent: '#0EA5E9', accentAlt: '#F97316', glow: '#BDEBFF', border: '#C9DFEC', heroInk: '#102A4A'
    },
    bg: 'radial-gradient(circle at 80% 25%, rgba(14,165,233,.22), transparent 22%), radial-gradient(circle at 92% 70%, rgba(249,115,22,.14), transparent 20%), linear-gradient(135deg,#F7FCFF 0%,#E9F7FF 50%,#FFF6ED 100%)',
    motif: 'anime',
    artZone: 'Right 42% shows an original anime-style heroic coder silhouette beside a desk, floating training cards, cyber city dawn outside window; no known costume/franchise pose.',
    negative: 'no recognizable anime/game character, no franchise costume, no school emblem copied from IP, no readable Japanese brand text, no watermark, no competitor image'
  },
  {
    slug: 'football-nation-arena',
    name: 'Football Nation Arena',
    category: 'Sports / national arena mood',
    hook: 'A national-team inspired football arena skin for tournament season without real flags, crests, players, or FIFA marks.',
    mood: 'stadium lights, abstract jersey stripes, tournament-night energy, command-center scoreboard accents',
    palette: {
      canvas: '#F6FFF8', panelSoft: '#E4F4E9', panelWhite: '#FFFFFF', textPrimary: '#102418', mutedText: '#506B58',
      accent: '#16A34A', accentAlt: '#F59E0B', glow: '#D6F8DE', border: '#C8E4CF', heroInk: '#073D21'
    },
    bg: 'radial-gradient(circle at 80% 20%, rgba(22,163,74,.22), transparent 23%), radial-gradient(circle at 92% 62%, rgba(245,158,11,.18), transparent 22%), linear-gradient(135deg,#F7FFF9 0%,#E8F8EC 48%,#FFF9EA 100%)',
    motif: 'football',
    artZone: 'Right 42% becomes a generic football arena with floodlights, original abstract jersey stripe ribbons, pitch-line geometry and scoreboard-like UI blocks; no flag/crest/player.',
    negative: 'no national flag, no club crest, no FIFA/World Cup marks, no real player likeness, no jersey sponsor/logo, no official tournament typography, no competitor image'
  }
];

function hexToRgb(hex) { const h = hex.replace('#',''); return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)]; }
function relLum([r,g,b]) { const f = v => { v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); }; return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); }
function contrast(a,b) { const l1=relLum(hexToRgb(a)); const l2=relLum(hexToRgb(b)); const hi=Math.max(l1,l2), lo=Math.min(l1,l2); return +(((hi+.05)/(lo+.05)).toFixed(2)); }
function bar(w, c='currentColor', o=.35) { return `<span class="bar" style="width:${w}px;background:${c};opacity:${o}"></span>`; }

function ornaments(s) {
  if (s.motif === 'idol') return `<div class="spot spot1"></div><div class="spot spot2"></div><div class="stageRing"></div><div class="idolSil"><div></div></div><div class="fan f1"></div><div class="fan f2"></div><div class="fan f3"></div><div class="beam b1"></div><div class="beam b2"></div>`;
  if (s.motif === 'anime') return `<div class="sunArc"></div><div class="city"></div><div class="heroSil"></div><div class="desk"></div><div class="training t1"></div><div class="training t2"></div><div class="slash"></div>`;
  return `<div class="flood f1"></div><div class="flood f2"></div><div class="pitch"></div><div class="stripe s1"></div><div class="stripe s2"></div><div class="ballPath"></div><div class="scoreCard"></div>`;
}

function css(s) {
  const p = s.palette;
  return `
  *{box-sizing:border-box}body{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:${p.textPrimary};background:${p.canvas}}.stage{width:1376px;height:768px;position:relative;overflow:hidden;background:${s.bg}}.stage:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.70) 0 34%,rgba(255,255,255,.42) 52%,rgba(255,255,255,.08) 78%)}.bar{display:block;height:8px;border-radius:99px}.window{position:absolute;left:108px;top:72px;width:930px;height:586px;border-radius:31px;background:rgba(255,255,255,.78);border:1px solid ${p.border};box-shadow:0 38px 130px rgba(25,19,30,.18);backdrop-filter:blur(22px);overflow:hidden;display:grid;grid-template-columns:220px 1fr 250px;grid-template-rows:54px 1fr 86px}.title{grid-column:1/4;display:flex;align-items:center;padding:0 20px;border-bottom:1px solid ${p.border};background:rgba(255,255,255,.72)}.dots{display:flex;gap:8px}.dot{width:12px;height:12px;border-radius:50%;background:${p.border}}.brand{margin-left:20px;width:120px;height:13px;border-radius:99px;background:${p.textPrimary};opacity:.14}.chip{margin-left:auto;border-radius:999px;background:${p.panelSoft};border:1px solid ${p.border};padding:6px 12px;font-size:12px;font-weight:800;color:${p.textPrimary}}.sidebar{grid-row:2/4;background:linear-gradient(180deg,${p.panelSoft},rgba(255,255,255,.72));border-right:1px solid ${p.border};padding:22px 16px;position:relative}.navItem{height:42px;border-radius:14px;display:flex;align-items:center;gap:11px;padding:0 12px;margin-bottom:7px}.navItem.active{background:${p.panelWhite};box-shadow:0 10px 24px rgba(16,32,51,.06);border-left:4px solid ${p.accent}}.icon{width:15px;height:15px;border-radius:5px;background:${p.accent};opacity:.78}.pass{position:absolute;left:17px;right:17px;bottom:22px;border-radius:18px;background:${p.panelWhite};border:1px solid ${p.border};padding:14px}.main{padding:24px;background:rgba(255,255,255,.48)}.hero{height:98px;border-radius:23px;background:${p.panelWhite};border:1px solid ${p.border};padding:20px;box-shadow:0 14px 36px rgba(16,32,51,.06)}.cards{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}.card{height:116px;border-radius:21px;background:${p.panelWhite};border:1px solid ${p.border};padding:16px;box-shadow:0 10px 28px rgba(16,32,51,.045)}.accentLine{width:44px;height:4px;border-radius:99px;background:${p.accent};margin-bottom:12px}.badge{height:18px;width:64px;border-radius:99px;background:${p.accentAlt};opacity:.20;margin-top:12px}.right{border-left:1px solid ${p.border};background:rgba(255,255,255,.56);padding:20px}.bubble{border:1px solid ${p.border};background:${p.panelWhite};border-radius:18px;padding:14px;margin-bottom:12px}.diff{height:8px;border-radius:99px;background:${p.accent};opacity:.55;margin:8px 0}.diff.alt{background:${p.accentAlt};opacity:.40}.composer{grid-column:2/4;border-top:1px solid ${p.border};background:rgba(255,255,255,.86);padding:16px 20px}.input{height:54px;border-radius:18px;border:2px solid ${p.accent};background:${p.panelWhite};display:flex;align-items:center;padding:0 16px;box-shadow:0 0 0 5px color-mix(in srgb,${p.accent} 14%,transparent)}.send{margin-left:auto;width:38px;height:32px;border-radius:12px;background:${p.accent}}
  .label{position:absolute;right:84px;top:62px;padding:9px 14px;border-radius:999px;background:rgba(255,255,255,.72);border:1px solid ${p.border};font-weight:900;color:${p.textPrimary};box-shadow:0 12px 34px rgba(16,32,51,.09)}.cta{position:absolute;right:88px;bottom:66px;padding:14px 20px;border-radius:18px;background:${p.accent};color:white;font-weight:900;box-shadow:0 18px 48px color-mix(in srgb,${p.accent} 35%,transparent)}
  .spot{position:absolute;border-radius:50%;background:${p.glow};filter:blur(10px);opacity:.75}.spot1{right:118px;top:70px;width:130px;height:130px}.spot2{right:305px;top:132px;width:86px;height:86px}.stageRing{position:absolute;right:86px;bottom:132px;width:394px;height:120px;border-radius:50%;border:12px solid rgba(255,255,255,.62);box-shadow:0 0 0 8px color-mix(in srgb,${p.accent} 18%,transparent),0 22px 70px rgba(0,0,0,.12)}.idolSil{position:absolute;right:206px;top:154px;width:144px;height:330px;border-radius:80px 80px 26px 26px;background:linear-gradient(180deg,${p.heroInk},color-mix(in srgb,${p.heroInk} 72%,${p.accent}));box-shadow:0 0 90px color-mix(in srgb,${p.accent} 28%,transparent)}.idolSil:before{content:"";position:absolute;left:39px;top:-54px;width:66px;height:66px;border-radius:50%;background:${p.heroInk}}.idolSil:after{content:"";position:absolute;left:-35px;top:72px;width:214px;height:12px;border-radius:99px;background:${p.heroInk};transform:rotate(-12deg)}.fan{position:absolute;width:28px;height:128px;border-radius:16px;background:linear-gradient(${p.accent},${p.accentAlt});opacity:.72}.fan.f1{right:510px;bottom:138px;transform:rotate(-18deg)}.fan.f2{right:64px;bottom:220px;transform:rotate(20deg)}.fan.f3{right:468px;top:106px;transform:rotate(9deg)}.beam{position:absolute;width:24px;height:620px;top:-80px;background:rgba(255,255,255,.42);filter:blur(4px);transform-origin:top}.b1{right:220px;transform:rotate(24deg)}.b2{right:390px;transform:rotate(-18deg)}
  .sunArc{position:absolute;right:122px;top:78px;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.72) 0 34%,${p.glow} 35% 47%,transparent 48%)}.city{position:absolute;right:28px;bottom:132px;width:510px;height:220px;background:repeating-linear-gradient(90deg,rgba(16,42,74,.18) 0 32px,transparent 32px 48px);clip-path:polygon(0 45%,8% 45%,8% 22%,16% 22%,16% 55%,28% 55%,28% 10%,39% 10%,39% 48%,52% 48%,52% 30%,65% 30%,65% 58%,80% 58%,80% 20%,90% 20%,90% 50%,100% 50%,100% 100%,0 100%)}.heroSil{position:absolute;right:210px;top:178px;width:132px;height:270px;border-radius:70px 70px 24px 24px;background:linear-gradient(180deg,${p.heroInk},color-mix(in srgb,${p.heroInk} 74%,${p.accent}));transform:skew(-4deg);box-shadow:0 0 75px color-mix(in srgb,${p.accent} 22%,transparent)}.heroSil:before{content:"";position:absolute;top:-50px;left:33px;width:68px;height:68px;border-radius:44% 56% 50% 50%;background:${p.heroInk}}.heroSil:after{content:"";position:absolute;top:80px;left:-36px;width:206px;height:12px;border-radius:99px;background:${p.heroInk};transform:rotate(-25deg)}.desk{position:absolute;right:92px;bottom:142px;width:390px;height:74px;border-radius:18px;background:rgba(255,255,255,.62);border:1px solid ${p.border};box-shadow:0 22px 55px rgba(16,32,51,.10)}.training{position:absolute;width:132px;height:86px;border-radius:18px;background:rgba(255,255,255,.60);border:1px solid ${p.border};box-shadow:0 18px 48px rgba(16,32,51,.08)}.t1{right:78px;top:142px;transform:rotate(7deg)}.t2{right:438px;top:232px;transform:rotate(-9deg)}.slash{position:absolute;right:96px;top:110px;width:560px;height:8px;border-radius:99px;background:${p.accentAlt};transform:rotate(-31deg);opacity:.55;box-shadow:0 22px 0 ${p.accent}}
  .flood{position:absolute;width:168px;height:168px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.86),${p.glow} 42%,transparent 70%);filter:blur(2px)}.flood.f1{right:94px;top:74px}.flood.f2{right:386px;top:88px}.pitch{position:absolute;right:28px;bottom:112px;width:520px;height:260px;border-radius:28px;background:linear-gradient(135deg,rgba(22,163,74,.34),rgba(255,255,255,.24));border:2px solid rgba(255,255,255,.65);box-shadow:0 26px 72px rgba(7,61,33,.14)}.pitch:before{content:"";position:absolute;inset:34px;border:2px solid rgba(255,255,255,.62);border-radius:18px}.pitch:after{content:"";position:absolute;left:220px;top:80px;width:82px;height:82px;border:2px solid rgba(255,255,255,.62);border-radius:50%}.stripe{position:absolute;width:86px;height:530px;border-radius:999px;background:linear-gradient(${p.accent},${p.accentAlt});opacity:.38}.stripe.s1{right:210px;top:52px;transform:rotate(28deg)}.stripe.s2{right:352px;top:42px;transform:rotate(28deg);opacity:.23}.ballPath{position:absolute;right:92px;bottom:178px;width:280px;height:120px;border:4px dashed rgba(255,255,255,.76);border-left:0;border-bottom:0;border-radius:0 120px 0 0}.scoreCard{position:absolute;right:160px;top:196px;width:210px;height:92px;border-radius:20px;background:rgba(255,255,255,.62);border:1px solid ${p.border};box-shadow:0 20px 54px rgba(7,61,33,.10)}
  .mock{position:absolute;inset:40px 70px;border-radius:26px;background:rgba(255,255,255,.78);border:1px solid ${p.border};box-shadow:0 30px 100px rgba(16,32,51,.11);backdrop-filter:blur(20px);display:grid;grid-template-columns:320px 1fr;grid-template-rows:1fr 120px;overflow:hidden}.mock .sidebar{grid-row:1/3;padding-top:30px}.mockMain{padding:40px 48px;background:rgba(255,255,255,.50)}.h1{font-size:30px;font-weight:780;letter-spacing:-.03em;margin:0 0 14px}.p{font-size:16px;line-height:1.5;color:${p.mutedText};max-width:640px}.task{margin-top:24px;background:${p.panelWhite};border:1px solid ${p.border};border-radius:22px;padding:22px;color:${p.textPrimary};box-shadow:0 14px 36px rgba(16,32,51,.05)}.task strong{display:block;margin-bottom:8px}.mockComposer{grid-column:2/3;border-top:1px solid ${p.border};background:rgba(255,255,255,.88);padding:24px 48px}.mockInput{height:72px;border-radius:22px;border:2px solid ${p.accent};background:${p.panelWhite};display:flex;align-items:center;padding:0 22px;color:${p.textPrimary}}.placeholder{color:${p.mutedText}}
  `;
}

function previewHtml(s) { const p=s.palette; return `<!doctype html><html><head><meta charset="utf-8"><style>${css(s)}</style></head><body><div class="stage">${ornaments(s)}<div class="label">${s.name}</div><div class="cta">Remix / Customize</div><div class="window"><div class="title"><div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div><div class="brand"></div><div class="chip">${s.category}</div></div><aside class="sidebar">${[0,1,2,3,4,5].map((i)=>`<div class="navItem ${i===1?'active':''}"><div class="icon"></div>${bar(90-i*5,p.textPrimary,i===1?.68:.35)}</div>`).join('')}<div class="pass">${bar(118,p.textPrimary,.46)}<br>${bar(148,p.mutedText,.26)}<br>${bar(88,p.accent,.55)}</div></aside><main class="main"><div class="hero">${bar(220,p.textPrimary,.65)}<br>${bar(340,p.mutedText,.45)}<br>${bar(255,p.mutedText,.28)}</div><div class="cards">${[1,2,3,4].map(()=>`<div class="card"><div class="accentLine"></div>${bar(132,p.textPrimary,.52)}<br>${bar(162,p.mutedText,.32)}<br>${bar(112,p.mutedText,.24)}<div class="badge"></div></div>`).join('')}</div></main><section class="right"><div class="bubble">${bar(128,p.textPrimary,.50)}<div class="diff"></div><div class="diff alt"></div>${bar(170,p.mutedText,.28)}</div><div class="bubble">${bar(104,p.textPrimary,.42)}<div class="diff alt"></div><div class="diff"></div>${bar(140,p.mutedText,.24)}</div><div class="bubble">${bar(135,p.textPrimary,.42)}<div class="diff"></div>${bar(90,p.mutedText,.25)}</div></section><footer class="composer"><div class="input">${bar(96,p.textPrimary,.45)}<span style="margin-left:18px">${bar(300,p.mutedText,.28)}</span><div class="send"></div></div></footer></div></div></body></html>`; }
function bgHtml(s){return `<!doctype html><html><head><meta charset="utf-8"><style>${css(s)}</style></head><body><div class="stage">${ornaments(s)}</div></body></html>`;}
function mockHtml(s){const p=s.palette;return `<!doctype html><html><head><meta charset="utf-8"><style>${css(s)}</style></head><body><div class="stage">${ornaments(s)}<div class="mock"><aside class="sidebar"><div class="navItem active"><div class="icon"></div><span style="font-weight:800">Workspace</span></div><div class="navItem"><div class="icon" style="opacity:.35"></div><span>Projects</span></div><div class="navItem"><div class="icon" style="opacity:.35"></div><span>Tasks</span></div><div class="navItem"><div class="icon" style="opacity:.35"></div><span>Settings</span></div><p class="p" style="font-size:13px;margin:28px 10px">Readable themed sidebar: identity color stays present without lowering contrast.</p></aside><main class="mockMain"><h1 class="h1">${s.name} readable work zone</h1><p class="p">${s.hook} Text surfaces use pale frosted panels, dark body type, stable muted text, and restrained accent glow.</p><div class="task"><strong>Task card / assistant reply sample</strong><span class="p">Cards, AI responses, diff blocks, focus states, and composer all share the theme tokens while preserving readability.</span></div></main><footer class="mockComposer"><div class="mockInput"><span class="placeholder">Ask Codex to plan the next themed skin package…</span><div class="send"></div></div></footer></div></div></body></html>`;}

await fs.mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1376, height: 768 }, deviceScaleFactor: 1 });

const summaryRows = [];
for (const skin of skins) {
  const dir = path.join(OUT, skin.slug);
  const crops = path.join(dir, 'crops');
  await fs.mkdir(crops, { recursive: true });
  const p = skin.palette;
  const previewPrompt = `Marketplace preview for ${skin.name}: horizontal 16:9 benchmark-style Codex Desktop skin preview, Codex-like desktop window occupies 52-72% left/center, visible app chrome/sidebar/main workspace/AI side panel/task cards/bottom composer, right-side emotional art zone: ${skin.artZone} Category chip and Remix / Customize CTA visible. Palette ${Object.entries(p).map(([k,v])=>`${k} ${v}`).join(', ')}. Premium PC workspace product, not a poster, not a wallpaper, not plain color. IP safety negative prompt: ${skin.negative}.`;
  const backgroundPrompt = `Live background for ${skin.name}: UI-free low-detail atmospheric background only, right 42% emotional hero/world art, calm left/sidebar and bottom composer safe zones for readability scrims. Decompose into background + optional hero/ornament layer + surface/accent tokens. No baked text, no logos, no real person/team/franchise marks. Mood: ${skin.mood}. Negative prompt: ${skin.negative}.`;
  await fs.writeFile(path.join(dir, 'preview_prompt.txt'), previewPrompt);
  await fs.writeFile(path.join(dir, 'background_prompt.txt'), backgroundPrompt);
  await page.setContent(previewHtml(skin), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(dir, 'marketplace-preview.png') });
  await page.setContent(bgHtml(skin), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(dir, 'live-background.png') });
  await page.setContent(mockHtml(skin), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(dir, 'simulated-codex-overlay.png') });
  await page.screenshot({ path: path.join(crops, 'sidebar-crop.png'), clip: { x: 70, y: 40, width: 320, height: 688 } });
  await page.screenshot({ path: path.join(crops, 'main-crop.png'), clip: { x: 390, y: 78, width: 720, height: 470 } });
  await page.screenshot({ path: path.join(crops, 'composer-crop.png'), clip: { x: 390, y: 608, width: 916, height: 120 } });
  const checks = {
    textPrimaryOnPanelWhite: contrast(p.textPrimary, p.panelWhite),
    textPrimaryOnPanelSoft: contrast(p.textPrimary, p.panelSoft),
    mutedTextOnPanelWhite: contrast(p.mutedText, p.panelWhite),
    mutedTextOnPanelSoft: contrast(p.mutedText, p.panelSoft),
    thresholds: { body: 4.5, mutedPlaceholder: 3.0 }
  };
  checks.result = (checks.textPrimaryOnPanelWhite >= 4.5 && checks.textPrimaryOnPanelSoft >= 4.5 && checks.mutedTextOnPanelWhite >= 3.0 && checks.mutedTextOnPanelSoft >= 3.0) ? 'USABILITY_MOCK_PASS' : 'USABILITY_MOCK_FAIL';
  const asset = {
    schemaVersion: 1,
    assetPack: skin.slug,
    displayName: skin.name,
    themeFamily: 'benchmark-style-emotional-template',
    status: 'DESIGN_CONCEPT_ASSET_READY_OWNER_REVIEW_ONLY',
    category: skin.category,
    hook: skin.hook,
    positioning: skin.mood,
    requiredShape: {
      marketplacePreview: '16:9 horizontal Codex-like full workspace + right-side emotional hero/world art + themed sidebar/main/composer + skin chip + Remix / Customize CTA',
      liveSkinDecomposition: ['background image', 'optional hero/ornament layer', 'surface tokens', 'accent tokens', 'readability scrim rules'],
      liveLayout: skin.motif === 'idol' ? 'right 42% idol/stage art zone; left sidebar frosted high-contrast; composer stage-glow accent with stable text' : 'right 42% emotional art/world zone; left/center functional surfaces protected by pale frosted panels; composer accent ring with stable text'
    },
    files: {
      marketplacePreview: `design-xiu-themed-v1/${skin.slug}/marketplace-preview.png`,
      liveBackground: `design-xiu-themed-v1/${skin.slug}/live-background.png`,
      simulatedCodexOverlay: `design-xiu-themed-v1/${skin.slug}/simulated-codex-overlay.png`,
      crops: {
        sidebar: `design-xiu-themed-v1/${skin.slug}/crops/sidebar-crop.png`,
        main: `design-xiu-themed-v1/${skin.slug}/crops/main-crop.png`,
        composer: `design-xiu-themed-v1/${skin.slug}/crops/composer-crop.png`
      },
      prompts: {
        marketplacePreview: `design-xiu-themed-v1/${skin.slug}/preview_prompt.txt`,
        liveBackground: `design-xiu-themed-v1/${skin.slug}/background_prompt.txt`
      }
    },
    palette: p,
    tokens: {
      canvas: p.canvas,
      backgroundArtScrimLeft: 'rgba(255,255,255,0.70)',
      backgroundArtScrimCenter: 'rgba(255,255,255,0.42)',
      sidebarBackground: p.panelSoft,
      mainBackground: 'rgba(255,255,255,0.50)',
      panelBackground: p.panelWhite,
      composerBackground: 'rgba(255,255,255,0.88)',
      textPrimary: p.textPrimary,
      textSecondary: p.mutedText,
      border: p.border,
      accent: p.accent,
      accentSecondary: p.accentAlt,
      focusRing: `${p.accent}33`,
      backdropBlur: '20px',
      panelScrim: 'rgba(255,255,255,0.82)'
    },
    generationPrompts: { marketplacePreview: previewPrompt, liveBackground: backgroundPrompt },
    contrastSelfCheck: checks,
    ipSafetyNotes: {
      publicSafeVersion: skin.artZone,
      bannedSubjectMatter: skin.negative,
      rightsNotes: 'Original programmatic vector-style composition generated locally with Playwright/CSS. No third-party artwork, real celebrities, anime/game characters, team crests, FIFA/World Cup marks, player likenesses, logos, competitor images, or external assets used.',
      builderCopyReminder: 'Use images you own or have rights to. Do not redistribute copyrighted celebrity, anime, sports team, or player artwork without permission.'
    },
    qaNotes: [
      'Owner-review concept batch only; no real Codex Desktop apply per brief.',
      'Crops are simulated Codex overlay crops, not CDP evidence.',
      'If selected, next step is decompose into .dreamskin/manual kit and run real Install/Apply/Verify/Restore.'
    ]
  };
  await fs.writeFile(path.join(dir, 'asset.json'), JSON.stringify(asset, null, 2));
  summaryRows.push(`| ${skin.name} | ${skin.slug} | ${skin.hook} | ${checks.result} |`);
}
await browser.close();
await fs.writeFile(path.join(OUT, 'THEMED_FIRST3_HANDOFF.md'), `# 小秀 themed benchmark-style first 3 handoff\n\nSource brief: docs/THEMED_TEMPLATE_BRIEF-codexskin-2026-07-22.md\n\n## Batch status\n\n${summaryRows.join('\n')}\n\n## Deliverables per slug\n\n- marketplace-preview.png\n- live-background.png\n- simulated-codex-overlay.png\n- crops/sidebar-crop.png\n- crops/main-crop.png\n- crops/composer-crop.png\n- preview_prompt.txt\n- background_prompt.txt\n- asset.json\n\n## Scope notes\n\n- Stopped pure-color direction; all three concepts use emotional/fandom-style hooks with readable light/frosted functional surfaces.\n- Public templates are IP-safe originals: no real stars, anime/game characters, teams, flags, crests, FIFA/World Cup marks, player likenesses, logos, competitor images, or third-party assets.\n- No real Codex app apply was run, matching the brief: “No real app apply until Owner chooses one.”\n`);
console.log(`Generated ${skins.length} benchmark-style themed skin folders in ${OUT}`);
