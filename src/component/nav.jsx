import React from "react";

function Nav() {
  // Scroll function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen flex justify-between p-8 bg-zinc-900 bg">
      <div>
        <a href="https://github.com/kartik4u2002?tab=repositories">
          <img
            src="github.png"
            alt="github"
            className="sm:w-[50px] lg:w-[40px] hover:bg-white rounded-full"
          />
        </a>
      </div>
      <div className="links flex gap-10 font-semibold items-end">
        {[
          { label: "Home", id: "home" },
          { label: "About", id: "about" },
          { label: "Resume", id: "resume" }
        ].map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            onClick={() => scrollTo(item.id)}
            className="text-md capitalize hover:cursor-pointer hover:text-slate-400 scroll-smooth"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Nav;
