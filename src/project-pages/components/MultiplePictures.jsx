import * as React from "react"
import {Col, Container, Row} from "reactstrap";

const createPictures = (picturesObject, horizontal, sml) => {
    let value = horizontal ? 30 : 20;

    value = sml ? value * 0.8 : value;

    const numberOfPicturesPerLine = Math.min(picturesObject.length, 3);
    const numberOfSpacesPerLine = Math.max(numberOfPicturesPerLine - 1, 2);

    const spaceSize = 1;
    const pictureSize = (12 - (numberOfSpacesPerLine * spaceSize)) / numberOfPicturesPerLine;

    return picturesObject.map(function (pictureObject) {
        return <Col key={pictureObject} md={pictureSize} className="multi-picture-spacing">
            <div className="picture-with-description">
                <img className="image-shading" src={pictureObject.src} alt={pictureObject.description}
                     style={{
                         width: `${value}vw`,
                         minWidth: `250px`,
                     }}/>
                {pictureObject.description}
            </div>
        </Col>
    });
};

const MultiplePictures = ({pictures: picturesObject, horizontal, sml}) => (
    <Container fluid>
        <Row>
            {
                createPictures(picturesObject, horizontal, sml)
            }
        </Row>
    </Container>
);


export default MultiplePictures;