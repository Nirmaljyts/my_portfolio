"use client";
import React, { useTransition, useState } from "react";

import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 lg:h-[19rem]">
        <li>
          Frontend Development: HTML5, CSS3, JavaScript, TypeScript, React Js,
          Vue Js, and Next Js.
        </li>
        <li>Backend Development: I&apos;m learning Node js.</li>
        <li>
          UI/UX Design: I have experience in designing intuitive user interfaces
          and engaging user experiences.
        </li>
        <li>
          CSS Frameworks: Proficient in using Tailwind CSS & Bootstrap to
          streamline the styling process and create beautiful designs.
        </li>
        <li>
          Responsive Design: Ensuring that web applications look great and
          function flawlessly across various devices and screen sizes is one of
          my top priorities.
        </li>
        <li>
          Testing and Debugging: Experienced in using Jest for unit testing to
          ensure the reliability and functionality of applications.
        </li>
        {/* <li>
          Database Management: Skilled in working with MySQL for database
          management and development.
        </li> */}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          BTech from Baselios Thomas I Catholicos College of Engineering &
          Technology (2016-2020)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>React Js (2019-2020)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <div className="max-sm:hidden">
          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          <p className="text-base lg:text-lg">
            I am a passionate web developer with 5 years of experience,
            specializing in creating interactive and responsive web
            applications. With a solid foundation in HTML, CSS, JavaScript,
            React Js, Vue Js, Next Js, Redux Toolkit and git, I am equipped to
            tackle a wide range of development challenges. As a quick learner, I
            am always eager to expand my knowledge and skill set, staying
            up-to-date with the latest technologies and best practices in web
            development. I thrive in collaborative environments and am excited
            about the opportunity to work with talented individuals to create
            amazing applications.
          </p>
          
          <div className="lg:h-80">
            <div className="flex flex-row justify-start mt-8 ">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>

            <div className="mt-8 ">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
