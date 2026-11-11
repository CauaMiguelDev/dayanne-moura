---
name: Dayanne Moura · Estética Facial e Corporal
description: Seda & Pele, clear and alive. Skin up front, silk only as lining, rounded panels that overlap, and motion that explains without ever holding the scroll.
colors:
  espresso: "#1f120e"
  cacau: "#3b231b"
  mocha: "#6a4233"
  bronze: "#a46b55"
  rose: "#d3a08f"
  nude: "#e8ccbf"
  blush: "#f4e5de"
  pearl: "#fbf4f0"
  gold: "#c59d78"
typography:
  display:
    fontFamily: "Instrument Serif, Didot, Georgia, serif"
    fontSize: "clamp(3rem, 1.6rem + 4.6vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Instrument Serif, Didot, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.7rem + 3.2vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Instrument Serif, Didot, Georgia, serif"
    fontSize: "clamp(1.6rem, 1.35rem + 1vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  script:
    fontFamily: "Corinthia, cursive"
    fontWeight: 700
    lineHeight: 0.8
  body:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "clamp(1.02rem, .98rem + .22vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.02rem + .35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  pill: "999px"
  panel: "clamp(28px, 4vw, 48px)"
  hero: "28px"
  card: "24px"
  step: "20px"
  soft: "18px"
  inset: "16px"
spacing:
  gutter: "clamp(1.1rem, 4vw, 3.5rem)"
  section: "clamp(5.5rem, 10vw, 8.5rem)"
  max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.cacau}"
    textColor: "{colors.pearl}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.55rem"
  button-primary-hover:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.pearl}"
  button-light:
    backgroundColor: "{colors.pearl}"
    textColor: "{colors.cacau}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.55rem"
  button-light-hover:
    backgroundColor: "{colors.nude}"
    textColor: "{colors.cacau}"
  button-ghost:
    textColor: "{colors.cacau}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.55rem"
  button-ghost-hover:
    backgroundColor: "{colors.cacau}"
    textColor: "{colors.pearl}"
  button-small:
    rounded: "{rounded.pill}"
    padding: ".72rem 1.15rem"
  hero-chip:
    backgroundColor: "{colors.pearl}"
    textColor: "{colors.cacau}"
    rounded: "{rounded.soft}"
    padding: "1rem 1.25rem"
  why-card:
    textColor: "{colors.pearl}"
    rounded: "{rounded.card}"
    padding: "1.8rem 1.6rem 1.9rem"
  why-medallion:
    textColor: "{colors.gold}"
    rounded: "{rounded.pill}"
    size: "64px"
  why-medallion-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.cacau}"
  treatment-row:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.cacau}"
    rounded: "{rounded.card}"
    padding: "1.1rem 1.8rem 1.1rem 1.1rem"
  chip:
    backgroundColor: "{colors.pearl}"
    textColor: "{colors.cacau}"
    rounded: "{rounded.pill}"
    padding: ".3rem .7rem"
  ticket:
    backgroundColor: "{colors.cacau}"
    textColor: "{colors.nude}"
    rounded: "{rounded.card}"
    padding: "2.2rem 1.9rem 1.9rem"
  price-pill:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.pearl}"
    rounded: "{rounded.pill}"
    padding: ".5rem 1.2rem .55rem"
  timeline-dot:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.gold}"
    rounded: "{rounded.pill}"
    size: "64px"
  timeline-dot-on:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.espresso}"
  timeline-card:
    textColor: "{colors.pearl}"
    rounded: "{rounded.step}"
    padding: "1.3rem 1.5rem"
  phase-pill:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: ".5rem 1.2rem"
  quote-box:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.cacau}"
    rounded: "{rounded.soft}"
    padding: "1.4rem 1.6rem"
  nav-bar-solid:
    backgroundColor: "{colors.pearl}"
    textColor: "{colors.cacau}"
    rounded: "{rounded.pill}"
    padding: ".5rem .55rem .5rem 1.1rem"
