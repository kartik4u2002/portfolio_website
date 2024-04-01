import React from "react";

function Nav() {
  return (
    <div className="w-full  flex justify-between p-8 bg-zinc-900">
      <div>logo</div>
      <div className=" links flex gap-10 font-semibold items-end ">
        {["Home", "About", "Resume"].map((item, index) => (
          <a key={index} className="text-md capitalize ">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Nav;
