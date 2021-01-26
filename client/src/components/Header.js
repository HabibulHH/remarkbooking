import "./styles.css";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  function handleClick() {}
  return (
    <header>
      <nav id="mainMenu" className="navbar navbar-expand-md navbar-light py-0">
        <div className="container-fluid">
          <button
            className="navbar-toggler my-1"
            type="button"
            data-toggle="collapse"
            data-target="#mobileMenuToggle"
            aria-controls="main-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobileMenuToggle">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    history.push("/search");
                  }}
                >
                  HOMES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    history.push("/create");
                  }}
                  href="javascript:"
                >
                  List Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:">
                  EXPERIENCES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:">
                  PLACES
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
