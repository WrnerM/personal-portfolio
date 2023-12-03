import React from "react";

const Introduction = () => {
  return (
    <>
      <section
        id="Home"
        className="mt-12 mb-28 py-32 px-4  flex justify-center"
      >
        <img
          src="src/assets/imgs/myPhoto.jpg"
          className="h-96 w-74 mx-8 border-2 border-solid rounded-lg border-black"
        />
        <div className="mx-12 p-8 items-center space-y-4">
          <h2 className="font-semibold text-3xl font-mono text-sky-600 ">
            Hi, my name is Werner!
          </h2>
          <p>An enthusiastic developer based in Manila, Philippines</p>
          <div className="space-y-10">
            <span className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/werner-montala/"
                target="_blank"
              >
                <img
                  src="src/assets/imgs/linkedinLogo.png"
                  className="w-10 h-8 border-black rounded hover:scale-125 transition duration-500 cursor-pointer"
                />
              </a>
              <a href="https://github.com/WrnerM" target="_blank">
                <img
                  src="src/assets/imgs/GitHub-Mark.png"
                  className="w-8 h-8 border-black rounded hover:scale-125 transition duration-500 cursor-pointer"
                />
              </a>
            </span>
            <p className="">Tech Stack</p>
            <span className="flex justify-between">
              <img
                title="HTML"
                className="h-16 w-16 transition-transform transform hover:-translate-y-3"
                src="src/assets/imgs/html.png"
              ></img>
              <img
                title="CSS"
                className="h-16 w-16 transition-transform transform hover:-translate-y-3"
                src="src/assets/imgs/css.png"
              ></img>
              <img
                title="JavaScript"
                className="h-16 w-16 transition-transform transform hover:-translate-y-3"
                src="src/assets/imgs/javascript.png"
              ></img>
              <img
                title="React"
                className="h-16 w-16 transition-transform transform hover:-translate-y-3"
                src="src/assets/imgs/react.png"
              ></img>
              <img
                title="Tailwind"
                className="h-16 w-16 transition-transform transform hover:-translate-y-3"
                src="src/assets/imgs/tailwind.jpg"
              ></img>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
