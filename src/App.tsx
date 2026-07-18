import { useState, type CSSProperties, type ReactElement } from 'react'
import './App.css'

type Variant = 'ink' | 'forge' | 'neon' | 'rose' | 'blueprint' | 'glasshouse' | 'gold' | 'pixel' | 'sonar'

type Template = {
  slug: string
  name: string
  tagline: string
  description: string
  mood: string[]
  bestFor: string
  palette: string[]
  recipe: string
  accent: string
  variant: Variant
  studioId: string
  category: 'Featured Concepts' | 'Focus Worlds' | 'High-Energy Systems' | 'Creative Workspaces' | 'Light / Paper' | 'Dark / Terminal'
  conceptHook: string
  prompt: string
  recipeTitle: string
  cta: string
}

type TemplateFilter = 'All' | Template['category']

type Page = {
  title: string
  description: string
  h1: string
  eyebrow?: string
  body: ReactElement
}

const siteUrl = 'https://codexskin.fun'
const contactEmail = 'hongkai.xb@gmail.com'
const disclaimer =
  'Codex Skin Studio is an independent Codex skin customization resource. It is not affiliated with, endorsed by, or sponsored by OpenAI, Codex, or any official product team. Templates are starter recipes to review and adapt manually; compatibility can vary by environment.'

