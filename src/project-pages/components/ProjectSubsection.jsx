import * as React from "react"

const ProjectSubsection = (props) => (
    <div className="project-subsection">
        <h3>{props.title}</h3>
        {props.children}
    </div>
);

export default ProjectSubsection;