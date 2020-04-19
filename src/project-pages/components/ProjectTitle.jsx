import * as React from "react"

const ProjectTitle = ({title, subtitle, picture}) => (
    <div className="project-title">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        {picture && <img className="project-title-image" src={picture} alt=""/>}
    </div>
);

export default ProjectTitle;