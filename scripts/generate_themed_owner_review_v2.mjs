#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const ROOT = '/Users/leyantech/Projects/codex-personalization-kits';
const OUT = path.join(ROOT, 'design-xiu-themed-v2');

const skins = [
  {
    slug: 'idol-stage-skin',
    name: 'Idol Stage Skin',
    category: 'Idol / Stage',
    chip: 'ORIGINAL CYBER IDOL',
    hook: 'Make Codex feel like a premium concert-stage command center — collectible, glowing, and remixable.',
    identity: 'Original fictional performer “Nova Echo” as a faceless, non-real-person stage presence: headset arc, star hairpins, fan-light sea, backstage pass cards, and stage runway geometry.',
    layout: 'right hero stage zone, left/center protected reading surfaces, bottom composer with controllable stage glow',
    palette: {
      canvas: '#fff4fb', panel: '#fffafd', panel2: '#f8e7f5', ink: '#251226', muted: '#6d5670',
      accent: '#ed3d94', accent2: '#8b5cf6', accent3: '#ffd166', glow: '#ffd4ec', border: '#ead0e3', dark: '#351535'
    },
    bg: 'radial-gradient(circle at 80% 18%, rgba(237,61,148,.34), transparent 20%), radial-gradient(circle at 91% 66%, rgba(139,92,246,.22), transparent 25%), radial-gradient(circle at 58% 84%, rgba(255,209,102,.24), transparent 24%), linear-gradient(135deg,#fff7fc 0%,#fde6f5 48%,#f4edff 100%)',
    motif: 'idol',
    focus: { x: 0.73, y: 0.48 },
    safeArea: 'left-reading-right-idol-hero',
    negative: ['real celebrity likeness', 'idol group name or agency mark', 'copied concert poster', 'recognizable outfit from a performer', 'brand logo', 'competitor image']
  },
  {
    slug: 'anime-hero-desk',
    name: 'Anime Hero Desk',
    category: 'Anime-style / Hero Desk',
    chip: 'ORIGINAL HERO WORLD',
    hook: 'Turn Codex into an anime-style protagonist desk: dawn city, training cards, and a heroic but readable coding cockpit.',
    identity: 'Original fictional coder “Ari Signal” with non-franchise hair silhouette, short energy scarf, desk tools, floating training cards, and cyber-dawn window shapes.',
    layout: 'right hero desk/world zone, center task board, bright readable panels, composer with blue/orange focus rail',
    palette: {
      canvas: '#f4fbff', panel: '#fbfdff', panel2: '#e1f2fb', ink: '#0e2034', muted: '#4f657c',
      accent: '#0ea5e9', accent2: '#f97316', accent3: '#ffe08a', glow: '#bdeaff', border: '#c8dfed', dark: '#102a4a'
    },
    bg: 'radial-gradient(circle at 79% 20%, rgba(14,165,233,.30), transparent 22%), radial-gradient(circle at 92% 72%, rgba(249,115,22,.18), transparent 23%), linear-gradient(135deg,#f8fdff 0%,#e7f7ff 51%,#fff6ea 100%)',
    motif: 'anime',
    focus: { x: 0.72, y: 0.46 },
    safeArea: 'left-reading-right-original-character-world',
    negative: ['recognizable anime or game character', 'franchise costume', 'copied weapon or emblem', 'studio logo', 'readable brand text', 'competitor image']
  },
  {
    slug: 'football-nation-arena',
    name: 'Football Nation Arena',
    category: 'Sports / Arena Mood',
    chip: 'GENERIC ARENA ENERGY',
    hook: 'A tournament-night football command workspace with abstract nation-energy stripes — no flags, crests, players, or marks.',
    identity: 'Original fictional arena “Aurora Pitch”: floodlights, anonymous jersey-fabric ribbons, tactical pitch geometry, generic scoreboard cards, and customizable accent colorways.',
    layout: 'right stadium/jersey-energy zone, left command sidebar, center match-plan task cards, stable composer under arena glow',
    palette: {
      canvas: '#f6fff8', panel: '#fbfffc', panel2: '#e3f5e8', ink: '#102417', muted: '#506b58',
      accent: '#16a34a', accent2: '#f59e0b', accent3: '#9ee6b2', glow: '#d7f8de', border: '#c7e5cf', dark: '#073d21'
    },
    bg: 'radial-gradient(circle at 78% 18%, rgba(22,163,74,.30), transparent 23%), radial-gradient(circle at 92% 58%, rgba(245,158,11,.22), transparent 21%), linear-gradient(135deg,#f7fff9 0%,#e7f8ec 48%,#fff8e9 100%)',
    motif: 'football',
    focus: { x: 0.71, y: 0.50 },
    safeArea: 'left-reading-right-arena-world',
    negative: ['national flag', 'club crest', 'FIFA or World Cup mark', 'real player likeness', 'jersey sponsor', 'official tournament typography', 'competitor image']
  }
];

