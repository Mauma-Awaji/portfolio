import React, { useState } from "react";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        {" "}
        <button
          className={`w-full text-left hover:bg-purple-100 dark:hover:bg-violet-950${
            isOpen ? " border-b-2 border-purple-900 dark:border-yellow-50 " : ""
          }`}
          onClick={() => setIsOpen((drop) => !drop)}
        >
          <h1 className="text-5xs sm:text-lg md:text-xl font-semibold">
            {title}
          </h1>
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
        className={`bg-purple-50 text-purple-900 dark:bg-indigo-950 dark:text-yellow-50 mb-4${
          isOpen ? " border-2 border-purple-900 dark:border-yellow-50" : " "
        }`}
      >
        {" "}
        <button
          className={`w-full text-left hover:bg-purple-100 dark:hover:bg-violet-950 bg-purple-50 dark:bg-indigo-950 md:p-4 border-purple-900 dark:border-yellow-50${
            isOpen ? " border-b-2 " : " border-2"
          } `}
          onClick={() => setIsOpen((drop) => !drop)}
        >
          <h1 className="text-3xs sm:text-2xl md:text-4xl font-bold">
            {title}
          </h1>
        </button>
        {isOpen && content}
      </div>
    </>
  );
}
