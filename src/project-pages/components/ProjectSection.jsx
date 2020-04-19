import * as React from "react"

const ProjectSection = (props) => (
    <div className="project-section" id={props.id}>
        <h2>{props.title}</h2>
        {props.children}
    </div>
);

export default ProjectSection;