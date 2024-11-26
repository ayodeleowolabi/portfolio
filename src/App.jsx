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
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      </div>
     
        <Navbar />
        <Routes>
          <Route path="/" element= {<Hero/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/projects" element= {<Project/>} />
          <Route path="/experience" element= {<Experience/>} />
        </Routes>
        

   
    </div>
  );
}

export default App;
