import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
const ProjectItems = () => {
  const projectList = [
    {
      tile: "28 ",
      text: "COMPANIES",
      link: "#education",
      imgSrc: "/img/we2.jpg",
    },
    {
      tile: "828 ",
      text: "COMPLETED PROJECTS",
      link: "#girlchild",
      imgSrc: "/img/we3.jpg",
    },
    {
      tile: "1,200 ",
      text: "ON-GOING PROJECTS",
      link: "#empowerment",
      imgSrc: "/img/we4.jpg",
    },
    {
      tile: "500,000  ",
      text: "CO-FUNDED",
      link: "#livelihood",
      imgSrc: "/img/we5.jpg",
    },
    {
      tile: "130,000 ",
      text: "VOLUNTEERS ",
      link: "#livelihood",
      imgSrc: "/img/we5.jpg",
    },
    {
      tile: "1,450 ",
      text: "IMPLEMENTING PARTNERS",
      link: "#livelihood",
      imgSrc: "/img/we5.jpg",
    },
  ];
  return (
    <Wrapper>
      {projectList.map((item, index) => (
        <ProjectItem key={index} className="bg-secondaryColor-light">
          <div className="z-10 absolute text-center px-4 top-20 md:top-10 text-4xl font-bold text-tertiaryColor">
            <span className="text-6xl">{item.tile}</span>
            <br />
            <span>{item.text}</span>
          </div>
          <ProjectImg
            className="mix-blend-darken"
            src="/img/we3.jpg"
            alt={item.imgSrc}
          />
        </ProjectItem>
      ))}
    </Wrapper>
  );
};

export default ProjectItems;
const Wrapper = tw.div`w-full h-auto  flex flex-col items-center gap-10 md:flex-row md:gap-5`;
const ProjectItem = tw.div`w-full flex items-center flex-col relative  md:justify-center `;
const ProjectImg = tw.img`h-full w-full object-fill`;
