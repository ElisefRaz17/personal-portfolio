import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5  pb-2">
          Contact Me
        </h2>
        <p>
          I currently work as a Technical Associate but always open to expand my work through volunteer and freelance work. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> frazier.elise07@gmail.com
        </p>
        <p className="py-2">
         <a href="https://www.linkedin.com/in/elise-frazier-89b356180/">LinkedIn</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;