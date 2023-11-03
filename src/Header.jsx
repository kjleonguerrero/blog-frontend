export function Header() {
  return (
    <header className="header">
      <a className="header" href="#">
        Home
      </a>{" "}
      |{" "}
      <a className="header" href="#posts-index">
        All posts
      </a>{" "}
      |{" "}
      <a className="header" href="#posts-new">
        New post
      </a>
    </header>
  );
}
