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
        {/* <p className="w-2/3">
          I'm open to exciting opportunities and collaborations. Feel free to
          get in touch with me via email at YourEmail@example.com. Connect with
          me on LinkedIn to stay updated on my professional journey: Your
          LinkedIn Profile. For a more in-depth look at my coding projects, you
          can find me on GitHub: Your GitHub Profile. Whether you have a
          specific project in mind, want to discuss potential opportunities, or
          just want to chat about all things tech, I'd love to hear from you!
        </p> */}
      </section>
    </>
  );
};

export default Contact;
