"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Landing Page landingwind",
    description: "Landing Page con Tailwind CSS, Framer Motion y React",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jae-Sarango/LandWind",
    previewUrl: "https://landiwindjae.netlify.app/",
  },
  {
    id: 2,
    title: "Potograpy cat ",
    description:
      "Aplicación de renderizado de imagenes de gatitos y descripción provenientes de  API CAT   ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jae-Sarango/app-gatitos",
    previewUrl: "https://appgatitos.netlify.app/",
  },
  {
    id: 3,
    title: "Tic-tac-toe",
    description: "juego",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jae-Sarango/tic-tac-toe",
    previewUrl: "https://tictactoejae.netlify.app/",
  },
  {
    id: 4,
    title: "Card pokemón ",
    description: "Charizard",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Jae-Sarango/charizard",
    previewUrl: "https://cardcharman.netlify.app/",
  },
  {
    id: 5,
    title: "Buscador de peliculas",
    description: "Aplicación para filtrar peliculas por medio de la Api omb ",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jae-Sarango/peliculas-",
    previewUrl: "https://peliculasjae.netlify.app/",
  },
  {
    id: 6,
    title: "Twitter Follower",
    description: "Flujo de seguidores Twitter",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jae-Sarango/TwitterFollowCard",
    previewUrl: "https://twitterfollowjae.netlify.app/",
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
    <section id="projects">
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
