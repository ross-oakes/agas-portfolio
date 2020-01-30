import * as React from "react"
import {Col, Container, Row} from "reactstrap";

const createPictures = (picturesObject, horizontal, lrg, sml, lrgSpacing) => {
    var value = horizontal ? 50 : 25;

    value = lrg ? value*1.3 : value;
    value = sml ? value*0.7 : value;

    var spacer = lrgSpacing ? <Col sm={1}></Col>: <Col sm={0.5}></Col>;

    var htmlPics = picturesObject.map(function (pictureObject) {
        return <Col key={pictureObject} sm="auto">
            <div className="picture-with-description">
            <img className="image-shading" src={pictureObject.src} alt={pictureObject.description}
                 style={{
                     width: `${value}vw`,
                 }}/>
            {pictureObject.description}
            </div>
        </Col>
    });

    return [...htmlPics].map((e, i) => i < htmlPics.length - 1 ? [e, spacer] : [e]).reduce((a, b) => a.concat(b));
};

const createParagraph = (description) => (
    <p>{description}</p>
);

const SubsectionWithPictures = (
    {title, description: descriptions, pictures: picturesObject, horizontal, lrg, sml, lrgSpacing}) => (
    <div className="description-with-title">
        {title && <h3>{title}</h3>}
        {descriptions.map(createParagraph)}
        <Container>
            <Row>
                {
                    createPictures(picturesObject, horizontal, lrg, sml, lrgSpacing)
                }
            </Row>
        </Container>
    </div>
);


export default SubsectionWithPictures;