import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav className=" bg-slate-950 mb-10 flex items-center justify-between py-1">
        <div className="flex flex-shrink-0 items-center m-4">
            <ul className="flex ">
                <li className="p-3 hover:bg-slate-100 rounded-sm "><Link to="/">Home</Link></li>
                <li className="p-3 hover:bg-slate-100 rounded-sm"><Link to="/about">About</Link></li>
                <li className="p-3 hover:bg-slate-100 rounded-sm"><Link to="/experience">Experience</Link></li>
                <li className="p-3 hover:bg-slate-100 rounded-sm"><Link to="/projects">Projects</Link></li>
            </ul>
        </div>
        <img src="" alt="" />
        <div className="m-10 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/ayoowolabi/" className="hover:bg-slate-100 rounded-sm">
        <FaLinkedin />
            </a>
            <a href="https://github.com/ayodeleowolabi" className="hover:bg-slate-100 rounded-sm">

        <FaGithub />

            </a>
            <a href="https://www.instagram.com/iothesinger/" className="hover:bg-slate-100 rounded-sm">


        <FaInstagram />
            </a>
        </div>
    </nav>
};

export default Navbar