import React from "react";
import Checkbox from "./Checkbox";

function TaskRow(props) {
  const onCheckboxChange = () => {
    props.onStatusChange(props.children);
  };
  return (
    <div className="flex items-center">
      <Checkbox checked={props.done} onChange={onCheckboxChange}></Checkbox>
      <span className="ml-3">{props.children}</span>
    </div>
  );
}

export default TaskRow;
