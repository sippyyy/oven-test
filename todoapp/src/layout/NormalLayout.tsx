import React from "react";
import { NavBar } from "../components";
import { Outlet } from "react-router-dom";

const NormalLayout: React.FC = () => {
  return (
    <div className="h-full">
      <NavBar />
      <div className="w-full h-[67px]"></div>
      <Outlet />
    </div>
  );
};

export default NormalLayout;
