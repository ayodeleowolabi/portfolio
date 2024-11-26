import { HERO_CONTENT } from "../../../constants";
import profilePic from "../../assets/ayophoto.jpeg";

const Hero = () => {
  return (
    
      <div className="flex flex-wrap lg:flex-nowrap my-0">
        <div className="w-full lg: w-1/2 m-7">
          <div className="flex flex-col items-center lg:justify-center lg:items-start">
            <h1 className="pb-5 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ">
              Ayo Owolabi
            </h1>
            <span
              className="bg-gradient-to-r from-red-600 via-slate-500
              to-green-500 bg-clip-text text-4xl tracking-tight text-transparent pb-6"
            >
              Full Stack Developer
            </span>
            <p className="my-1 max-w-xl py-0 font-light tracking-tighter lg:text-xl">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className=" w-full  flex justify-center lg:justify-evenly">

            <img src={profilePic} alt="Ayodele Owolabi" 
            className="p-8 lg:w-12/12"/>
        </div>
      </div>
  
  );
};

export default Hero;
