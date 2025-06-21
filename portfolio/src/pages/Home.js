import About from "../components/About";

export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center gap-2 sm:gap-16 text-center min-h-screen bg-yellow-50 text-purple-900 dark:bg-purple-950 dark:text-yellow-50 ">
      <About />
      <div className="flex-none sm:flex sm:flex-col py-8 pr-0 mr-0 sm:pr-8 sm:mr-8 justify-start ">
        {" "}
        <img
          className="w-24 h-24 md:w-64 md:h-64 border-2 border-purple-900 rounded-full dark:border-yellow-50"
          src="../../images/profile.jpg"
          alt="Manny Sobere"
        />
      </div>
    </div>
  );
}
