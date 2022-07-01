import React from "react";

function H2(props) {
  return (
    <div className="text-base font-medium leading-6 md:text-xl text-sky-700 ">
      {props.children}
    </div>
  );
}

export default H2;