const templates: Template[] = [
  {
    slug: 'ink-mountain-scholar',
    name: 'Ink Mountain Scholar',
    tagline: 'Water-ink scholar desk with mountains, fog, scroll, and a bold red seal',
    description: 'A quiet water-ink Codex workspace where ink mountains, drifting fog, rice-paper scrolls, and a large red seal dominate the visual field.',
    conceptHook: 'Ink mountains, wide mist bands, a rice-paper scroll, and a bold red seal take over the mock so the modern editor recedes into a scholar-desk atmosphere.',
    mood: ['Quiet Focus', 'Paper Workspace', 'Ink System', 'Long Sessions'],
    bestFor: 'long writing-and-coding sessions, quiet planning, documentation-heavy builds',
    palette: ['#101418', '#123C3D', '#E8E1CF', '#BCE8D8', '#D94A32'],
    recipe: 'Layer an ink-black base with deep pine teal panels, rice-paper surfaces, overlapping mist belts, a square red studio seal, and pale jade active accents. Keep every mark abstract and CSS/SVG generated.',
    accent: '#BCE8D8',
    variant: 'ink',
    studioId: 'CSS-INK-001',
    category: 'Featured Concepts',
    prompt: 'draft calm refactor plan',
    recipeTitle: 'InkLayerRecipe',
    cta: 'Download Quiet Scholar Recipe',
  },
  {
    slug: 'forge-core-alchemist',
    name: 'Forge Core Alchemist',
    tagline: 'Molten Codex control room for disciplined debugging',
    description: 'A molten Codex control room for debugging with heat and discipline.',
    conceptHook: 'A cast-iron console, ember cursor, furnace gauges, and hot geometry make every debug pass feel deliberate.',
    mood: ['High Energy', 'Debug Mode', 'Forge UI', 'Terminal Heavy'],
    bestFor: 'terminal-heavy workflows, launch crunch, high-energy debugging sessions',
    palette: ['#16110F', '#3B2118', '#D6401F', '#FFB13B', '#8A5A32'],
    recipe: 'Use charcoal and cast-iron foundations, ember-red command accents, molten-gold focus lines, bronze geometry gauges, and low-opacity heat rings. Decorative particles stay abstract and brand-neutral.',
    accent: '#FFB13B',
    variant: 'forge',
    studioId: 'CSS-FRG-002',
    category: 'Featured Concepts',
    prompt: 'stabilize hot path trace',
    recipeTitle: 'ForgeRecipeGauge',
    cta: 'Download Forge Recipe',
  },
  {
    slug: 'rainstreet-neon-ritual',
    name: 'Rainstreet Neon Ritual',
    tagline: 'Rain-lit neon workspace with cyan focus and magenta motion',
    description: 'A rain-lit Codex workspace with cyan focus and magenta motion.',
    conceptHook: 'Tilted night poster, rainy asphalt, unreadable geometry signs, cyan input glow, and a wet reflection strip.',
    mood: ['Night Coding', 'Neon City', 'Rain Lines', 'High Contrast'],
    bestFor: 'night coding, creative tools, energetic personal setups',
    palette: ['#080B12', '#2C3A4A', '#16D9E3', '#D946EF', '#F6C85F'],
    recipe: 'Build from night-asphalt surfaces, cyan-magenta focus rings, amber abstract geometry, rainy blue-gray panels, and off-white glow text. Keep all signs unreadable, geometric, and IP-safe.',
    accent: '#16D9E3',
    variant: 'neon',
    studioId: 'CSS-NEO-003',
    category: 'Featured Concepts',
    prompt: 'ship night build ritual',
    recipeTitle: 'NeonCircuitRecipe',
    cta: 'Download Neon Ritual Recipe',
  },
  {
    slug: 'rose-orbit-observatory',
    name: 'Rose Orbit Observatory',
    tagline: 'Soft planning workspace with orbit lines and task nodes',
    description: 'A soft planning workspace with orbit lines, task nodes, and pearl panels.',
    conceptHook: 'A plum observatory board wraps plan/code/review/ship nodes in rose and violet orbital paths.',
    mood: ['Planning', 'Soft Focus', 'Orbit Map', 'Creator Desk'],
    bestFor: 'personal workspaces, creator portfolios, late-night planning sessions',
    palette: ['#2A1023', '#FFF1F7', '#F8B4D9', '#C084FC', '#FDE68A'],
    recipe: 'Use a deep plum shell, pearl planning cards, rose panels, violet orbit strokes, and small star-note highlights. Treat tasks as abstract nodes, not real constellation symbols.',
    accent: '#F8B4D9',
    variant: 'rose',
    studioId: 'CSS-OBS-004',
    category: 'Creative Workspaces',
    prompt: 'map next sprint',
    recipeTitle: 'OrbitPlanningMap',
    cta: 'Download Orbit Recipe',
  },
  {
    slug: 'midnight-blueprint-room',
    name: 'Midnight Blueprint Room',
    tagline: 'Low-glare engineering blueprint desk for deep work',
    description: 'A low-glare Codex skin shaped like an engineering blueprint desk.',
    conceptHook: 'A midnight blueprint sheet with measurement ticks, dashed modules, diff blocks, and architecture insets.',
    mood: ['Deep Work', 'Blueprint', 'Architecture', 'Low Glare'],
    bestFor: 'long coding sessions, review loops, architecture planning, low-distraction workspaces',
    palette: ['#07111F', '#111827', '#1E3A8A', '#60A5FA', '#C7D2FE'],
    recipe: 'Combine a midnight base with slate panels, blueprint grids, electric-blue focus lines, measurement markers, and pale readable text. Keep schematics abstract.',
    accent: '#60A5FA',
    variant: 'blueprint',
    studioId: 'CSS-BLU-005',
    category: 'Focus Worlds',
    prompt: 'review system boundary',
    recipeTitle: 'BlueprintTokenSpec',
    cta: 'Download Blueprint Recipe',
  },
  {
    slug: 'glasshouse-sprint-lab',
    name: 'Glasshouse Sprint Lab',
    tagline: 'Greenhouse sprint lab with a glass roof, lab rail, sprint board, and plants',
    description: 'A bright sprint lab where a large glasshouse roof, rib structure, blue lab rail, three-column sprint board, growth meter, and plant silhouettes dominate the mock.',
    conceptHook: 'A giant glass roof covers the top half, a blue lab rail cuts across the middle, and three sprint columns sit above plant and lab silhouettes for an unmistakable greenhouse sprint-lab read.',
    mood: ['Sprint Board', 'Clean UI', 'Glasshouse', 'Light Mode'],
    bestFor: 'sprint planning, light-mode workdays, product demos, small team rituals',
    palette: ['#F8FAFC', '#DFF7EA', '#38BDF8', '#34D399', '#0F172A'],
    recipe: 'Use frosted white panels, pale mint atmosphere, clean blue lab controls, growth-mint success states, high-contrast ink text, greenhouse roof ribs, light streaks, and CSS-only sprint gauges instead of any third-party imagery.',
    accent: '#34D399',
    variant: 'glasshouse',
    studioId: 'CSS-GLH-006',
    category: 'Light / Paper',
    prompt: 'grow feature branch',
    recipeTitle: 'GrowthMeterRecipe',
    cta: 'Download Lab Recipe',
  },
  {
    slug: 'blackbox-gold-premiere',
    name: 'Blackbox Gold Premiere',
    tagline: 'Dramatic black-and-gold console for launch demos',
    description: 'A dramatic black-and-gold Codex skin for launch demos and showcase sessions.',
    conceptHook: 'A hard-shell black stage case frames demo script, terminal proof, cue strips, and a gold live-demo sticker.',
    mood: ['Showcase', 'Demo Mode', 'Black Gold', 'Launch'],
    bestFor: 'presentation machines, launch demos, premium showcase sessions',
    palette: ['#050505', '#1F2937', '#F59E0B', '#FDE68A', '#E5E7EB'],
    recipe: 'Keep surfaces matte black or charcoal, reserve gold for cue lines and active states, add soft spotlight gradients, and keep warning/error colors distinct from the gold system.',
    accent: '#F59E0B',
    variant: 'gold',
    studioId: 'CSS-PRM-007',
    category: 'High-Energy Systems',
    prompt: 'rehearse launch proof',
    recipeTitle: 'PremiereCueSheet',
    cta: 'Download Premiere Recipe',
  },
  {
    slug: 'pixel-bento-arcade',
    name: 'Pixel Bento Arcade',
    tagline: 'Playful block-grid Codex skin for creative builds',
    description: 'A playful block-grid Codex skin for creative builds and personal projects.',
    conceptHook: 'A four-panel bento workspace uses stepped corners, color chips, scanlines, and pixel command blocks without game IP.',
    mood: ['Creative Coding', 'Pixel Grid', 'Playful', 'Bento Layout'],
    bestFor: 'creative coding, personal projects, community demos, playful prototypes',
    palette: ['#111827', '#FB7185', '#22D3EE', '#FACC15', '#A78BFA'],
    recipe: 'Use a dark canvas with coral, cyan, yellow, and violet tiles, stepped corners, abstract square ornaments, and high-contrast command bars. Avoid characters, devices, or recognizable game references.',
    accent: '#FB7185',
    variant: 'pixel',
    studioId: 'CSS-PXL-008',
    category: 'Creative Workspaces',
    prompt: 'compose playful prototype',
    recipeTitle: 'PixelTileRecipe',
    cta: 'Download Bento Recipe',
  },
  {
    slug: 'deepsea-sonar-console',
    name: 'Deepsea Sonar Console',
    tagline: 'Quiet diagnostic workspace with sonar rings and waveforms',
    description: 'A quiet diagnostic workspace with sonar rings, waveforms, and deep-sea contrast.',
    conceptHook: 'Deep navy panels, cyan pressure glow, signal waveforms, and sonar rings make failure tracing feel calm.',
    mood: ['Diagnostics', 'Sonar UI', 'Calm Tech', 'Signal Trace'],
    bestFor: 'diagnostics, log scanning, quiet bug hunts, production incident reviews',
    palette: ['#030B16', '#0B2545', '#0E7490', '#67E8F9', '#D9F99D'],
    recipe: 'Use abyss backgrounds, deep navy panels, sonar teal structures, cyan pulse states, signal-lime trace markers, and abstract wave lines only. Do not use submarines, animals, or military symbols.',
    accent: '#67E8F9',
    variant: 'sonar',
    studioId: 'CSS-SON-009',
    category: 'Dark / Terminal',
    prompt: 'trace quiet failure',
    recipeTitle: 'SonarSignalStack',
    cta: 'Download Sonar Recipe',
  },
]

