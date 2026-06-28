import { useEffect, useMemo, useState } from "react";
import themeConfig from "../../config.json";

const FEED_URL = import.meta.env.VITE_FEED_URL ?? "https://asit.blog/feed.json";

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    month: "short",
    day: "numeric",
  });
}

function AccentStyles() {
  const params = themeConfig.params ?? {};
  const css = useMemo(
    () => `
nav.main-nav a.cta {
  background: ${params.alpine_accent_background_color ?? "#ffffff"};
  color: ${params.alpine_accent_text_color ?? "#f29c38"};
  border-color: ${params.alpine_accent_text_color ?? "#f29c38"};
}
nav.main-nav a.cta:hover {
  background: ${params.alpine_hover_background_color ?? "#fffee4"};
  color: ${params.alpine_accent_text_color ?? "#f29c38"};
}
`,
    [params],
  );

  return <style>{css}</style>;
}

function PostItem({ post }) {
  const hasTitle = Boolean(post.title?.trim());

  return (
    <li>
      <article className="h-entry">
        {hasTitle ? (
          <section className="post-body">
            <header>
              <h2>
                <a href={post.url} className="p-name">
                  {post.title}
                </a>
              </h2>
            </header>
            <section
              className="post-body e-content"
              dangerouslySetInnerHTML={{ __html: post.content_html }}
            />
          </section>
        ) : (
          <div
            className="e-content"
            dangerouslySetInnerHTML={{ __html: post.content_html }}
          />
        )}
        <a href={post.url} className="u-url">
          <aside className="dates">
            <time className="dt-published">
              → {formatDate(post.date_published)}
            </time>
          </aside>
        </a>
      </article>
      <span className="separator">
        <span className="divider" />
      </span>
    </li>
  );
}

export default function ThemePreview() {
  const [feed, setFeed] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(FEED_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Feed request failed (${response.status})`);
        }
        return response.json();
      })
      .then(setFeed)
      .catch((fetchError) => setError(fetchError.message));
  }, []);

  const avatar =
    feed?.icon ??
    "https://micro.blog/images/default-avatar.png";
  const siteTitle = feed?.title ?? "Asit Khanda";

  return (
    <>
      <AccentStyles />
      <nav className="main-nav">
        <div className="site-title">
          <img
            src={avatar}
            className="site-image"
            alt={siteTitle}
          />
          <a href="/">{siteTitle}</a>
        </div>
        <div className="site-menus">
          <a href="/about/">About</a>
          <div className="nav-more" id="nav-more">
            <button
              type="button"
              className="nav-more-toggle"
              id="nav-more-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="nav-more-menu"
            >
              More
            </button>
            <div
              className="nav-more-menu"
              id="nav-more-menu"
              role="menu"
              aria-label="More pages"
              aria-hidden="true"
            >
              <a href="/archive/" role="menuitem">
                Archive
              </a>
              <a href="/photos/" role="menuitem">
                Photos
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="wrapper">
        {error ? (
          <p>Could not load feed: {error}</p>
        ) : !feed ? (
          <p>Loading posts from {FEED_URL}…</p>
        ) : (
          <ul id="post-list" className="h-feed">
            {feed.items.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </ul>
        )}
      </section>

      <footer id="footer">
        <section>
          <ul>
            <li>
              <a href="/feed.xml">RSS</a>
            </li>
            <li>
              <a href="/feed.json">JSON Feed</a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
