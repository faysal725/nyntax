import React from "react";

export default function InputText({
  labelName = "label",
  title = "title",
  type = "text",
  changedValue,
  required = false
}) {
  return (
    <div className="py-3">
      <label
        htmlFor={labelName}
        className="block text-xl font-medium leading-6 text-slate-800 "
      >
        {title}
        
        
        {
          required? <span className="text-red-600">*</span> : <></>
        }
        
      </label>
      <div className="mt-2">
        <input
          onChange={(e) => changedValue(e.target.value)}
          type={type}
          name={labelName}
          id={labelName}
          autoComplete="given-name"
          className="block w-full rounded-md border border-[#D7D7FF] py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6  md:text-xl h-14"
        />
      </div>
    </div>
  );
}
