import React from "react";
import ProjectItem from "./ProjectItem";
import {
  bhelperImg,
  labinvImg,
  calcImg,
  twitterImg,
  emechImg} from "../assets"

const Projects = () => {
  

  return (
    <div id="projects" className="max-w-[1080px] m-auto md:pl-20 p-8 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        The following projects utilize frontend and backend technologies which
        include: JavaScript, React, Typescript, NextJs, Java, Flask, Postgres
        and More
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem 
          image={bhelperImg} 
          title="Bipolar Helper Site" 
          hostedLink="#"
          githubLink="https://github.com/cozyCodr/bapp"
        />
        <ProjectItem 
          image={twitterImg} 
          title="Twitter Clone" 
          hostedLink="https://tweetrr.netlify.app/"
          githubLink="https://github.com/cozyCodr/twitterclone"
        />
        <ProjectItem 
          image={labinvImg} 
          title="Lab Inventory Managemenent System" 
          hostedLink="#"
          githubLink="https://github.com/cozyCodr/Lab-Inventory-Management-System"
        />
        <ProjectItem 
          image={emechImg} 
          title="E mechanic Website" 
          hostedLink="https://e-mech.netlify.app"
          githubLink="#"
        />
        <ProjectItem 
          image={calcImg} 
          title="Simple Calculator" 
          hostedLink="https://simplecalc-cc.netlify.app/"
          githubLink="https://github.com/cozyCodr/simple-calculator"
        />
      </div>
    </div>
  );
};

export default Projects;
