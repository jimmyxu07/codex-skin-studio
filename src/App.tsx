import type { CSSProperties, ReactElement } from 'react'
import './App.css'

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
  coverKind?: 'ink' | 'flame' | 'neon'
  features?: string[]
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
    tagline: 'Soft pink portrait/glass mood',
    description: 'A warm rose, pearl, and violet starter skin for users who want Codex to feel softer without losing terminal contrast.',
    mood: ['rose', 'glass', 'gentle focus'],
    bestFor: 'personal workspaces, creator portfolios, late-night planning sessions',
    palette: ['#fff1f7', '#f8b4d9', '#c084fc', '#2a1023'],
    recipe: 'Use a deep plum base, rose accent borders, pearl cards, and violet highlights. Keep terminal text high-contrast and avoid tiny pastel-on-pastel labels.',
    accent: '#f472b6',
  },
  {
    slug: 'neon-terminal',
    name: 'Neon Terminal',
    tagline: 'Cyber green/black terminal skin',
    description: 'A high-energy black and green Codex look inspired by classic terminals, cyber dashboards, and command-center workflows.',
    mood: ['neon', 'terminal', 'cyber'],
    bestFor: 'CLI-heavy coding, demos, security-flavored builds, high-signal dashboards',
    palette: ['#020617', '#0f172a', '#22c55e', '#a3e635'],
    recipe: 'Start from a near-black background, use green highlights sparingly, reserve lime for active states, and test diff/error colors before relying on the skin.',
    accent: '#22c55e',
  },
  {
    slug: 'midnight-focus',
    name: 'Midnight Focus',
    tagline: 'Dark blue productivity skin',
    description: 'A low-glare navy Codex skin recipe for long focus blocks, code review, and deep work without visual noise.',
    mood: ['midnight', 'minimal', 'productive'],
    bestFor: 'long coding sessions, review loops, low-distraction workspaces',
    palette: ['#07111f', '#111827', '#60a5fa', '#c7d2fe'],
    recipe: 'Combine a midnight background with blue focus rings, muted slate panels, and pale text. Prioritize readability for prompts, selections, and errors.',
    accent: '#60a5fa',
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
  },
  {
    slug: 'stage-gold',
    name: 'Stage Gold',
    tagline: 'Black/gold premium-looking skin',
    description: 'A dramatic black and gold starter recipe for launches, premium demos, and showcase sessions.',
    mood: ['premium', 'gold', 'launch'],
    bestFor: 'presentation machines, launch demos, premium brand mood boards',
    palette: ['#050505', '#1f2937', '#f59e0b', '#fde68a'],
    recipe: 'Keep most surfaces black or charcoal, use gold only for key CTAs and active states, and keep warning/error colors visually distinct from gold accents.',
    accent: '#f59e0b',
  },
  {
    slug: 'pixel-pop',
    name: 'Pixel Pop',
    tagline: 'Playful colorful skin',
    description: 'A bright, playful Codex skin recipe with pixel-art energy, useful when personality matters more than minimalism.',
    mood: ['playful', 'pixel', 'colorful'],
    bestFor: 'creative coding, personal projects, community demos',
    palette: ['#111827', '#fb7185', '#22d3ee', '#facc15'],
    recipe: 'Use a dark base with colorful blocks, reserve yellow for highlights, and test line-height/spacing so playful visuals do not reduce coding readability.',
    accent: '#fb7185',
  },
  {
    slug: 'ink-mountain-scholar',
    name: 'Ink Mountain Scholar',
    tagline: 'Ink-wash mountain focus skin',
    description: 'A calm ink-wash coding skin for focused builders who like mist, mountains, and quiet momentum.',
    mood: ['ink wash', 'mist', 'jade focus'],
    bestFor: 'long writing-and-coding sessions, quiet planning, documentation-heavy builds',
    palette: ['#101418', '#123C3D', '#A9D8D8', '#E8E1CF', '#BCE8D8', '#6F7F7B'],
    recipe: 'Layer an ink-black base with deep pine teal panels, rice-paper surfaces, misty cyan selection states, and pale jade active accents. Keep calligraphy-inspired marks abstract and avoid any named weapons, symbols, factions, or franchise references.',
    accent: '#BCE8D8',
    coverKind: 'ink',
    features: ['Mist-soft contrast for long coding sessions', 'Calligraphy-inspired accents without visual clutter', 'Jade highlights for active tabs, cursors, and search states'],
    cta: 'Download the Quiet Scholar Recipe',
  },
  {
    slug: 'flame-alchemist',
    name: 'Flame Alchemist',
    tagline: 'Forge-fire dark workspace',
    description: 'A high-energy forge skin with ember contrast, molten focus states, and a disciplined dark base.',
    mood: ['ember', 'forge', 'bronze'],
    bestFor: 'terminal-heavy workflows, launch crunch, high-energy debugging sessions',
    palette: ['#16110F', '#3B2118', '#D6401F', '#FFB13B', '#8A5A32', '#7B6C63'],
    recipe: 'Use charcoal and furnace-brown foundations, ember-red cursor and error-adjacent accents, molten-gold focus lines, and low-opacity bronze geometry. Decorative fire rings should stay abstract with no cauldron, crest, academy, or known artifact cues.',
    accent: '#FFB13B',
    coverKind: 'flame',
    features: ['Ember-guided cursor, selection, and active-line states', 'Warm contrast tuned for terminal-heavy workflows', 'Forged bronze UI accents for tabs, panels, and badges'],
    cta: 'Download the Forge Recipe',
  },
  {
    slug: 'urban-taoist-neon',
    name: 'Urban Taoist Neon',
    tagline: 'Rain-lit folk geometry skin',
    description: 'A rain-lit neon skin where folk geometry meets modern editor energy.',
    mood: ['neon', 'rain', 'folk geometry'],
    bestFor: 'night coding, creative tools, urban-fantasy mood boards, energetic personal setups',
    palette: ['#080B12', '#16D9E3', '#D946EF', '#F6C85F', '#2C3A4A', '#EAF8FF'],
    recipe: 'Build from night-asphalt surfaces, cyan-magenta focus rings, amber abstract talisman geometry, rainy blue-gray panels, and off-white glow text. Keep all signs, symbols, and paper patterns unreadable and geometric to avoid real brands or IP-specific talismans.',
    accent: '#16D9E3',
    coverKind: 'neon',
    features: ['Cyan-magenta focus states for fast scanning', 'Talisman-inspired highlights built from abstract geometry', 'Dark rooftop palette designed for night coding'],
    cta: 'Download the Neon Ritual Recipe',
  },
]

