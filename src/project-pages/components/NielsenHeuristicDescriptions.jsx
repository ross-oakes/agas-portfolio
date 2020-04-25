import * as React from "react"

function createParagraph(title, description, heuristicViolation, severity, recommendation) {
    return (
        <>
            <h5><b>{title}:</b></h5>
            <p>{description}</p>
            <p><b>Nielsen's heuristic violated:</b> {heuristicViolation}</p>
            <p><b>Severity:</b> {severity}/4</p>
            <p><b>Recommendation:</b> {recommendation}<br/><br/></p>
        </>
    )
}

const NielsenHeuristicDescriptions = ({title, description, heuristicViolation, severity, recommendation}) => (
    <div>
        {createParagraph(title, description, heuristicViolation, severity, recommendation)}
    </div>
);

export default NielsenHeuristicDescriptions;