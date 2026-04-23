# 🖤 Portfolio Starter

A minimal, editorial portfolio — HTML + Tailwind CSS + GSAP.

## File Structure

```
portfolio/
├── index.html          ← All markup
├── css/
│   └── style.css       ← All custom styles + CSS variables
├── js/
│   └── main.js         ← All GSAP animations
└── images/             ← Drop your images here
    ├── profile.jpg
    ├── project1.jpg
    └── ...
```

## Quick Start

1. Open the `portfolio/` folder in VS Code
2. Install the **Live Server** extension (if you haven't)
3. Right-click `index.html` → **Open with Live Server**
4. Start editing!

---

## What to customize first

### 1. Personal info (index.html)
Search and replace these placeholders:
- `Your Name` → your actual name
- `YN` → your initials (nav logo)
- `your@email.com` → your email
- `Your City` → where you're based
- `Your Major` / `Your University` → your details
- All social links (`yourusername`, `yourhandle`, `yourprofile`)

### 2. Projects (index.html)
Each `.project-item` block — update:
- `href="#"` → link to live site or GitHub
- `Project One` → real project name
- `UI Design · Frontend Dev` → your actual role/tech
- `2024` → year
- `.img-placeholder` div → replace with `<img src="images/projectX.jpg" alt="..." />`

### 3. Skills (index.html)
Edit the `<ul class="skill-list">` items to match your actual stack.

### 4. About text (index.html)
Replace the two `<p class="about-text">` paragraphs with your bio.

### 5. Photo (index.html)
Replace `.about-photo-placeholder` div with:
```html
<img src="images/profile.jpg" alt="Your Name" class="about-photo" />
```
And add this to style.css:
```css
.about-photo { border-radius: 4px; aspect-ratio: 4/5; object-fit: cover; }
```

---

## Prompts to use with Claude Code (VS Code)

Open your project in VS Code, then in Claude Code try these prompts:

### Customization
- *"Update all placeholder text with my real info: name is [X], email is [Y], based in [Z]"*
- *"Add a 5th project item for [project name] — link: [url], tags: [X · Y], year: [Z]"*
- *"Change the color palette to use a dark background (#0D0D0D) with cream text"*

### New features
- *"Add a hamburger mobile menu that slides in from the right"*
- *"Add a page loader animation that reveals the site after 1.5 seconds"*
- *"Add a sticky progress bar at the top that fills as you scroll"*
- *"Add a dark/light mode toggle in the navbar"*
- *"Make the hero name do a text scramble animation on load using GSAP"*
- *"Add a 'currently playing' Spotify widget in the bottom left corner"*
- *"Add a smooth page transition when clicking project links"*
- *"Create a separate projects.html page with a full project grid"*

### Animations
- *"Make the marquee run in reverse direction and slower (30s)"*
- *"Add a parallax effect to the hero — name moves slower than scroll"*
- *"Add magnetic effect to the social link pills on hover"*
- *"Make the project hover image tilt based on mouse position (using GSAP)"*

### Design tweaks
- *"Make the hero name larger on desktop, keep the italic style on the second line"*
- *"Add a thin horizontal rule between each section"*
- *"Change the social links from pill buttons to plain underline links like the nav"*
- *"Add a subtle noise/grain texture to the background using an SVG filter"*

---

## CDNs used (no build step needed)

| Library | Version | Purpose |
|---------|---------|---------|
| Tailwind CSS | CDN Play | Utility classes |
| GSAP | 3.12.5 | Animations |
| ScrollTrigger | 3.12.5 | Scroll animations |
| Google Fonts | — | Cormorant Garamond + Syne |

## Upgrade path

When you're ready to go beyond CDN:
1. **Tailwind**: `npm install tailwindcss` + config file for purging unused styles
2. **GSAP**: `npm install gsap` for full plugin access (SplitText, MorphSVG, etc.)
3. **Framework**: Migrate to Next.js or Astro for multi-page routing + MDX blog posts
