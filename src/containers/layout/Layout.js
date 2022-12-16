import React from "react";
import Navigation from "components/navigation";
import Footer from "components/footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