---

# Design System: Dayanne Moura · Estética Facial e Corporal

## Overview

**Creative North Star: "Skin Over Silk"**

Skin is the subject and silk is only the lining. Clarity comes first: within seconds a visitor should know what this is, where it is, what it costs and how to book. The hero is a light split on a blush ground. The copy is on the left: a hand signature, a plain-language headline with one brushed word, a short lede, two buttons and three facts. On the right, the photograph sits in a rounded frame with a pearl price chip. Below the hero, a calm marquee names the services, and then the page is a stack of rounded panels, each rising over the last, in a fixed rhythm of solid grounds. Silk appears only behind packages, contact and the menu drawer.

The type voice is a soft editorial. Instrument Serif runs large with italic words carrying the colour. Corinthia signs single words, and Jost reads cleanly and holds the small tracked labels. Two hand-drawn gold marks decorate the type: the dry brush under one key word, and a thin drawn stroke under the italic word of each section title. Prices are always visible as plain numbers. Treatments read as rows, packages are cacao tickets with bronze price pills, and the ten-step protocol is a timeline whose gold thread fills as you read.

The page is alive, but every effect has a job, and nothing pins or hijacks the scroll. Titles rise word by word, icons draw themselves, images open like curtains, and a few values follow the scroll lightly. Scrolling is native and there are no libraries.

**Key Characteristics:**
- Light split hero: copy left, photo frame right, price visible in the first viewport.
- Rounded panels that overlap the previous one, in a fixed light/dark rhythm.
- CSS silk (rose or dark) only on packages, contact and the drawer.
- Instrument Serif with coloured italics, Corinthia signatures, Jost body and labels.
- Brown, rose-bronze and nude only.
- Motion that explains: word-rise titles, drawn underlines and icons, curtain images, a scroll-filled timeline. No pinning, no libraries.
- Every hover effect sits behind `(hover: hover) and (pointer: fine)`.

## Colors

One warm family from espresso to pearl, with bronze, gold and rose as accents. The ground underneath decides which accent appears.

### Primary
- **Cacau** (cacau): the house brown. Body text on light grounds, the primary and ghost-hover button fill, the why and voices panels, tickets, the drawer, the menu button, the FAB, italic words in the marquee and the theme colour.
- **Bronze** (bronze): the accent on light grounds. Italic heading words on blush and pearl, the hero signature, the primary button's hover fill, line icons and method numerals on light panels, alternate marquee words, the current nav link, price tags and notes, the focus ring, selection and caret.

### Secondary
- **Gold** (gold): the drawn-light accent. The brush stroke and the title underline on every ground, italic heading words on cacau and espresso, timeline dots, phase pills and the timeline fill, why medallions, line icons and check marks on dark panels, bonus chips, marquee sparks, the row-title hover underline and the loader tagline. Gold threads (progress bar, timeline fill, why-card top line) run from bronze to gold.
- **Rose** (rose): muted text on dark panels, italic words on dark silk (contact), ticket terms, the About sprig and the loader name.

### Neutral
- **Espresso** (espresso): the "how it works" panel, text on rose silk, text on lit timeline dots, the loader edge.
- **Mocha** (mocha): muted text on light grounds (lede, descriptions, facts, captions), the FAB hover colour.
- **Nude** (nude): body text on dark panels, the light button's hover fill, tints for cards on dark grounds (5 to 10%).
- **Blush** (blush): the page base, the hero, the marquee band, the results and FAQ panels, treatment rows and the quote box.
- **Pearl** (pearl): the treatments and about panels, chips on blush, the hero price chip, the solid nav (92%), the light button and the before/after knob.

### Named Rules
**The Ground Picks the Italic Rule.** Italic heading words take bronze on blush and pearl, gold on cacau and espresso, rose on dark silk and pearl on rose silk. Never use the same italic colour on every ground.

