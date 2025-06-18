// import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import React from "react";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Education from "./components/Education";
import { Skills } from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
      {/*-- Header from Header.js */}
      <Header />

      <main className="flex justify-between flex-grow ">
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
      <Footer />
    </div>
  );
}

export default App;
