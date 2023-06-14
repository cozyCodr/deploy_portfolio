import React from "react";

const ProjectItem = ({ image, title, languages, hostedLink, githubLink }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img src={image} alt="/" className="rounded-xl group-hover:opacity-20" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center">{languages}</p>
        <a href={hostedLink} target="_blank" style={{display: `${hostedLink === "#"? "none": "block"}`}}>
          <p className="text-center p-1 m-2 rounded-lg bg-white text-gray-700 cursor-pointer text-sm">
           preview
          </p>
        </a>
        <a href={githubLink} target="_blank" style={{display: `${githubLink === "#"? "none": "block"}`}}>
          <p className={`text-center p-1 m-2 rounded-lg text-gray-700 cursor-pointer text-sm bg-white`} >
            code
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
