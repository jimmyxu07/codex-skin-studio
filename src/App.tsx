import { useMemo, useState, type CSSProperties, type ChangeEvent } from 'react'
import './App.css'
import idolBackground from '../design-xiu-themed-v1/idol-stage-skin/live-background.png'
import animeBackground from '../design-xiu-themed-v1/anime-hero-desk/live-background.png'

type Skin = {
  slug: string
  name: string
  category: string
  hook: string
  palette: string[]
  accent: string
  accentAlt: string
  background: string
  preview?: string
  status: string
  rightZone: string
  rightsNote: string
}

type BuilderState = {
  preset: string
  localImage: string
  localImageName: string
  localImageType: string
  focusX: number
  focusY: number
  cropZoom: number
  dimming: number
  blur: number
  panelOpacity: number
  readability: 'balanced' | 'strong' | 'soft'
  accent: string
  accentAlt: string
  surface: 'home' | 'task' | 'diff' | 'composer'
  rightsConfirmed: boolean
}

const contactEmail = 'hongkai.xb@gmail.com'
const disclaimer = 'CodexSkin.fun is an independent customization tool and is not affiliated with, endorsed by, or sponsored by OpenAI, Codex, any sports league, tournament organizer, team, celebrity, anime/game studio, or brand. Public templates use original, genre-inspired artwork only. All trademarks, names, and logos belong to their respective owners.'

const skins: Skin[] = [
  {
    slug: 'idol-stage',
    name: 'Idol Stage Skin',
    category: 'Idol Stage Originals',
    hook: 'Turn Codex into a concert-stage workspace around an original cyber idol vibe.',
    palette: ['#FFF5FB', '#F8E8F3', '#251326', '#E83E8C', '#7C3AED'],
    accent: '#E83E8C',
    accentAlt: '#7C3AED',
    background: idolBackground,
    status: 'Builder concept · preview recipe',
    rightZone: 'Concept direction: faceless cyber-idol mood, light sticks, fan-card shapes — no celebrity likeness. Use the Builder to remix before treating it as a finished package.',
    rightsNote: 'Original genre-inspired design; no real celebrity, agency logo, idol group, or brand assets.',
  },
  {
    slug: 'anime-hero-desk',
    name: 'Anime Hero Desk',
    category: 'Anime-style Originals',
    hook: 'Anime-style coding desk with heroic protagonist energy, built from an original character world.',
    palette: ['#F4FBFF', '#E3F1FA', '#102033', '#0EA5E9', '#F97316'],
    accent: '#0EA5E9',
    accentAlt: '#F97316',
    background: animeBackground,
    status: 'Builder concept · preview recipe',
    rightZone: 'Concept direction: original heroic coder desk, training cards, and dawn cyber-city mood — no known character or franchise costume. Remix before using publicly.',
    rightsNote: 'Original anime-style template; no recognizable anime/game characters, copied costumes, logos, or franchise text.',
  },
  {
    slug: 'football-nation-arena',
    name: 'Sports Arena Builder Concept',
    category: 'Sports Arena Recipe',
    hook: 'A restrained sports-arena builder recipe for tournament-season experiments without real flags, crests, players, or FIFA marks.',
    palette: ['#F6FFF8', '#E4F4E9', '#102418', '#16A34A', '#F59E0B'],
    accent: '#16A34A',
    accentAlt: '#F59E0B',
    background: 'linear-gradient(135deg, #f8fafc, #e8f0ec 48%, #dce8df)',
    status: 'Builder concept · preview recipe',
    rightZone: 'Concept direction only: generic arena floodlights, abstract jersey ribbons, pitch-line geometry, scoreboard-like blocks — no flags, crests, or players.',
    rightsNote: 'Original sports-arena mood; no team crests, tournament marks, player likenesses, flags, sponsors, or official typography.',
  },
  {
    slug: 'basketball-court-lights',
    name: 'Basketball Court Lights',
    category: 'Basketball Court Lights',
    hook: 'Warm court-light energy, tactical cards, and a late-game command desk without league, team, or player marks.',
    palette: ['#FFF7ED', '#FDEBD1', '#20120A', '#EA580C', '#7C2D12'],
    accent: '#EA580C',
    accentAlt: '#7C2D12',
    background: 'linear-gradient(135deg, #fff7ed, #fdebd1 45%, #ffedd5)',
    status: 'Preview recipe · builder starter',
    rightZone: 'Abstract hardwood arcs, spotlights, scoreboard blocks, and net-like geometry only.',
    rightsNote: 'No NBA, team logo, player likeness, sponsor, or league asset.',
  },
  {
    slug: 'mecha-command-bay',
    name: 'Mecha Command Bay',
    category: 'Mecha Command Originals',
    hook: 'A cockpit-like coding workspace with original robot silhouettes, warning rails, and modular command cards.',
    palette: ['#F7F9FC', '#E4ECF7', '#111827', '#2563EB', '#F59E0B'],
    accent: '#2563EB',
    accentAlt: '#F59E0B',
    background: 'linear-gradient(135deg, #f7f9fc, #e4ecf7 46%, #dbeafe)',
    status: 'Preview recipe · builder starter',
    rightZone: 'Original cockpit HUD shapes and robot silhouettes; no recognizable franchise mecha design.',
    rightsNote: 'No Gundam/EVA/Transformers-like silhouettes, marks, names, or color layouts.',
  },
  {
    slug: 'fantasy-guild-desk',
    name: 'Fantasy Guild Desk',
    category: 'Fantasy Guild Desk',
    hook: 'A magical guild coding desk with parchment cards, soft particles, and an original crest-like abstract mark.',
    palette: ['#FFFBEB', '#FDECC8', '#261A0C', '#B45309', '#6D28D9'],
    accent: '#B45309',
    accentAlt: '#6D28D9',
    background: 'linear-gradient(135deg, #fffbeb, #fdecc8 48%, #efe2ff)',
    status: 'Preview recipe · builder starter',
    rightZone: 'Original guild desk atmosphere, books, particles, abstract crest geometry only.',
    rightsNote: 'No known fantasy franchise symbols, school crests, spells, or creature designs.',
  },
]

