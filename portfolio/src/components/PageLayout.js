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
      <main className="flex flex-col min-h-screen text-purple-950 bg-yellow-50 dark:bg-purple-950 dark:text-yellow-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
