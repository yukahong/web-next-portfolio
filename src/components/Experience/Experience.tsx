"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  return (
    <section
      id={"experience"}
      className="flex flex-col gap-8 items-center sm:w-full md:w-[40rem] lg:w-[58rem] xl:w-[64rem] 2xl:w-[80rem]"
    >
      <SectionHeader text={"Experience"}></SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience) => (
          <React.Fragment key={`experience-${experience.date}`}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#fff",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                border: "1px solid #d7c3f1",
                textAlign: "left",
                padding: "1rem 1.25rem",
                borderRadius: "0.75rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #d7c3f1",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "#d7c3f1",
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              <h3 className="text-xl text-primary font-medium">
                {experience.title}
              </h3>
              <h4 className="text-lg text-primary">{experience.location}</h4>
              {/* <span className="text-sm text-gray-500">{experience.date}</span> */}
              <p className="text-base text-body">{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
