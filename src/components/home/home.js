import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div className="home" id="home">
      <div id="text">
        <p className="secondary">Hello, World! I'm</p>
        <h1 className="primary">Mel</h1>
        <p>
          Aspiring Full Stack Engineer passionate about coding, cooking, and
          animals.
        </p>
      </div>
      <img alt="mel" src="https://i.imgur.com/fBOG6th.png" />
    </div>
  );
};
