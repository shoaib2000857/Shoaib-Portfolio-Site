import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
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
    </section>
  );
};

export default Education;
