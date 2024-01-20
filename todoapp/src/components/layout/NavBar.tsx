import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="fixed flex justify-center w-full bg-green py-20">
      <div className="container">
        <Link
          to="/"
          className="font-special text-xLarge text-center md:text-left text-white"
        >
          TodoApp
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
