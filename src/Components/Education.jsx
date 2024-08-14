import React from "react";

import image from "../images/edu-bg.jpg";
const imageAltText = "purple and blue abstract background";

const Education = () => {
  return (
    <section className="light" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ color: "black" }}>Education</h2>
        <div className="education">
          <div style={{ flexWrap: "wrap" }}>
            <h3>Indian Institute Of Technology Madras</h3>
            <p>Bachelors of Science in Data Science and Programing</p>
            <p>2024 - 2028</p>
          </div>
          {/* <div style={{ flexWrap: "wrap", marginTop: "3em" }}>
          <h3>
            <a href="/certifications">Certifications</a>
          </h3>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