**The Panel Rhythm Rule.** Below the blush hero and marquee the panels run in this order: cacau why, pearl treatments, rose-silk packages, espresso how-it-works, blush results, pearl about, cacau voices, blush FAQ, dark-silk contact. Two adjacent panels never share a ground.

**The Warm Shadow Rule.** Every shadow and hairline is a tint of espresso, mocha, nude or gold. Pure black appears only in the before/after divider glow and the pill's under-shadow.

## Typography

**Display Font:** Instrument Serif 400 roman and italic (with Didot, Georgia, serif)
**Script Font:** Corinthia 700 (with cursive)
**Body Font:** Jost 300 to 600 (with system-ui, sans-serif)

**Character:** A light fashion serif whose italics do the emphasis, paired with a geometric sans that reads calmly at body size and tracks well in caps. A handwritten signature warms the pair.

### Hierarchy
- **Display** (400, clamp(3rem → 5.6rem), 0.98, -0.02em): the hero h1 only, in cacau on blush. It states the service and the place in plain words.
- **Headline** (400, clamp(2.5rem → 4.8rem), 1.0, -0.01em): section h2s, with balanced wrap and one italic word that gets the gold stroke. The contact h2 goes up to 6rem at 12ch.
- **Title** (400, clamp(1.6rem → 2.2rem), 1.08): h3s and row titles. Fixed sizes: ticket 2.5rem, why card 1.7rem, timeline card 1.55rem, method 1.45rem, before/after caption 1.6rem, voice quote 1.45rem, FAQ summary up to 1.8rem. The marquee runs up to 2.6rem. All prices and numerals use the serif with lining figures: row price up to 2.9rem, hero chip 2.3rem, pill 2.5rem, timeline dot 1.6rem.
- **Script** (700, line-height 0.8): the hero signature (up to 3.8rem, bronze), "Prazer," in About, the loader tagline.
- **Body** (400, clamp(1.02rem → 1.125rem), 1.65): reading text, with `text-wrap: pretty`, at 38 to 60ch. The lede goes up to 1.3rem at 46ch.
- **Label** (500, 0.7 to 0.78rem, 0.14 to 0.26em, uppercase): functional only. Used for the brand lockup, timeline phase pills, row price tags, before/after tags, info field names and the photo placeholder line. The loader name is tracked to 0.42em.

### Named Rules
**The Signature Rule.** Corinthia sets one word or a short phrase as a hand signature. It never sets a sentence of copy.

**The Plain Headline Rule.** The hero h1 says what the service is and where it is offered. Poetry belongs in the lede and the quote, never in place of the service name.

**The One Name Rule.** Each service has one name everywhere it appears ("Limpeza Facial Express", "Hidratação Labial"). Rows, tickets, chips, the marquee and WhatsApp messages all use it.

## Layout

A centred column of `min(1280px, 100% - 2 × gutter)` with a fluid gutter of 1.1 to 3.5rem. Each section after the hero is a **panel**: top corners rounded with `--panel-r` (28 to 48px), pulled up by the same amount with a negative margin so it overlaps the previous one, isolated, and padded 5.5 to 8.5rem vertically. The marquee band adds `--panel-r` to its bottom padding so the first panel can rise over it. `scroll-padding-top: 90px` keeps anchored headings clear of the nav.

The hero grid is 1.05fr / 0.95fr. The copy column caps at 620px, and the facts row runs as three automatic columns under a mocha hairline. Section heads use two columns (1.1fr headline, 0.9fr paragraph, aligned to the bottom). Splits: why 0.85/1.15 with a sticky head (top 7rem), about 0.85/1.15, FAQ 0.8/1.2, contact 1.1/0.9. Why cards sit in two columns with a 1rem gap. Treatment rows are a three-column grid: a 220px photo, a flexible body, and an auto-width price side aligned right. Packages, results and voices use three equal columns.

