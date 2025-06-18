import Dropdown from "./Dropdown";
export function Skills() {
  const title = "Skills";
  const content = (
    <>
      {" "}
      <h2 className="text-xl font-semibold mt-6">Skills</h2>
      <ul className="list-disc pl-5">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>C#</li>
      </ul>
    </>
  );

  return (
    <>
      <Dropdown title={title} content={content} />
    </>
  );
}