const featuredStudioSkins = ['glasshouse-sprint-lab', 'ink-mountain-scholar', 'rainstreet-neon-ritual']
  .map((slug) => templates.find((template) => template.slug === slug))
  .filter((template): template is Template => Boolean(template))
const templateFilters: TemplateFilter[] = ['All', 'Featured Concepts', 'Focus Worlds', 'High-Energy Systems', 'Creative Workspaces', 'Light / Paper', 'Dark / Terminal']

const p0Routes = [
  '/',
  '/templates',
  '/templates/ink-mountain-scholar',
  '/templates/forge-core-alchemist',
  '/templates/rainstreet-neon-ritual',
  '/templates/rose-orbit-observatory',
  '/templates/midnight-blueprint-room',
  '/templates/glasshouse-sprint-lab',
  '/templates/blackbox-gold-premiere',
  '/templates/pixel-bento-arcade',
  '/templates/deepsea-sonar-console',
  '/custom-codex-skin',
  '/how-it-works',
  '/safety',
  '/privacy',
  '/terms',
]

function setMeta(title: string, description: string, options: { noindex?: boolean } = {}) {
  document.title = title
  const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta')
  meta.setAttribute('name', 'description')
  meta.setAttribute('content', description)
  document.head.appendChild(meta)

  const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link')
  canonical.setAttribute('rel', 'canonical')
  canonical.setAttribute('href', `${siteUrl}${window.location.pathname === '/' ? '' : window.location.pathname}`)
  document.head.appendChild(canonical)

  const robots = document.querySelector('meta[name="robots"]') ?? document.createElement('meta')
  robots.setAttribute('name', 'robots')
  if (options.noindex) {
    robots.setAttribute('content', 'noindex,follow')
    document.head.appendChild(robots)
  } else {
    robots.remove()
  }
}

function Nav() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Codex Skin Studio home">
        <span className="brand-mark">CS</span>
        <span>Codex Skin Studio</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/templates">Templates</a>
        <a href="/custom-codex-skin">Custom Skin</a>
        <a href="/how-it-works">How it works</a>
        <a href="/safety">Safety</a>
        <a className="nav-cta" href="/custom-codex-skin">Studio</a>
      </nav>
    </header>
  )
}

function StudioButton({ href, children, variant = 'primary', download }: { href: string; children: ReactElement | string; variant?: 'primary' | 'secondary'; download?: string }) {
  return <a className={`studio-button studio-button--${variant}`} href={href} download={download}>{children}</a>
}

function recipeDownloadHref(template: Template) {
  return `data:text/plain;charset=utf-8,${encodeURIComponent(`${template.name} Codex skin starter recipe\n\nPalette: ${template.palette.join(', ')}\n\n${template.recipe}\n\nReview and adapt manually. No automatic installer is included.`)}`
}

function MockLines({ count = 4 }: { count?: number }) {
  return <>{Array.from({ length: count }, (_, index) => <span key={index} className={`mock-line mock-line--${index + 1}`}></span>)}</>
}

function DefaultWorkspaceInterior({ template }: { template: Template }) {
  return (
    <div className="mock-body">
      <aside className="mock-sidebar">
        <b></b><span className="active"></span><span></span><span></span><span></span>
      </aside>
      <main className="mock-main">
        <section className="mock-chat-card"><MockLines count={3} /></section>
        <section className="mock-code-card"><MockLines count={5} /></section>
        <div className="mock-status-row"><i></i><i></i><i></i></div>
        <div className="mock-prompt-input"><span>{template.prompt}</span><b></b></div>
      </main>
    </div>
  )
}

