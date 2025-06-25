import { skillsData } from "@/lib/data";
import Chip from "@/components/Chip/Chip";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

export const Skills = () => {
  return (
    <section
      id={"skills"}
      className="flex flex-col gap-8 items-center sm:w-full md:w-[40rem] lg:w-[58rem] xl:w-[64rem] "
    >
      <SectionHeader text={"Skills"}></SectionHeader>
      <div className="flex flex-wrap gap-3 justify-center">
        {skillsData.map((skill, index) => (
          <Chip key={`skill-${index}`} text={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
