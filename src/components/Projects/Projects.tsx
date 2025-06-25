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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Project = (props: ProjectProps) => {
  const { title, description, tags, imageUrl, company } = props;
  return (
    <section className="group relative flex gap-4 min-h-64 border-solid border-primary border-[1px] px-10 py-8 rounded-xl shadow-md overflow-hidden transition">
      <div className="flex flex-col flex-grow-2 gap-2 h-full sm:max-w-[50%]">
        <h3 className="text-2xl text-primary font-medium">{title}</h3>
        <span className="text-base text-body">{description}</span>
        <div className="flex flex-wrap gap-2 justify-self-end">
          {tags.map((tag, index) => (
            <Chip key={`tag-${index}`} text={tag} size={"small"} />
          ))}
        </div>
      </div>
      <Image
        src={`${basePath}${imageUrl}` || `${basePath}/`}
        width={200}
        height={200}
        quality={95}
        property="true"
        alt={`image of ${title} project in ${company}`}
        className={`absolute hidden sm:block top-10 -right-7 w-[28rem] rounded-t-lg shadow-xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2`}
      />
    </section>
  );
};

export const Projects = () => {
  return (
    <section
      id={"projects"}
      className="flex flex-col gap-8 items-center w-[92rem] md:w-[58rem] sm:w-[20rem]"
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