function GlasshouseWorkspaceInterior({ template }: { template: Template }) {
  return (
    <div className="glasshouse-lab-interior">
      <div className="glass-roof" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <div className="lab-rail"><strong>GROWTH RAIL</strong><span></span><b>78%</b></div>
      <main className="sprint-board" aria-label="Three-column sprint lab board">
        {['Seed', 'Grow', 'Ship'].map((label, index) => (
          <section key={label} className="sprint-column">
            <strong>{label}</strong>
            <span></span><span></span><span></span>
            {index === 1 ? <em>LAB</em> : null}
          </section>
        ))}
      </main>
      <div className="growth-meter"><span>{template.prompt}</span><i></i><b></b></div>
      <div className="greenhouse-silhouette" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div>
    </div>
  )
}

function InkWorkspaceInterior({ template }: { template: Template }) {
  return (
    <div className="ink-scholar-interior">
      <div className="scroll-panel"><strong>墨 · SCHOLAR DESK</strong><span>{template.prompt}</span></div>
      <div className="ink-mist ink-mist--one" aria-hidden="true"></div>
      <div className="ink-mist ink-mist--two" aria-hidden="true"></div>
      <div className="ink-mountain ink-mountain--back" aria-hidden="true"></div>
      <div className="ink-mountain ink-mountain--front" aria-hidden="true"></div>
      <div className="red-seal" aria-hidden="true"><span>印</span></div>
      <div className="brush-editor" aria-hidden="true"><i></i><i></i><i></i></div>
    </div>
  )
}

function WorkspaceInterior({ template }: { template: Template }) {
  if (template.variant === 'glasshouse') return <GlasshouseWorkspaceInterior template={template} />
  if (template.variant === 'ink') return <InkWorkspaceInterior template={template} />
  return <DefaultWorkspaceInterior template={template} />
}

function CodexWorkspaceMock({ template, size = 'card' }: { template: Template; size?: 'mini' | 'card' | 'hero' | 'detail' }) {
  return (
    <div className={`workspace-mock workspace-mock--${template.variant} workspace-mock--${size}`} style={{ '--accent': template.accent } as CSSProperties & Record<string, string>} aria-label={`${template.name} original Codex workspace concept mock screenshot`}>
      <div className="mock-titlebar">
        <span className="window-dot"></span><span className="window-dot"></span><span className="window-dot"></span>
        <strong>{template.studioId}</strong>
        <em>{template.mood[0]}</em>
      </div>
      <WorkspaceInterior template={template} />
      <div className="mock-decoration" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
    </div>
  )
}

function FeaturedStudioBoard() {
  return (
    <div className="featured-studio-board studio-card" aria-label="Studio board with three featured workspace mock screenshots">
      <div className="board-topline"><span>STUDIO BOARD</span><span>003 SKINS FEATURED</span></div>
      <div className="board-collage">
        <div className="board-main-shot"><CodexWorkspaceMock template={featuredStudioSkins[0]} size="hero" /></div>
        <CodexWorkspaceMock template={featuredStudioSkins[1]} size="mini" />
        <CodexWorkspaceMock template={featuredStudioSkins[2]} size="mini" />
        <a className="queue-strip" href="/custom-codex-skin"><strong>Custom request queue</strong><span>Mood / Palette / Constraints</span></a>
      </div>
    </div>
  )
}

