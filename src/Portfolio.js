// import Button from "./Button";
import React from "react";
import { projects } from "./Projects";

function Portfolio() {
    return (
        <div id="portfolio">
            <h1>This is my Portfolio section</h1>
            <div className="columns">
            {projects.map((project, index)=> (
                <div key={index} className="column">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <p>{project.tech}</p>
                    <a href="{project.gitHubLink}">{project.gitHubLink}</a>
                </div>
            )

            )};
            </div>
        </div>
        
    );
}

export default Portfolio;