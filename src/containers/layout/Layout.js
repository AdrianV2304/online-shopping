import React from "react";

const Layout = (props) => {
  return (
    <div className="layout">
      <div>nav</div>
      {props.children}
      <div>footer</div>
    </div>
  );
};

export default Layout;
