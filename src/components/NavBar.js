import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link style={{ padding: "15px" }} to="/">
        Route1
      </Link>
      <Link style={{ padding: "15px" }} to="/route2">
        Route2
      </Link>
      <Link style={{ padding: "15px" }} to="/route3">
        Route3
      </Link>
    </div>
  );
}

export default NavBar;
