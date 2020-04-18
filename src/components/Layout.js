import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <main className="main">
        <div className="content">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
