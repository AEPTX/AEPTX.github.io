import "./style.css";

import { Link } from "react-router-dom";
import Logo from "../../assets/aep_logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-items">
        <img className="nav-logo" src={Logo} alt="" />

        <div className="nav-links">
          <Link className="underline-on-hover" to="/">
            Home
          </Link>
          <Link className="underline-on-hover" to="/">
            Home
          </Link>
          <Link className="underline-on-hover" to="/">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
