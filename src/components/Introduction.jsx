import React from "react";

const Introduction = () => {
  return (
    <>
      <section className="my-48 flex justify-center">
        <img
          src="src/assets/imgs/myPhoto.jpg"
          className="h-96 w-74 mx-8 border-2 border-solid rounded border-black"
        />
        <div>
          <h2 className="font-bold">Hi, my name is Werner!</h2>
          <p>An enthusiastic developer based in Manila, Philippines</p>
          <span className="flex justify-center">
            <a href="https://www.linkedin.com/in/werner-montala/">
              <img
                src="src/assets/imgs/Linkedin.png"
                className="w-8 h-8 border-black rounded"
              />
            </a>
            <a href="https://github.com/WrnerM">
              <img
                src="src/assets/imgs/GitHub-Mark.png"
                className="w-8 h-8 border-2 border-black rounded"
              />
            </a>
          </span>{" "}
          <p>Tech Stack:</p>
          <span className="flex justify-between">
            <img className="h-16 w-16" src="src/assets/imgs/html.png"></img>
            <img className="h-16 w-16" src="src/assets/imgs/css.png"></img>
            <img
              className="h-16 w-16"
              src="src/assets/imgs/javascript.png"
            ></img>
            <img className="h-16 w-16" src="src/assets/imgs/react.png"></img>
            <img className="h-16 w-16" src="src/assets/imgs/tailwind.jpg"></img>
          </span>
        </div>
      </section>
    </>
  );
};

export default Introduction;
