import React, { useState } from "react";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="dropdown-btn"
        onClick={() => setIsOpen((drop) => !drop)}
      >
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      </button>
      {isOpen && content}
    </>
  );
}
