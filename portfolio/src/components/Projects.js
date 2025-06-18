export default function Projects() {
  return (
    <>
      {/*-- Projects*/}
      <h1 className="text-3xl font-semibold mb-4">Projects</h1>
      <div>
        <p className="text-lg">Pokemon Website</p>
        <p>
          Website created using HTML and CSS with details about the Pokemon X
          and Y games
          <br />
          Here is a link to the the website
        </p>
        <a
          href="https://mauma-awaji.github.io/wdd_130/xybattles/index.html"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Website
        </a>
      </div>

      <div>
        <p className="text-lg">Portfolio</p>
        <p>
          Web app created using HTML, React and Tailwind CSS to showcase my
          prowess with them
        </p>
      </div>
    </>
  );
}
