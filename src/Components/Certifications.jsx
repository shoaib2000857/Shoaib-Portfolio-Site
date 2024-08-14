// src/Components/Certifications.jsx
import React from "react";

import image from "../images/light-bg.jpg";
const imageAltText = "purple and blue abstract background";

const Certifications = () => {
  return (
    <section className="padding" id="Certifications">
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
        <h2 style={{ color: "black" }}>Certifications</h2>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(600px, 1fr))",
            gap: "1rem",
          }}
        >
          <div style={{ flexWrap: "wrap", margin: "1em", marginTop: "3em" }}>
            <h3>Harvard</h3>
            <p>CS50X</p>
            <p>2024</p>
          </div>
          <div style={{ flexWrap: "wrap", margin: "1em", marginTop: "3em" }}>
            <h3>Udemy</h3>
            <p>100 Days of Code: The Complete Python Pro Bootcamp</p>
            <p>2024</p>
          </div>
          <div style={{ flexWrap: "wrap", margin: "1em", marginTop: "3em" }}>
            <h3>Udemy</h3>
            <p>The Complete 2024 Web Development Bootcamp</p>
            <p>2024</p>
          </div>
          <div style={{ flexWrap: "wrap", margin: "1em", marginTop: "3em" }}>
            <h3>Udemy</h3>
            <p>Java 17 Masterclass: Start Coding in 2024</p>
            <p>2024</p>
          </div>
          <div style={{ flexWrap: "wrap", margin: "1em", marginTop: "3em" }}>
            <h3>Udemy</h3>
            <p>Beginning C++ Programming - From Beginner to Beyond</p>
            <p>2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
