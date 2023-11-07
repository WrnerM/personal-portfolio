import React from "react";

const About = () => {
  return (
    <>
      <section
        id="About"
        className="flex justify-center mt-10 mb-40 bg-slate-300 p-28"
      >
        <img
          src="src/assets/imgs/developerStockPhoto.jpg"
          className="h-96 ml-32"
        ></img>

        <div className="mx-32">
          <h1 className="text-2xl">About Me:</h1>
          <h2 className="text-4xl">
            Front-end Developer based in Manila, Philippines
            <img
              src="src/assets/imgs/jeepney.png"
              className="h-8 inline mx-4"
            ></img>
          </h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            porttitor varius velit non finibus. Vestibulum non posuere nunc.
            Maecenas non tempor arcu, et congue sapien. Nulla sit amet purus
            eros. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Duis nibh massa, finibus ac elit
            vitae, mattis molestie ante. Integer porta, tellus ac elementum
            cursus, tortor nisl rhoncus eros, vitae venenatis nisi ligula eget
            nisl. Nam porttitor, erat id efficitur pellentesque, magna est
            dignissim urna, vitae egestas tellus libero lobortis lectus.
            Phasellus sed dapibus sem.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
