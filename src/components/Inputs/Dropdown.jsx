import React from "react";

export default function Dropdown({
  placeholder = "Input Something",
  labelName = "label",
  title = "title",
  type = "text",
  options = [],
  changedValue,
  required = false,
}) {
  return (
    <div className="py-3">
      <label
        htmlFor={labelName}
        className="block text-xl font-medium leading-6 text-slate-800 "
      >
        {title}
        {required ? <span className="text-red-600">*</span> : <></>}
      </label>
      <div className="mt-2  border border-[#D7D7FF] rounded-md overflow-hidden py-1.5 px-4">
        <select
          onChange={(e) =>
            e.target.value == "Active"
              ? changedValue(true)
              : changedValue(false)
          }
          id="location"
          name="location"
          className="block w-full   text-gray-900 shadow-sm outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6  md:text-xl h-14"
          defaultValue="Canada"
        >
          {
            options.map((option, index) => (
              <option key={index} name={option.key}>{option.value}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
}
