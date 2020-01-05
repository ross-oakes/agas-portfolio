import * as React from "react"
import {Col, Container, Row} from "reactstrap";

const createPictures = (pictures, horizontal, lrg) => {
    var value = horizontal ? 50 : 25;

    value = lrg ? value*1.3 : value;

    var spacer = <Col sm={1}></Col>;

    var htmlPics = pictures.map(function (picture) {
        return <Col key={picture} sm="auto">
            <img className="image-shading" src={picture} alt={""}
                 style={{
                     width: `${value}vw`,
                 }}/>
        </Col>
    });

    return [...htmlPics].map((e, i) => i < htmlPics.length - 1 ? [e, spacer] : [e]).reduce((a, b) => a.concat(b));
};

const createParagraph = (description) => (
    <p>{description}</p>
);

const SectionWithPictures = ({title, description: descriptions, pictures, horizontal, lrg}) => (
    <div className="description-with-title">
        <h2>{title}</h2>
        {descriptions.map(createParagraph)}
        <Container>
            <Row>
                {
                    createPictures(pictures, horizontal, lrg)
                }
            </Row>
        </Container>
    </div>
);


export default SectionWithPictures;