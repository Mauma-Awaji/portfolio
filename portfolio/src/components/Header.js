import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-2 md:p-4">
      <nav className="flex justify-center space-x-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/resume">Resume Info</NavLink>
        <NavLink to="/contactme">Contact Me</NavLink>
      </nav>
    </header>
  );
}
