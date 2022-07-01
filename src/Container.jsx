import React from "react";

function Container(props) {
  return (
    <div className="px-10 mt-5 space-y-5 md:px-32 md:mt-10">
      {props.children}
    </div>
  );
}

export default Container;
