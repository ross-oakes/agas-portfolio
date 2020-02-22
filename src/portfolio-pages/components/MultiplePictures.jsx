import * as React from "react"
import {Col, Container, Row} from "reactstrap";

const createPictures = (picturesObject, horizontal, lrg, xlrg, sml, lrgSpacing) => {
    let value = horizontal ? 50 : 25;

    value = xlrg ? value*2 : value;
    value = lrg ? value*1.3 : value;
    value = sml ? value*0.7 : value;

    const spacer = lrgSpacing ? <Col sm={1}></Col>: <Col sm={0.5}></Col>;

    const htmlPics = picturesObject.map(function (pictureObject) {
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

const MultiplePictures = (
    {pictures: picturesObject, horizontal, lrg, xlrg, sml, lrgSpacing}) => (
    <div className="project-multiple-pictures">
        <Container>
            <Row>
                {
                    createPictures(picturesObject, horizontal, lrg, xlrg, sml, lrgSpacing)
                }
            </Row>
        </Container>
    </div>
);


export default MultiplePictures;