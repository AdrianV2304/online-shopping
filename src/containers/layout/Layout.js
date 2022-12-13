import React from "react";
import Navigation from "components/navigation";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="layout__nav">
        <Navigation />
      </div>
      <div>{props.children}</div>
      <div>footer</div>
    </div>
  );
};

export default Layout;