function SkinGalleryCard({ template, featured = false }: { template: Template; featured?: boolean }) {
  return (
    <article className={`skin-gallery-card studio-card ${featured ? 'skin-gallery-card--featured' : ''}`} style={{ '--accent': template.accent } as CSSProperties & Record<string, string>}>
      <div className="gallery-meta"><span>FREE TEMPLATE</span><span>{template.studioId}</span></div>
      <CodexWorkspaceMock template={template} size="card" />
      <div className="gallery-copy">
        <h3>{template.name}</h3>
        <p>{template.conceptHook}</p>
        <ul className="studio-tags">{template.mood.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <div className="palette-strip" aria-label={`${template.name} palette`}>{template.palette.map((color) => <span key={color} style={{ '--swatch': color } as CSSProperties & Record<string, string>}></span>)}</div>
        <div className="card-actions">
          <StudioButton href={`/templates/${template.slug}`}>View Skin</StudioButton>
          <StudioButton href={recipeDownloadHref(template)} variant="secondary" download={`${template.slug}-starter-recipe.txt`}>Download Recipe</StudioButton>
        </div>
      </div>
    </article>
  )
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
}

function TemplateGallery({ items = templates, featured = false }: { items?: Template[]; featured?: boolean }) {
  return <div className="gallery-grid">{items.map((template) => <SkinGalleryCard key={template.slug} template={template} featured={featured} />)}</div>
}

function ShowcaseStrip() {
  return (
    <section className="showcase-strip section-pad" aria-label="Studio workflow highlights">
      <div className="showcase-card studio-card wide">
        <p className="eyebrow">Studio workflow</p>
        <h2>Pick a concept, download a reviewable recipe, adapt by hand.</h2>
      </div>
      <div className="showcase-card studio-card"><strong>01</strong><span>Original CSS/SVG concept mockups</span></div>
      <div className="showcase-card studio-card"><strong>02</strong><span>Palette and manual recipe notes</span></div>
      <div className="showcase-card studio-card"><strong>03</strong><span>Custom skin request queue</span></div>
    </section>
  )
}

function CustomCta() {
  return (
    <section className="custom-order-card section-pad" aria-label="Custom skin request order form">
      <div className="studio-card custom-order-inner">
        <div className="order-form-preview">
          <p className="eyebrow">CUSTOM SKIN REQUEST</p>
          <h2>Tell us the workspace mood, palette, and safety constraints.</h2>
          <p>We turn it into a reviewable Codex skin direction. Free templates stay downloadable; custom work is the next studio lane.</p>
          <div className="form-lines" aria-hidden="true"><span>Mood: calm / high energy / branded / night mode</span><span>Palette: attach colors or describe feeling</span><span>Constraints: no IP, no official UI copy, readability first</span></div>
          <StudioButton href={`mailto:${contactEmail}?subject=Custom%20Codex%20Skin%20Request&body=Name%2Femail%3A%0AWorkspace%20mood%3A%0APalette%3A%0ASafety%20constraints%3A%0APersonal%20or%20team%20use%3A%0ADeadline%3A`}>Request Custom Skin</StudioButton>
        </div>
        <div className="before-after-mock" aria-label="Before and after Codex workspace mockup">
          <div><span>Before</span><CodexWorkspaceMock template={templates[2]} size="mini" /></div>
          <div><span>Studio Skin</span><CodexWorkspaceMock template={featuredStudioSkins[2]} size="mini" /></div>
        </div>
      </div>
    </section>
  )
}

function HomeBody() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">CODEX SKIN STUDIO</p>
          <h1>Free Codex Skin Templates, Built Like Studio Concepts</h1>
          <p className="lede">Download reviewable Codex skin recipes, preview original workspace concepts, or request a custom skin direction for your own setup.</p>
          <div className="cta-row">
            <StudioButton href="/templates">Browse Free Templates</StudioButton>
            <StudioButton href="/custom-codex-skin" variant="secondary">Request Custom Skin</StudioButton>
          </div>
          <div className="paper-badges" aria-label="Studio highlights"><span>CSS/SVG mockups</span><span>IP-safe concepts</span><span>Manual recipes</span></div>
        </div>
        <FeaturedStudioBoard />
      </section>
      <ShowcaseStrip />
      <section className="section-pad featured-skins">
        <SectionHeading eyebrow="Featured Studio Skins" title="Glasshouse, Ink, and Neon now read at first glance" text="Three complete workspace concept cards — a greenhouse sprint lab, a water-ink scholar desk, and a rainstreet neon ritual — drawn only with CSS, SVG, and React DOM." />
        <TemplateGallery items={featuredStudioSkins} featured />
      </section>
      <section className="section-pad">
        <SectionHeading eyebrow="Browse Free Codex Skin Templates" title="Gallery cards, not abstract widgets" text="Every template includes a large workspace mock screenshot, palette strip, use case, and a reviewable recipe download." />
        <TemplateGallery />
      </section>
      <CustomCta />
      <section className="section-pad safety-note studio-card">
        <p className="eyebrow">Safety / Manual Recipe</p>
        <h2>Reviewable recipes, not risky installers.</h2>
        <p>Templates are text-only guidance. Back up your local settings, apply colors manually, and test prompt text, selections, warnings, errors, links, and diffs before relying on a skin.</p>
      </section>
    </>
  )
}

