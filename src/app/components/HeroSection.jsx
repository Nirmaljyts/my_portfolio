"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import resumePDF from "../assets/Nirmal_resume.pdf";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
import FlipWord from "../components/Flipword";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import profile_img from "../../../public/images/profile_img.jpg";
import AchievementsSection from "./AchievementsSection";

const HeroSection = () => {
  const toContact = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const Roles = [
    "Web Developer",
    "React.Js Developer",
    "Vue.Js Developer",
    "UI/UX Designer",
    "Frontend Specialist",
  ];
  const AboutMe =
    "Frontend developer with 5 years of experience in React.js, Vue.js, and delivering scalable & user-friendly web applications across implementation and support projects. Proficient in building responsive UIs, translating requirements into efficient solutions, and collaborating with cross-functional teams. Passionate about crafting seamless user experiences and continually exploring the latest front-end trends, tools, and best practices. I thrive in frontend-focused roles and enjoy bringing designs to life through clean, maintainable code. Dedicated to continuous learning and contributing to collaborative, innovative teams to deliver impactful solutions.";

  return (
    <section id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl max-sm:text-3xl lg:leading-normal font-extrabold">
            <FlipWord text={Roles} />
          </h1>

          <TextGenerateEffectDemo text={AboutMe} />

          <div className="flex gap-5 mt-[2rem] ">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5 }}
              className="flex flex-row gap-5 max-sm:flex max-sm:flex-col max-sm:w-full"
            >
              <button onClick={() => toContact("#contact")}>
                <HoverBorderGradientDemo text={"Hire Me"} />
              </button>

              <a href={resumePDF} download>
                <HoverBorderGradientDemo text={"Download Resume"} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative max-sm:bg-transparent max-sm:mt-1 mt-[-16rem]">
            <div className=" bg-black py-6 flex flex-col justify-center sm:py-12  hover:rotate-3 duration-300">
              <div className="relative py-3 sm:max-w-sm sm:mx-auto">
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="absolute inset-0 backdrop-blur-sm bg-white/30 shadow-lg transform -rotate-15 rotate-6 rounded-3xl"></div>
                  <div className="relative px-4 py-4 bg-white shadow-lg sm:rounded-3xl rounded-xl">
                    <div className="flex justify-center mb-6">
                      <Image
                        src={profile_img}
                        alt="Stylish Glassmorphic Header Animation"
                        width={600}
                        height={400}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AchievementsSection/>
    </section>
  );
};

export default HeroSection;
