import * as React from "react"

const createDescription = (description, additionalClassName) => {
    const className = "image-description";

    return <div className={className + additionalClassName}>
        {description}
    </div>
};

const createPicture = (pictureObject, xlrg, fullsize, noShadow) => {
    const className = noShadow ? "image-no-shading" : "image-shading";
    let additionalClassName = " single-picture-normal";

    additionalClassName = xlrg ? " single-picture-xlrg" : additionalClassName;
    additionalClassName = fullsize ? " single-picture-fullsize" : additionalClassName;

    return <>
        <img className={className + additionalClassName} src={pictureObject.src} alt={pictureObject.description}/>
        {createDescription(pictureObject.description, additionalClassName)}
    </>
};

const SinglePicture = ({picture: pictureObject, xlrg, fullsize, noShadow}) => (
    <div className="project-single-picture">
        {createPicture(pictureObject, xlrg, fullsize, noShadow)}
    </div>
);

export default SinglePicture;