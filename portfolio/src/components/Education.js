import Dropdown from "./Dropdown";
export default function Education() {
  const title = "Education and Certifications";
  const content = (
    <>
      <p className="text-lg">
        Cybersecurity - Bachelor of Applied Science in Information Technology
        Ensign College January 2025 - Present
      </p>
      <ul>
        <li>
           Transferred from Computer Science at Brigham Young University -
          Idaho
        </li>
        <li>
           Former Mechanical Engineering Major at Brigham Young University -
          Idaho
        </li>
      </ul>
    </>
  );
  return (
    <>
      <Dropdown title={title} content={content} />
    </>
  );
}
