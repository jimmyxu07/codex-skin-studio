import type { CSSProperties, ReactElement } from 'react'
import './App.css'

type Variant = 'ink' | 'flame' | 'neon' | 'rose' | 'terminal' | 'midnight' | 'glass' | 'gold' | 'pixel'

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
  category: 'Original Concepts' | 'Calm' | 'Dark' | 'Bright' | 'Showcase'
  cta?: string
}

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
    slug: 'rose-orbit',
    name: 'Rose Orbit',
    tagline: 'Soft rose planning desk',
    description: 'A warm rose, pearl, and violet starter skin for users who want Codex to feel softer without losing terminal contrast.',
    mood: ['rose', 'soft focus', 'creator desk'],
    bestFor: 'personal workspaces, creator portfolios, late-night planning sessions',
    palette: ['#fff1f7', '#f8b4d9', '#c084fc', '#2a1023'],
    recipe: 'Use a deep plum base, rose accent borders, pearl cards, and violet highlights. Keep terminal text high-contrast and avoid tiny pastel-on-pastel labels.',
    accent: '#f472b6',
    variant: 'rose',
    studioId: 'CSS-ROS-004',
    category: 'Bright',
  },
  {
    slug: 'neon-terminal',
    name: 'Neon Terminal',
    tagline: 'Classic green command skin',
    description: 'A high-energy black and green Codex look inspired by classic terminals, cyber dashboards, and command-center workflows.',
    mood: ['terminal', 'signal green', 'CLI energy'],
    bestFor: 'CLI-heavy coding, demos, security-flavored builds, high-signal dashboards',
    palette: ['#020617', '#0f172a', '#22c55e', '#a3e635'],
    recipe: 'Start from a near-black background, use green highlights sparingly, reserve lime for active states, and test diff/error colors before relying on the skin.',
    accent: '#22c55e',
    variant: 'terminal',
    studioId: 'CSS-TRM-005',
    category: 'Dark',
  },
  {
    slug: 'midnight-focus',
    name: 'Midnight Focus',
    tagline: 'Low-glare deep work skin',
    description: 'A low-glare navy Codex skin recipe for long focus blocks, code review, and deep work without visual noise.',
    mood: ['midnight', 'minimal', 'productive'],
    bestFor: 'long coding sessions, review loops, low-distraction workspaces',
    palette: ['#07111f', '#111827', '#60a5fa', '#c7d2fe'],
    recipe: 'Combine a midnight background with blue focus rings, muted slate panels, and pale text. Prioritize readability for prompts, selections, and errors.',
    accent: '#60a5fa',
    variant: 'midnight',
    studioId: 'CSS-MID-006',
    category: 'Calm',
  },
  {
    slug: 'soft-glass',
    name: 'Soft Glass',
    tagline: 'Clean translucent workspace',
    description: 'A clean translucent skin direction with soft borders, frosted panels, and neutral accents for a modern Codex workspace.',
    mood: ['glass', 'clean', 'translucent'],
    bestFor: 'minimal setups, product demos, calm daily workspaces',
    palette: ['#f8fafc', '#e2e8f0', '#38bdf8', '#0f172a'],
    recipe: 'Use light panels, subtle shadows, blue accent strokes, and strong text contrast. Avoid claiming native blur support unless your environment verifies it.',
    accent: '#38bdf8',
    variant: 'glass',
    studioId: 'CSS-GLS-007',
    category: 'Calm',
  },
  {
    slug: 'stage-gold',
    name: 'Stage Gold',
    tagline: 'Black/gold demo skin',
    description: 'A dramatic black and gold starter recipe for launches, premium demos, and showcase sessions.',
    mood: ['premium', 'gold', 'launch'],
    bestFor: 'presentation machines, launch demos, premium brand mood boards',
    palette: ['#050505', '#1f2937', '#f59e0b', '#fde68a'],
    recipe: 'Keep most surfaces black or charcoal, use gold only for key CTAs and active states, and keep warning/error colors visually distinct from gold accents.',
    accent: '#f59e0b',
    variant: 'gold',
    studioId: 'CSS-GLD-008',
    category: 'Showcase',
  },
  {
    slug: 'pixel-pop',
    name: 'Pixel Pop',
    tagline: 'Playful block-color skin',
    description: 'A bright, playful Codex skin recipe with pixel-art energy, useful when personality matters more than minimalism.',
    mood: ['playful', 'pixel', 'colorful'],
    bestFor: 'creative coding, personal projects, community demos',
    palette: ['#111827', '#fb7185', '#22d3ee', '#facc15'],
    recipe: 'Use a dark base with colorful blocks, reserve yellow for highlights, and test line-height/spacing so playful visuals do not reduce coding readability.',
    accent: '#fb7185',
    variant: 'pixel',
    studioId: 'CSS-POP-009',
    category: 'Bright',
  },
  {
    slug: 'ink-mountain-scholar',
    name: 'Ink Mountain Scholar',
    tagline: 'Quiet paper-and-mist Codex workspace',
    description: 'A quiet paper-and-mist Codex workspace for long focus sessions.',
    mood: ['Ink base', 'Pine panels', 'Jade focus'],
    bestFor: 'long writing-and-coding sessions, quiet planning, documentation-heavy builds',
    palette: ['#101418', '#123C3D', '#E8E1CF', '#BCE8D8'],
    recipe: 'Layer an ink-black base with deep pine teal panels, rice-paper surfaces, misty reading planes, and pale jade active accents. Keep all marks abstract and avoid any named symbols, factions, characters, or franchise references.',
    accent: '#BCE8D8',
    variant: 'ink',
    studioId: 'CSS-INK-001',
    category: 'Original Concepts',
    cta: 'Download Quiet Scholar Recipe',
  },
  {
    slug: 'flame-alchemist',
    name: 'Flame Alchemist',
    tagline: 'Forge-fire Codex skin with disciplined contrast',
    description: 'A forge-fire Codex skin with ember focus and disciplined contrast.',
    mood: ['Charcoal base', 'Ember cursor', 'Molten focus'],
    bestFor: 'terminal-heavy workflows, launch crunch, high-energy debugging sessions',
    palette: ['#16110F', '#3B2118', '#D6401F', '#FFB13B'],
    recipe: 'Use charcoal and furnace-brown foundations, ember-red cursor and command accents, molten-gold focus lines, and low-opacity bronze geometry. Decorative heat rings stay abstract with no devices, crests, schools, or known artifact cues.',
    accent: '#FFB13B',
    variant: 'flame',
    studioId: 'CSS-FLM-002',
    category: 'Original Concepts',
    cta: 'Download Forge Recipe',
  },
  {
    slug: 'urban-taoist-neon',
    name: 'Urban Taoist Neon',
    tagline: 'Rain-lit neon geometry for night coding',
    description: 'Rain-lit neon geometry for night coding sessions.',
    mood: ['Asphalt base', 'Cyan focus', 'Magenta scan'],
    bestFor: 'night coding, creative tools, energetic personal setups',
    palette: ['#080B12', '#2C3A4A', '#16D9E3', '#D946EF', '#F6C85F'],
    recipe: 'Build from night-asphalt surfaces, cyan-magenta focus rings, amber abstract geometry, rainy blue-gray panels, and off-white glow text. Keep all signs and symbols unreadable, geometric, and brand-neutral.',
    accent: '#16D9E3',
    variant: 'neon',
    studioId: 'CSS-NEO-003',
    category: 'Original Concepts',
    cta: 'Download Neon Ritual Recipe',
  },
]

