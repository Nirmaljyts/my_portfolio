"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Personal Growth and Stress Tracking Solution",
    description:
      "	Designed a platform enabling individuals to assess and improve resilience, emotional intelligence, and stress management through assessments, feedback, and performance tracking, fostering personal growth and well-being.",
    tag: ["All", "Web"],
    image: "/images/projects/resnav.jpg",

    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Ruby", "My sql"],
  },
  {
    id: 2,
    title: "Data management platform",
    description:
      "	This platform is a powerful POS data solution that transforms business analytics. It provides real-time sales insights, helping businesses make accurate, data-driven decisions. More than just basic reporting, it offers advanced analytics, identify growth opportunities, and optimize operations for higher profits. With its smart insights, businesses can stay ahead of market trends, gain a competitive edge, and achieve long-term success.",
    tag: ["All", "Web"],
    image: "/images/projects/datamanagement.jpg",

    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React js", "Python", "mariadb"],
  },
  {
    id: 3,
    title: "TaskWhiz",
    description:
      "The software application is to encourage employees to contribute their skills to various tasks in an organization. Upon the successful completion of task,the employees performance is evaluated,and they are rated and rewarded accordingly.",
    tag: ["All", "Web"],
    image: "/images/projects/taskwhiz.jpg",

    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React js", "Nest js", "MySql"],
  },
  {
    id: 4,
    title: "Waste Classify",
    description:
      "An admin web application, specifically designed for administrators to efficiently manage waste management processes, is integrated with Google Search for images, Google Vision API, and Amazon S3 bucket.",
    image: "/images/projects/wc.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React js", "python flask", "MySql"],
  },
  {
    id: 5,
    title: "Micro Blogging",
    description:
      "A microblogging application is a social media platform designed for quick sharing of short updates, thoughts, and content, such as text and images,with a wide audience.Users can interact by commenting on posts and chatting with each other,enhancing engagement and community building.",
    image: "/images/projects/mb.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React js", "Node js", "MongoDB"],
  },
  // {
  //   id: 3,
  //   title: "Task-Whiz",
  //   description:
  //     "The System is a web application to encourage employees to contribute their skills to various tasks in an organization. Upon the successful completion of the task, the employee’s performance is evaluated, and they are rated and rewarded accordingly.",
  //   image: "/images/projects/taskwhiz.jpg",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 6,
    title: "Restaurant Management System",
    description:
      "A restaurant management project involves designing and implementing acomprehensive system to streamline various aspects of restaurant operations, such as table reservations, order processing, inventory management, and customer interactions, aiming to enhance efficiency and customer satisfaction.",

    image: "/images/projects/rms.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React js", "Node js", "MongoDB"],
  },
  {
    id: 7,
    title: "E-commerce Application",
    description:
      " This application offers a curated selection of men's and ladies wear and shoes, providing a seamless browsing experience and easy purchasing options for discerning shoppers. Explore our diverse range of men's clothing and footwear to find the perfect style and fit for any occasion.",
    image: "/images/projects/ec.jpg",

    tag: ["All", "Web", "Personal projects"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Next js", "Sanity"],
  },
  {
    id: 8,
    title: "Quiz Application",
    description:
      "This application offers an engaging platform for users to test their knowledge across various topics, with interactive quizzes and instant feedback. Dive into a fun and educational experience, sharpening your skills while enjoying challenging trivia questions",
    image: "/images/projects/qa.jpg",

    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React js", "Node js"],
  },
  {
    id: 9,
    title: "Wallpaper Application",
    description:
      " This app features a seamless image downloading and sharing capability, comprehensive filtering options (including the latest and most relevant wallpapers, orientation, type, and colors), and a user-friendly day/night mode. Additionally, it supports infinite scrolling for an uninterrupted browsing experience and incorporates a powerful search function to help users quickly find the perfect wallpaper.",

    image: "/images/projects/wda.jpg",
    tag: ["All", "Web", "Mobile", "Personal projects"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React Native"],
  },
  {
    id: 10,
    title: "Employee Management System",
    description:
      "A web-based application used to manage jobs and employees. The portal consists of two main types of users: Employees and Admins. Employees can search for jobs, edit their profiles, and apply for jobs through the system. Admins can manage jobs, employees, and accept/reject job responses made by employees.",
    image: "/images/projects/Empmansys.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Angular"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-[4rem]">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal projects"
          isSelected={tag === "Personal projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
