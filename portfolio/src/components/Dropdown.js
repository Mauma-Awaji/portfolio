import React, { useState } from "react";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        {" "}
        <button onClick={() => setIsOpen((drop) => !drop)}>
          <h1 className="text-xl font-semibold">{title}</h1>
        </button>
        {isOpen && content}
      </div>
    </>
  );
}
