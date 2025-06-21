import React, { useState } from "react";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        {" "}
        <button
          className={`w-full text-left hover:bg-purple-100${
            isOpen ? " border-b-2 border-purple-900 " : ""
          }`}
          onClick={() => setIsOpen((drop) => !drop)}
        >
          <h1 className="text-xl font-semibold">{title}</h1>
        </button>
        {isOpen && content}
      </div>
    </>
  );
}

export function DropdownBig({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`bg-purple-50 text-purple-900 mb-4${
          isOpen ? " border-2 border-purple-900" : " "
        }`}
      >
        {" "}
        <button
          className={`w-full text-left hover:bg-purple-100 bg-purple-50 p-4 border-purple-900${
            isOpen ? " border-b-2 " : " border-2"
          } `}
          onClick={() => setIsOpen((drop) => !drop)}
        >
          <h1 className="text-4xl font-bold">{title}</h1>
        </button>
        {isOpen && content}
      </div>
    </>
  );
}