const navLinks = [
  ['/', 'Home'],
  ['/builder', 'Builder'],
  ['/skins', 'Skins'],
  ['/docs/install', 'Install'],
  ['/security', 'Security'],
] as const

function setMeta(title: string, description: string) {
  document.title = title
  const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta')
  meta.setAttribute('name', 'description')
  meta.setAttribute('content', description)
  document.head.appendChild(meta)
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

function crc32(data: Uint8Array) {
  let crc = -1
  for (let i = 0; i < data.length; i += 1) {
    crc ^= data[i]
    for (let j = 0; j < 8; j += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1))
  }
  return (crc ^ -1) >>> 0
}

function u16(value: number) { return [value & 255, (value >>> 8) & 255] }
function u32(value: number) { return [value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255] }
function asArrayBuffer(data: Uint8Array): ArrayBuffer {
  return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer
}

function createStoredZip(files: Array<{ name: string; data: Uint8Array }>) {
  const encoder = new TextEncoder()
  const chunks: Uint8Array[] = []
  const central: Uint8Array[] = []
  let offset = 0
  for (const file of files) {
    const name = encoder.encode(file.name)
    const crc = crc32(file.data)
    const local = new Uint8Array([...u32(0x04034b50), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(file.data.length), ...u32(file.data.length), ...u16(name.length), ...u16(0), ...name, ...file.data])
    chunks.push(local)
    central.push(new Uint8Array([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(file.data.length), ...u32(file.data.length), ...u16(name.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(offset), ...name]))
    offset += local.length
  }
  const centralSize = central.reduce((sum, item) => sum + item.length, 0)
  const end = new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length), ...u32(centralSize), ...u32(offset), ...u16(0)])
  return new Blob([...chunks, ...central, end].map(asArrayBuffer), { type: 'application/zip' })
}

