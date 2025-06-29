"use client";

import Image from "next/image";
import Chip from "@/components/Chip/Chip";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  company: string;
  imageUrl?: string;
  url?: string | null;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const Project = (props: ProjectProps) => {
  const { title, description, tags, imageUrl, company, url } = props;
  const projectRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.2 1"],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.section
      ref={projectRef}
      className={`group relative flex gap-4 min-h-64 
        border-solid border-primary border-[1px] 
        rounded-xl shadow-md overflow-hidden transition
        sm:flex-col sm:items-center sm:px-4 sm:py-3
        md:items-start md:px-8 md:py-6 
        `}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      transition={{ type: "tween", delay: 0.1 }}
    >
      <div
        className={`flex flex-col gap-2 h-full 
        sm:max-w-full 
        md:max-w-[50%]
        `}
      >
        {url ? (
          <a target="_blank" href={url} className={"cursor-pointer"}>
            <h3 className="text-2xl text-primary font-medium">{title}</h3>
          </a>
        ) : (
          <h3 className="text-2xl text-primary font-medium">{title}</h3>
        )}
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
        className={`block top-10 -right-5 w-[28rem] rounded-t-lg shadow-xl
        sm:h-[15rem] sm:-right-3 sm:object-cover sm:object-left-top sm:rounded-lg
        md:absolute md:-right-40
        lg:-right-5
        2xl:right-4

        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        `}
      />
    </motion.section>
  );
};

export default Project;
