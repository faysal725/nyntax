import React from "react";

export default function Header({ title = "title", children, classes="p-2 border border-[#D7D7FF] px-5 rounded-md" }) {
  return (
    <div className="flex flex-col gap-y-8">
      <header className="flex flex-col border-b border-b-indigo-600">
        <p className="text-lg font-bold pb-2">{title}</p>
      </header>
      <div className={classes}>
        {children}
      </div>
    </div>
  );
}
