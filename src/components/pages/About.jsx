import { ABOUT_ME } from "../../../constants";
import Technologies from "../Technologies";

const About = () => {
  return (
    <div className="p-4 lg:p-10">
      <h1 className="my-1 text-center text-4xl pb-7">
        About
        <span className="text-neutral-900"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="m-auto">
          <div className="flex grow lg:text-2xl">{ABOUT_ME}
          </div>
            <Technologies className="flex"/>
        </div>
      </div>
    </div>
  );
};

export default About;
