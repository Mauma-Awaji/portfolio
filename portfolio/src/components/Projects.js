import Dropdown from "./Dropdown";
import { DropdownBig } from "./Dropdown";
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
        <ul key={index} className="list-disc pl-5">
          <li>
            <Dropdown
              title={<p className="text-lg">{project.name}</p>}
              content={
                <>
                  <p className="list-disc pl-5">
                    {project.description}{" "}
                    {project.name === "Pokemon Website" && (
                      <>
                        <p>Here is a link to the the website </p>

                        <button className="bg-purple-900 dark:bg-lime-50 text-yellow-50 dark:text-purple-900 p-2 rounded-md hover:bg-purple-800 hover:scale-110 hover:box-shadow-lg transition-all duration-300">
                          <a
                            href="https://mauma-awaji.github.io/wdd_130/xybattles/index.html"
                            className=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {" "}
                            View Website
                          </a>
                        </button>
                      </>
                    )}
                  </p>
                </>
              }
            />
          </li>
        </ul>
      ))}
    </>
  );
  return <DropdownBig title={title} content={content} />;
}
