import PreviousMap from "postcss/lib/previous-map";
import React from "react";

function UrgentTask(props) {
  return (
    <div className="text-xl font-medium leading-6 text-yellow-600 hover:text-yellow-400 hover:p-2">
      {props.children}
    </div>
  );
}

export default UrgentTask;
