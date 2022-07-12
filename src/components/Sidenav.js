import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="side-nav-section">
      <div className="links">
        <Link to="/" className="side-nav-link">
          Wallets
        </Link>
      </div>
    </nav>
  );
};

export default Sidenav;
