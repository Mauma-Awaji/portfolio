// import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import ContactPage from "./pages/ContactPage";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* The PageLayout component wraps the main content of the app */}
        {/* It includes the Header and Footer components, and uses Outlet to render nested routes */}
        {/* All other routes/pages are children of Layout and contain its features which are Header and Footer */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contactme" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
