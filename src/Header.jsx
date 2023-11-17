import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      {/* // New Nav Bar from Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            Kyles Blog
          </Link>
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
                <Link to="/home" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Posts
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/posts">
                      All Posts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/posts/new">
                      Create Posts
                    </Link>
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
                <Link to="/signup" className="nav-link">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logoutlink" className="nav-link">
                  Logout
                </Link>
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