async function sha256Text(data: Uint8Array) {
  const digest = await crypto.subtle.digest('SHA-256', asArrayBuffer(data))
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function dataFromUrl(url: string) {
  if (url.startsWith('data:')) return new Uint8Array(await (await fetch(url)).arrayBuffer())
  if (url.startsWith('linear-gradient')) return new TextEncoder().encode(url)
  return new Uint8Array(await (await fetch(url)).arrayBuffer())
}

function Nav() {
  return <header className="topbar"><a className="brand" href="/"><span className="brand-mark">CS</span><span>CodexSkin.fun</span></a><nav>{navLinks.map(([href, label]) => <a key={href} className={href === '/builder' ? 'nav-cta' : undefined} href={href}>{label}</a>)}</nav></header>
}

function Button({ href, children, secondary = false, download }: { href: string; children: string; secondary?: boolean; download?: string }) {
  return <a className={`studio-button ${secondary ? 'studio-button--secondary' : ''}`} href={href} download={download}>{children}</a>
}

function WorkspacePreview({ skin, size = 'card' }: { skin: Skin; size?: 'hero' | 'card' | 'detail' }) {
  const style = {
    '--accent': skin.accent,
    '--accent-alt': skin.accentAlt,
    '--skin-bg': skin.preview ? `url(${skin.preview})` : skin.background,
  } as CSSProperties & Record<string, string>
  return (
    <div className={`themed-workspace themed-workspace--${size} ${skin.preview ? 'themed-workspace--image' : ''}`} style={style} aria-label={`${skin.name} Codex-like workspace preview`}>
      <div className="mock-titlebar"><span className="window-dot"></span><span className="window-dot"></span><span className="window-dot"></span><strong>{skin.name}</strong><em>{skin.category}</em></div>
      <div className="themed-shell">
        <aside><b>CS</b><span>Files</span><span className="active">Tasks</span><span>Diff</span><span>Settings</span></aside>
        <main><div className="mini-tab">DreamSkin package <i></i></div><div className="mini-cards">{['Home', 'Task', 'Diff', 'Composer'].map((item) => <span key={item}>{item}</span>)}</div><div className="mini-composer">review readability and export… <button type="button">Remix</button></div></main>
      </div>
    </div>
  )
}

function SkinCard({ skin }: { skin: Skin }) {
  return <article className="skin-gallery-card studio-card" style={{ '--accent': skin.accent } as CSSProperties & Record<string, string>}><div className="gallery-meta"><span>{skin.category}</span><span>{skin.status}</span></div><WorkspacePreview skin={skin} /><div className="gallery-copy"><h3>{skin.name}</h3><p>{skin.hook}</p><ul className="studio-tags"><li>Builder concept</li><li>Data-only export</li><li>Remixable recipe</li></ul><div className="card-actions"><Button href={`/skins/${skin.slug}`}>View preview recipe</Button><Button href={`/builder?preset=${skin.slug}`} secondary>Remix</Button></div><p className="builder-export-note">{skin.rightsNote}</p></div></article>
}

function Home() {
  const lead = skins[0]
  return <main><section className="hero section-pad"><div className="hero-copy"><p className="eyebrow">CODEX DREAM SKIN BUILDER · LOCAL · DATA-ONLY</p><h1>Build your own Codex Dream Skin.</h1><p className="lede">Anime-style, idol-stage, sports-arena, fantasy, esports and personal-photo workspaces — start from original builder concepts or upload images you have rights to use.</p><p className="lede">Preview Home / Task / Diff / Composer surfaces, tune crop, focal point, dimming, blur, panel opacity and accent colors, then export a reviewable `.dreamskin` data package.</p><div className="home-category-chips"><a href="/skins">Anime</a><a href="/skins/idol-stage">Idol</a><a href="/skins/football-nation-arena">Sports recipe</a><a href="/builder">Upload your image</a><a href="/security">Data-only safety</a></div><div className="cta-row"><Button href="/builder">Open Builder</Button><Button href="/skins" secondary>Browse Concepts</Button><Button href="/docs/install" secondary>Install safely</Button></div><div className="trust-badges"><span>Local image processing</span><span>Data-only package</span><span>Review-first install</span><span>Restore path</span><span>Rights-cleared public templates</span></div></div><div className="hero-preview"><WorkspacePreview skin={lead} size="hero" /></div></section><section className="section-pad"><div className="section-heading"><p className="eyebrow">Builder concepts</p><h2>Original preview recipes for remixing</h2><p>These are builder concepts, not finished skin packs. Public concepts are genre-inspired and IP-safe: no real celebrities, characters, teams, flags, crests, tournaments, or brand marks.</p></div><div className="gallery-grid">{skins.slice(0, 3).map((skin) => <SkinCard key={skin.slug} skin={skin} />)}</div></section></main>
}

function Skins() {
  return <main className="section-pad page"><p className="eyebrow">Builder concept gallery</p><h1>Browse Codex Dream Skin preview recipes</h1><p className="page-lede">Emergency public gallery cleanup: entries are builder concepts and remixable preview recipes, not finished skin packs. Use the Builder to export an inert `.dreamskin` data package, then review any separate helper before applying.</p><div className="gallery-grid">{skins.map((skin) => <SkinCard key={skin.slug} skin={skin} />)}</div></main>
}

function SkinDetail({ skin }: { skin: Skin }) {
  return <main className="section-pad page"><p className="eyebrow">{skin.category}</p><h1>{skin.name}</h1><p className="page-lede">{skin.hook}</p><section className="work-hero"><div className="work-copy"><h2>Remix this style safely</h2><p>{skin.rightZone}</p><dl className="metadata-panel"><div><dt>Package</dt><dd>data-only .dreamskin export</dd></div><div><dt>Status</dt><dd>{skin.status}</dd></div><div><dt>Rights</dt><dd>{skin.rightsNote}</dd></div><div><dt>Windows</dt><dd>Documented path only; not tested by CodexSkin.fun.</dd></div></dl><div className="cta-row"><Button href={`/builder?preset=${skin.slug}`}>Remix this style</Button><Button href="/docs/install" secondary>Install guide</Button><Button href="/security" secondary>Security boundary</Button></div></div><WorkspacePreview skin={skin} size="detail" /></section><section className="studio-card adapt-steps"><h2>What exports in the `.dreamskin` package</h2><ol><li><code>manifest.json</code> with package type, rights, platform claim split, and unsigned local-export status.</li><li><code>theme.json</code> with focusX/Y, crop, dimming, blur, panel opacity, accent tokens, readability mode, and state preview notes.</li><li><code>background</code> and <code>preview</code> data only — no JS, shell, PowerShell, executable, app bundle, API key, or provider config.</li><li><code>LICENSE.txt</code>, <code>NOTICE.md</code>, <code>user-assets-notice.txt</code> if user uploads assets, <code>sha256.txt</code>, and <code>signature.json</code> marked unsigned.</li></ol></section></main>
}

function initialBuilderState(): BuilderState {
  const queryPreset = new URLSearchParams(window.location.search).get('preset')
  const skin = skins.find((item) => item.slug === queryPreset) ?? skins[0]
  return { preset: skin.slug, localImage: '', localImageName: '', localImageType: '', focusX: 72, focusY: 48, cropZoom: 1, dimming: 42, blur: 12, panelOpacity: 82, readability: 'balanced', accent: skin.accent, accentAlt: skin.accentAlt, surface: 'home', rightsConfirmed: false }
}

function Builder() {
  const [state, setState] = useState<BuilderState>(() => initialBuilderState())
  const [message, setMessage] = useState('')
  const selected = skins.find((skin) => skin.slug === state.preset) ?? skins[0]
  const previewBackground = state.localImage || selected.background
  const surfaceCards = {
    home: ['Today', 'Recent project', 'Prompt starter', 'Quick action'],
    task: ['Plan', 'Build', 'Review', 'Ship'],
    diff: ['+ token map', '- unsafe claim', '+ rights notice', '+ restore step'],
    composer: ['Prompt focus', 'Readable input', 'Accent CTA', 'Muted helper'],
  }[state.surface]

  const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setState((current) => ({ ...current, localImage: String(reader.result), localImageName: file.name, localImageType: file.type }))
    reader.readAsDataURL(file)
  }

  const manifest = useMemo(() => ({
    schemaVersion: 'codexskin.dreamskin.v1',
    id: `builder-${state.preset}`,
    name: `${selected.name} Builder Export`,
    category: selected.category,
    packageType: 'data-only',
    engine: 'external-reviewed-engine-required',
    createdBy: 'CodexSkin.fun Builder v0',
    visibility: 'private-export',
    rights: { publicTemplate: 'original', userAssets: state.localImage ? 'user-provided-unreviewed' : 'none', confirmationRequired: true, confirmedInBrowser: state.rightsConfirmed },
    platform: { dataPackage: 'cross-platform', macOS: 'documented', windows: 'documented' },
  }), [selected, state.localImage, state.preset, state.rightsConfirmed])

  const theme = useMemo(() => ({
    schemaVersion: 'codexskin.theme.v1',
    preset: state.preset,
    background: state.localImage ? 'background-user-upload' : 'background-template',
    preview: 'preview',
    cropZoom: state.cropZoom,
    focus: { x: state.focusX / 100, y: state.focusY / 100 },
    safeArea: state.focusX > 55 ? 'left-reading-right-hero' : 'center-protected',
    dimming: state.dimming / 100,
    blur: state.blur,
    panelOpacity: { sidebar: state.panelOpacity / 100, main: state.panelOpacity / 100, card: Math.min(0.95, (state.panelOpacity + 5) / 100), composer: Math.min(0.96, (state.panelOpacity + 8) / 100) },
    accent: state.accent,
    secondary: state.accentAlt,
    highlight: selected.palette[0],
    readabilityMode: state.readability,
    statePreview: { selected: state.surface, covered: ['Home', 'Task', 'Diff', 'Composer'] },
  }), [selected.palette, state])

  const exportJson = () => {
    const payload = { manifest, theme, notice: 'Data-only .dreamskin JSON artifact. No executable. Review a separate engine/helper before applying.', userAssetsNotice: state.localImage ? 'User-provided asset was not reviewed by CodexSkin.fun. Do not publish or redistribute without permission.' : 'No user assets included.' }
    downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }), `${state.preset}.dreamskin.json`)
  }

  const exportZip = async () => {
    if (!state.rightsConfirmed) {
      setMessage('Export blocked: confirm the rights checkbox first.')
      return
    }
    const encoder = new TextEncoder()
    const bgData = await dataFromUrl(previewBackground)
    const fileExt = state.localImageType.includes('png') ? 'png' : state.localImageType.includes('jpeg') ? 'jpg' : selected.preview ? 'png' : 'txt'
    const sha = await sha256Text(bgData)
    const files = [
      { name: 'manifest.json', data: encoder.encode(JSON.stringify(manifest, null, 2)) },
      { name: 'theme.json', data: encoder.encode(JSON.stringify(theme, null, 2)) },
      { name: `background.${fileExt}`, data: bgData },
      { name: `preview.${fileExt}`, data: bgData },
      { name: 'LICENSE.txt', data: encoder.encode('CodexSkin.fun Builder v0 data package. Public template components are original genre-inspired assets. User uploads remain the user\'s responsibility.\n') },
      { name: 'NOTICE.md', data: encoder.encode(`# ${selected.name}\n\nThis .dreamskin package is inert data only. It contains no JavaScript, shell, PowerShell, executable, app bundle, API key, provider config, auto-updater, or installer. Engine/helper is a separate reviewed trust layer.\n\n${selected.rightsNote}\n`) },
      { name: 'user-assets-notice.txt', data: encoder.encode(state.localImage ? `User uploaded: ${state.localImageName || 'local browser file'}. CodexSkin.fun does not grant rights to third-party content. Private use only unless you have permission to share.\n` : 'No user-provided assets included.\n') },
      { name: 'sha256.txt', data: encoder.encode(`background.${fileExt}  ${sha}\n`) },
      { name: 'signature.json', data: encoder.encode(JSON.stringify({ signed: false, reason: 'local browser export', packageType: 'data-only' }, null, 2)) },
    ]
    downloadBlob(createStoredZip(files), `${state.preset}.dreamskin.zip`)
    setMessage(`Exported ${state.preset}.dreamskin.zip with ${files.length} data-only files. No executable included.`)
  }

  return <main className="section-pad page"><p className="eyebrow">Browser Builder · local preview · data-only export</p><h1>Frame the art, preview Codex, export a safe recipe</h1><p className="page-lede">Choose an original preset or upload a local image. Files stay in your browser; nothing is uploaded or applied to Codex Desktop from this page.</p><section className="builder-layout"><aside className="builder-controls studio-card"><p className="eyebrow">Preset</p><ul className="builder-preset-list">{skins.map((skin) => <li key={skin.slug}><button type="button" className={state.preset === skin.slug ? 'is-active' : ''} onClick={() => setState({ ...state, preset: skin.slug, accent: skin.accent, accentAlt: skin.accentAlt })}><strong>{skin.name}</strong><span>{skin.category}</span></button></li>)}</ul><p className="eyebrow">Local upload</p><label className="builder-upload"><input type="file" accept="image/png,image/jpeg,image/webp" onChange={onUpload} /><span>{state.localImageName || 'Choose an image you own / can use'}</span></label><p className="builder-export-note">Upload only images you own, created yourself, licensed, or are otherwise allowed to use. Do not upload or redistribute copyrighted celebrity, anime, sports team, player, brand, or private-person images without permission.</p><p className="eyebrow">Crop / focal</p><label className="builder-slider">Crop zoom <input type="range" min={1} max={1.8} step={0.02} value={state.cropZoom} onChange={(e) => setState({ ...state, cropZoom: Number(e.target.value) })} /><span>{state.cropZoom.toFixed(2)}×</span></label><label className="builder-slider">Focal X <input type="range" min={0} max={100} value={state.focusX} onChange={(e) => setState({ ...state, focusX: Number(e.target.value) })} /><span>{state.focusX}%</span></label><label className="builder-slider">Focal Y <input type="range" min={0} max={100} value={state.focusY} onChange={(e) => setState({ ...state, focusY: Number(e.target.value) })} /><span>{state.focusY}%</span></label><p className="eyebrow">Readability controls</p><label className="builder-slider">Dimming <input type="range" min={0} max={80} value={state.dimming} onChange={(e) => setState({ ...state, dimming: Number(e.target.value) })} /><span>{state.dimming}%</span></label><label className="builder-slider">Blur <input type="range" min={0} max={28} value={state.blur} onChange={(e) => setState({ ...state, blur: Number(e.target.value) })} /><span>{state.blur}px</span></label><label className="builder-slider">Panel opacity <input type="range" min={35} max={96} value={state.panelOpacity} onChange={(e) => setState({ ...state, panelOpacity: Number(e.target.value) })} /><span>{state.panelOpacity}%</span></label><div className="builder-accent-row"><input type="color" value={state.accent} onChange={(e) => setState({ ...state, accent: e.target.value })} /><code>{state.accent}</code></div><label className="builder-rights"><input type="checkbox" checked={state.rightsConfirmed} onChange={(e) => setState({ ...state, rightsConfirmed: e.target.checked })} /><span>I confirm I have the rights or permission to use the uploaded assets, and I understand exported skins containing third-party materials are for my private use unless I have permission to share them.</span></label><div className="cta-row"><button className="studio-button" type="button" onClick={() => void exportZip()}>Export .dreamskin zip</button><button className="studio-button studio-button--secondary" type="button" onClick={exportJson}>Export JSON</button></div>{message ? <p className="builder-status">{message}</p> : null}</aside><section className="builder-preview-wrap"><div className="filter-chips">{(['home', 'task', 'diff', 'composer'] as const).map((surface) => <button key={surface} className={state.surface === surface ? 'is-active' : ''} type="button" onClick={() => setState({ ...state, surface })}>{surface}</button>)}</div><div className="dream-builder-preview studio-card" style={{ '--accent': state.accent, '--bg': previewBackground.startsWith('linear-gradient') ? previewBackground : `url(${previewBackground})`, '--focus-x': `${state.focusX}%`, '--focus-y': `${state.focusY}%`, '--zoom': String(state.cropZoom), '--dim': `${state.dimming / 100}`, '--blur': `${state.blur}px`, '--panel': `${state.panelOpacity / 100}` } as CSSProperties & Record<string, string>}><div className="mock-titlebar"><span className="window-dot"></span><span className="window-dot"></span><span className="window-dot"></span><strong>{selected.name}</strong><em>{state.surface}</em></div><div className="dream-builder-bg"></div><div className="dream-builder-scrim"></div><div className="themed-shell"><aside><b>CS</b><span>Files</span><span className="active">Tasks</span><span>Diff</span><span>Security</span></aside><main><div className="mini-tab">{state.surface}.dreamskin <i></i></div><div className="mini-cards">{surfaceCards.map((item) => <span key={item}>{item}</span>)}</div><div className="mini-composer">Readable composer preview… <button type="button">Generate</button></div></main></div></div><section className="builder-export studio-card"><p className="eyebrow">Generated package contract</p><pre className="builder-recipe-pre"><code>{JSON.stringify({ manifest, theme }, null, 2)}</code></pre><p className="builder-export-note">The zip export is data-only: manifest/theme/background/preview/license/notice/user-assets notice/sha256/signature. It does not include executable code.</p></section></section></section></main>
}

