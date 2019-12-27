import * as React from "react"
import {Col, Container, Row} from "reactstrap";


const createPictures = (picture, horizontal) => {
    var value = horizontal ? 60 : 20;
    return <Col sm="auto">
        <img className="image-shading" src={picture} alt={""}
             style={{
                 width: `${value}vw`,
             }}/>
    </Col>
};

const SectionWithPictures = ({title, description, pictures, horizontal}) => {

    return (
        <div className="description-with-title">
            <h2>{title}</h2>
            <p>{description}</p>
            <Container>
                <Row>
                    {pictures.map(picture => createPictures(picture, horizontal))}
                </Row>
            </Container>
        </div>
    )
};


export default SectionWithPictures;