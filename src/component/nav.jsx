import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <div className="w-screen flex justify-between p-8 bg-zinc-900 bg">
      <div>logo</div>
      <div className="links flex gap-10 font-semibold items-end">
        {["Home", "About", "Resume"].map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase()}`} className="text-md capitalize hover:cursor-pointer hover:text-slate-400">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