function MetadataPanel({ template }: { template: Template }) {
  const rows = [
    ['SKIN ID', template.studioId],
    ['TYPE', 'Free Codex skin template'],
    ['MOOD', template.mood.join(' / ')],
    ['BEST FOR', template.bestFor],
    ['FORMAT', 'Reviewable recipe TXT'],
    ['ASSETS', 'CSS / SVG / DOM only'],
    ['STATUS', 'Free preview'],
  ]
  return <dl className="metadata-panel studio-card">{rows.map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl>
}

function isDarkHex(hex: string) {
  const value = hex.replace('#', '')
  if (!/^[0-9a-f]{6}$/i.test(value)) return false
  const [r, g, b] = [0, 2, 4].map((start) => parseInt(value.slice(start, start + 2), 16) / 255)
  const [lr, lg, lb] = [r, g, b].map((channel) => channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
  return (0.2126 * lr) + (0.7152 * lg) + (0.0722 * lb) < 0.28
}

function PaletteBoard({ template }: { template: Template }) {
  const names: Record<string, string[]> = {
    ink: ['Ink base', 'Pine panels', 'Rice paper', 'Jade focus', 'Studio seal'],
    forge: ['Charcoal base', 'Cast iron', 'Ember cursor', 'Molten focus', 'Bronze geometry'],
    neon: ['Night asphalt', 'Slate panel', 'Cyan focus', 'Magenta scan', 'Amber geometry'],
    rose: ['Deep plum', 'Pearl surface', 'Rose panel', 'Violet orbit', 'Star note'],
    blueprint: ['Midnight base', 'Slate panel', 'Blueprint blue', 'Focus line', 'Soft text'],
    glasshouse: ['Frosted white', 'Greenhouse mist', 'Clean blue', 'Growth mint', 'Ink text'],
    gold: ['Matte black', 'Charcoal panel', 'Stage gold', 'Spotlight', 'Presenter text'],
    pixel: ['Dark canvas', 'Coral block', 'Cyan block', 'Yellow highlight', 'Violet chip'],
    sonar: ['Abyss base', 'Deep navy', 'Sonar teal', 'Cyan pulse', 'Signal lime'],
  }
  return (
    <section className={`palette-board palette-board--${template.variant} studio-card`}>
      <p className="eyebrow">Palette Board</p>
      <div className="palette-board-grid">
        {template.palette.map((color, index) => <div key={color} className={isDarkHex(color) ? 'is-dark-swatch' : undefined} style={{ '--swatch': color } as CSSProperties & Record<string, string>}><b></b><strong>{names[template.variant]?.[index] ?? `Token ${index + 1}`}</strong><span>{color}</span></div>)}
      </div>
    </section>
  )
}

function InkLayerRecipe() {
  const layers = [
    ['Ink base', '#101418', 'app shell / deep background'],
    ['Pine panels', '#123C3D', 'sidebar / cards'],
    ['Rice paper', '#E8E1CF', 'reading surfaces'],
    ['Mist belt', '#BCE8D8', 'separator fog / prompt glow'],
    ['Studio seal', '#D94A32', 'small landmark / active stamp'],
  ]
  return <section className="recipe-board recipe-board--ink studio-card"><p className="eyebrow">Recipe System</p>{layers.map(([name, color, use], index) => <div className="ink-layer-row" key={name} style={{ '--layer-color': color, '--layer-index': String(index) } as CSSProperties & Record<string, string>}><svg viewBox="0 0 360 42" aria-hidden="true"><path d={index % 2 === 0 ? 'M0 31 C38 14 72 27 111 16 C157 2 194 32 236 18 C286 2 318 20 360 8 L360 42 L0 42 Z' : 'M0 25 C44 9 83 12 124 26 C166 39 198 10 239 16 C281 22 316 34 360 14 L360 42 L0 42 Z'} /></svg><div><strong>{name}</strong><span>{color} · {use}</span></div></div>)}</section>
}

function GlasshouseSprintRecipe() {
  const gauges = [
    ['Frame ribs', '76%', '#38BDF8', 'visible greenhouse roof and lab rails'],
    ['Sprint health', '64%', '#34D399', 'growth meter / done state'],
    ['Focus glare', '42%', '#F8FAFC', 'sun pane highlight without low contrast'],
    ['Ink anchor', '88%', '#0F172A', 'readability and card edges'],
  ]
  return <section className="recipe-board recipe-board--glasshouse studio-card"><p className="eyebrow">Recipe System · Sprint Lab Gauges</p><div className="glasshouse-instrument" aria-hidden="true"><span></span><b></b><i></i></div><div className="glasshouse-gauge-list">{gauges.map(([name, percent, color, note]) => <div className="glasshouse-gauge-row" key={name} style={{ '--gauge-color': color, '--gauge-width': percent } as CSSProperties & Record<string, string>}><div><strong>{name}</strong><span>{note}</span></div><em>{percent}</em><i></i></div>)}</div></section>
}

function ForgeRecipeGauge() {
  const parts = [
    ['Charcoal base', '52%', '#16110F', 'Base keeps glare down'],
    ['Ember cursor', '18%', '#D6401F', 'Ember guides attention'],
    ['Molten focus', '20%', '#FFB13B', 'Gold marks focus'],
    ['Bronze geometry', '10%', '#8A5A32', 'Bronze adds structure'],
  ]
  return <section className="recipe-board recipe-board--forge studio-card"><p className="eyebrow">Recipe System</p><div className="forge-gauge-dial" aria-hidden="true"><span></span></div><div className="forge-gauge-bars">{parts.map(([name, percent, color, note]) => <div className="forge-gauge-row" key={name} style={{ '--gauge-color': color, '--gauge-width': percent } as CSSProperties & Record<string, string>}><div><strong>{name}</strong><span>{note}</span></div><b>{percent}</b><i></i></div>)}</div></section>
}

function NeonCircuitRecipe() {
  const nodes = [
    ['Asphalt base', '#2C3A4A', 'night foundation'],
    ['Cyan focus', '#16D9E3', 'scan-ready highlights'],
    ['Magenta scan', '#D946EF', 'secondary motion'],
    ['Amber geometry', '#F6C85F', 'small structure cues'],
    ['Off-white glow', '#EAF8FF', 'reading edges'],
  ]
  return <section className="recipe-board recipe-board--neon studio-card"><p className="eyebrow">Recipe System</p><svg viewBox="0 0 520 190" aria-hidden="true"><polyline points="44,132 145,72 246,118 355,48 474,112" />{nodes.map(([, color], index) => { const points = [[44, 132], [145, 72], [246, 118], [355, 48], [474, 112]][index]; return <circle key={color} cx={points[0]} cy={points[1]} r="11" style={{ '--node-color': color } as CSSProperties & Record<string, string>} /> })}</svg><div className="neon-node-list">{nodes.map(([name, color, note]) => <div key={name} style={{ '--node-color': color } as CSSProperties & Record<string, string>}><strong>{name}</strong><span>{note}</span></div>)}</div></section>
}

function UIStatesMock({ template }: { template: Template }) {
  return <section className="ui-states studio-card"><p className="eyebrow">UI States Mock</p><div className="state-grid">{['Active tab', 'Prompt focus', 'Diff line', 'Command tag'].map((state) => <div key={state} style={{ '--accent': template.accent } as CSSProperties & Record<string, string>}><span>{state}</span><b></b><i></i></div>)}</div></section>
}

function ConceptStatement({ template }: { template: Template }) {
  const statements: Record<Variant, string> = {
    ink: 'Designed for builders who want Codex to feel like a quiet writing desk: dark enough for code, warm enough for notes, and calm enough for long reasoning loops.',
    forge: 'Built for debugging sprints and launch crunch: the interface feels hot, but the reading surfaces stay controlled.',
    neon: 'For late-night builds that need motion and contrast without turning the workspace into a noisy cyberpunk cliché.',
    rose: 'For creators who plan visually: orbit paths and task nodes make the workspace feel like a soft observatory instead of a pastel preset.',
    blueprint: 'For deep reviews and systems thinking: low-glare code surfaces sit inside an engineering sheet with measured boundaries.',
    glasshouse: 'For sprint planning in light mode: frosted panels, growth meters, and greenhouse geometry keep the desk clean and active.',
    gold: 'For demos and launches: blackbox staging, cue strips, and spotlight accents make the workspace presentation-ready.',
    pixel: 'For personal creative builds: bento tiles and stepped blocks add energy while staying readable and IP-safe.',
    sonar: 'For quiet diagnostics: sonar rings, waveforms, and cyan pulse states make failure tracing feel calm and technical.',
  }
  return <section className="concept-statement studio-card"><p className="eyebrow">Concept Statement</p><h2>{template.tagline}</h2><p>{statements[template.variant]}</p></section>
}

function RecipeVisualization({ template }: { template: Template }) {
  if (template.variant === 'ink') return <InkLayerRecipe />
  if (template.variant === 'forge') return <ForgeRecipeGauge />
  if (template.variant === 'neon') return <NeonCircuitRecipe />
  if (template.variant === 'glasshouse') return <GlasshouseSprintRecipe />
  return <section className={`recipe-board recipe-board--concept recipe-board--${template.variant} studio-card`}><p className="eyebrow">Recipe System · {template.recipeTitle}</p><div className="concept-recipe-map">{template.palette.map((color, index) => <div key={color} style={{ '--node-color': color, '--node-index': String(index) } as CSSProperties & Record<string, string>}><b></b><strong>{template.mood[index % template.mood.length]}</strong><span>{color}</span></div>)}</div></section>
}

function VariantTemplateDetail({ template }: { template: Template }) {
  const ctaByVariant: Record<Variant, string> = {
    ink: 'Request a calmer custom skin',
    forge: 'Commission a hotter workspace skin',
    neon: 'Request a city-night custom skin',
    rose: 'Request a softer planning skin',
    blueprint: 'Request a deep-work system skin',
    glasshouse: 'Request a cleaner sprint skin',
    gold: 'Request a launch-ready custom skin',
    pixel: 'Request a more playful coding skin',
    sonar: 'Request a calmer diagnostic skin',
  }
  return (
    <div className={`detail-work-page detail-work-page--${template.variant}`}>
      <section className="work-hero">
        <div className="work-copy">
          <p className="eyebrow">Skin Concept Work Page</p>
          <h2>{template.name}</h2>
          <p>{template.conceptHook}</p>
          <MetadataPanel template={template} />
          <div className="cta-row"><StudioButton href={recipeDownloadHref(template)} download={`${template.slug}-starter-recipe.txt`}>{template.cta}</StudioButton><StudioButton href="/custom-codex-skin" variant="secondary">{ctaByVariant[template.variant]}</StudioButton></div>
        </div>
        <div className="concept-shot"><CodexWorkspaceMock template={template} size="detail" /></div>
      </section>
      <ConceptStatement template={template} />
      <PaletteBoard template={template} />
      <RecipeVisualization template={template} />
      <UIStatesMock template={template} />
      <CustomCta />
    </div>
  )
}

function TemplateDetail({ template }: { template: Template }) {
  return <VariantTemplateDetail template={template} />
}

function AdaptSteps() {
  return <section className="adapt-steps studio-card"><h2>How to adapt it</h2><ol><li>Copy the palette and written recipe into your own notes.</li><li>Back up current Codex, terminal, or editor appearance settings before changing anything.</li><li>Apply colors manually in the environment you actually use.</li><li>Test prompt text, selections, links, warnings, errors, and diffs for contrast.</li><li>Rollback immediately if readability or behavior changes unexpectedly.</li></ol></section>
}

function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState<TemplateFilter>('All')
  const filteredTemplates = activeFilter === 'All' ? templates : templates.filter((template) => template.category === activeFilter)

  return <><p className="page-lede">Each template is an original Codex workspace concept built with CSS, DOM, and SVG — no screenshots, no third-party art, no IP references.</p><div className="filter-chips" aria-label="Template filters">{templateFilters.map((filter) => { const count = filter === 'All' ? templates.length : templates.filter((template) => template.category === filter).length; const isActive = activeFilter === filter; return <button key={filter} type="button" className={isActive ? 'is-active' : undefined} aria-pressed={isActive} onClick={() => setActiveFilter(filter)}>{filter} <span>{count}</span></button> })}</div><p className="filter-result-count" aria-live="polite">Showing {filteredTemplates.length} {filteredTemplates.length === 1 ? 'template' : 'templates'} in {activeFilter}.</p><TemplateGallery items={filteredTemplates} /></>
}

function HowItWorks() {
  return <><p className="page-lede">Codex Skin Studio v0 is a lightweight template studio. It helps you choose a visual direction and review a starter recipe before manually adapting it.</p><AdaptSteps /></>
}

function Safety() {
  return <><p className="page-lede">v0 is intentionally conservative: no uploads, no checkout, no accounts, and no unverified one-click installer.</p><div className="value-grid"><article className="studio-card value-card"><h3>Starter recipes</h3><p>Text and palette guidance. Review them before applying anything to your local setup.</p></article><article className="studio-card value-card"><h3>Manual adaptation</h3><p>Back up configs first, change one layer at a time, and verify prompt/diff/error readability.</p></article><article className="studio-card value-card"><h3>No official claim</h3><p>This independent site does not claim official affiliation, endorsement, or guaranteed compatibility.</p></article></div></>
}

function CustomRequestPage() {
  return <><p className="page-lede">Premium custom Codex skins are request-based in v0. Use this page to join the waitlist or ask for a quote; checkout and order management are not live yet.</p><CustomCta /></>
}

function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  if (kind === 'privacy') return <div className="legal-copy studio-card"><p>Codex Skin Studio v0 is a static site. It does not provide accounts, uploads, payments, hosted file processing, or a live custom order backend.</p><p>If you use the email request link, your email client and email provider handle the message. Do not send secrets, tokens, private configs, unreleased code, or assets you do not have rights to use.</p><p>Future analytics, forms, uploads, payments, or custom order workflows should be documented here before launch.</p></div>
  return <div className="legal-copy studio-card"><p>{disclaimer}</p><p>Templates are informational starter recipes, not guaranteed Codex engine packages. Review and adapt manually. Compatibility, appearance, and behavior vary by local environment.</p><p>Codex Skin Studio does not provide an automatic installer, official support channel, upload pipeline, checkout, or guaranteed custom delivery in v0.</p></div>
}

