import PreviousMap from "postcss/lib/previous-map";
import React from "react";

function H1(props) {
  return (
    <div className="text-xl font-medium leading-6 md:text-3xl text-sky-900">
      {props.children}
    </div>
  );
}

export default H1;
