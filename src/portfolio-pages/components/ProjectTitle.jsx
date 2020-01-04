import * as React from "react"

const ProjectTitle = ({title, subtitle}) => (
    <div className="project-title">
        <h1><b>{title}</b></h1>
        <h3>{subtitle}</h3>
    </div>
);

export default ProjectTitle;