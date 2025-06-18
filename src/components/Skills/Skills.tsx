import { skillsData } from "@/lib/data";
import Chip from "@/components/Chip/Chip";

export const Skills = () => {
  return (
    <section className="flex flex-col gap-5 items-center w-[50rem] md:w-[30rem] sm:w-[20rem]">
      <h2 className="px-4 text-primary font-semibold text-3xl">Skills</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skillsData.map((skill, index) => (
          <Chip key={`skill-${index}`} text={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
