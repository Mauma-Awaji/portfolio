export default function Footer() {
  return (
    <>
      {" "}
      <footer className="flex justify-center space-x-6 p-2 bg-gray-900 text-white md:p-4">
        <p>&copy; 2023 Manny Sobere</p>
        <a
          href="https://www.linkedin.com/in/manasseh-sobere-a63a42239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
      </footer>
    </>
  );
}
