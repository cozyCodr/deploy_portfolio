import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Fullstack Engineer | InterWebb",
    duration: "5 months",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ratione!",
  },
  {
    year: 2017,
    title: "Technite | Kwese!",
    duration: "1 year",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ratione!",
  },
  {
    year: 2016,
    title: "Web Developer | Sellers Of Africa",
    duration: "1 year",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ratione!",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
