import React from "react";

function About() {
  return (
    <div className="w-screen h-[30vw] bg-slate-900 flex gap-10 mt-5 justify-center items-center rounded-xl overflow-hidden">
      <div className="w-1/4 bg-zinc-50 h-[20vw] rounded-xl ml-5 flex justify-center items-center overflow-hidden p-5">
        <img src="pic.jpg" alt="profile pic" className=" rounded-full relative w-70 border-solid border-2 border-black" />
      </div>
      <div className="w-3/4 h-[20vw] bg-slate-500 rounded-lg flex justify-center items-center mr-5">
        <p className="p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a
          fugiat velit similique atque, dolorem, nam quos libero eos molestiae
          expedita voluptates praesentium autem, repudiandae voluptate aliquam?
          Sit, nisi repudiandae!
        </p>
      </div>
    </div>
  );
}

export default About;