The timeline is a three-column grid per step (card, 64px dot, card) around a centre line. Cards alternate left and right at a maximum of 460px, and consecutive steps overlap vertically by 1.6rem so the two sides interlock. Phase pills sit centred on the line.

Breakpoints:
- **1100px:** the nav collapses to the menu button. Packages go to one column (max 560px). Results and voices go to two columns, and their third card is hidden. Facts go to two columns.
- **860px:** every split goes to one column and the why head stops being sticky. The hero photo moves above the copy at 4:3 with its chip pinned bottom right. Rows stack, with a 16:9 photo and the price side as a horizontal bar. The timeline line moves to the left edge (24px), dots shrink to 48px, cards stack in one column and phase pills align left.
- **560px:** why cards and facts go to one column. Hero buttons go full width. The FAB shows only its icon.

## Elevation & Depth

Depth comes from panels overlapping, not from shadows. Objects on a panel take one soft, warm shadow: the hero frame and chip, the portrait and the before/after frame and knob. Cards on dark grounds are flat tints with hairlines. On fine pointers, cards answer hover by lifting 4 to 8px, and only the treatment row gains the Lift shadow when it does. There is no grain overlay and no blur filter anywhere.

### Shadow Vocabulary
- **Lift** (`0 24px 50px -24px rgba(31,18,14,.45), 0 6px 14px -6px rgba(31,18,14,.16)`): hero frame and chip, portrait, before/after frame and knob, treatment rows on hover.
- **Ticket drop** (`0 30px 56px -30px rgba(31,18,14,.7)`): package tickets on rose silk.
- **Nav solid** (`0 10px 28px -16px rgba(31,18,14,.35)`): the nav pill once scrolled.
- **FAB ring** (`0 0 0 1px rgba(232,204,191,.4), 0 16px 32px -14px rgba(31,18,14,.6)`): the floating WhatsApp button.
- **Pill gloss** (`inset 0 1px 0 rgba(255,255,255,.35), 0 10px 20px -10px rgba(0,0,0,.6)`): the bronze price pill only.
- **Dot halo** (`0 0 0 8px rgba(197,157,120,.14)`): a timeline dot once the fill reaches it.

Fixed layers: FAB (40), drawer (45), nav (50), progress thread (60), loader (300), skip link (400).

### Named Rules
**The Rising Sheet Rule.** Depth between sections comes from rounded panels overlapping, never from drop shadows on the panels themselves.

**The Silk Is Lining Rule.** Silk is a material behind content, never a fill for cards or text boxes. It appears only as `.silk--rose` (packages) or `.silk--dark` (contact, drawer). It is built from a linear base, four large `closest-side` radial lights, one of which drifts on a 30s transform loop, and a diagonal sheen that shifts sideways with scroll through `--p`. No blur filters.

## Shapes

Interactive and small surfaces are full pills (999px): buttons, the nav bar, chips, phase pills, before/after tags, the bonus chip, price pills, the FAB and the skip link. Containers (why cards, treatment rows, tickets, the portrait, before/after frames, voices cards) use 24px corners. The hero frame is 28px, timeline cards are 20px, soft inner boxes (the hero chip, the quote box, the gift note) are 18px, and row photos are 16px. Panels round only their top corners. Tickets have two 14px semicircular notches at 63% height, joined by a dashed tear line. Hairlines are 1px: mocha at 16 to 20% on light grounds, nude at 10 to 16% or gold at 18 to 50% on dark.

Circles carry meaning: the why medallions (64px, gold ring), the numbered timeline dots (64px, 48px on mobile), the FAQ toggle, the before/after knob and the menu button.

Icons share one hand: a 24-unit grid, round caps and joins, strokes of 1.2 to 1.6, no fills. The quote mark and the marquee spark are the only filled symbols.

## Components