function InstallDocs({ platform }: { platform?: 'macos' | 'windows' }) {
  const mac = <section className="studio-card"><p className="eyebrow">macOS helper · advanced / review-first</p><h2>macOS install / verify / restore path</h2><ol className="kit-step-list"><li><strong>Review first.</strong><span>Open the helper package source and `.dreamskin` data files before running anything. The package itself cannot install; the helper is the separate trust layer.</span></li><li><strong>Install.</strong><span>Run <code>Install CodexSkin.command</code> only after review. It should copy helper files, validate target assumptions, and avoid changing the Codex app bundle.</span></li><li><strong>Apply and verify.</strong><span>Run Apply, then Verify. Verify must check renderer markers and capture evidence before any `tested` claim is made.</span></li><li><strong>Restore.</strong><span>Run Restore CodexSkin.command to remove injected theme state and return Codex Desktop to its original appearance.</span></li></ol></section>
  const win = <section className="studio-card"><p className="eyebrow">Windows · documented, not tested</p><h2>Windows path is documented only</h2><div className="kit-note"><strong>Windows has not been tested by CodexSkin.fun yet.</strong> Do not treat this as a supported or verified Windows installer.</div><ol className="kit-step-list"><li><strong>Inspect data package.</strong><span>Confirm `.dreamskin` contains only inert data files and no `.ps1`, `.exe`, `.bat`, `.cmd`, JavaScript, credentials, or provider config.</span></li><li><strong>Review engine separately.</strong><span>A Windows engine would be a separate PowerShell/helper trust layer. Read it before running and do not approve SmartScreen/UAC unless you understand the source.</span></li><li><strong>Verify and restore.</strong><span>Windows `tested` requires install → import → start/apply → verify screenshot → manual interaction check → restore → relaunch evidence. That evidence does not exist here yet.</span></li></ol></section>
  return <main className="section-pad page"><p className="eyebrow">Install safely</p><h1>{platform === 'macos' ? 'Install and verify on macOS' : platform === 'windows' ? 'Windows install path and restore checklist' : 'Install a Codex skin safely, then restore anytime'}</h1><p className="page-lede">A `.dreamskin` is platform-neutral inert data. The engine/helper is the separate reviewed trust layer that applies it. Review first, verify after apply, restore if anything looks wrong.</p>{platform === 'windows' ? win : platform === 'macos' ? mac : <><section className="install-platform-table studio-card"><h2>Platform claim split</h2><table><tbody><tr><th>.dreamskin data</th><td>Cross-platform review artifact; no executable.</td></tr><tr><th>macOS helper</th><td>Advanced / review-first path with restore wording preserved. Only claim tested with real evidence per package/version.</td></tr><tr><th>Windows</th><td>Documented path only; not yet tested by CodexSkin.fun.</td></tr></tbody></table></section>{mac}{win}</>}</main>
}

