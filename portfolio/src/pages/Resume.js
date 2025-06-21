import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import { Skills } from "../components/Skills";

export default function Resume() {
  return (
    <>
      <div className="mx-24 mt-12 flex flex-col justify-start min-h-screen">
        {" "}
        <Projects />
        <WorkExperience />
        <Education />
        <Skills />
      </div>
    </>
  );
}
