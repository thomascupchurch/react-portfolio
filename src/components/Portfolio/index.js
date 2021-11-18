import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "LOTR",
      description: "A simple role-playing game set in Middle Earth",
    },
    {
      name: "PortfolioGenerator",
      description:
        "A command line app that lets any coder easily create a professional looking portfolio",
    },
    {
      name: "SocialMediaSite",
      description:
        "A social media site for connecting with others and sharing the news",
    },
    {
      name: "TaskApp",
      description:
        "A handy minimalist app for keeping your daily tasks organized",
    },
    {
      name: "Weather",
      description: "Find local conditions and forecasts anywhere in the US!",
    },
  ];
  return (
    <div className="flex-row">
      <section id="projects">
        <a href="https://github.com/thomascupchurch/LOTR-RPG">
          Lord of the Rings RPG
        </a>
        <p>A simple role-playing game set in Middle Earth</p>
        <div>
          <img
            src={require("../../assets/small/LOTR.png")}
            alt="LOTR RPG"
            className="img-thumbnail mx-1"
          />
        </div>

        <a href="https://github.com/thomascupchurch/portfolio-generator">
          Portfolio Generator (CLI)
        </a>
        <p>
          A command line app that lets any coder easily create a professional
          looking portfolio
        </p>
        <div>
          <img
            src={require("../../assets/small/LOTR.png")}
            alt="LOTR RPG"
            className="img-thumbnail mx-1"
          />
        </div>

        <a href="https://github.com/thomascupchurch/just-tech-news">
          Just-Tech-News
        </a>
        <p>
          A social media site for connecting with others and sharing the news
        </p>
        <div>
          <img
            src={require("../../assets/small/LOTR.png")}
            alt="LOTR RPG"
            className="img-thumbnail mx-1"
          />
        </div>

        <a href="https://github.com/thomascupchurch/miniature-eureka">
          NoteTaker
        </a>
        <p>A handy minimalist app for keeping your daily tasks organized</p>
        <div>
          <img
            src={require("../../assets/small/LOTR.png")}
            alt="LOTR RPG"
            className="img-thumbnail mx-1"
          />
        </div>

        <a href="https://github.com/thomascupchurch/weather-dashboard">
          Weather Dashboard
        </a>
        <p>Find local conditions and forecasts anywhere in the US!</p>
        <div>
          <img
            src={require("../../assets/small/LOTR.png")}
            alt="LOTR RPG"
            className="img-thumbnail mx-1"
          />
        </div>

        <a href="https://github.com/absius/sparkle-safe-ii">Sparkle-Safe</a>
        <p>An innovative app to catalog your fine jewelry</p>
        <div>
          <img
            src={require("../../assets/small/LOTR.png")}
            alt="LOTR RPG"
            className="img-thumbnail mx-1"
          />
        </div>
      </section>
    </div>
  );
}
export default Portfolio;
