import React, { useState } from "react";
// import Modal from "../Modal";

const ProjectList = () => {
  const [projectScreenshots] = useState([
    {
      name: "Lord of the Rings RPG",
      description: "A simple role-playing game set in Middle Earth",
    },
    {
      name: "Portfolio Generator",
      description:
        "A command line app that lets any coder easily create a professional looking portfolio",
    },
    {
      name: "Just Tech News",
      description:
        "A social media site for connecting with others and sharing the news",
    },
    {
      name: "TaskMaster",
      description:
        "A handy minimalist app for keeping your daily tasks organized",
    },
    {
      name: "Weather Dashboard",
      description: "Find local conditions and forecasts anywhere in the US!",
    },
  ]);

  //   const currentProjects = projectScreenshots.filter(
  //     (projectScreenshots) => photo.category === category
  //   );
  //   const [currentPhoto, setCurrentPhoto] = useState();

  //   const toggleModal = (image, i) => {
  //     setCurrentPhoto({ ...image, index: i });
  //     setIsModalOpen(!isModalOpen);
  //   };
  return (
    <div>
      <div className="flex-row">
        {projectScreenshots.map((i) => (
          <img
            src={require(`../../assets/small/${i}.png`)}
            // alt={image.name}
            className="img-thumbnail mx-1"
            // onClick={() => toggleModal(image, i)}
            key={projectScreenshots.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
