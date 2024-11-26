import { EXPERIENCE } from "../../../constants";

const Experience = () => {
  return (
    <div className="border-b m-10">
      <h1 className="text-center text-3xl pb-7"> Experience</h1>
      {EXPERIENCE.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg: w-1/4">
            <p className="mb-2 text-sm text-neutral-400"> {experience.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">
              {experience.role} -{" "}
              <span className="text-sm">{experience.company}</span>
            </h6>
            <p className="mb-4 text-neutral-400">{experience.description}</p>
            <div>
              {experience.technologies && experience.technologies.length > 0 ? (
                experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-slate-200"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <p className="text-gray-500"></p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
