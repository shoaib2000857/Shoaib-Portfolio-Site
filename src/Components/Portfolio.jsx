/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";
import bg from "../images/dark-bg.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://shoaib2000857.github.io/Shoaib-Portfolio-Site/",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "My CS50 Project",
    description: "My Project",
    url: "https://cs50project.shoaibssm.me",
  },
];

const Portfolio = () => {
  const isMobile = window.innerWidth <= 600;

  return (
    <section className="padding" id="portfolio">
      <img className="background" src={bg} alt={imageAltText} />
      <div
        style={{
          width: "90%",
          padding: "1rem",
          margin: isMobile ? "1rem auto" : "2rem auto", // Adjust margin for mobile and desktop
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ textAlign: "center",}}>Portfolio</h2>

        <img
          src={image}
          alt={imageAltText}
          style={{
            width: "70%",
            height: "30%",}}
        />
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", flexWrap: "wrap" }}
        >
          <div style={{ maxWidth: "100%", alignSelf: "center", flexWrap: "wrap" }}></div>
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
              overflowWrap: "break-word",
            }}
          >
            {projectList.map((project) => (
              <div className="box" key={project.title} style={{ backgroundColor: "white" }}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
                <p className="small">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
