export function Header() {
  return (
    <header className="header">
      {/* // New Nav Bar from Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Kyles Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#posts-index">
                  All Posts
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  New Posts
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#posts-new">
                      Create
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-danger" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* // Old Nav Bar */}
      {/* <a className="header" href="#">
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
      <div>
        <input type="search" name="#" id="search" placeholder="Search Here" />
      </div> */}
    </header>
  );
}
