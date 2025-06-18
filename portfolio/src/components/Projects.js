import Dropdown from "./Dropdown";
export default function Projects() {
  const title = "Projects";
  const projects = [
    {
      name: "Pokemon Website",
      description:
        "Website created using HTML and CSS with details about the Pokemon X and Y games",
    },
    {
      name: "Portfolio",
      description:
        "Web app created using HTML, React and Tailwind CSS to showcase my prowess with them",
    },
  ];

  const content = (
    <>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg">{project.name}</p>
          <p>{project.description}</p>

          {project.name === "Pokemon Website" && (
            <>
              <p>Here is a link to the the website</p>
              <a
                href="https://mauma-awaji.github.io/wdd_130/xybattles/index.html"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
            </>
          )}
        </div>
      ))}
      {/* <div>
        <p className="text-lg">Pokemon Website</p>
        <p>
          Website created using HTML and CSS with details about the Pokemon X
          and Y games
          <br />
          
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
      </div> */}
    </>
  );
  return <Dropdown title={title} content={content} />;
}