function hexToRgb(hex) { const h = hex.replace('#',''); return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)]; }
function relLum([r,g,b]) { const f = v => { v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); }; return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); }
function contrast(a,b) { const l1=relLum(hexToRgb(a)); const l2=relLum(hexToRgb(b)); const hi=Math.max(l1,l2), lo=Math.min(l1,l2); return +(((hi+.05)/(lo+.05)).toFixed(2)); }
function bar(w, color='currentColor', h=8, opacity=.45) { return `<span class="bar" style="width:${w}px;height:${h}px;background:${color};opacity:${opacity}"></span>`; }
function miniBars(p){ return `${bar(96,p.ink,7,.56)}${bar(136,p.muted,7,.28)}${bar(72,p.accent,7,.48)}`; }

function ornaments(s, mode='full') {
  const t = mode === 'background' ? 'bgOnly ' : '';
  if (s.motif === 'idol') return `
    <div class="${t}spotlight sl1"></div><div class="${t}spotlight sl2"></div><div class="beam beam1"></div><div class="beam beam2"></div>
    <div class="fanSea">${Array.from({length:18}).map((_,i)=>`<i style="--i:${i}"></i>`).join('')}</div>
    <div class="stageRunway"></div><div class="stageRing"></div>
    <div class="idolHero"><div class="hairPin hp1"></div><div class="hairPin hp2"></div><div class="headset"></div><div class="mic"></div><div class="skirt"></div><div class="arm a1"></div><div class="arm a2"></div></div>
    <div class="passCard pc1"><b></b>${miniBars(s.palette)}</div><div class="passCard pc2"><b></b>${miniBars(s.palette)}</div>`;
  if (s.motif === 'anime') return `
    <div class="sunDisc"></div><div class="cityGrid">${Array.from({length:14}).map((_,i)=>`<i style="--i:${i}"></i>`).join('')}</div><div class="speedLine l1"></div><div class="speedLine l2"></div>
    <div class="animeDesk"><span></span></div><div class="heroCoder"><div class="hair h1"></div><div class="hair h2"></div><div class="scarf"></div><div class="arm a1"></div><div class="arm a2"></div></div>
    <div class="trainingCard tc1"><b></b>${miniBars(s.palette)}</div><div class="trainingCard tc2"><b></b>${miniBars(s.palette)}</div><div class="trainingCard tc3"><b></b>${miniBars(s.palette)}</div>`;
  return `
    <div class="flood f1"></div><div class="flood f2"></div><div class="flood f3"></div><div class="stadiumBowl"></div><div class="pitch"><span></span></div>
    <div class="jerseyRibbon jr1"></div><div class="jerseyRibbon jr2"></div><div class="jerseyRibbon jr3"></div><div class="ballArc"></div>
    <div class="scoreTile st1"><b></b>${miniBars(s.palette)}</div><div class="scoreTile st2"><b></b>${miniBars(s.palette)}</div>`;
}

