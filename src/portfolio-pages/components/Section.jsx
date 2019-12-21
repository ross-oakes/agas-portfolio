import * as React from "react"

const Section = ({title, description}) => (
    <div className="description-with-title">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);

export default Section;