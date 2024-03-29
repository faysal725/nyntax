import React from "react";

export default function Checkbox({
  labelName = "label",
  title = "title",
  changedValue,
  required = false,
}) {
  return (
    <div className="flex items-start py-2">
      <div className="flex h-6 items-center">
        <input
          id={labelName}
          aria-describedby="comments-description"
          name={labelName}
          type="checkbox"
          className="h-6 w-6  border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-xl leading-6">
        <label
          htmlFor={labelName}
          className="font-medium text-cyan-500 capitalize"
        >
          {title}
        </label>
      </div>
    </div>
  );
}
