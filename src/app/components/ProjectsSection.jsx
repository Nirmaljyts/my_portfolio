"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CareerZopt",
    description:
      "A user-friendly job searching platform that connects job seekers with employers. Features include job listings, advanced search filters, resume uploads, and application tracking, making the hiring process simple and efficient.",
    tag: ["All", "Web"],
    image: "/images/projects/jobsearching.jpg",
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React.js", "MySQL", "Node.js"],
  },
  {
    id: 2,
    title: "Zocratez",
    description:
      "This is a learning platform specialized for Japanese students to improve their knowledge of English. It provides a quiz section and recognizes images to identify the exact word in English.",
    tag: ["All", "Web", "Mobile"],
    image: "/images/projects/Empmansys.jpg",
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React.js", "Python", "MySQL"],
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
    technologies: ["React.js", "Nest js", "MySQL"],
  },
  {
    id: 4,
    title: "Waste Classify",
    description:
      "An admin web application designed for administrators to efficiently manage waste management processes, integrated with Google Image Search, Google Vision API, and Amazon S3 for secure image storage.",
    image: "/images/projects/wc.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React js", "Python Flask", "MySQL"],
  },
  {
    id: 5,
    title: "Hokushin",
    description:
      "This is a learning platform designed for Japanese students to improve their English skills. It features a canvas where users can draw Japanese letters, convert them into actual characters, and copy them to the canvas. The platform also includes a quiz section and image recognition to help identify the correct English words.",
    tag: ["All", "Web", "Mobile"],
    image: "/images/projects/quizapp.jpg",
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React.js", "Python", "MySQL"],
  },
  {
    id: 6,
    title: "PCP Attendance Management System",
    description:
      "A system designed to streamline employee attendance, leave, and shift management. It enables managers to mark attendance, manage leave requests, adjust shift timings, access employee details, and generate reports, improving overall workforce efficiency.",
    image: "/images/projects/datamanagement.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Vue.js", "PHP Laravel", "MySQL"],
  },
  {
    id: 7,
    title: "PCP Kitchen",
    description:
      "A system designed to manage kitchen operations by updating the status of food preparation, mapping paths to each ingredient and dish, providing delivery instructions, and scheduling the food preparation timeline using interactive Chart.js charts with drag-and-drop functionality. This enhances planning flexibility and overall workforce efficiency.",
    image: "/images/projects/rms.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Vue.js", "PHP Laravel", "MySQL"],
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

      {filteredProjects.length > 0 ? (
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
      ) : (
        <p className="text-center text-white text-sm py-8">No Projects</p>
      )}
    </section>
  );
};

export default ProjectsSection;
