import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiDjango } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="">
      <h2 className="text-center text-2xl m-10 text-black">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-5xl text-slate-950" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-5xl text-slate-950" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandJavascript className="text-5xl text-slate-950" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-5xl text-slate-950" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-5xl text-slate-950" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-5xl text-slate-950" />
        </div>
        <div className="rounded-2xl p-4">
          <SiDjango className="text-5xl text-slate-950" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
