import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "Feb 2023 - Present",
    title: "Fullstack Engineer | InterWebb",
    duration: "",
    details:
      "This role encompasses building and securing APIs, configuring deployments, managing databases, setting up domain names and SSL, collaborating with frontend teams, documenting APIs, and taking ownership of backend projects. It includes configuring deployment strategies, such as CI/CD pipelines and cloud platforms, ensures efficient app and service deployment. Collaboration with frontend teams enables seamless integration and effective communication between components. It also involves documenting APIs with comprehensive information and keeping the documentation up to date is essential."
  },
  {
    year: "Sept 2022 - Jan 2023",
    title: "Fullstack Engineer | InterWebb",
    duration: "5 months",
    details:
      "As a fullstack engineer at Interwebb, I utilized my expertise in Next.js, Prisma, and PostgreSQL to develop scalable and user-friendly web applications. I worked on both front-end and back-end aspects of projects, including developing web pages and components with Next.js, designing the database schema and writing complex queries with Prisma and PostgreSQL. I was involved in code reviews, performance optimization, and bug fixing.",
  },
  {
    year: 2017,
    title: "Technite | Kwese!",
    duration: "1 year",
    details:
      "As a technical support specialist at Kwese, I utilized my strong communication and problem-solving skills to provide excellent customer service to clients, resolving customer issues in a timely and efficient manner, leveraging my technical knowledge and experience to provide knowledgeable and accurate support.",
  },
  {
    year: 2016,
    title: "Web Developer | Sellers Of Africa",
    duration: "1 year",
    details:
      "At Sellers of Africa, I worked as a web developer using WordPress, Bootstrap, HTML, CSS, and JavaScript to build and maintain the company's website. I ensured the website was responsive, user-friendly, and technically sound while also implementing custom design elements and functionality.",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className=" m-auto md:pl-[10rem] md:p-20 p-2 py-16 bg-[#001b5e]"
    >
      <h1 className="text-4xl font-bold pb-5 text-white">Experience</h1>
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
