/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "I'm am a computer science enthusiast persuing an online BS in Data Science from Indian Institute of Technology Madras along with a Bachelors in Technology in Computer Science and Technology from Keshav Memorial institution Hyderabad.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Data Analysis",
  "Python programming",
  "Frontend development",
  "UI/UX design",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Data Science experience I continually look for new and better ways to make data interpretation more efficient along with developing new and better applications and software.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "70%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: window.innerWidth < 600 ? 1 : 2, // Adjust the number of columns based on the width of the browser
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 1rem 1rem 0", width: "100%" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
