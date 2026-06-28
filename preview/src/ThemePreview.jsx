const posts = [
  {
    title: null,
    content:
      "Another successful session of CTRL + VIBES over the weekend. Explored a few product ideas and learnt about the art of pitching as well.",
    date: "1:19 AM, Jun 28",
  },
  {
    title: "Hosted my first session",
    content:
      "Got to host my first session of the year yesterday, all thanks to my OG Group - After Office Hours. We talked about how not to apply for jobs.",
    date: "12:55 AM, Jun 21",
  },
  {
    title: null,
    content:
      "Attended the Headout design event yesterday, amazing insights and fresh new perspectives. Short, quick and precise.",
    date: "10:52 PM, Jun 14",
  },
];

function PostItem({ post }) {
  return (
    <li>
      <article className="h-entry">
        {post.title ? (
          <section className="post-body">
            <header>
              <h2>
                <a href="#" className="p-name">
                  {post.title}
                </a>
              </h2>
            </header>
            <section className="post-body e-content">{post.content}</section>
          </section>
        ) : (
          <div className="e-content">{post.content}</div>
        )}
        <a href="#" className="u-url">
          <aside className="dates">
            <time className="dt-published">→ {post.date}</time>
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
  return (
    <>
      <nav className="main-nav">
        <div className="site-title">
          <img
            src="https://micro.blog/images/default-avatar.png"
            width="25"
            height="25"
            className="site-image"
            alt=""
          />
          <a href="/">Asit Khanda</a>
        </div>
        <div className="site-menus">
          <a href="#">Archive</a>
          <a href="#">Photos</a>
          <a href="#">About</a>
          <a className="cta" href="https://micro.blog/asit" rel="me">
            Also on Micro.blog
          </a>
        </div>
      </nav>

      <section id="wrapper">
        <ul id="post-list" className="h-feed">
          {posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </ul>
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
