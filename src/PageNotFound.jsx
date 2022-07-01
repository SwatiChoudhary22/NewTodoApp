import React from "react";
import pageNotFound from "./Images/wallpaper.gif";

function PageNotFound(props) {
  return (
    <div
      style={{ backgroundImage: `url("${pageNotFound}")` }}
      className="text-xl font-medium leading-6 text-white"
    >
      {props.children}
    </div>
  );
}

export default PageNotFound;
