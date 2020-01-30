import * as React from "react"

function createParagraph(description) {
    return (
        <>
            <h5>{description.title}:</h5>
            <p>{description.description}</p>
            <p><b>Nielsen's heuristic violated:</b> {description.heuristicViolation}</p>
            <p><b>Severity:</b> {description.severity}/4</p>
            <p><b>Recommendation:</b> {description.recommendation}<br/><br/></p>
        </>
    )
}

const SubsectionWithNielsenHeuristicDescriptions = ({title, description: descriptions}) => (
    <div className="description-with-title">
        <h3>{title}</h3>
        {descriptions.map(createParagraph)}
    </div>
);

export default SubsectionWithNielsenHeuristicDescriptions;