export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-2 md:p-4">
      <nav className="flex justify-center space-x-6">
        <a href="https://example.com" className="hover:underline">
          About Me
        </a>

        <a href="https://example.com/projects" className="hover:underline">
          Projects
        </a>
        <a href="https://example.com/contact" className="hover:underline">
          Contact Me
        </a>
      </nav>
    </header>
  );
}