function Security() {
  return <main className="section-pad page"><p className="eyebrow">Security boundary</p><h1>Codex skin safety begins with clear boundaries</h1><p className="page-lede">CodexSkin.fun separates inert `.dreamskin` data packages from any helper/engine. The browser Builder does not apply anything to Codex Desktop and does not upload your images.</p><div className="value-grid"><article className="studio-card value-card"><h3>Data-only package</h3><p>manifest/theme/background/preview/license/notice/sha256/signature. No executable, script, API key, provider config, installer, or auto-updater.</p></article><article className="studio-card value-card"><h3>Engine is separate</h3><p>macOS helper or any Windows PowerShell flow must be reviewed separately before running on a machine you control.</p></article><article className="studio-card value-card"><h3>Restore first</h3><p>If Apply fails or readability regresses, run Restore before trying again. Do not call a skin usable without real screenshot/DOM evidence.</p></article></div><section className="studio-card adapt-steps"><h2>Threat model notes</h2><ol><li>Loopback CDP should bind only to <code>127.0.0.1</code>, never a remote interface.</li><li>The helper must not modify official Codex files or access API keys.</li><li>Windows remains documented, not tested, until full real-machine evidence exists.</li><li>No `official`, `endorsed`, `100% safe`, `one-click`, or `Windows tested` claims without proof.</li></ol></section></main>
}

