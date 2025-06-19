import Dropdown from "./Dropdown";
export function Skills() {
  const title = "Skills";
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "C#",
  ];
  const content = (
    <>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index} className="list-disc pl-5">
            {skill}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <Dropdown title={title} content={content} />
    </>
  );
}
