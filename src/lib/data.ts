import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
// import cashubImg from "@/cashubImg.png";
// import trendeeImg from "@/trendeeImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "畢業",
    location: "私立淡江大學",
    description: "就讀資訊管理學系。",
    icon: React.createElement(LuGraduationCap),
    date: "2019.09",
  },
  {
    title: "Front-End Developer",
    location: "虹堡科技股份有限公司",
    description:
      "入職於子公司，試用期通過後申請參與母公司專案 CasHUB 專案業務，擔任前端工程師。",
    icon: React.createElement(CgWorkAlt),
    date: "2019.09 - 2020.09",
  },
  {
    title: "Front-End Developer",
    location: "TVBS 聯利媒體股份有限公司",
    description:
      "前期駐點於關係企業 HTC 技術轉移兼協作，後期由 TVBS 電商團隊接回，開發前後端分離之初始版 Magento 電商網站。",
    icon: React.createElement(CgWorkAlt),
    date: "2020.10 - 2025.03",
  },
] as const;

export const projectsData = [
  {
    title: "CasHUB",
    description:
      "負責與設計師協調並與後端工程師對接，建立讀卡機後台多國語系管理介面，於一年內推出產品並上線。",
    tags: [
      "Laravel",
      "Docker",
      "Restful API",
      "jQuery",
      "Sass",
      "DataTable",
      "Chart.js",
      "jsTree",
      "i18n",
      "Webpack",
    ],
    // imageUrl: cashubImg,
    company: "Castles",
  },
  {
    title: "Trendee",
    description:
      "整合原本分離 IP 之電商業務，建立統一電子商城，從消費者端電商瀏覽、促銷至購物車及訂單管理完整之消費流程功能，並於發布上線後，持續維運、追蹤客戶使用情況，優化用戶使用者體驗，",
    tags: [
      "React",
      "JavaScript",
      "Magento PWA",
      "Sass",
      "Material UI",
      "GraphQL",
      "Apollo",
      "Node.js",
      "Google Analytics",
    ],
    // imageUrl: trendeeImg,
    company: "TVBS",
  },
  {
    title: "健康2.0 AI-bot 網頁版",
    description:
      "此為健康2.0 IP 新功能之測試市場版本，與關係企業 DeepQ 協作，建立靜態網站版本供公司進行市場調查，實測 1-2 個月後得到正面回饋，由該團隊接手並實裝於健康2.0 App",
    tags: ["React", "Next.js", "JavaScript", "AWS S3", "Tailwind"],
    // imageUrl: null,
    company: "TVBS",
  },
  {
    title: "大運動+ App 推播系統",
    description:
      "開發 TVBS 公司使用之內部表單系統，可於管理介面執行新增、編輯、刪除等 App 內推播排程。",
    tags: ["React", "Next.js", "TypeScript", "Shadcn", "Tailwind", "NextAuth"],
    // imageUrl: null,
    company: "TVBS",
  },
  {
    title: "大運動+ App 棒球12強活動",
    description: "以台灣棒球知識為主題之互動式小遊戲活動頁面。",
    tags: ["React", "Next.js", "JavaScript", "Tailwind", "AWS S3"],
    // imageUrl: null,
    company: "TVBS",
  },
  {
    title: "Persona AI 客群探索系統",
    description:
      "TVBS 公司內部使用，與 AI Team 協作，提供 Prompt 協助指引 AI 整理 TVBS 所提供之業務及資源，以利公司內部業務人員探索商業合作配套之可能性。",
    tags: ["React", "Next.js", "TypeScript", "Shadcn", "Tailwind"],
    // imageUrl: null,
    company: "TVBS",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Material UI",
  "Next.js",
  "NextAuth",
  "Node.js",
  "Tailwind",
  "GraphQL",
  "Apollo",
  "Magento PWA",
  "Shadcn",
] as const;
