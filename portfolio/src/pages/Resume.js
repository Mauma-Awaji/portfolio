import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import { Skills } from "../components/Skills";

export default function Resume() {
  return (
    <>
      <Projects />
      <WorkExperience />
      <Education />
      <Skills />
    </>
  );
}
