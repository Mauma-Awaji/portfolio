// import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 flex flex-col md:min-h-screen">
      {/*-- Header from Header.js */}
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
