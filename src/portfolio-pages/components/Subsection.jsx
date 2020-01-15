import * as React from "react"

function createParagraph(description) {
    return <p>{description}</p>
}

const Subsection = ({title, description: descriptions}) => (
    <div className="description-with-title">
        <h2>{title}</h2>
        {descriptions.map(createParagraph)}
    </div>
);

export default Subsection;