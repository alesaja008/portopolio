"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    > 
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After graduating with a degree in Information Systems, I decided to focus on programming. I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally finding a solution to a problem. I am always eager to learn new technologies. I'm currently looking for a full-time position as a frontend developer. When I'm not coding, I enjoy playing video games, watching movies, and . I also enjoy learning new things. I'm currently learning about history and philosophy. I'm also learning to play the guitar.
      </p>

 



      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
