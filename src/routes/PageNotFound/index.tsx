import { Link } from "react-router-dom";

import "./style.css";

export default function PageNotFoundRoute() {
  return (
    <div className="page-not-found">
      <h1>Page Not Found</h1>
      <p>
        Oh No! Try going back to{" "}
        <Link className="underline-on-hover" to="/">
          home
        </Link>
        ?
      </p>
    </div>
  );
}
