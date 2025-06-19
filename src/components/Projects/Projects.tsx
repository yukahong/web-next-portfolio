import Image from "next/image";
import { projectsData } from "@/lib/data";
import Chip from "@/components/Chip/Chip";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  company: string;
  imageUrl?: string | null;
};

const Project = (props: ProjectProps) => {
  const { title, description, tags, imageUrl, company } = props;
  return (
    <section className="flex gap-2 border-solid border-primary border-[1px] p-3 rounded-xl shadow-md">
      <div className="flex flex-col flex-1 gap-2">
        <h3 className="text-2xl text-primary font-medium">{title}</h3>
        <span className="text-base text-body">{description}</span>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Chip key={`tag-${index}`} text={tag} size={"small"} />
          ))}
        </div>
      </div>
      <Image
        src={imageUrl || "/"}
        width={200}
        height={200}
        quality={95}
        property="true"
        alt={`project image of ${company}`}
        className={"flex-1"}
      />
    </section>
  );
};

export const Projects = () => {
  return (
    <section
      id={"projects"}
      className="flex flex-col gap-5 items-center w-[92rem] md:w-[58rem] sm:w-[20rem]"
    >
      <SectionHeader text={"Projects"}></SectionHeader>
      <div className="grid grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <Project key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
