/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";
import Certifications from "./Components/Certifications";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Shoaib Sadiq Salehmohamed",
  title: "Data Science and Programing Student",
  email: "shoaibkulsums@gmail.com",
  gitHub: "ShoaibSM7",
  instagram:"Shoaib_SSM",
  linkedIn: "shoaib-sadiq-salehmohamed-a77812318",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education />
      <Certifications />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;



// import * as React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import About from "./Components/About";
// import Certifications from "./Components/Certifications";
// import Education from "./Components/Education";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import Portfolio from "./Components/Portfolio";

// import "./styles.css";

// const siteProps = {
//   name: "Shoaib Sadiq Salehmohamed",
//   title: "Data Science and Programing Student",
//   email: "shoaibkulsums@gmail.com",
//   gitHub: "ShoaibSM7",
//   instagram: "Shoaib_SSM",
//   linkedIn: "shoaib-sadiq-salehmohamed-a77812318",
//   medium: "",
//   twitter: "",
//   youTube: "",
// };

// const primaryColor = "#4E567E";
// const secondaryColor = "#D2F1E4";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div id="main">
//         <Header />
//         <Routes>
//           <Route
//             exact={true}
//             path="/"
//             element={
//               <>
//                 <Home name={siteProps.name} title={siteProps.title} />
//                 <About />
//                 <Education />
//                 <Portfolio />
//               </>
//             }
//           />
//           <Route path="/certifications" element={<Certifications />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//         </Routes>
//         <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