function PrivacyTerms({ kind }: { kind: 'privacy' | 'terms' }) {
  return <main className="section-pad page"><p className="eyebrow">{kind}</p><h1>{kind === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}</h1><section className="legal-copy studio-card"><p>{disclaimer}</p><p>The Builder runs in your browser. Local uploaded images are not sent to CodexSkin.fun by this static MVP. If you export user-provided assets, you are responsible for having rights or permission and for keeping third-party materials private unless authorized to share.</p><p>Do not use CodexSkin.fun to create, package, or distribute illegal, infringing, hateful, privacy-invasive, sexualized-minor, non-consensual intimate, malicious, or credential-stealing content.</p></section></main>
}

function Footer() {
  return <footer className="footer section-pad"><p>{disclaimer}</p><div className="footer-links"><a href="/docs/install/macos">macOS guide</a><a href="/docs/install/windows">Windows documented path</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href={`mailto:${contactEmail}`}>Contact</a></div></footer>
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  setMeta('CodexSkin.fun — Build your own Codex Dream Skin', 'Build anime-style, idol-stage, sports-arena, fantasy, esports and personal-photo Codex Dream Skin packages in the browser, then export a data-only .dreamskin artifact.')
  let body = <Home />
  if (path === '/builder') body = <Builder />
  else if (path === '/skins') body = <Skins />
  else if (path.startsWith('/skins/')) {
    const skin = skins.find((item) => item.slug === path.split('/').pop())
    body = skin ? <SkinDetail skin={skin} /> : <main className="section-pad page"><p className="eyebrow">404</p><h1>Skin not found</h1><Button href="/skins">Browse skins</Button></main>
  } else if (path === '/docs/install') body = <InstallDocs />
  else if (path === '/docs/install/macos') body = <InstallDocs platform="macos" />
  else if (path === '/docs/install/windows') body = <InstallDocs platform="windows" />
  else if (path === '/security') body = <Security />
  else if (path === '/privacy') body = <PrivacyTerms kind="privacy" />
  else if (path === '/terms') body = <PrivacyTerms kind="terms" />
  else if (path !== '/') body = <main className="section-pad page"><p className="eyebrow">404</p><h1>Page not found</h1><Button href="/">Go home</Button></main>
  return <><Nav />{body}<Footer /></>
}

export default App
