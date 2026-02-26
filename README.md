# Portfolio — Keerthi Nelaturu

Personal portfolio website built with [Hugo](https://gohugo.io/) and deployed on [GitHub Pages](https://pages.github.com/).

**Live:** [sasuke0787.github.io](https://sasuke0787.github.io/)

## Tech Stack

- **Hugo** — Static site generator with custom theme (`portfolio-theme`)
- **GitHub Actions** — Automated build and deploy on push to `main`
- **CSS** — Custom styles with CSS variables, responsive design, scroll animations

## Local Development

```bash
brew install hugo
hugo server
```

Open `http://localhost:1313`

## Structure

```
├── data/                  # YAML content files
│   ├── about.yaml         # Bio and highlight stats
│   ├── domains.yaml       # Domain expertise cards
│   ├── experience.yaml    # Work experience timeline
│   ├── projects.yaml      # Projects (dual-lane: fulltime + consulting)
│   └── skills.yaml        # Skills and technologies
├── static/images/         # Headshot and assets
├── themes/portfolio-theme/
│   ├── layouts/           # Hugo templates
│   └── static/            # CSS and JS
└── .github/workflows/     # GitHub Actions deploy config
```

## Content Updates

All content lives in `data/*.yaml` — edit those files and push to deploy.
