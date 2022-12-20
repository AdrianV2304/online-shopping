import React from "react";
import Navigation from "components/navigation";
import Footer from "components/footer";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`layout ${className}`}>
      <Navigation />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
