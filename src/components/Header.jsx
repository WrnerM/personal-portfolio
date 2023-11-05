import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex justify-between font-sans font-medium text-xl p-5 border-solid border-black border-2 bg-slate-300">
        <h1 className="mx-6">Werner.dev</h1>
        <ul className="flex">
          <li className="mx-6">Home</li>
          <li className="mx-6">About</li>
          <li className="mx-6">Projects</li>
          <li className="mx-6">Contact</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
