import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return <nav className=" bg-slate-950 mb-10 flex items-center justify-between py-1">
        <div className="flex flex-shrink-0 items-center m-4">
            <h1 className="text-slate-50 hover:bg-neutral-400 rounded-sm text-2xl"> <a href="/hero"> AO </a></h1>
            <li>
                <a href="/about" className="p-3 hover:bg-slate-100 rounded-sm">About</a>
                <a href="/project" className="p-3 hover:bg-slate-100 rounded-sm">Projects</a>
                <a href="/experience" className="p-3 hover:bg-slate-100 rounded-sm">Experience</a>
                
            </li>
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