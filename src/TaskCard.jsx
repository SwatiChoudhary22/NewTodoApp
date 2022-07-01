import React from "react";
import Button from "./Button";
import H3 from "./H3";
import InputTimeDate from "./InputTImeDate";
function TaskCard(props) {
  const [inputValue, updateInputValue] = React.useState("");

  const onInputChange = (event) => {
    updateInputValue(event.target.value);
  };

  const saveTask = () => {
    props.onCreate(inputValue);
    updateInputValue("");
    props.onClose();
  };

  return (
    <div className="p-4 mt-8 space-y-4 rounded-md shadow-xl ">
      <H3>Create a task</H3>
      <div className="flex space-x-3">
        <input
          value={inputValue}
          onChange={onInputChange}
          className="w-1/2 px-2 py-2 border-2 rounded-md border-sky-700 text-sky-900 focus:ring-sky-700 sadow-md focus:border-sky-700 placeholder:text-sky-200"
          placeholder=" write todo list"
          type="text"
        />

        <InputTimeDate
          value={inputDateTimeValue}
          onChange={onInputDateTimeChange}
        ></InputTimeDate>
      </div>
      <div className="flex space-x-4">
        <Button onClick={saveTask}>Save</Button>
        <Button theme="secondary" onClick={props.onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;