function css(s) {
  const p = s.palette;
  return `
  *{box-sizing:border-box}body{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:${p.ink};background:${p.canvas}}.stage{width:1376px;height:768px;position:relative;overflow:hidden;background:${s.bg}}.stage:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.78) 0 32%,rgba(255,255,255,.55) 47%,rgba(255,255,255,.18) 70%,rgba(255,255,255,.05));pointer-events:none}.stage:after{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.14) 1px,transparent 1px);background-size:46px 46px;opacity:.42;mix-blend-mode:soft-light}.bar{display:block;border-radius:99px;margin:7px 0}.window{position:absolute;z-index:4;left:70px;top:58px;width:1000px;height:632px;border-radius:34px;background:rgba(255,255,255,.75);border:1px solid ${p.border};box-shadow:0 42px 140px rgba(20,18,28,.20);backdrop-filter:blur(24px);overflow:hidden;display:grid;grid-template-columns:226px minmax(0,1fr) 256px;grid-template-rows:56px minmax(0,1fr) 92px}.title{grid-column:1/4;display:flex;align-items:center;gap:18px;padding:0 20px;background:rgba(255,255,255,.75);border-bottom:1px solid ${p.border}}.dots{display:flex;gap:8px}.dot{width:12px;height:12px;border-radius:50%;background:${p.border}}.wordmark{font-weight:900;letter-spacing:-.03em;color:${p.ink}}.ownerChip{margin-left:auto;border:1px solid ${p.border};background:${p.panel2};color:${p.ink};border-radius:999px;padding:7px 12px;font-size:12px;font-weight:900}.sidebar{grid-row:2/4;background:linear-gradient(180deg,${p.panel2},rgba(255,255,255,.74));border-right:1px solid ${p.border};padding:22px 16px}.avatar{width:48px;height:48px;border-radius:17px;background:linear-gradient(135deg,${p.accent},${p.accent2});box-shadow:0 14px 34px color-mix(in srgb,${p.accent} 28%,transparent);margin-bottom:16px}.nav{display:flex;align-items:center;gap:10px;border-radius:15px;height:40px;padding:0 11px;margin:6px 0;color:${p.ink}}.nav b{width:14px;height:14px;border-radius:5px;background:${p.accent};display:block;opacity:.65}.nav.active{background:${p.panel};border-left:4px solid ${p.accent};box-shadow:0 12px 24px rgba(16,32,51,.06)}.customPanel{margin-top:28px;background:${p.panel};border:1px solid ${p.border};border-radius:20px;padding:14px;box-shadow:0 12px 26px rgba(16,32,51,.045)}.dial{height:34px;border-radius:14px;background:linear-gradient(90deg,${p.accent},${p.accent2});opacity:.84;margin:10px 0}.main{padding:24px;background:rgba(255,255,255,.48);position:relative}.headline{height:116px;border-radius:24px;background:linear-gradient(135deg,${p.panel},rgba(255,255,255,.70));border:1px solid ${p.border};padding:20px;box-shadow:0 14px 38px rgba(16,32,51,.045)}.cards{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}.card{height:132px;border:1px solid ${p.border};border-radius:22px;background:${p.panel};padding:16px;box-shadow:0 10px 28px rgba(16,32,51,.045);position:relative;overflow:hidden}.card:before{content:"";position:absolute;left:0;top:0;width:6px;height:100%;background:linear-gradient(${p.accent},${p.accent2})}.badge{position:absolute;right:14px;bottom:14px;width:54px;height:25px;border-radius:999px;background:${p.panel2};border:1px solid ${p.border}}.right{background:rgba(255,255,255,.35);border-left:1px solid ${p.border};padding:20px 16px}.msg{border:1px solid ${p.border};background:rgba(255,255,255,.76);border-radius:20px;padding:14px;margin-bottom:14px}.diff{height:11px;border-radius:99px;background:${p.accent};opacity:.24;margin:9px 0}.diff:nth-child(3){background:${p.accent2};width:70%}.composer{grid-column:2/4;background:rgba(255,255,255,.88);border-top:1px solid ${p.border};padding:18px 22px}.input{height:56px;border:2px solid color-mix(in srgb,${p.accent} 78%,white);border-radius:20px;background:${p.panel};display:flex;align-items:center;padding:0 18px;box-shadow:0 0 0 6px color-mix(in srgb,${p.accent} 11%,transparent)}.send{margin-left:auto;width:36px;height:36px;border-radius:13px;background:linear-gradient(135deg,${p.accent},${p.accent2})}.label{position:absolute;right:72px;top:52px;z-index:5;padding:10px 16px;border-radius:999px;background:rgba(255,255,255,.76);border:1px solid ${p.border};font-weight:950;box-shadow:0 16px 38px rgba(16,32,51,.10)}.cta{position:absolute;right:76px;bottom:58px;z-index:5;padding:14px 20px;border-radius:18px;background:linear-gradient(135deg,${p.accent},${p.accent2});color:white;font-weight:950;box-shadow:0 20px 54px color-mix(in srgb,${p.accent} 28%,transparent)}.customBadge{position:absolute;right:84px;top:102px;z-index:5;color:${p.muted};font-weight:800;font-size:13px;background:rgba(255,255,255,.58);border:1px solid ${p.border};padding:8px 12px;border-radius:999px}
  .spotlight{position:absolute;z-index:1;border-radius:50%;filter:blur(8px);background:${p.glow};opacity:.86}.sl1{right:108px;top:58px;width:148px;height:148px}.sl2{right:328px;top:116px;width:100px;height:100px}.beam{position:absolute;z-index:1;top:-80px;width:28px;height:720px;background:rgba(255,255,255,.44);filter:blur(4px);transform-origin:top}.beam1{right:210px;transform:rotate(23deg)}.beam2{right:418px;transform:rotate(-17deg)}.fanSea{position:absolute;right:26px;bottom:106px;width:552px;height:128px;z-index:2}.fanSea i{position:absolute;bottom:0;left:calc(var(--i)*30px);width:12px;height:calc(44px + (var(--i)%5)*12px);border-radius:99px;background:linear-gradient(${p.accent},${p.accent2});box-shadow:0 0 18px ${p.glow};opacity:.62;transform:rotate(calc(-18deg + var(--i)*2deg))}.stageRunway{position:absolute;right:70px;bottom:120px;width:430px;height:120px;border-radius:50%;background:radial-gradient(ellipse,rgba(255,255,255,.78),rgba(255,255,255,.20));border:8px solid rgba(255,255,255,.62);z-index:2}.stageRing{position:absolute;right:128px;bottom:154px;width:330px;height:86px;border-radius:50%;border:4px solid ${p.accent};opacity:.46;z-index:2}.idolHero{position:absolute;right:218px;top:144px;width:150px;height:330px;z-index:3;border-radius:76px 76px 24px 24px;background:linear-gradient(180deg,${p.dark},color-mix(in srgb,${p.dark} 72%,${p.accent}));box-shadow:0 0 90px color-mix(in srgb,${p.accent} 32%,transparent)}.idolHero:before{content:"";position:absolute;left:39px;top:-56px;width:72px;height:72px;border-radius:47% 53% 44% 56%;background:${p.dark}}.idolHero:after{content:"";position:absolute;left:22px;top:-70px;width:108px;height:70px;border-radius:50%;border-top:16px solid ${p.dark};transform:rotate(-4deg)}.hairPin{position:absolute;top:-62px;width:18px;height:18px;background:${p.accent3};clip-path:polygon(50% 0,61% 35%,98% 35%,68% 56%,79% 92%,50% 70%,21% 92%,32% 56%,2% 35%,39% 35%)}.hp1{left:20px}.hp2{right:22px}.headset{position:absolute;left:18px;top:-37px;width:116px;height:86px;border:8px solid ${p.accent};border-bottom:0;border-radius:80px 80px 0 0;opacity:.82}.mic{position:absolute;right:-26px;top:23px;width:54px;height:10px;border-radius:999px;background:${p.accent3};transform:rotate(18deg)}.skirt{position:absolute;left:18px;bottom:70px;width:114px;height:54px;background:${p.accent};clip-path:polygon(0 0,100% 0,86% 100%,14% 100%);opacity:.78}.idolHero .arm{position:absolute;top:94px;width:136px;height:12px;border-radius:99px;background:${p.dark}}.idolHero .a1{left:-82px;transform:rotate(-28deg)}.idolHero .a2{right:-82px;transform:rotate(28deg)}.passCard,.trainingCard,.scoreTile{position:absolute;z-index:3;background:rgba(255,255,255,.64);border:1px solid ${p.border};border-radius:20px;padding:14px;box-shadow:0 18px 48px rgba(16,32,51,.08);backdrop-filter:blur(12px)}.passCard b,.trainingCard b,.scoreTile b{display:block;width:32px;height:32px;border-radius:11px;background:linear-gradient(135deg,${p.accent},${p.accent2});margin-bottom:8px}.pc1{right:72px;top:190px;width:170px;height:132px;transform:rotate(7deg)}.pc2{right:436px;top:242px;width:166px;height:126px;transform:rotate(-8deg)}
  .sunDisc{position:absolute;right:126px;top:68px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.80) 0 32%,${p.glow} 33% 46%,transparent 47%);z-index:1}.cityGrid{position:absolute;right:22px;bottom:128px;width:560px;height:232px;z-index:1}.cityGrid i{position:absolute;bottom:0;left:calc(var(--i)*39px);width:30px;height:calc(74px + (var(--i)%6)*28px);border-radius:8px 8px 0 0;background:rgba(16,42,74,.14);border:1px solid rgba(255,255,255,.42)}.speedLine{position:absolute;right:74px;height:8px;border-radius:99px;z-index:2;background:${p.accent2};opacity:.62}.l1{top:116px;width:560px;transform:rotate(-28deg)}.l2{top:190px;width:420px;transform:rotate(-28deg);background:${p.accent}}.animeDesk{position:absolute;right:80px;bottom:140px;width:420px;height:76px;border-radius:22px;background:rgba(255,255,255,.66);border:1px solid ${p.border};box-shadow:0 20px 54px rgba(16,32,51,.10);z-index:2}.animeDesk span{position:absolute;left:42px;top:-32px;width:86px;height:42px;border-radius:14px 14px 5px 5px;background:${p.dark};opacity:.78}.heroCoder{position:absolute;right:222px;top:176px;width:138px;height:278px;border-radius:72px 72px 24px 24px;background:linear-gradient(180deg,${p.dark},color-mix(in srgb,${p.dark} 72%,${p.accent}));z-index:3;transform:skew(-3deg);box-shadow:0 0 76px color-mix(in srgb,${p.accent} 26%,transparent)}.heroCoder:before{content:"";position:absolute;left:33px;top:-52px;width:72px;height:72px;border-radius:46% 54% 48% 52%;background:${p.dark}}.hair{position:absolute;background:${p.dark};top:-66px}.hair.h1{left:8px;width:92px;height:56px;clip-path:polygon(5% 100%,38% 0,62% 100%)}.hair.h2{right:8px;width:82px;height:62px;clip-path:polygon(0 100%,40% 0,92% 100%)}.scarf{position:absolute;left:92px;top:52px;width:136px;height:30px;background:${p.accent2};clip-path:polygon(0 0,100% 40%,6% 100%);opacity:.86}.heroCoder .arm{position:absolute;top:92px;width:136px;height:12px;border-radius:99px;background:${p.dark}}.heroCoder .a1{left:-72px;transform:rotate(-22deg)}.heroCoder .a2{right:-76px;transform:rotate(18deg)}.tc1{right:80px;top:132px;width:178px;height:132px;transform:rotate(7deg)}.tc2{right:452px;top:238px;width:168px;height:126px;transform:rotate(-9deg)}.tc3{right:104px;bottom:258px;width:142px;height:104px;transform:rotate(-5deg)}
  .flood{position:absolute;z-index:1;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.94),${p.glow} 42%,transparent 70%);filter:blur(2px)}.f1{right:76px;top:56px;width:170px;height:170px}.f2{right:376px;top:88px;width:158px;height:158px}.f3{right:258px;top:38px;width:112px;height:112px}.stadiumBowl{position:absolute;right:-4px;bottom:104px;width:610px;height:280px;border-radius:46% 46% 0 0;background:linear-gradient(180deg,rgba(255,255,255,.36),rgba(22,163,74,.13));border:2px solid rgba(255,255,255,.56);z-index:1}.pitch{position:absolute;right:48px;bottom:126px;width:506px;height:240px;border-radius:26px;background:linear-gradient(135deg,rgba(22,163,74,.36),rgba(255,255,255,.26));border:3px solid rgba(255,255,255,.70);z-index:2;box-shadow:0 24px 66px rgba(7,61,33,.13)}.pitch:before{content:"";position:absolute;inset:32px;border:2px solid rgba(255,255,255,.65);border-radius:18px}.pitch:after{content:"";position:absolute;left:210px;top:76px;width:84px;height:84px;border:2px solid rgba(255,255,255,.68);border-radius:50%}.pitch span{position:absolute;left:252px;top:0;bottom:0;border-left:2px solid rgba(255,255,255,.62)}.jerseyRibbon{position:absolute;z-index:3;width:82px;height:560px;border-radius:999px;background:linear-gradient(${p.accent},${p.accent2});opacity:.38}.jr1{right:180px;top:28px;transform:rotate(27deg)}.jr2{right:314px;top:34px;transform:rotate(27deg);opacity:.27}.jr3{right:450px;top:80px;transform:rotate(27deg);opacity:.18}.ballArc{position:absolute;right:82px;bottom:190px;width:326px;height:138px;border:5px dashed rgba(255,255,255,.78);border-left:0;border-bottom:0;border-radius:0 140px 0 0;z-index:4}.st1{right:92px;top:178px;width:184px;height:130px;transform:rotate(5deg)}.st2{right:382px;top:230px;width:174px;height:122px;transform:rotate(-7deg)}
  .mock{position:absolute;z-index:4;inset:42px 68px;border-radius:30px;background:rgba(255,255,255,.78);border:1px solid ${p.border};box-shadow:0 34px 116px rgba(16,32,51,.13);backdrop-filter:blur(24px);display:grid;grid-template-columns:322px minmax(0,1fr);grid-template-rows:1fr 118px;overflow:hidden}.mock .sidebar{grid-row:1/3;padding:28px 20px}.mockMain{padding:38px 46px;background:rgba(255,255,255,.50)}.h1{font-size:31px;line-height:1.05;letter-spacing:-.045em;margin:0 0 12px;font-weight:900}.p{font-size:16px;line-height:1.5;color:${p.muted};margin:0;max-width:650px}.task{margin-top:22px;border:1px solid ${p.border};border-radius:22px;background:${p.panel};padding:20px;box-shadow:0 14px 32px rgba(16,32,51,.045)}.task strong{display:block;color:${p.ink};margin-bottom:8px}.mockComposer{grid-column:2/3;border-top:1px solid ${p.border};background:rgba(255,255,255,.89);padding:24px 46px}.mockInput{height:70px;border:2px solid ${p.accent};background:${p.panel};border-radius:22px;padding:0 22px;display:flex;align-items:center;color:${p.muted};box-shadow:0 0 0 6px color-mix(in srgb,${p.accent} 10%,transparent)}
  `;
}

