import * as React from "react"

const createDescription = (description, xlrg, fullsize) => {
    let value = 25;

    value = xlrg ? value * 2 : value;
    value = fullsize ? 80 : value;

    return <div className="image-description"
                style={{
                    width: `${value}vw`,
                }}>
        {description}
    </div>
};

const createPicture = (pictureObject, xlrg, fullsize) => {
    let value = 25;

    value = xlrg ? value * 2 : value;
    value = fullsize ? 80 : value;

    return <img className="image-shading" src={pictureObject.src} alt={pictureObject.description}
                style={{
                    width: `${value}vw`,
                }}/>
};

const SinglePicture = ({picture: pictureObject, xlrg, fullsize}) => (
    <div className="project-single-picture">
        {createPicture(pictureObject, xlrg, fullsize)}
        {createDescription(pictureObject.description, xlrg, fullsize)}
    </div>
);

export default SinglePicture;