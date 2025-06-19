import Dropdown from "./Dropdown";
export default function Education() {
  const title = "Education and Certifications";
  const certifications = [
    {
      name: "Cybersecurity - Bachelor of Applied Science in Information Technology Ensign College January 2025 - Present",
      details: [
        "Transferred from Computer Science at Brigham Young University - Idaho",
        "Former Mechanical Engineering Major at Brigham Young University - Idaho",
      ],
    },
  ];
  const content = (
    <>
      {certifications.map((certification, index) => (
        <>
          {" "}
          <ul key={index} className="list-disc pl-5">
            <li>
              {" "}
              <p>{certification.name}</p>
              <ul className="list-disc pl-5">
                {certification.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </li>
          </ul>
        </>
      ))}
    </>
  );
  return (
    <>
      <Dropdown title={title} content={content} />
    </>
  );
}
