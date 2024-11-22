import { HERO_CONTENT } from "../../constants";
import profilePic from "../assets/ayophoto.jpeg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg: w-1/2 m-7">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Ayo Owolabi
            </h1>
            <span
              className="bg-gradient-to-r from-red-600 via-slate-500
              to-green-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className=" w-full  flex justify-center lg:justify-evenly">

            <img src={profilePic} alt="Ayodele Owolabi" 
            className="max-w-xs lg:max-w-xl p-8"/>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
