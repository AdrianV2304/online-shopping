import React from "react";
import Navigation from "components/navigation";
import Footer from "components/footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="layout__nav">
        <Navigation />
      </div>
      <div className="layout__card">{props.children}</div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
