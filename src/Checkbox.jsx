import PreviousMap from "postcss/lib/previous-map";
import React from "react";

function Checkbox(props) {
  return (
    <div>
      <input
        checked={props.checked}
        onChange={props.onChange}
        className="w-4 h-4 mt-1 border-sky-700 text-sky-900 focus:ring-sky-700"
        type="checkbox"
      />
    </div>
  );
}

export default Checkbox;
