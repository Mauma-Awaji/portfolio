import About from "./About";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";
import Education from "./Education";
import { Skills } from "./Skills";

export default function Main() {
  return (
    <main className="flex justify-between flex-grow">
      {/* Left column */}
      <section className="w-1/4 p-6 bg-white shadow-md rounded">
        <Projects />
        <WorkExperience />
      </section>

      {/*-- Middle column */}
      <div className="flex-grow bg-gradient-to-b from-red-700 to-blue-500 text-white text-center p-16 shadow-lg">
        <About />
        <div>
          <img
            src="https://via.placeholder.com/300"
            alt="Something cool and computer related"
            className="mt-6 rounded shadow-md"
          />
        </div>
        <Contact />
      </div>

      {/*-- Right column */}
      <aside className="w-1/4 p-6 bg-gray-200 shadow-md rounded ml-auto">
        <img
          src="/images/profile.jpg"
          alt="My profile picture"
          className="mt-4 rounded-full shadow-md"
        />
        <Education />
        <Skills />
      </aside>
    </main>
  );
}
