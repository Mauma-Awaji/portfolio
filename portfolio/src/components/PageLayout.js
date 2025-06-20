import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    // <div "></div>
    <>
      {" "}
      {/*-- Header from Header.js */}
      <Header />
      <main className="bg-gray-100 text-gray-800 flex flex-col md:min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
