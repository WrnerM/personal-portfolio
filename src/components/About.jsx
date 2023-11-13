import React from "react";

const About = () => {
  return (
    <>
      <section
        id="About"
        className="flex justify-center mt-10 mb-40 bg-slate-300 p-28 "
      >
        <img
          src="src/assets/imgs/developerStockPhoto.jpg"
          className="h-96 ml-32 border-solid border-black rounded-lg border-2"
        ></img>

        <div className="mx-32">
          <h1 className="text-2xl text-sky-600">About Me:</h1>
          <h2 className="text-4xl">
            Front-end Developer based in Quezon City, Philippines
            <img
              src="src/assets/imgs/jeepney.png"
              className="h-8 inline mx-4"
            ></img>
          </h2>
          <br />
          <p>
            Hello, my name is Werner! You can call me Werns for short. I like
            going to the gym, reading many things, playing games, and talking to
            people. I'm a passionate junior front-end developer specializing in
            HTML, CSS, JavaScript, Tailwind CSS, and React. My journey in web
            development is driven by my love of reading, creating things, and
            being curious about how the web works, which led to me building web
            applications. Eager to collaborate, learn, and contribute to
            innovative projects, I bring a blend of technical skills and a
            creative mindset to the dynamic world of front-end development.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
