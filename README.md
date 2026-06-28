# Minimism for Micro.blog

A minimalist Hugo theme for [Micro.blog](https://micro.blog/), forked from the official [Alpine theme](https://github.com/microdotblog/theme-alpine). Minimism keeps Alpine's compact layout and adds dark mode, accent color controls, a responsive navigation menu, and an overflow "More" submenu for extra pages.

Alpine itself builds on the Marfa theme, which traces back to [NeoCactus](https://github.com/mmarfil/neocactus/fork) and [Cactus](https://github.com/eudicots/Cactus) for Jekyll.

![Minimism screenshot](screenshot/home.png)

## Features

- Compact header with avatar, site title, and navigation
- Dark mode toggle with persistent preference (localStorage)
- Accent color picker with multiple palette options
- Desktop "More" dropdown for overflow menu items (e.g. Archive, Photos)
- Mobile/tablet hamburger menu with overlay panel
- Configurable accent colors via Micro.blog theme settings

## Forking this theme

1. Fork [github.com/asitkhanda/theme-minimism](https://github.com/asitkhanda/theme-minimism) on GitHub.
2. Clone your fork locally.
3. Customize templates in `layouts/`, styles in `static/assets/css/`, and defaults in `config.json`.
4. Push your changes and import the theme on Micro.blog (see below).

When maintaining your fork, you may optionally add the official Alpine repo as an upstream remote to pull in base-theme fixes:

```bash
git remote add upstream https://github.com/microdotblog/theme-alpine.git
```

## Deploying to Micro.blog

### Test before publishing

1. Push your theme to a public GitHub repository: `https://github.com/asitkhanda/theme-minimism`
2. In Micro.blog: **Design → Edit Custom Themes → New Plug-in**
3. Enter your repository URL and install the plug-in on a test blog
4. Confirm the theme renders correctly and accent color settings work under **Plug-in Settings**

### Register in the Plug-in Directory

Once tested, submit the theme for listing:

1. Ensure these files are present in the repo root:
   - `plugin.json` — title, version, description, and settings fields
   - `theme.toml` — marks this as a full theme plug-in
   - `config.json` — default accent color values
   - `layouts/` — Hugo templates
   - `static/` — CSS and assets
2. Register via the link on the [Micro.blog plug-ins documentation](https://help.micro.blog/t/plug-ins/104), providing the GitHub URL above
3. After approval, users can install from **Posts → Plug-ins → Plug-in Directory**

To publish updates, bump `version` in `plugin.json` and push to GitHub. Users will see an **Upgrade** button in Micro.blog.

## Theme configuration

Accent colors are defined in [`config.json`](config.json) and exposed in the Micro.blog theme editor via [`plugin.json`](plugin.json):

| Parameter | Purpose |
|-----------|---------|
| `alpine_accent_text_color` | Link and accent text color |
| `alpine_accent_background_color` | Accent button background |
| `alpine_hover_background_color` | Link hover background |

Parameter names retain the `alpine_` prefix for compatibility with the Alpine base design on Micro.blog.

## Local development (optional)

You can preview the theme locally with Hugo. This is optional and not required for Micro.blog deployment.

### First-time setup

```bash
npm run setup    # clones theme-blank and links this repo for Hugo
npm run sync     # imports posts from a JSON Feed into dev/content/
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:1313](http://localhost:1313).

For Hugo only (without optional Agentation tooling):

```bash
npm run dev:hugo
```

### Sync options

| Variable | Default | Purpose |
|----------|---------|---------|
| `FEED_URL` | none (required for sync) | JSON Feed URL to import posts from |
| `BASE_URL` | `http://localhost:1313/` | Hugo `baseURL` for local links |

Example:

```bash
FEED_URL=https://example.com/feed.json npm run sync
```

### Standalone React preview (optional)

```bash
npm run install:preview
npm run dev:preview     # http://localhost:5173
```

For accurate theme work, prefer `npm run dev` (Hugo on port 1313).

## Repository layout

| Path | Purpose |
|------|---------|
| `layouts/` | Hugo templates (HTML) |
| `static/assets/css/` | Stylesheets |
| `config.json` | Default theme parameters |
| `plugin.json` | Micro.blog plug-in metadata and settings fields |
| `theme.toml` | Marks this as a full theme for Micro.blog |
| `screenshot/` | Preview image for the plug-in directory |
| `dev/` | Local Hugo preview site (not required for Micro.blog) |
| `scripts/` | Local setup and feed sync helpers |

## License

See [LICENSE](LICENSE).
