import React from "react";
import "./aboutMe.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPicture } from "../../features/pictureSlider/pictureSliderSlice";
import { nextPicture } from "../../features/pictureSlider/pictureSliderSlice";
import { prevPicture } from "../../features/pictureSlider/pictureSliderSlice";

export const AboutMe = () => {
  const dispatch = useDispatch();
  const currentPicture = useSelector(selectCurrentPicture);

  const nextButtonClick = () => {
    dispatch(nextPicture());
  };

  const prevButtonClick = () => {
    dispatch(prevPicture());
  };

  return (
    <section id="about">
      <div className="container">
        <img id="about-image" alt="about" src={currentPicture.url} />
        <figcaption id="about-caption">{currentPicture.name}</figcaption>
        <button id="slides-previous" onClick={prevButtonClick}>
          <i className="arrow left"></i>
        </button>
        <button id="slides-next" onClick={nextButtonClick}>
          <i className="arrow right"></i>
        </button>
      </div>
      <div id="about-text">
        <h2 className="primary">About Me</h2>
        <p>
          Hi! My name is Mel, and I'm currently learning all I can about front
          and back-end web dev. through Codecademy. I've been interested in
          computers since I can remember and have been coding as a hobby for
          around 3 years now.
        </p>
        <p>
          Aside from coding I also love to watch Netflix, cook, and spend time
          with my people/pets.
        </p>
        <h3 className="secondary">Skills</h3>
        <ul>
          <li title="Python">
            <img
              alt="Python logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            />
          </li>
          <li title="HTML">
            <img
              alt="HTML logo"
              src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
            />
          </li>
          <li title="CSS">
            <img
              alt="CSS Logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
            />
          </li>
          <li title="JavaScript">
            <img
              alt="javascript logo"
              src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
            />
          </li>
          <li title="React">
            <img
              alt="react logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />{" "}
          </li>
          <li title="Redux">
            <img
              alt="redux logo"
              src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
