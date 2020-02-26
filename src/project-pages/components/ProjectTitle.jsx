import * as React from "react"

const ProjectTitle = ({title, subtitle, picture}) => (
    <div className="project-title">
        <h1><b>{title}</b></h1>
        <h3>{subtitle}</h3>
        {picture && <img className="project-title-image" src={picture} alt=""/>}
    </div>
);

export default ProjectTitle;