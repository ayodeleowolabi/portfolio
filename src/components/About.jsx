import { ABOUT_ME } from "../../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-10 text-center text-4xl">
        About
        <span className="text-neutral-900"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg: w-1/2 lg: p-8 m-auto">
          <div className="flex items-center justify-center">{ABOUT_ME}

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
