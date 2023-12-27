import React from "react";
import LogoDark from "./lib/LogoDark";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <LogoDark />
      </Link>
      <nav class="links">
        <Link class="link" to="/">
          Home
        </Link>
        <Link class="link" to="/Booking">
          Booking
        </Link>
        <Link class="link" to="/Specials">
          Specials
        </Link>
      </nav>
    </nav>
  );
}
