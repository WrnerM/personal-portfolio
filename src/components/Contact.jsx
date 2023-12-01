import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="Contact"
        className="grid grid-cols-3 gap-4 mt-10 bg-slate-300 p-28 "
      >
        <h2 className="text-sky-600 font-mono text-3xl font-semibold flex justify-end">
          Let's Connect!
        </h2>
        <span className="text-3xl animate-bounce col-span-2"> 👇 </span>
        <p className="mx-40 col-span-3">
          I am open to exciting opportunities and collaborations. Feel free to
          get in touch with me via
          <a
            target="_blank"
            className="text-blue-500"
            href="wrnermontala@gmail.com"
          >
            &nbsp;email.&nbsp;
          </a>
          Connect with me on
          <a
            className="text-blue-500"
            target="_blank"
            href="https://www.linkedin.com/in/werner-montala/"
          >
            &nbsp;LinkedIn&nbsp;
          </a>
          to stay updated on my professional journey. For a more in-depth look
          at my coding projects, you can find me on
          <a
            target="_blank"
            className="text-blue-500"
            href="https://github.com/WrnerM."
          >
            &nbsp;GitHub
          </a>
          . Whether you have a specific project in mind, want to discuss
          potential opportunities, I'd love to hear from you!
        </p>
        <div className="col-span-3 flex justify-between">
          <a className="m-6 pr-6 hover:shadow-xl shadow-inner bg-white rounded flex justify-center hover:scale-125 transition duration-500 cursor-pointer">
            <img
              src="src/assets/imgs/emailLogo.png"
              className="w-18 h-14 rounded"
            />
            <span className="w-full h-14 ml-4 py-3 text-l rounded">
              wrnermontala@gmail.com
            </span>
          </a>
          <a
            target="_blank"
            className="m-6 px-6 hover:shadow-xl shadow-inner bg-white rounded flex justify-center hover:scale-125 transition duration-500 cursor-pointer"
            href="https://github.com/WrnerM"
          >
            <img
              src="src/assets/imgs/GitHub-Mark.png"
              className="w-14 h-14 rounded"
            />
            <span className="w-1/2 h-14 ml-4 py-3 text-xl rounded">Github</span>
          </a>
          <a
            target="_blank"
            className="m-6 px-6 hover:shadow-xl shadow-inner bg-white rounded mr-14 flex justify-center hover:scale-125 transition duration-500 cursor-pointer"
          >
            <img
              src="src/assets/imgs/linkedinLogo.png"
              className="w-18 h-14 rounded"
            />
            <span className="w-1/2 h-14 ml-4 py-3 text-xl rounded">
              Linkedin
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
