import React from "react";

function Button(props) {
  let themeClasses =
    "bg-sky-800 text-white border border-sky-800 hover:bg-sky-500 hover:text-sky-900 ";
  let radiusClasses = "rounded-md";

  if (props.theme === "secondary") {
    themeClasses =
      "border border-sky-900 bg-white text-sky-900 hover:bg-sky-500 ";
  }
  if (props.theme === "radius") {
    radiusClasses = "rounded-2xl ";
  }

  return (
    <div className="flex space-x-4">
      <button
        onClick={props.onClick}
        className={
          "text-sm py-2 px-4  focus:ring-offset-2 focus:ring-2 focus:outline-none focus:ring-sky-500 shadow-lg " +
          themeClasses +
          " " +
          radiusClasses
        }
      >
        {props.icon && <span className="inline-block mr-2">{props.icon}</span>}
        {props.children}
      </button>
    </div>
  );
}

export default Button;