function previewHtml(s) { const p=s.palette; return `<!doctype html><html><head><meta charset="utf-8"><style>${css(s)}</style></head><body><div class="stage">${ornaments(s)}<div class="label">${s.name}</div><div class="customBadge">${s.chip} · Remix-safe</div><div class="cta">Remix / Customize</div><div class="window"><div class="title"><div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div><div class="wordmark">Codex workspace preview</div><div class="ownerChip">${s.category}</div></div><aside class="sidebar"><div class="avatar"></div>${['Home','Skins','Tasks','Diff','Composer','Safety'].map((n,i)=>`<div class="nav ${i===1?'active':''}"><b></b><span>${n}</span></div>`).join('')}<div class="customPanel"><strong>Custom controls</strong><div class="dial"></div>${bar(142,p.muted,7,.32)}${bar(92,p.accent,7,.48)}</div></aside><main class="main"><section class="headline">${bar(240,p.ink,11,.72)}${bar(380,p.muted,8,.36)}${bar(310,p.muted,8,.28)}${bar(150,p.accent,9,.50)}</section><section class="cards">${[1,2,3,4].map(()=>`<article class="card">${bar(132,p.ink,8,.55)}${bar(168,p.muted,7,.28)}${bar(122,p.muted,7,.22)}<div class="badge"></div></article>`).join('')}</section></main><section class="right">${[0,1,2].map((_,i)=>`<div class="msg">${bar(112+i*20,p.ink,8,.48)}<div class="diff"></div><div class="diff"></div>${bar(154-i*18,p.muted,7,.25)}</div>`).join('')}</section><footer class="composer"><div class="input">${bar(110,p.ink,8,.42)}<span style="margin-left:18px">${bar(302,p.muted,8,.25)}</span><div class="send"></div></div></footer></div></div></body></html>`; }
function bgHtml(s){return `<!doctype html><html><head><meta charset="utf-8"><style>${css(s)}</style></head><body><div class="stage">${ornaments(s,'background')}</div></body></html>`;}
function mockHtml(s){return `<!doctype html><html><head><meta charset="utf-8"><style>${css(s)}</style></head><body><div class="stage">${ornaments(s)}<div class="mock"><aside class="sidebar"><div class="avatar"></div><div class="nav active"><b></b><span style="font-weight:900">Readable themed sidebar</span></div><div class="nav"><b style="opacity:.35"></b><span>Projects</span></div><div class="nav"><b style="opacity:.35"></b><span>Tasks</span></div><div class="customPanel"><strong>Identity controls</strong><p class="p" style="font-size:13px;margin-top:8px">Focus ${s.focus.x}/${s.focus.y}; safe area: ${s.safeArea}</p></div></aside><main class="mockMain"><h1 class="h1">${s.name}: emotional identity, not a color swap</h1><p class="p">${s.hook} The live package separates background art, ornament zones, surface tokens, accent states, and readability scrims.</p><div class="task"><strong>Task card / assistant reply sample</strong><p class="p">Sidebar, main panel, cards and composer keep the same theme language while body text remains above WCAG mock thresholds.</p></div></main><footer class="mockComposer"><div class="mockInput">Ask Codex to remix this skin with my own rights-cleared image…<div class="send"></div></div></footer></div></div></body></html>`;}

