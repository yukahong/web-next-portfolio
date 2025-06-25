"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "@/components/Link/Link";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import React from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const Introduction = () => {
  return (
    <section
      id={"home"}
      className="flex flex-col gap-5 justify-center items-center sm:w-full md:w-[40rem] lg:w-[58rem] xl:w-[64rem] 2xl:w-[80rem]"
    >
      <motion.div>
        <Image
          src={`${basePath}/profile.jpg`}
          width={200}
          height={200}
          quality={95}
          property="true"
          alt="Picture of the author"
          className="h-24 w-24 rounded-full border-solid border-4 border-white shadow-md shadow-gray-300"
        />
      </motion.div>
      <motion.div className="flex flex-col gap-3 items-center">
        <div className="text-3xl text-body font-medium">
          哈囉～！我是 Yuka！
        </div>
        <div className="text-2xl text-body">
          具備約莫五年之前端軟體開發經驗，其中四年皆使用
          React，持續精進自我以利提供兼具美觀與效能之產品服務，熱愛學習及挑戰新的事物，具有良好自學能力。
        </div>
      </motion.div>
      <motion.div className="flex gap-2">
        <Link text={"Contact"} url={"#contact"} style={"base"} />
        <Link
          text={""}
          url={"/"}
          style={"secondary"}
          icon={React.createElement(LuLinkedin)}
          isCircle={true}
        />
        <Link
          text={""}
          url={"/"}
          style={"secondary"}
          icon={React.createElement(LuGithub)}
          isCircle={true}
        />
      </motion.div>
    </section>
  );
};

export default Introduction;
