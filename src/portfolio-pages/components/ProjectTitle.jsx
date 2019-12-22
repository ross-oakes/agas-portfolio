import * as React from "react"

const ProjectTitle = ({title, subtitle}) => (
    <div className="project-title">
        <h1><b>{title}</b></h1>
        <h2>{subtitle}</h2>
    </div>
);

export default ProjectTitle;