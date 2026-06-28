# Alpine theme for Micro.blog

Custom fork of the [Alpine theme](https://github.com/microdotblog/theme-alpine) for [asit.blog](https://asit.blog/).

Hugo theme for Micro.blog, based on Marfa theme, which was based on [NeoCactus](https://github.com/mmarfil/neocactus/fork) and [Cactus](https://github.com/eudicots/Cactus) for Jekyll. Mostly the same design as Marfa but with a more compact header.

![screenshot](https://raw.githubusercontent.com/microdotblog/theme-alpine/master/screenshot/home.png)

## Remotes

| Remote | URL |
|--------|-----|
| `origin` | `https://github.com/asitkhanda/theme-alpine` (your fork) |
| `upstream` | `https://github.com/microdotblog/theme-alpine` (official theme) |

## Local Hugo preview (recommended)

This uses the **real Hugo templates** with live content from your JSON Feed and accent colors from `config.json` — the closest match to production on Micro.blog.

### First-time setup

```bash
npm run setup    # clones theme-blank, links this repo as theme-alpine
npm run sync     # fetches https://asit.blog/feed.json → dev/content/post/
```

### Run the dev server

```bash
npm run dev
```

This starts three services together:

| Service | URL | Purpose |
|---------|-----|---------|
| Hugo | [http://localhost:1313](http://localhost:1313) | Real theme preview |
| Agentation overlay | port 5174 (background) | Toolbar script injected into Hugo pages |
| Agentation MCP | [http://localhost:4747](http://localhost:4747) | Syncs annotations to Cursor |

Open **http://localhost:1313**, click the Agentation toolbar, and annotate any element. Your Cursor agent receives feedback via the Agentation MCP tools.

Verify Agentation:

```bash
npm run agentation:doctor
```

### Sync options

| Variable | Default | Purpose |
|----------|---------|---------|
| `FEED_URL` | `https://asit.blog/feed.json` | JSON Feed to import |
| `BASE_URL` | `http://localhost:1313/` | Hugo `baseURL` for local links |

Example:

```bash
FEED_URL=https://asit.blog/feed.json npm run sync
```

Accent colors (`alpine_accent_*`) are read from the root [`config.json`](config.json) when generating `dev/config.toml`.

## Standalone React preview (optional)

If you only want the React mock (without Hugo), use:

```bash
npm run install:preview
npm run dev:preview     # http://localhost:5173
```

For theme work, use `npm run dev` instead — Hugo + Agentation on port 1313 is the recommended workflow.

## Deploying to Micro.blog

1. Push changes to your GitHub fork.
2. In Micro.blog: **Posts → Design → Edit Custom Themes → New Theme**.
3. Clone your fork: `https://github.com/asitkhanda/theme-alpine`
4. Select **Alpine** as the base design, then activate your custom theme.

See the [Micro.blog custom themes documentation](https://help.micro.blog/t/custom-themes/59) for details.
