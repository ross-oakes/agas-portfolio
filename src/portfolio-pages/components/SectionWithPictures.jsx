import * as React from "react"
import {Col, Container, Row} from "reactstrap";


const createPictures = (picture, horizontal) => {
    var value = horizontal === true ? 750 : 300;
    console.log(horizontal);
    return <Col sm={{size: 4, offset: 1}}>
        <img className="image-shading" src={picture} alt={""}
             style={{
                 width: `${value}px`,
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
                    {pictures.map(createPictures, horizontal)}
                </Row>
            </Container>
        </div>
    )
};


export default SectionWithPictures;