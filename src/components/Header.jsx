import React from "react";
import About from "./About";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <>
      <header
        className="font-semibold fixed top-0 left-0 right-0 flex 
                  justify-between rounded text-xl border-solid
                   border-black border-2 bg-slate-200"
      >
        <h1 className="mx-12 py-5">Werner.dev</h1>
        <ul className="flex mx-12 py-5">
          <li className="mx-6 hover:text-blue-600 hover:duration-300 delay-150 hover:drop-shadow-2xl ">
            <a href="#Home">Home</a>
          </li>
          <li className="mx-6 hover:text-blue-600 hover:duration-300 delay-150">
            <a href="#About">About</a>
          </li>
          <li className="mx-6 hover:text-blue-600 hover:duration-300 delay-150">
            Projects
          </li>
          <li className="mx-6 hover:text-blue-600 hover:duration-300 delay-150">
            Contact
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