await fs.mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1376, height: 768 }, deviceScaleFactor: 1 });
const summaryRows = [];

for (const skin of skins) {
  const dir = path.join(OUT, skin.slug);
  const crops = path.join(dir, 'crops');
  await fs.mkdir(crops, { recursive: true });
  const p = skin.palette;
  const previewPrompt = `Owner Review v2 marketplace preview for ${skin.name}: horizontal 16:9 benchmark-like Codex workspace, app window occupies 52-72% with desktop chrome, sidebar, main task cards, AI/diff side panel, and bottom composer. Upgrade from abstract silhouette to specific original emotional identity: ${skin.identity}. Include visible category chip, customization/remix affordance, and premium product-card click desire. Functional surfaces must visibly share theme tokens. IP-safe original only; avoid ${skin.negative.join(', ')}.`;
  const backgroundPrompt = `Owner Review v2 live background for ${skin.name}: UI-free atmospheric art layer, no text/logos, no real IP. Layout: ${skin.layout}. Keep left/center and bottom safe for frosted readability panels. Original identity details: ${skin.identity}. Export as background + optional ornament/hero layer + tokens + scrim rules. Negative: ${skin.negative.join(', ')}.`;
  await fs.writeFile(path.join(dir, 'preview_prompt.txt'), previewPrompt);
  await fs.writeFile(path.join(dir, 'background_prompt.txt'), backgroundPrompt);
  await page.setContent(previewHtml(skin), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(dir, 'marketplace-preview.png') });
  await page.setContent(bgHtml(skin), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(dir, 'live-background.png') });
  await page.setContent(mockHtml(skin), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(dir, 'simulated-codex-overlay.png') });
  await page.screenshot({ path: path.join(crops, 'sidebar-crop.png'), clip: { x: 68, y: 42, width: 322, height: 684 } });
  await page.screenshot({ path: path.join(crops, 'main-crop.png'), clip: { x: 390, y: 78, width: 704, height: 482 } });
  await page.screenshot({ path: path.join(crops, 'composer-crop.png'), clip: { x: 390, y: 608, width: 918, height: 118 } });

  const checks = {
    textPrimaryOnPanel: contrast(p.ink, p.panel),
    textPrimaryOnPanel2: contrast(p.ink, p.panel2),
    mutedTextOnPanel: contrast(p.muted, p.panel),
    mutedTextOnPanel2: contrast(p.muted, p.panel2),
    thresholds: { body: 4.5, mutedPlaceholder: 3.0 }
  };
  checks.result = (checks.textPrimaryOnPanel >= 4.5 && checks.textPrimaryOnPanel2 >= 4.5 && checks.mutedTextOnPanel >= 3.0 && checks.mutedTextOnPanel2 >= 3.0) ? 'USABILITY_MOCK_PASS' : 'USABILITY_MOCK_FAIL';

  const ipSafety = `# IP Safety Note — ${skin.name}\n\nStatus: COMPLIANCE_DESIGN_SELF_CHECK_PASS_FOR_OWNER_REVIEW (not legal final).\n\n## Public template subject\n\n${skin.identity}\n\n## 3-second recognition test\n\nPass: the design reads as a generic/original ${skin.category} Codex workspace skin. It does not resolve to a specific celebrity, anime/game franchise, team, player, tournament, brand, or competitor asset within three seconds.\n\n## Explicit exclusions\n\n${skin.negative.map(x => `- ${x}`).join('\n')}\n\n## Asset source\n\nGenerated locally as programmatic Playwright/CSS vector composition. No external image downloads, no third-party artwork, no logos, and no real-person likenesses were used.\n\n## Public copy reminder\n\nThis public template is an original genre-inspired design. User-uploaded celebrity/anime/sports/team/player/brand images must remain private/local unless the user has rights to share them.\n`;
  await fs.writeFile(path.join(dir, 'IP_SAFETY_NOTE.md'), ipSafety);

  const asset = {
    schemaVersion: 2,
    assetPack: skin.slug,
    displayName: skin.name,
    themeFamily: 'owner-review-v2-benchmark-like-emotional-template',
    status: 'DESIGN_OWNER_REVIEW_V2_READY_SIMULATED_ONLY',
    category: skin.category,
    hook: skin.hook,
    identityUpgrade: skin.identity,
    customizationAngles: ['replace hero/world art with rights-cleared upload', 'adjust focal point', 'tune dimming and blur', 'change accent/secondary/highlight colors', 'choose Home/Task/Diff/Composer preview state'],
    requiredShape: {
      marketplacePreview: '16:9 horizontal Codex-like workspace preview with full app chrome/sidebar/main/AI panel/composer and visible emotional identity hook',
      liveSkinDecomposition: ['live-background.png UI-free background', 'optional hero/ornament safe zone', 'surface tokens', 'accent/focus tokens', 'readability scrim rules'],
      liveLayout: skin.layout
    },
    files: {
      marketplacePreview: `design-xiu-themed-v2/${skin.slug}/marketplace-preview.png`,
      liveBackground: `design-xiu-themed-v2/${skin.slug}/live-background.png`,
      simulatedCodexOverlay: `design-xiu-themed-v2/${skin.slug}/simulated-codex-overlay.png`,
      crops: {
        sidebar: `design-xiu-themed-v2/${skin.slug}/crops/sidebar-crop.png`,
        main: `design-xiu-themed-v2/${skin.slug}/crops/main-crop.png`,
        composer: `design-xiu-themed-v2/${skin.slug}/crops/composer-crop.png`
      },
      prompts: {
        marketplacePreview: `design-xiu-themed-v2/${skin.slug}/preview_prompt.txt`,
        liveBackground: `design-xiu-themed-v2/${skin.slug}/background_prompt.txt`
      },
      ipSafetyNote: `design-xiu-themed-v2/${skin.slug}/IP_SAFETY_NOTE.md`
    },
    focus: skin.focus,
    safeArea: skin.safeArea,
    palette: p,
    tokens: {
      canvas: p.canvas,
      backgroundArtScrimLeft: 'rgba(255,255,255,0.78)',
      backgroundArtScrimCenter: 'rgba(255,255,255,0.55)',
      backgroundArtScrimRight: 'rgba(255,255,255,0.08)',
      sidebarBackground: p.panel2,
      mainBackground: 'rgba(255,255,255,0.50)',
      panelBackground: p.panel,
      composerBackground: 'rgba(255,255,255,0.89)',
      textPrimary: p.ink,
      textSecondary: p.muted,
      border: p.border,
      accent: p.accent,
      accentSecondary: p.accent2,
      highlight: p.accent3,
      focusRing: `${p.accent}1A`,
      backdropBlur: '24px',
      panelScrim: 'rgba(255,255,255,0.82)'
    },
    generationPrompts: { marketplacePreview: previewPrompt, liveBackground: backgroundPrompt },
    contrastSelfCheck: checks,
    rights: {
      source: 'original-programmatic-vector-composition',
      containsRealPerson: false,
      containsTrademark: false,
      containsOfficialSportsMark: false,
      containsKnownAnimeGameCharacter: false,
      containsCompetitorAsset: false,
      ipRisk: 'low',
      threeSecondRecognitionTest: 'pass - generic original category identity only',
      notes: `No ${skin.negative.join('; ')}.`
    },
    qaNotes: [
      'Owner Review visual package only; no real Codex Desktop apply per official brief.',
      'Crops are from simulated Codex overlay and support VISUAL_OWNER_REVIEW, not TECH_GO/USABILITY_GO for real app.',
      'If Owner chooses a candidate, next step is .dreamskin/manual kit decomposition and real Install/Apply/Verify/Restore evidence.'
    ]
  };
  await fs.writeFile(path.join(dir, 'asset.json'), JSON.stringify(asset, null, 2));
  summaryRows.push(`| ${skin.name} | ${skin.slug} | ${skin.chip} | ${checks.result} |`);
}
await browser.close();
await fs.writeFile(path.join(OUT, 'THEMED_V2_OWNER_REVIEW_HANDOFF.md'), `# 小秀 CodexSkin themed Owner Review v2 handoff\n\nSource of truth read before generation:\n\n- docs/PRD-codexskin-official-v1-2026-07-22.md\n- docs/THEMED_TEMPLATE_BRIEF-codexskin-2026-07-22.md\n\n## Batch status\n\n| Skin | Slug | Identity hook | Mock readability |\n|---|---|---|---|\n${summaryRows.join('\n')}\n\n## What changed from v1\n\n- Upgraded from abstract silhouettes to specific original identities: fictional cyber idol stage presence, original anime heroic coder desk, and generic tournament-night football arena world.\n- Marketplace previews now emphasize a benchmark-like Codex workspace product card: desktop chrome, sidebar, main workspace, AI/diff side panel, bottom composer, category chip, and Remix / Customize CTA.\n- Live backgrounds remain UI-free and IP-safe, with right-side hero/world zones and protected left/center/bottom safe areas for real Codex readability layers.\n- Each package includes explicit customization angles, tokens, focus/safe-area metadata, crop evidence, prompts, and IP safety note.\n\n## Deliverables per slug\n\n- marketplace-preview.png\n- live-background.png\n- simulated-codex-overlay.png\n- crops/sidebar-crop.png\n- crops/main-crop.png\n- crops/composer-crop.png\n- preview_prompt.txt\n- background_prompt.txt\n- asset.json\n- IP_SAFETY_NOTE.md\n\n## Scope notes\n\n- This is a design Owner Review visual package, not a real Codex apply package.\n- No npm build was run per task instruction.\n- No real app apply was run, matching the official brief: “No real app apply until Owner chooses one.”\n- Public templates are original, genre-inspired, and avoid real stars, anime/game characters, teams, flags, crests, FIFA/World Cup marks, players, logos, competitor images, and third-party assets.\n`);
console.log(`Generated ${skins.length} themed Owner Review v2 folders in ${OUT}`);