### Buttons
Calm and tactile. A fill colour rises from the bottom edge on hover.
- **Shape:** full pill, 1rem × 1.55rem padding (small: 0.72 × 1.15rem at 0.9rem), Jost 500 at 0.98rem, tracked 0.01em.
- **Primary:** cacau with pearl text and a WhatsApp icon in front. This is the hero CTA and the Agendar button on treatment rows.
- **Hover / Focus:** on fine pointers only, the `::before` fill slides from `translateY(101%)` to 0 over 0.4s, and the trailing arrow moves 3px. Primary fills bronze, light fills nude, and ghost fills cacau with its text turning pearl. Pressing scales to 0.97. Focus is a 2px bronze ring at a 4px offset.
- **Light:** pearl with cacau text. This is the CTA on dark grounds: tickets, voices, contact and the drawer.
- **Ghost:** transparent with cacau text and an inset ring of cacau at 35%. Used as the secondary hero CTA.

### Hero (signature)
A blush ground with two soft radial glows drifting slowly behind (26s and 34s). The copy is stacked in this order: bronze script signature, then the h1 with the gold brush under the italic "Brasília", then the mocha lede, then the CTAs, then the facts row (three line icons, each with a bold cacau line and a mocha line). The photograph sits in a 4:4.6 frame with 28px corners and the Lift shadow. A pearl chip overhangs its lower left edge with a service name, a serif price and a bonus line.

Entrance, once `html.is-ready` is set after the loader:
- Copy blocks settle with a 90ms stagger (`--h`), and the h1 words rise from their masks.
- The frame opens bottom-up with a clip-path curtain (1.3s) while the image settles from scale 1.2 to 1 (2s).
- The fact icons draw themselves and the brush draws.
- The chip arrives last (1s delay), then bobs 8px on a 5s loop.

On scroll, the image drifts up to 9% inside its frame through `--p`.

### Marquee
A blush band under the hero that repeats the service names in the serif, alternating italic cacau and upright bronze words with small gold sparks between them. It loops at a constant speed (48s, linear) and pauses under the pointer. It is decorative and hidden from assistive tech.

### Headings in motion
Every h1 and h2 is split into words at runtime. Each word sits in a clip mask (`.w`) and its inner span (`.wi`) rises from 135% over 1s, staggered by `--w` × 55ms. The full text is kept in `aria-label`. After the words land, the italic word of each h2 gets a hand-drawn gold underline (`.u-stroke`, a 2.6 stroke) that draws in over 0.9s. Sibling paragraphs and links in the same block fade up 0.3 to 0.4s later.

### Why Cards
Four cards on cacau, in two columns beside a sticky head. Each is a 6% nude tint with 24px corners holding a 64px round medallion (gold ring, 30px gold line icon that draws itself), a pearl serif title and rose copy. On hover the card lifts 6px and brightens to 10%, a 2px bronze-to-gold line grows across its top edge, and the medallion fills gold with a cacau icon.

### Treatment Rows (signature)
Each treatment is a blush row with 24px corners on the pearl panel:
- **Photo:** 220px wide, 16px corners. It opens with a horizontal clip from the left (1s).
- **Body:** a serif title with a bronze line icon that draws itself, mocha copy at 60ch, pearl chips that cascade in by `--c` × 40ms, and an optional bronze note with an icon.
- **Price side:** right-aligned, with a large serif price (a small Jost "R$" set high) or a bronze uppercase tag, above a small primary Agendar button. It slides in 18px from the right.
- **Hover:** the row lifts 4px, warms slightly and takes the Lift shadow. The photo zooms to 1.07 and a 2px gold underline grows under the title.

Below 860px the row stacks and the price side becomes a horizontal bar.

### Chips
- **Step chips:** pearl pills at 0.78rem in cacau on blush rows.
- **Bonus chip:** gold text on a 16% gold tint inside tickets, with a gift icon in front. The ghost variant uses a 30% gold inset ring instead of a fill.

