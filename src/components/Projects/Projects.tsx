import { projectsData } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Project from "./Project/Project";

export const Projects = () => {
  return (
    <section
      id={"projects"}
      className="flex flex-col gap-8 items-center scroll-mt-[10rem] sm:w-full md:w-[40rem] lg:w-[58rem] xl:w-[64rem] 2xl:w-[80rem]"
    >
      <SectionHeader text={"Projects"}></SectionHeader>
      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <Project key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
