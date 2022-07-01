import React from "react";

function InputTimeDate() {
  return (
    <div>
      <input
        type="datetime-local"
        className="px-2 py-1 mt-1 text-base border-2 rounded-md border-sky-700 text-sky-900 focus:ring-sky-700 sadow-md focus:border-sky-700 placeholder:text-sky-200"
      />
    </div>
  );
}

export default InputTimeDate;
