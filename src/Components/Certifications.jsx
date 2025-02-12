// src/Components/Certifications.jsx
import React from "react";

import image from "../images/light-bg.jpg";
const imageAltText = "purple and blue abstract background";

// const image2 = "../images/woman-with-tabet.jpg";

const certificationsList = [
  {
    title: "CS50X",
    description:
      "Harvard's Introduction to Computer Science course. Topics include algorithms, data structures, and programming languages.",
    //image: image2,
    url: "https://cs50.harvard.edu/certificates/16aea33a-336d-44bd-a0cb-3cd77b3b0e8f.png?size=letter",
  },
  {
    title: "Udemy 100 Days of Code: The Complete Python Pro Bootcamp (in progress) ",
    description: "Course that covers Python programming, data science, web development, and more.",
    // image: image2,
    url: "https://www.udemy.com/course/100-days-of-code/",
  },
  {
    title: "Udemy The Complete 2024 Web Development Bootcamp (in progress) ",
    description:
      "A comprehensive web development course that covers HTML, CSS, JavaScript, Node.js, and more.",
    // image: image2,
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },
  {
    title: "Udemy Java 17 Masterclass: Start Coding in 2024 (in progress) ",
    description:
      "A comprehensive Java course that covers object-oriented programming, data structures, and more.",
    // image: image2,
    url: "https://www.udemy.com/course/java-the-complete-java-developer-course/",
  },
  {
    title: "Udemy Beginning C++ Programming - From Beginner to Beyond (in progress) ",
    description:
      "A comprehensive C++ course that covers object-oriented programming, data structures, and more.",
    // image: image2,
    url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/",
  },
];

const Certifications = () => {
  const isMobile = window.innerWidth <= 600;
  return (
    <section className="padding" id="Certifications">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          width: "90%",
          padding: "1rem",
          margin: isMobile ? "1rem auto" : "2rem auto", // Adjust margin for mobile and desktop
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ textAlign: "center", color: "black" }}>Certifications</h2>

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
            {certificationsList.map((certification) => (
              <div className="box" key={certification.title} style={{ backgroundColor: "white" }}>
                <a href={certification.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{certification.title}</h3>
                </a>
                <p className="small">{certification.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

{
  /* <img src={certification.image} alt={certification.title} style={{ width: "50%", height: "80%", margin: "0 auto" }} /> */
}
