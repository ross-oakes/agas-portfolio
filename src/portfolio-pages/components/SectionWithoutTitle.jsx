import * as React from "react"

function createParagraph(description) {
    return <p>{description}</p>
}

const Section = ({description: descriptions}) => (
    <div className="description-without-title">
        {descriptions.map(createParagraph)}
    </div>
);

export default Section;