const pageMap: Record<string, Page> = {
  '/templates': { title: 'Browse Free Codex Skin Concepts — Codex Skin Studio', description: 'Browse nine original Codex workspace skin concept cards including Glasshouse Sprint Lab, Ink Mountain Scholar, Rainstreet Neon Ritual, Rose Orbit Observatory, and more.', h1: 'Browse Free Codex Skin Concepts', eyebrow: 'Template studio', body: <TemplatesPage /> },
  '/custom-codex-skin': { title: 'Request a Custom Codex Skin — Codex Skin Studio', description: 'Join the custom Codex skin request list for premium personal, image-based, brand, or team skin customization.', h1: 'Request a Custom Codex Skin', eyebrow: 'Studio order', body: <CustomRequestPage /> },
  '/how-it-works': { title: 'How Codex Skin Customization Works — Templates, Recipes, Requests', description: 'Learn how Codex Skin Studio works: choose a free template, preview the mood, download a starter recipe, adapt manually, or request custom work.', h1: 'How Codex Skin Customization Works', eyebrow: 'Workflow', body: <HowItWorks /> },
  '/safety': { title: 'Codex Skin Safety — Reviewable Recipes, Manual Adaptation, Privacy', description: 'Safety and privacy boundaries for Codex skin templates, manual adaptation, custom skin requests, and independent compatibility disclaimers.', h1: 'Codex Skin Safety', eyebrow: 'Safety boundary', body: <Safety /> },
  '/privacy': { title: 'Privacy Policy — Codex Skin Studio', description: 'Privacy policy for Codex Skin Studio, an independent static Codex skin customization resource.', h1: 'Privacy Policy', eyebrow: 'Static site privacy', body: <Legal kind="privacy" /> },
  '/terms': { title: 'Terms and Disclaimer — Codex Skin Studio', description: 'Terms, independent resource disclaimer, compatibility disclaimer, and safety notes for Codex Skin Studio.', h1: 'Terms and Disclaimer', eyebrow: 'Terms', body: <Legal kind="terms" /> },
}