const originalEasternFantasyTemplates = templates.filter((template) =>
  ['ink-mountain-scholar', 'flame-alchemist', 'urban-taoist-neon'].includes(template.slug),
)

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
        <a className="nav-cta" href="/custom-codex-skin">Request Quote</a>
      </nav>
    </header>
  )
}

function TemplatePreview({ template }: { template: Template }) {
  return (
    <div className={`skin-preview ${template.coverKind ? `cover-${template.coverKind}` : ''}`} style={{ '--template-accent': template.accent } as CSSProperties & Record<string, string>}>
      <div className="preview-window">
        {template.coverKind && <div className="cover-art" aria-hidden="true"><span className="cover-figure"></span><span className="cover-orb"></span><span className="cover-lines"></span></div>}
        <span className="terminal-dot red"></span><span className="terminal-dot yellow"></span><span className="terminal-dot green"></span>
        <div className="preview-lines">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div className="palette-row" aria-label={`${template.name} palette`}>
        {template.palette.map((color) => <span key={color} style={{ background: color }} title={color}></span>)}
      </div>
    </div>
  )
}

function TemplateCards({ compact = false, items = templates }: { compact?: boolean; items?: Template[] }) {
  return (
    <div className="kit-grid">
      {items.map((template) => (
        <article className="kit-card" key={template.slug} style={{ '--kit-accent': template.accent } as CSSProperties & Record<string, string>}>
          <div className="kit-card-topline"><span>Free starter template</span><span>{template.tagline}</span></div>
          <TemplatePreview template={template} />
          <h3>{template.name}</h3>
          <p>{template.description}</p>
          <dl>
            <div><dt>Mood</dt><dd>{template.mood.join(' · ')}</dd></div>
            <div><dt>Best for</dt><dd>{template.bestFor}</dd></div>
          </dl>
          {!compact && <ul className="chip-list">{template.mood.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
          <div className="card-actions">
            <a className="text-link" href={`/templates/${template.slug}`}>View template →</a>
            <a className="text-link muted-link" href={`data:text/plain;charset=utf-8,${encodeURIComponent(`${template.name} Codex skin starter recipe\n\nPalette: ${template.palette.join(', ')}\n\n${template.recipe}\n\nReview and adapt manually. No automatic installer is included.`)}`} download={`${template.slug}-starter-recipe.txt`}>Download recipe</a>
          </div>
        </article>
      ))}
    </div>
  )
}

function StudioMockup() {
  const featured = originalEasternFantasyTemplates

  return (
    <div className="studio-mockup" aria-label="Codex skin studio template preview">
      <div className="mockup-shell">
        <div className="mockup-titlebar">
          <span className="terminal-dot red"></span><span className="terminal-dot yellow"></span><span className="terminal-dot green"></span>
          <span className="mockup-path">/studio/codex-skins</span>
          <span className="mockup-pill">Template Lab</span>
        </div>
        <div className="mockup-body">
          <aside className="mockup-sidebar">
            <span className="sidebar-chip active">Skins</span>
            <span className="sidebar-chip">Palette</span>
            <span className="sidebar-chip">Preview</span>
            <span className="sidebar-chip">Handoff</span>
          </aside>
          <div className="mockup-canvas">
            <div className="skin-board">
              <div>
                <p className="board-kicker">Before</p>
                <div className="before-window"><span></span><span></span><span></span></div>
              </div>
              <div>
                <p className="board-kicker">After</p>
                <TemplatePreview template={templates[0]} />
              </div>
            </div>
            <div className="template-rail">
              {featured.map((template) => (
                <div className="rail-card" key={template.slug} style={{ '--rail-accent': template.accent } as CSSProperties & Record<string, string>}>
                  <span></span>
                  <strong>{template.name}</strong>
                  <small>{template.mood.join(' / ')}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ShowcaseStrip() {
  return (
    <section className="showcase-strip section-pad" aria-label="Studio workflow highlights">
      <div className="showcase-card wide">
        <p className="eyebrow">Studio workflow</p>
        <h2>From default terminal mood to a polished Codex workspace direction.</h2>
      </div>
      <div className="showcase-card"><strong>01</strong><span>Pick a visual system</span></div>
      <div className="showcase-card"><strong>02</strong><span>Review palette and recipe</span></div>
      <div className="showcase-card"><strong>03</strong><span>Adapt manually and test contrast</span></div>
    </section>
  )
}

function HomeBody() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">Codex Skin Template Studio</p>
          <h1>Custom Codex Skins, Starting From Free Templates</h1>
          <p className="lede">Browse studio-grade skin directions, compare before/after workspace moods, and download safe starter recipes you can review before manually adapting.</p>
          <div className="cta-row">
            <a className="button primary" href="/templates">Browse Free Templates</a>
            <a className="button secondary" href="/custom-codex-skin">Request Custom Skin</a>
          </div>
          <div className="metric-row" aria-label="Studio highlights">
            <span><strong>9</strong> template moods</span>
            <span><strong>0</strong> risky installers</span>
            <span><strong>100%</strong> reviewable recipes</span>
          </div>
        </div>
        <StudioMockup />
      </section>
      <ShowcaseStrip />
      <section className="section-pad original-skins">
        <SectionHeading
          eyebrow="Original Guoman-inspired skins"
          title="Original Eastern Fantasy Covers for Codex"
          text="Three clearly labeled, IP-neutral visual systems inspired by original Eastern fantasy moods — built as reviewable Codex skin recipes, not references to any existing franchise."
        />
        <TemplateCards items={originalEasternFantasyTemplates} compact />
      </section>
      <section className="section-pad">
        <SectionHeading eyebrow="Template showcase" title="Start with a preset Codex skin mood" text="Each card is a safe, IP-neutral visual direction with palette, use case, and reviewable recipe notes — closer to a small customization studio than a plain link gallery." />
        <TemplateCards />
      </section>
      <section className="value-grid section-pad">
        <ValueCard title="Free first" text="Use a preset skin recipe without waiting for a custom design process." />
        <ValueCard title="Manual and reviewable" text="v0 avoids unverified one-click installation. Every recipe is meant to be inspected and adapted." />
        <ValueCard title="Custom coming soon" text="Premium image, brand, and team skins are request-based while demand is validated." />
      </section>
      <CustomCta />
    </>
  )
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return <article className="value-card"><h3>{title}</h3><p>{text}</p></article>
}

function recipeDownloadHref(template: Template) {
  return `data:text/plain;charset=utf-8,${encodeURIComponent(`${template.name} Codex skin starter recipe\n\nPalette: ${template.palette.join(', ')}\n\n${template.recipe}\n\n${template.features ? `Feature notes:\n- ${template.features.join('\n- ')}\n\n` : ''}Review and adapt manually. No automatic installer is included.`)}`
}

function DetailPreview({ template }: { template: Template }) {
  return (
    <div className="detail-preview-shell">
      <div className="detail-preview-titlebar"><span className="terminal-dot red"></span><span className="terminal-dot yellow"></span><span className="terminal-dot green"></span><span>/skins/{template.slug}</span></div>
      <div className="detail-preview-editor">
        <span className="editor-line long"></span><span className="editor-line mid"></span><span className="editor-line short"></span>
        <span className="editor-line active"></span><span className="editor-line mid faint"></span>
      </div>
    </div>
  )
}

function InkLayerRecipe() {
  const layers = [
    ['Ink base', '#101418', 'low-glare foundation'],
    ['Pine panels', '#123C3D', 'deep sidebars and cards'],
    ['Rice-paper surfaces', '#E8E1CF', 'soft reading planes'],
    ['Jade focus states', '#BCE8D8', 'active tabs and cursor cues'],
  ]

  return (
    <section className="recipe-viz recipe-viz--ink-layers" aria-label="Ink mountain layered recipe">
      {layers.map(([name, color, use], index) => (
        <div className="ink-layer-row" key={name} style={{ '--layer-color': color, '--layer-index': String(index) } as CSSProperties & Record<string, string>}>
          <svg viewBox="0 0 360 42" role="img" aria-label={`${name} visual layer`}>
            <path d={index % 2 === 0 ? 'M0 31 C38 14 72 27 111 16 C157 2 194 32 236 18 C286 2 318 20 360 8 L360 42 L0 42 Z' : 'M0 25 C44 9 83 12 124 26 C166 39 198 10 239 16 C281 22 316 34 360 14 L360 42 L0 42 Z'} />
          </svg>
          <div><strong>{name}</strong><span>{color} · {use}</span></div>
        </div>
      ))}
    </section>
  )
}

function ForgeRecipeGauge() {
  const parts = [
    ['Charcoal base', '52%', '#16110F', 'Base keeps glare down'],
    ['Ember cursor', '18%', '#D6401F', 'Ember guides attention'],
    ['Molten focus', '20%', '#FFB13B', 'Gold marks focus'],
    ['Bronze geometry', '10%', '#8A5A32', 'Bronze adds structure'],
  ]

  return (
    <section className="recipe-viz recipe-viz--forge-gauge" aria-label="Forge alloy recipe gauge">
      <div className="forge-gauge-dial" aria-hidden="true"><span></span></div>
      <div className="forge-gauge-bars">
        {parts.map(([name, percent, color, note]) => (
          <div className="forge-gauge-row" key={name} style={{ '--gauge-color': color, '--gauge-width': percent } as CSSProperties & Record<string, string>}>
            <div><strong>{name}</strong><span>{note}</span></div><b>{percent}</b><i></i>
          </div>
        ))}
      </div>
    </section>
  )
}

function NeonCircuitRecipe() {
  const nodes = [
    ['Asphalt base', '#2C3A4A', 'night foundation'],
    ['Rain panel', '#EAF8FF', 'wet glass surfaces'],
    ['Cyan focus', '#16D9E3', 'scan-ready highlights'],
    ['Magenta scan', '#D946EF', 'secondary motion'],
    ['Amber geometry', '#F6C85F', 'small structure cues'],
  ]

  return (
    <section className="recipe-viz recipe-viz--neon-circuit" aria-label="Neon circuit recipe map">
      <svg viewBox="0 0 520 190" aria-hidden="true">
        <polyline points="44,132 145,72 246,118 355,48 474,112" />
        {nodes.map(([, color], index) => {
          const points = [[44, 132], [145, 72], [246, 118], [355, 48], [474, 112]][index]
          return <circle key={color} cx={points[0]} cy={points[1]} r="10" style={{ '--node-color': color } as CSSProperties & Record<string, string>} />
        })}
      </svg>
      <div className="neon-node-list">
        {nodes.map(([name, color, note]) => <div key={name} style={{ '--node-color': color } as CSSProperties & Record<string, string>}><strong>{name}</strong><span>{note}</span></div>)}
      </div>
    </section>
  )
}

function AbstractTalismanPanel() {
  return (
    <div className="neon-talisman-panel" aria-hidden="true">
      <span></span><i></i><i></i><i></i><b></b><b></b><b></b><b></b><b></b><b></b>
    </div>
  )
}

function VariantTemplateDetail({ template }: { template: Template }) {
  const isInk = template.coverKind === 'ink'
  const isFlame = template.coverKind === 'flame'
  const isNeon = template.coverKind === 'neon'
  const secondaryCta = isInk ? 'Request a calmer custom skin' : isFlame ? 'Commission a hotter workspace skin' : 'Request a city-night custom skin'
  const helperText = isInk
    ? 'Best when you want Codex to feel like a quiet writing desk, not a dashboard.'
    : isFlame
      ? 'Use it when debugging needs heat, but the interface still needs discipline.'
      : 'For night coding sessions that need motion, contrast, and a little street-level electricity.'

  return (
    <div className={`template-detail template-detail--${template.coverKind}`}>
      <section className={`variant-hero detail-hero--${isInk ? 'ink-scroll' : isFlame ? 'forge-core' : 'rain-city'}`}>
        <div className="variant-copy">
          {isInk && <div className="ink-seal-pill"><span></span>Quiet focus recipe</div>}
          {isFlame && <div className="forge-heat-label">Forge ratio / ember disciplined</div>}
          {isNeon && <div className="neon-route-label">Rain city circuit / abstract geometry</div>}
          <p className="page-lede">{template.description}</p>
          <h2>{isInk ? 'Paper mountains for long-form focus.' : isFlame ? 'A furnace console for high-heat debugging.' : 'Rain-lit neon geometry for night sessions.'}</h2>
          <p>{helperText}</p>
          <div className="cta-row">
            <a className="button primary" href={recipeDownloadHref(template)} download={`${template.slug}-starter-recipe.txt`}>{template.cta}</a>
            <a className="button secondary" href="/custom-codex-skin">{secondaryCta}</a>
          </div>
        </div>
        <div className="variant-art" aria-label={`${template.name} visual preview`}>
          {isInk && <><div className="ink-paper-texture"></div><div className="ink-mist-band one"></div><div className="ink-mist-band two"></div><div className="ink-brush-stroke"></div><DetailPreview template={template} /><div className="ink-mountain-stack"><span></span><span></span><span></span></div></>}
          {isFlame && <><div className="forge-metal-grid"></div><div className="forge-core-ring"></div><div className="forge-ember-field">{Array.from({ length: 12 }, (_, index) => <span key={index}></span>)}</div><div className="forge-cut-card"><DetailPreview template={template} /><div className="forge-heat-strip"><span></span><span></span><span></span></div></div></>}
          {isNeon && <><div className="neon-rain-field"></div><div className="neon-sign-frame"></div><AbstractTalismanPanel /><div className="neon-reflection-strip"></div><div className="neon-tilted-preview"><DetailPreview template={template} /></div></>}
        </div>
      </section>
      <section className="variant-recipe-grid">
        <article className="recipe-card">
          <h2>{isInk ? 'Mountain layer recipe' : isFlame ? 'Forge alloy recipe' : 'Rain-city circuit recipe'}</h2>
          <p>{template.recipe}</p>
          {isInk && <InkLayerRecipe />}
          {isFlame && <ForgeRecipeGauge />}
          {isNeon && <NeonCircuitRecipe />}
        </article>
        <article className="recipe-card variant-notes">
          <h3>Palette tokens</h3>
          <div className="palette-list">{template.palette.map((color) => <code key={color}>{color}</code>)}</div>
          <h3>Recommended use</h3>
          <p>{template.bestFor}</p>
          {template.features && <><h3>Feature notes</h3><ul className="bullet-list compact">{template.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></>}
        </article>
      </section>
      <section className="section-block">
        <h2>How to adapt it</h2>
        <ol className="checklist">
          <li>Copy the palette and written recipe into your own notes.</li>
          <li>Back up current Codex, terminal, or editor appearance settings before changing anything.</li>
          <li>Apply colors manually in the environment you actually use.</li>
          <li>Test prompt text, selections, links, warnings, errors, and diffs for contrast.</li>
          <li>Rollback immediately if readability or behavior changes unexpectedly.</li>
        </ol>
      </section>
      <CustomCta />
    </div>
  )
}

function TemplateDetail({ template }: { template: Template }) {
  if (template.coverKind) return <VariantTemplateDetail template={template} />

  return (
    <>
      <p className="page-lede">{template.description}</p>
      <div className="detail-layout">
        <TemplatePreview template={template} />
        <article className="recipe-card">
          <h2>Starter recipe</h2>
          <p>{template.recipe}</p>
          {template.features && <><h3>Feature notes</h3><ul className="bullet-list compact">{template.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></>}
          <h3>Palette</h3>
          <div className="palette-list">{template.palette.map((color) => <code key={color}>{color}</code>)}</div>
          <h3>Recommended use</h3>
          <p>{template.bestFor}</p>
          <div className="cta-row">
            <a className="button primary" href={recipeDownloadHref(template)} download={`${template.slug}-starter-recipe.txt`}>{template.cta ?? 'Download starter recipe'}</a>
            <a className="button secondary" href="/custom-codex-skin">Request custom version</a>
          </div>
        </article>
      </div>
      <section className="section-block">
        <h2>How to adapt it</h2>
        <ol className="checklist">
          <li>Copy the palette and written recipe into your own notes.</li>
          <li>Back up current Codex, terminal, or editor appearance settings before changing anything.</li>
          <li>Apply colors manually in the environment you actually use.</li>
          <li>Test prompt text, selections, links, warnings, errors, and diffs for contrast.</li>
          <li>Rollback immediately if readability or behavior changes unexpectedly.</li>
        </ol>
      </section>
      <CustomCta />
    </>
  )
}

function CustomCta() {
  return (
    <section className="submit-band section-pad">
      <p className="eyebrow">Premium custom skins</p>
      <h2>Want a Codex skin based on your image, brand, or team mood?</h2>
      <p>Paid high-custom skins are coming soon. For v0, request a quote/waitlist spot and describe your desired mood, palette, assets, usage, and deadline.</p>
      <a className="button primary" href={`mailto:${contactEmail}?subject=Custom%20Codex%20Skin%20Request&body=Name%2Femail%3A%0APreferred%20style%3A%0AImage%20or%20brand%20assets%3A%0ADesired%20mood%3A%0APersonal%20or%20team%20use%3A%0ADeadline%3A`}>Request Custom Skin</a>
    </section>
  )
}

function HowItWorks() {
  return (
    <>
      <p className="page-lede">Codex Skin Studio v0 is a lightweight template studio. It helps you choose a visual direction and review a starter recipe before manually adapting it.</p>
      <ol className="checklist">
        <li><strong>Choose a free template.</strong> Start from Rose Orbit, Neon Terminal, Midnight Focus, Soft Glass, or another preset mood.</li>
        <li><strong>Preview the mood.</strong> Use the visual card and palette to decide whether the skin fits your workspace.</li>
        <li><strong>Download the starter recipe.</strong> The recipe is text-only and reviewable; it is not an executable installer.</li>
        <li><strong>Adapt manually.</strong> Apply colors and spacing only in tools you understand, then test contrast and rollback.</li>
        <li><strong>Request custom work.</strong> If you need image/brand/team customization, join the request list while premium service is prepared.</li>
      </ol>
    </>
  )
}

function Safety() {
  return (
    <>
      <p className="page-lede">v0 is intentionally conservative: no uploads, no checkout, no accounts, and no unverified one-click installer.</p>
      <div className="theme-list">
        <ValueCard title="Starter recipes" text="Text and palette guidance. Review them before applying anything to your local setup." />
        <ValueCard title="Manual adaptation" text="Back up configs first, change one layer at a time, and verify prompt/diff/error readability." />
        <ValueCard title="No official claim" text="This independent site does not claim official affiliation, endorsement, or guaranteed compatibility." />
      </div>
      <ul className="bullet-list"><li>Do not paste secrets, tokens, or private configs into custom requests.</li><li>Do not run scripts or installers from unknown sources.</li><li>Do not assume image-based or brand-based custom skins are available until a quote is confirmed.</li><li>Review licenses for any image, logo, or asset you provide.</li></ul>
    </>
  )
}

function CustomRequestPage() {
  return (
    <>
      <p className="page-lede">Premium custom Codex skins are request-based in v0. Use this page to join the waitlist or ask for a quote; checkout and order management are not live yet.</p>
      <div className="pricing-grid">
        <ValueCard title="Free Template — $0" text="Use the public preset recipes and adapt them manually in your own environment." />
        <ValueCard title="Personal Custom Skin — coming soon" text="Request quote for a skin direction based on your image, palette, mood, or personal workspace." />
        <ValueCard title="Team / Brand Skin — request quote" text="For teams that need a branded visual direction, usage notes, and reviewable handoff materials." />
      </div>
      <section className="section-block">
        <h2>What to include in a request</h2>
        <ul className="bullet-list"><li>Name and email</li><li>Preferred style or reference mood</li><li>Whether image/brand assets are available</li><li>Personal or team use</li><li>Deadline and budget range if known</li></ul>
        <a className="button primary" href={`mailto:${contactEmail}?subject=Custom%20Codex%20Skin%20Request&body=Name%2Femail%3A%0APreferred%20style%3A%0AImage%20or%20brand%20assets%3A%0ADesired%20mood%3A%0APersonal%20or%20team%20use%3A%0ADeadline%3A`}>Email request / join waitlist</a>
      </section>
    </>
  )
}

function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  if (kind === 'privacy') {
    return <div className="legal-copy"><p>Codex Skin Studio v0 is a static site. It does not provide accounts, uploads, payments, hosted file processing, or a live custom order backend.</p><p>If you use the email request link, your email client and email provider handle the message. Do not send secrets, tokens, private configs, unreleased code, or assets you do not have rights to use.</p><p>Future analytics, forms, uploads, payments, or custom order workflows should be documented here before launch.</p></div>
  }
  return <div className="legal-copy"><p>{disclaimer}</p><p>Templates are informational starter recipes, not guaranteed Codex engine packages. Review and adapt manually. Compatibility, appearance, and behavior vary by local environment.</p><p>Codex Skin Studio does not provide an automatic installer, official support channel, upload pipeline, checkout, or guaranteed custom delivery in v0.</p></div>
}

const pageMap: Record<string, Page> = {
  '/templates': {
    title: 'Free Codex Skin Templates — Codex Skin Studio',
    description: 'Browse free Codex skin templates including Rose Orbit, Neon Terminal, Midnight Focus, Soft Glass, Ink Mountain Scholar, Flame Alchemist, and Urban Taoist Neon starter recipes.',
    h1: 'Free Codex Skin Templates',
    eyebrow: 'Template studio',
    body: <><p className="page-lede">Pick a free Codex skin template and download a reviewable starter recipe. No upload, checkout, or one-click installer is required for v0.</p><TemplateCards /></>,
  },
  '/custom-codex-skin': {
    title: 'Request a Custom Codex Skin — Codex Skin Studio',
    description: 'Join the custom Codex skin request list for premium personal, image-based, brand, or team skin customization.',
    h1: 'Request a Custom Codex Skin',
    eyebrow: 'Custom skin waitlist',
    body: <CustomRequestPage />,
  },
  '/how-it-works': {
    title: 'How Codex Skin Customization Works — Templates, Recipes, Requests',
    description: 'Learn how Codex Skin Studio works: choose a free template, preview the mood, download a starter recipe, adapt manually, or request custom work.',
    h1: 'How Codex Skin Customization Works',
    eyebrow: 'Workflow',
    body: <HowItWorks />,
  },
  '/safety': {
    title: 'Codex Skin Safety — Reviewable Recipes, Manual Adaptation, Privacy',
    description: 'Safety and privacy boundaries for Codex skin templates, manual adaptation, custom skin requests, and independent compatibility disclaimers.',
    h1: 'Codex Skin Safety',
    eyebrow: 'Safety boundary',
    body: <Safety />,
  },
  '/privacy': {
    title: 'Privacy Policy — Codex Skin Studio',
    description: 'Privacy policy for Codex Skin Studio, an independent static Codex skin customization resource.',
    h1: 'Privacy Policy',
    eyebrow: 'Static site privacy',
    body: <Legal kind="privacy" />,
  },
  '/terms': {
    title: 'Terms and Disclaimer — Codex Skin Studio',
    description: 'Terms, independent resource disclaimer, compatibility disclaimer, and safety notes for Codex Skin Studio.',
    h1: 'Terms and Disclaimer',
    eyebrow: 'Terms',
    body: <Legal kind="terms" />,
  },
}

for (const template of templates) {
  pageMap[`/templates/${template.slug}`] = {
    title: `${template.name} Codex Skin Template — Free Starter Recipe`,
    description: `${template.name} is a free Codex skin starter recipe with palette, preview mood, recommended use, and manual adaptation notes.`,
    h1: `${template.name} Codex Skin Template`,
    eyebrow: 'Free template detail',
    body: <TemplateDetail template={template} />,
  }
}

function StandardPage({ page }: { page: Page }) {
  return <main className="section-pad page"><p className="eyebrow">{page.eyebrow}</p><h1>{page.h1}</h1>{page.body}</main>
}

function Footer() {
  return (
    <footer className="footer section-pad">
      <p>{disclaimer}</p>
      <div className="footer-links">{p0Routes.map((route) => <a key={route} href={route}>{route === '/' ? 'Home' : route}</a>)}</div>
    </footer>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const page = pageMap[path]

  if (path === '/') {
    setMeta('Codex Skin Studio — Custom Codex Skins From Free Templates', 'Customize Codex skins with free templates, reviewable starter recipes, and a coming-soon premium custom skin request path.')
    return <><Nav /><main><HomeBody /></main><Footer /></>
  }

  if (!page) {
    setMeta('Page not found — Codex Skin Studio', 'The requested Codex Skin Studio page was not found.')
    return <><Nav /><main className="section-pad page"><p className="eyebrow">404</p><h1>Page not found</h1><p className="page-lede">Try the free templates hub or one of the P0 routes in the footer.</p><a className="button primary" href="/templates">Browse free templates</a></main><Footer /></>
  }

  setMeta(page.title, page.description)
  return <><Nav /><StandardPage page={page} /><Footer /></>
}

export default App