### Ticket (packages)
Cacau, nude text, 24px corners, mask notches, a dashed cut line, the ticket drop shadow. The headline is serif with a gold italic number, followed by a gold check list and a bonus chip. The price row holds the bronze pill and rose terms that state the installment ("ou 5x de R$ 112 sem juros"). A light CTA closes the ticket. On reveal the pill stamps in (scale 1.25 → 1, rotation −6° → 0). On hover the ticket lifts 8px and a pale sheen sweeps across it once.

### Price Pill
The bronze seal: a 120° bronze → #c98d74 → mocha gradient pill with serif numerals at 2.5rem (2.1rem on small screens), a Jost "R$" at 0.85rem and a gloss highlight.

### Timeline (signature)
The ten steps of the full cleaning, on espresso:
- **Line:** a 2px centre line at 18% gold. A bronze-to-gold fill grows from the top as the page scrolls. Its tip sits at 62% of the viewport height.
- **Phase pills:** three espresso pills with a gold ring and gold uppercase labels ("Fase 1 · Preparar a pele"), centred on the line.
- **Dots:** 64px circles with a gold ring and a serif numeral. When the fill reaches a dot it turns gold with an espresso numeral, grows to 1.08 and gains a soft halo.
- **Cards:** 20px corners on a 5% nude tint with a hairline, holding a gold line icon that draws itself, a pearl title and rose copy. They alternate left and right and slide in 40px from their own side. A lit step's card brightens and takes a gold hairline.
- **Gift note:** an 18px box on a 10% gold tint closes the list.

On mobile the line moves to the left, and cards stack in one column and rise instead of sliding sideways.

### Other containers
- **Voice (testimonials):** a flat 6% nude tint on cacau with a 12% nude hairline, 24px corners, a gold quote mark, and the quote in pearl serif. On hover it lifts 6px and the quote mark tilts.
- **Quote box (about):** blush at 18px corners on pearl. It holds the manifesto line in serif up to 1.8rem, with the brush under "limpeza de pele".
- **Portrait (about):** opens from a 10% rounded inset to full frame (1.3s). A rose line sprig beside it draws itself as the section scrolls.

### Underlines
- **Brush** (`.u-brush`): a tapered gold path roughened by the `#dry` filter and revealed by a mask stroke (1.1s). Use one per panel at most, under a key word in running display text.
- **Stroke** (`.u-stroke`): a thin hand-drawn gold line under the italic word of each section h2. It is injected by script, so it only appears when motion is on.
- **Line** (`.u-line`): Jost 500 over a 1px base line at 30% of the current colour. A solid line sweeps in from the left on hover. Used for text and contact links.
- **Nav link** (`.nav-link`): a 1px currentColor line that grows from the left on hover and on the current section. The current link also turns bronze.

### Before / After
A 4:5 frame with 24px corners and a hidden range input that sets `--pos`: a 2px pearl divider, a 50px pearl knob and uppercase tags on 62% espresso pills. On reveal the divider sweeps once (50 → 74 → 28 → 50% over 2.4s) to show it can be dragged, and stops the moment the visitor touches it. Focus shows a bronze ring around the frame. While real photos are missing, the "before" half is a `.ba-ph` placeholder with a disclosure label. Replace both with real client photos.

### FAQ
Native `details` with serif summaries and mocha hairlines. A 34px outlined circle holds a plus that fills cacau and rotates into a minus. The answer animates its height with `interpolate-size` and `::details-content` over 0.4s. On hover the summary turns bronze and the circle tints nude.

### Navigation
A fixed pill bar. It is transparent at the top and turns into a solid pearl pill at 92% once the page scrolls past 20px. Past the hero it hides on scroll-down and returns on scroll-up. Brand lockup: the DM monogram at 40px (it tilts −8° on hover) with "Dayanne Moura" in Jost 500 uppercase, tracked 0.26em, and a subtitle at 70% opacity. Below 1100px a 48px cacau circle opens a full-screen dark-silk drawer that fades in. Drawer links are serif at 2.3 to 3.6rem, followed by a light CTA.

