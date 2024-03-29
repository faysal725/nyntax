import React from "react";

export default function Textarea({
  labelName = "label",
  title = "title",
  type = "text",
}) {
  return (
    <div className="py-3">
      <label
        htmlFor={labelName}
        className="block text-xl font-medium leading-6 text-slate-600"
      >
        {title}:
      </label>
      <div className="mt-2">
        <textarea
          rows={6}
          name={labelName}
          id={labelName}
          className="block w-full rounded-md border border-blue-700 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
