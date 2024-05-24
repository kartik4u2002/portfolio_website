import React from "react";
import { Outlet, Route } from "react-router-dom";

function About() {
  return (
    <div
      className="w-screen h-[30vw] bg-slate-900 flex gap-10 mt-5 justify-center items-center rounded-xl overflow-hidden"
      id="about"
    >
      <div className="w-1/4 bg-zinc-50 h-[20vw] rounded-xl ml-5 flex justify-center items-center overflow-hidden p-5">
        <img
          src="pic.jpg"
          alt="profile pic"
          className="rounded-full relative w-70 border-solid border-2 border-black"
        />
      </div>
      <div className="w-3/4 h-[20vw] bg-slate-500 rounded-lg flex justify-center items-center mr-5 p-5 overflow-y-auto">
        <div className="p-10 overflow-y-auto max-h-full">
          <p>
            About Me Hello! I'm [Your Name], a dedicated and passionate student
            currently in my 6th semester of a Bachelor of Computer Applications
            (BCA) program. With a strong foundation in web technologies, I am
            excited about the endless possibilities the web development field
            has to offer.
          </p>
          <p>
            My Journey From the moment I wrote my first line of code, I knew
            that web development was my calling. Over the past few years, I have
            immersed myself in learning and mastering various web technologies.
            My academic journey has equipped me with a solid understanding of
            computer science fundamentals, while my hands-on projects have
            honed my practical skills.
          </p>
          <p>
            Skills Here are some of the key technologies and tools I work with:
            React: Proficient in building dynamic and responsive user interfaces
            using React. I enjoy the challenge of creating seamless and
            efficient front-end applications. Vite: Skilled in using Vite for
            fast and optimized development workflows. I appreciate how Vite
            simplifies the setup and development of modern web projects. Node.js:
            Experienced in server-side programming with Node.js. I have built
            several backend applications and APIs, ensuring robust and scalable
            solutions.
          </p>
          <p>
            My Goal My ultimate goal is to become a professional web developer,
            creating innovative and user-friendly web applications. I am
            constantly learning and staying updated with the latest trends and
            best practices in web development to achieve this goal. I am
            particularly interested in full-stack development and look forward
            to contributing to impactful projects.
          </p>
          <p>
            Projects Project 1: A brief description of a significant project
            you've worked on, showcasing your skills in React, Vite, and Node.js.
            Project 2: Another example of your work, highlighting your
            problem-solving abilities and creativity in web development.
          </p>
          <p>
            Get in Touch I am always open to new opportunities and
            collaborations. If you have a project in mind or just want to
            connect, feel free to reach out to me at [Your Email] or connect
            with me on [LinkedIn Profile]. Thank you for visiting my profile!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