### Progress Thread
A 3px bar fixed at the very top, bronze to gold, scaled with page scroll.

### Loader
It shows only on the first visit of a session. A full-screen cacau → espresso radial where, in CSS keyframes, the monogram draws stroke by stroke, the leaves grow from `scale(.5)` plus opacity, the Jost name rises letter by letter (tracked 0.42em, rose) and the script tagline writes itself in gold. JS waits for the hero image and fonts, holding at least 1.5s and at most 2.2s, then adds `.is-out`. The curtain lifts (0.9s) and the hero entrance starts 350ms later. A CSS failsafe hides it at 4s.

### Floating WhatsApp
A cacau pill, bottom right, with a nude ring. It appears after the hero, hides near the page end, and turns mocha on hover.

### Motion
About 160 lines of vanilla JS on native scroll, with no libraries.
- **Reveal:** an IntersectionObserver adds `.is-in` once per `[data-reveal]` block. The default is a fade with a 16px rise over 0.7s, delayed by `--d` × 70ms. Split headings, icons, row photos, chips, pills, the portrait and timeline cards layer their own entrance on the same class.
- **Scroll-linked values:** one rAF handler updates only what is on screen. It drives the progress thread, `--p` on `[data-scroll]` elements (hero image drift, silk sheen, the About sprig) and the timeline fill and dots. Nothing is pinned and scroll speed is never altered.
- **Ambient loops:** the silk drift (30s), the hero glows (26s and 34s), the marquee (48s) and the chip bob (5s).
- **Easing:** `cubic-bezier(.23,1,.32,1)` for settles and hovers, `cubic-bezier(.77,0,.175,1)` for curtains and drawn strokes.
- **Gating:** every hidden initial state lives behind the `js` class. The head script never adds `js` under `prefers-reduced-motion`, and removes it if main.js has not run after 3.5s, so content can never stay hidden. In those cases there is no loader, no entrance and no scroll-linked motion.

### Images
Every image ships with `srcset` and `sizes`, and the hero image is preloaded.

## Do's and Don'ts

### Do:
- **Do** state the service, place, starting price and booking path in the first viewport.
- **Do** build new sections as panels: top corners rounded with `--panel-r`, a negative top margin of the same size, and a ground that keeps the light/dark rhythm.
- **Do** colour italic heading words by their ground: bronze on light, gold on cacau and espresso, rose on dark silk, pearl on rose silk.
- **Do** give every effect a job: reveal content, show an order, or show that something can be used.
- **Do** put every hidden initial state behind `.js`, and add new entrances to the existing `.is-in` class with `--d` staggers.
- **Do** drive scroll-linked values through the single rAF handler and `--p`, only for elements on screen.
- **Do** put every hover effect behind `(hover: hover) and (pointer: fine)`.
- **Do** write prices in the serif with lining figures, and spell out the 5x installment value beside package prices.
- **Do** use one name per service everywhere.
- **Do** draw new icons on the 24-unit grid with round caps and a 1.2 to 1.6 stroke, in bronze on light grounds and gold on dark ones.
- **Do** ship every image with `srcset` and `sizes`.
- **Do** honour reduced motion for anything new, including looping animations.

### Don't:
- **Don't** pin sections, scrub long sequences, change scroll speed or add animation libraries.
- **Don't** introduce a cool or grey hue. The palette is brown, rose-bronze and nude only.
- **Don't** set the hero text over a dark photograph. Keep the hero light and split.
- **Don't** use blur filters or full-page overlays.
- **Don't** put drop shadows on panels or use hard offset shadows anywhere.
- **Don't** use more than one brush stroke per panel.
- **Don't** fill before/after or testimonials with stock or invented content. Keep the marked placeholder until real material arrives.
- **Don't** add small uppercase labels above section headlines. Headlines open panels on their own.
- **Don't** hold visitors at the loader longer than 2.2s or show it again in the same session.
