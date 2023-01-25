import React from "react";
import ProjectItem from "./ProjectItem";
import bhelperImg from "../assets/bhelper.jpg";
import labinvImg from "../assets/labinv.jpg";
import webInvImg from "../assets/webinv.jpg";

const Projects = () => {
  const projects = [
    {
      img: bhelperImg,
      languages: "Springboot, React, Bootstrap",
      title: "Bipolar Helper App",
    },
  ];

  return (
    <div id="projects" className="max-w-[1080px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        cupiditate harum numquam dignissimos aut deleniti repellendus beatae
        fuga sapiente hic, pariatur fugit accusantium delectus nesciunt! Nisi,
        maxime. Quibusdam, recusandae. Ullam.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem image={bhelperImg} title="Bipolar Helper Site" />
        <ProjectItem image={bhelperImg} title="Bipolar Helper Site" />
        <ProjectItem image={labinvImg} title="Lab Inventory management App" />
        <ProjectItem image={labinvImg} title="Lab Inventory management App" />
      </div>
    </div>
  );
};

export default Projects;
