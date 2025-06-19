import Dropdown from "./Dropdown";
export default function WorkExperience() {
  const title = "Work Experience";
  // array of work experiences as objects
  const experiences = [
    {
      title: "Phones Specialist",
      company: "Brigham Young University - Idaho",
      location: "Rexburg, Idaho",
      startDate: "August 2024",
      endDate: "December 2024",
      responsibilities: [
        "Reduced escalation rates to less than 30% by identifying caller issues, providing tailored solutions, and delivering efficient problem resolution during high-pressure situations",
        "Maintained strict compliance with FERPA regulations by protecting sensitive student information, ensuring 100% confidentiality and trust in all interactions",
        "Accommodated and assisted frustrated callers; dropped non-thriving language to below 5%; employed patience and empathy to diffuse tense situations, resulting in improved caller satisfaction and positive feedback",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Brigham Young University - Idaho",
      location: "Rexburg, Idaho",
      startDate: "January 2022",
      endDate: "July 2022",
      responsibilities: [
        "Mentored students in Python and Excel over a 6-month period, guiding students to analyze engineering problems and develop programs to solve complex issues",
        "Debugged Python programs, enhancing proficiency in identifying and resolving coding errors efficiently",
      ],
    },
  ];
  const content = (
    <>
      {experiences.map((experience, index) => (
        <>
          <ul key={index} className="list-disc pl-5">
            <li>
              <Dropdown
                title={
                  <p className="text-lg underline">
                    {experience.title} {experience.startDate} -{" "}
                    {experience.endDate} {experience.company} -{" "}
                    {experience.location}
                  </p>
                }
                content={
                  <ul className="list-disc pl-5">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      )
                    )}
                  </ul>
                }
              />
            </li>
          </ul>
        </>
      ))}
    </>
  );
  return <Dropdown title={title} content={content} />;
}
