export default function Footer() {
  return (
    <>
      {" "}
      <footer className="text-center p-4 bg-gray-900 text-white">
        <p>&copy; 2023 Manny Sobere</p>
        <a href="https://example.com" className="hover:underline">
          <img
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="LinkedIn"
            className="inline-block w-6 h-6 mr-2"
          />
        </a>
      </footer>
    </>
  );
}
