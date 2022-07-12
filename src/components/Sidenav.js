import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="side-nav-section">
      <div className="links">
        <Link to="/wallets" className="side-nav-link">
          Wallets
        </Link>
        <Link to="/transactions" className="side-nav-link">
          Transactions
        </Link>
      </div>
    </nav>
  );
};

export default Sidenav;
