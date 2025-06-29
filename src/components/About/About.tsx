"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { motion } from "motion/react";

export const About = () => {
  return (
    <motion.section
      id={"about"}
      className="w-full flex flex-col items-center gap-8 scroll-mt-[10rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", delay: 0.1 }}
    >
      <SectionHeader text={"About Me"}></SectionHeader>
      <div className="flex flex-col gap-4 text-body text-base sm:w-full md:w-[40rem] lg:w-[58rem] xl:w-[64rem] 2xl:w-[80rem]">
        <span>
          起初接觸程式語言是從大學開始，透過課程學習了各種不同的程式語言，也激發了我對於開發的興趣，在校期間也修習了
          UIUX
          相關課程，學習將觀察內化於生活，使自己開發的產品能夠更貼近使用者。
        </span>
        <span>
          進入職場後，在達成任務目標之餘，同時也兼顧效率、美觀及實用性，開發專案類型涉略從企業內部系統、客製化服務、互動型活動頁面至電子商城，主要技能為
          Javascript、React、SASS，也不斷精進自身技能，於新專案中學習並使用
          NextJS 框架、Tailwind、Typescript，加速開發用時並提升程式碼品質。
        </span>
        <span>
          工作以外的閒暇之餘，除了睡眠、休息以外，近期的興趣是製作羊毛氈、緞帶花等手工藝，享受耐心及細心的作業時光。
        </span>
      </div>
    </motion.section>
  );
};

export default About;
