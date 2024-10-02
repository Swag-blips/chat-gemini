import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./RootLayout.css"

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/">
          <img src="/logo.png" alt="" />
          <span>LAMA AI</span>
        </Link>
        <div className="user">User</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
