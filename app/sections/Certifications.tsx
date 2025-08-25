"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "../../src/images/light-bg.jpg";

const certifications = [
  {
    title: "CS50X",
    description:
      "Harvard's Introduction to Computer Science course. Topics include algorithms, data structures, and programming languages.",
    url: "https://cs50.harvard.edu/certificates/16aea33a-336d-44bd-a0cb-3cd77b3b0e8f.png?size=letter",
  },
  {
    title: "Udemy 100 Days of Code: The Complete Python Pro Bootcamp (in progress)",
    description: "Course that covers Python programming, data science, web development, and more.",
    url: "https://www.udemy.com/course/100-days-of-code/",
  },
  {
    title: "Udemy The Complete 2024 Web Development Bootcamp (in progress)",
    description:
      "A comprehensive web development course that covers HTML, CSS, JavaScript, Node.js, and more.",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },
  {
    title: "Udemy Java 17 Masterclass: Start Coding in 2024 (in progress)",
    description:
      "A comprehensive Java course that covers object-oriented programming, data structures, and more.",
    url: "https://www.udemy.com/course/java-the-complete-java-developer-course/",
  },
  {
    title: "Udemy Beginning C++ Programming - From Beginner to Beyond (in progress)",
    description:
      "A comprehensive C++ course that covers object-oriented programming, data structures, and more.",
    url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/",
  },
  // Newly added entries
  {
    title: "Deloitte Forage Virtual Internship Simulation",
    description:
      "Completed Deloitte Technology Virtual Internship simulation on Forage (consulting & technology case tasks).",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_dLm4iG9aarv9qSbLi_1751649575059_completion_certificate.pdf",
  },
  {
    title: "Postman Student API Fundamentals",
    description:
      "Completed Postman Student API Fundamentals training covering APIs, requests, collections, tests, environments, and collaboration basics.",
    url: "https://www.postman.com/student-program/",
  },
  {
    title: "Prakalp - First Prize & Coordinator",
    description:
      "Achieved First Prize and served as event coordinator for Prakalp (innovation / project showcase).",
    url: "#",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <Image
        src={bg}
        alt="purple and blue abstract background"
        fill
        unoptimized
        className="object-cover opacity-30"
      />
      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="heading-gradient text-3xl md:text-4xl font-semibold text-center mb-12">
          Certifications
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass p-6 flex flex-col"
            >
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold mb-3 leading-snug hover:underline"
              >
                {c.title}
              </a>
              <p className="text-sm opacity-80 leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
