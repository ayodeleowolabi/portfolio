import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return <nav className=" bg-slate-950 mb-10 flex items-center justify-between py-1">
        <div className="flex flex-shrink-0 items-center m-4">
            <h1 className="text-slate-50">AO</h1>
        </div>
        <img src="" alt="" />
        <div className="m-10 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/ayoowolabi/">
        <FaLinkedin />
            </a>
            <a href="https://github.com/ayodeleowolabi">

        <FaGithub />

            </a>
            <a href="https://www.instagram.com/iothesinger/">


        <FaInstagram />
            </a>
        </div>
    </nav>
};

export default Navbar