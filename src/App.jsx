import "./index.css";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/pages/Hero.jsx";
import About from "./components/pages/About.jsx";
import Experience from "./components/pages/Experience.jsx";
import Technologies from "./components/Technologies.jsx";
import Project from "./components/pages/Project.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-500 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
