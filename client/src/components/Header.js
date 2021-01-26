import "./styles.css";
import RoomList from "./RoomList";
import CreateRoom from "./CreateRoom";
import { BrowserRouter, Route } from "react-router-dom";

function Header() {
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
              <li className="nav-item active">
                <a className="nav-link" href="javascript:">
                  FOR YOU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:">
                  HOMES
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
