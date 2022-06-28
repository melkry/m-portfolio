import React from "react";
import "./projects.css";
import { projectsArr } from "./projectsArr";

export const Projects = () => {
  return (
    <section id="projects">
      <h2 className="primary">Projects</h2>
      <div id="cards">
        {projectsArr.map((card) => {
          return (
            <a href={card.url}>
              <div id={card.id} className="card">
                <img alt="project thumbnail" src={card.thumbnail} />
                <ul className="tags">
                  {card.tags.map((tag) => (
                    <li>{tag}</li>
                  ))}
                </ul>
                <h3 className="secondary">{card.name}</h3>
                <p>{card.desc}</p>
                <div className="button">
                  <p>Visit</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