for (const template of templates) {
  pageMap[`/templates/${template.slug}`] = { title: `${template.name} Codex Skin Template — Free Starter Recipe`, description: `${template.name} is a free Codex skin starter recipe with palette, preview mood, recommended use, and manual adaptation notes.`, h1: `${template.name} Codex Skin Template`, eyebrow: template.category, body: <TemplateDetail template={template} /> }
}

function StandardPage({ page }: { page: Page }) {
  return <main className="section-pad page"><p className="eyebrow">{page.eyebrow}</p><h1>{page.h1}</h1>{page.body}</main>
}

function Footer() {
  return <footer className="footer section-pad"><p>{disclaimer}</p><div className="footer-links">{p0Routes.map((route) => <a key={route} href={route}>{route === '/' ? 'Home' : route}</a>)}</div></footer>
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const page = pageMap[path]
  if (path === '/') {
    setMeta('Codex Skin Studio — Free Codex Skin Templates Built Like Studio Concepts', 'Browse free Codex skin templates, original workspace concept mockups, reviewable recipes, and a custom skin request path.')
    return <><Nav /><main><HomeBody /></main><Footer /></>
  }
  if (!page) {
    setMeta('404 Page not found — Codex Skin Studio', '404: the requested Codex Skin Studio page was not found.', { noindex: true })
    return <><Nav /><main className="section-pad page"><p className="eyebrow">404 / Not Found</p><h1>404 — Page not found</h1><p className="page-lede">This Codex Skin Studio route does not exist. It is marked noindex for crawlers; try the free templates hub or one of the verified routes in the footer.</p><StudioButton href="/templates">Browse free templates</StudioButton></main><Footer /></>
  }
  setMeta(page.title, page.description)
  return <><Nav /><StandardPage page={page} /><Footer /></>
}

export default App