const featuredStudioSkins = templates.filter((template) => ['ink-mountain-scholar', 'flame-alchemist', 'urban-taoist-neon'].includes(template.slug))

const p0Routes = [
  '/',
  '/templates',
  '/templates/rose-orbit',
  '/templates/neon-terminal',
  '/templates/midnight-focus',
  '/templates/soft-glass',
  '/templates/ink-mountain-scholar',
  '/templates/flame-alchemist',
  '/templates/urban-taoist-neon',
  '/custom-codex-skin',
  '/how-it-works',
  '/safety',
  '/privacy',
  '/terms',
]

function setMeta(title: string, description: string) {
  document.title = title
  const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta')
  meta.setAttribute('name', 'description')
  meta.setAttribute('content', description)
  document.head.appendChild(meta)

  const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link')
  canonical.setAttribute('rel', 'canonical')
  canonical.setAttribute('href', `${siteUrl}${window.location.pathname === '/' ? '' : window.location.pathname}`)
  document.head.appendChild(canonical)
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

function CodexWorkspaceMock({ template, size = 'card' }: { template: Template; size?: 'mini' | 'card' | 'hero' | 'detail' }) {
  return (
    <div className={`workspace-mock workspace-mock--${template.variant} workspace-mock--${size}`} style={{ '--accent': template.accent } as CSSProperties & Record<string, string>} aria-label={`${template.name} original Codex workspace concept mock screenshot`}>
      <div className="mock-titlebar">
        <span className="window-dot"></span><span className="window-dot"></span><span className="window-dot"></span>
        <strong>{template.studioId}</strong>
        <em>{size === 'mini' ? 'preview' : 'workspace recipe'}</em>
      </div>
      <div className="mock-body">
        <aside className="mock-sidebar">
          <b></b><span className="active"></span><span></span><span></span><span></span>
        </aside>
        <main className="mock-main">
          <section className="mock-chat-card"><MockLines count={3} /></section>
          <section className="mock-code-card"><MockLines count={5} /></section>
          <div className="mock-status-row"><i></i><i></i><i></i></div>
          <div className="mock-prompt-input"><span>review palette + apply manually</span><b></b></div>
        </main>
      </div>
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
        <p>{template.description}</p>
        <ul className="studio-tags">{template.mood.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}</ul>
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
        <SectionHeading eyebrow="Featured Studio Skins" title="Original Codex Skin Concepts" text="Three complete workspace concept cards — Ink, Flame, and Neon — drawn only with CSS, SVG, and React DOM." />
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

function PaletteBoard({ template }: { template: Template }) {
  const names: Record<string, string[]> = {
    ink: ['Ink base', 'Pine panels', 'Rice paper', 'Jade focus'],
    flame: ['Charcoal base', 'Forge panel', 'Ember cursor', 'Molten focus'],
    neon: ['Night asphalt', 'Slate panel', 'Cyan focus', 'Magenta scan', 'Amber geometry'],
  }
  return (
    <section className={`palette-board palette-board--${template.variant} studio-card`}>
      <p className="eyebrow">Palette Board</p>
      <div className="palette-board-grid">
        {template.palette.map((color, index) => <div key={color} style={{ '--swatch': color } as CSSProperties & Record<string, string>}><b></b><strong>{names[template.variant]?.[index] ?? `Token ${index + 1}`}</strong><span>{color}</span></div>)}
      </div>
    </section>
  )
}

function InkLayerRecipe() {
  const layers = [
    ['Ink base', '#101418', 'app shell / deep background'],
    ['Pine panels', '#123C3D', 'sidebar / cards'],
    ['Rice paper', '#E8E1CF', 'reading surfaces'],
    ['Jade focus', '#BCE8D8', 'active tab / cursor / prompt'],
  ]
  return <section className="recipe-board recipe-board--ink studio-card"><p className="eyebrow">Recipe System</p>{layers.map(([name, color, use], index) => <div className="ink-layer-row" key={name} style={{ '--layer-color': color, '--layer-index': String(index) } as CSSProperties & Record<string, string>}><svg viewBox="0 0 360 42" aria-hidden="true"><path d={index % 2 === 0 ? 'M0 31 C38 14 72 27 111 16 C157 2 194 32 236 18 C286 2 318 20 360 8 L360 42 L0 42 Z' : 'M0 25 C44 9 83 12 124 26 C166 39 198 10 239 16 C281 22 316 34 360 14 L360 42 L0 42 Z'} /></svg><div><strong>{name}</strong><span>{color} · {use}</span></div></div>)}</section>
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
    flame: 'Built for debugging sprints and launch crunch: the interface feels hot, but the reading surfaces stay controlled.',
    neon: 'For late-night builds that need motion and contrast without turning the workspace into a noisy cyberpunk cliché.',
    rose: template.description,
    terminal: template.description,
    midnight: template.description,
    glass: template.description,
    gold: template.description,
    pixel: template.description,
  }
  return <section className="concept-statement studio-card"><p className="eyebrow">Concept Statement</p><h2>{template.tagline}</h2><p>{statements[template.variant]}</p></section>
}

function VariantTemplateDetail({ template }: { template: Template }) {
  const secondaryCta = template.variant === 'ink' ? 'Request a calmer custom skin' : template.variant === 'flame' ? 'Commission a hotter workspace skin' : 'Request a city-night custom skin'
  return (
    <div className={`detail-work-page detail-work-page--${template.variant}`}>
      <section className="work-hero">
        <div className="work-copy">
          <p className="eyebrow">Skin Concept Work Page</p>
          <h2>{template.name}</h2>
          <p>{template.description}</p>
          <MetadataPanel template={template} />
          <div className="cta-row"><StudioButton href={recipeDownloadHref(template)} download={`${template.slug}-starter-recipe.txt`}>{template.cta ?? 'Download starter recipe'}</StudioButton><StudioButton href="/custom-codex-skin" variant="secondary">{secondaryCta}</StudioButton></div>
        </div>
        <div className="concept-shot"><CodexWorkspaceMock template={template} size="detail" /></div>
      </section>
      <ConceptStatement template={template} />
      <PaletteBoard template={template} />
      {template.variant === 'ink' && <InkLayerRecipe />}
      {template.variant === 'flame' && <ForgeRecipeGauge />}
      {template.variant === 'neon' && <NeonCircuitRecipe />}
      <UIStatesMock template={template} />
      <CustomCta />
    </div>
  )
}

function TemplateDetail({ template }: { template: Template }) {
  if (['ink', 'flame', 'neon'].includes(template.variant)) return <VariantTemplateDetail template={template} />
  return <div className="standard-template-detail"><p className="page-lede">{template.description}</p><div className="detail-layout"><SkinGalleryCard template={template} /><article className="studio-card recipe-copy"><h2>Starter recipe</h2><p>{template.recipe}</p><PaletteBoard template={template} /><div className="cta-row"><StudioButton href={recipeDownloadHref(template)} download={`${template.slug}-starter-recipe.txt`}>Download starter recipe</StudioButton><StudioButton href="/custom-codex-skin" variant="secondary">Request custom version</StudioButton></div></article></div><AdaptSteps /><CustomCta /></div>
}

function AdaptSteps() {
  return <section className="adapt-steps studio-card"><h2>How to adapt it</h2><ol><li>Copy the palette and written recipe into your own notes.</li><li>Back up current Codex, terminal, or editor appearance settings before changing anything.</li><li>Apply colors manually in the environment you actually use.</li><li>Test prompt text, selections, links, warnings, errors, and diffs for contrast.</li><li>Rollback immediately if readability or behavior changes unexpectedly.</li></ol></section>
}

function TemplatesPage() {
  return <><p className="page-lede">Pick a free Codex skin template and download a reviewable starter recipe. No upload, checkout, or one-click installer is required for v0.</p><div className="filter-chips" aria-label="Template filters"><span>All</span><span>Calm</span><span>Dark</span><span>Bright</span><span>Showcase</span><span>Original Concepts</span></div><TemplateGallery /></>
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
  '/templates': { title: 'Free Codex Skin Templates — Codex Skin Studio', description: 'Browse free Codex skin templates including Ink Mountain Scholar, Flame Alchemist, Urban Taoist Neon, Rose Orbit, Neon Terminal, Midnight Focus, Soft Glass and more.', h1: 'Browse Free Codex Skin Templates', eyebrow: 'Template studio', body: <TemplatesPage /> },
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
    setMeta('Page not found — Codex Skin Studio', 'The requested Codex Skin Studio page was not found.')
    return <><Nav /><main className="section-pad page"><p className="eyebrow">404</p><h1>Page not found</h1><p className="page-lede">Try the free templates hub or one of the P0 routes in the footer.</p><StudioButton href="/templates">Browse free templates</StudioButton></main><Footer /></>
  }
  setMeta(page.title, page.description)
  return <><Nav /><StandardPage page={page} /><Footer /></>
}

export default App
