import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <h2 className="primary">Let's Work Together!</h2>
      <p>
        Have a cool project that you'd like to explore together? Give me a
        shout! Just click on any of the sources below.
      </p>
      <ul>
        <li title="GitHub">
          <img
            alt="github"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
        </li>
        <li title="E-mail">
          <img
            alt="g-mail"
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
          />
        </li>
        <li title="Indeed">
          <img
            alt="indeed"
            src="https://i0.wp.com/iaccessibility.net/wp-content/uploads/2018/04/indeed-employer-logo.png"
          />
        </li>
      </ul>
    </section>
  );
};
