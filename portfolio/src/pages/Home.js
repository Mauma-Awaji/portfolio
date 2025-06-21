import About from "../components/About";

export default function Home() {
  return (
    <div className="flex justify-center space-x-32 bg-purple-900 text-yellow-50 text-center min-h-screen">
      <About />
      <div className="flex flex-col p-8 justify-start ml-6">
        {" "}
        <img
          className="w-80 h-80 rounded-full"
          src="../../images/profile.jpg"
          alt="Manny Sobere"
        />
      </div>
    </div>
  );
}
