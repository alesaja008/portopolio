import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/pertamina.png";
import rmtdevImg from "@/public/idscore.png";
import wordanalyticsImg from "@/public/metra tv.png";
import bintangSempurna from "@/public/bintangsempurna.png";
import drlube from "@/public/mobile apps.png";
import mentari from "@/public/mentari.jpeg";
import monev from "@/public/monev.jpeg";
import sikompak from "@/public/sikompak.jpeg";
import telkommetra from "@/public/telkommetra.jpeg";
import telkompajakku from "@/public/telkompajakku.jpeg";
import career from "@/public/career.jpeg";

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
    title: "edspert.id bootcamp",
    location: "Online",
    description:
      "learn react js 1 month",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "hacktiv8 bootcamp",
    location: "Online",
    description:
      "learn react js 1 month",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Food and Beverage Manager",
    location: "Kota Tangerang",
    description:
      "I build other people's businesses and manage all operations and traffic.",
    icon: React.createElement(FaReact),
    date: "2018 ",
  },
  {
    title: "UI/UX Design ",
    location: "PT. Bintang Sempurna",
    description:
      "I build other people's businesses and manage all operations and traffic.",
    icon: React.createElement(FaReact),
    date: "2020 - Now ",
  },
  {
    title: "research and development",
    location: "PT. Bintang Sempurna",
    description:
      "I build other people's businesses and manage all operations and traffic.",
    icon: React.createElement(FaReact),
    date: "2017-2020 ",
  },
  {
    title: "operator machine",
    location: "PT. Bintang Sempurna",
    description:
      "I build other people's businesses and manage all operations and traffic.",
    icon: React.createElement(FaReact),
    date: "2015-2017 ",
  },
  {
    title: "Computer Graphics Operator",
    location: "PT. Bintang Sempurna",
    description:
      "I build other people's businesses and manage all operations and traffic.",
    icon: React.createElement(FaReact),
    date: "2013 - 2015 ",
  },
  {
    title: "Frontend Developer",
    location: "PT. Zayn Developer Technology",
    description:
      "I build other people's businesses and manage all operations and traffic.",
    icon: React.createElement(FaReact),
    date: "2021 ",
  },
] as const;

export const projectsData = [
  {
    title: "pertaminalubricants.com",
    description:
      "lorem aja dulu dah",
    tags: ["Codeignaiter", "Boostrap"],
    imageUrl: corpcommentImg,
  },
  {
    title: "bintangsempurna.co.id",
    description:
      "lorem aja dulu dah",
    tags: ["Next js", "Nodejs", "Boostrap", "SQL", "Laravel", "Vue JS"],
    imageUrl: bintangSempurna,
  },
  {
    title: "idscore.id",
    description:
      "lorem aja dulu dah",
    tags: ["Codeignaiter", "Boostrap"],
    imageUrl: rmtdevImg,
  },
  {
    title: "metra.tv",
    description:
      "lorem aja dulu dah",
    tags: ["Laravel", "Bootstrap"],
    imageUrl: wordanalyticsImg,
  },
  // tambahan
  {
    title: "drlube pertaminalubricants",
    description:
      "lorem aja dulu dah",
    tags: ["Laravel", "Bootstrap"],
    imageUrl: drlube,
  },
  {
    title: "mentarianakku.com",
    description:
      "lorem aja dulu dah",
    tags: ["WordPress"],
    imageUrl: mentari,
  },
  {
    title: "monev PUPR",
    description:
      "lorem aja dulu dah",
    tags: ["Codeignaiter", "Boostrap"],
    imageUrl: monev,
  },
  {
    title: "sikompak PUPR",
    description:
      "lorem aja dulu dah",
    tags: ["Codeignaiter", "Bootstrap"],
    imageUrl: sikompak,
  },
  {
    title: "telkommetra.co.id",
    description:
      "lorem aja dulu dah",
    tags: ["Laravel", "Bootstrap"],
    imageUrl: telkommetra,
  },
  {
    title: "Telkompajakku",
    description:
      "lorem aja dulu dah",
    tags: ["WordPress"],
    imageUrl:telkompajakku,
  },
  {
    title: "PT bintang sempurna career",
    description:
      "lorem aja dulu dah",
    tags: ["WordPress"],
    imageUrl: career,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Boostrap",
  "JavaScript",
  "React JS",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "Framer Motion",
  "Adobe Collection",
  "Research and Development",
  "SketchUp",
  "Photography",
  "Branding Company",
  "analytical research,"
] as const;
