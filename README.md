# Alpine theme for Micro.blog

Custom fork of the [Alpine theme](https://github.com/microdotblog/theme-alpine) for [asit.blog](https://asit.blog/).

Hugo theme for Micro.blog, based on Marfa theme, which was based on [NeoCactus](https://github.com/mmarfil/neocactus/fork) and [Cactus](https://github.com/eudicots/Cactus) for Jekyll. Mostly the same design as Marfa but with a more compact header.

![screenshot](https://raw.githubusercontent.com/microdotblog/theme-alpine/master/screenshot/home.png)

## Remotes

| Remote | URL |
|--------|-----|
| `origin` | `https://github.com/asitkhanda/theme-alpine` (your fork) |
| `upstream` | `https://github.com/microdotblog/theme-alpine` (official theme) |

## Local preview with Agentation

This repo includes a local preview app so you can iterate on the theme and leave visual feedback via [Agentation](https://www.agentation.com/).

### Setup

```bash
npm run install:preview
```

### Run preview + Agentation MCP server

In one terminal, start the preview:

```bash
npm run dev
```

In another terminal, start the Agentation MCP server (or rely on the project `.cursor/mcp.json` config in Cursor):

```bash
npx agentation-mcp server
```

Open [http://localhost:5173](http://localhost:5173), annotate elements in the browser, and your Cursor agent will receive feedback via the Agentation MCP tools.

Verify setup:

```bash
npm run agentation:doctor
```

### Deploying to Micro.blog

1. Push changes to your GitHub fork.
2. In Micro.blog: **Posts → Design → Edit Custom Themes → New Theme**.
3. Clone your fork: `https://github.com/asitkhanda/theme-alpine`
4. Select **Alpine** as the base design, then activate your custom theme.

See the [Micro.blog custom themes documentation](https://help.micro.blog/t/custom-themes/59) for details.
