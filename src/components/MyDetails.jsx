import React from "react";
import {Row} from "reactstrap";

const MyDetails = () => {
    return (
        <>
            <Row className="justify-content-end details-title ">
                <h3>Email</h3><br/>
            </Row>
            <Row className="justify-content-end details-content">
                agnieszkamatyja93@gmail.com
            </Row>
            <Row className="justify-content-end details-title">
                <h3>Mobile number</h3>
            </Row>
            <Row className="justify-content-end details-content">
                +44 7514 487 378
            </Row>
            <Row className="justify-content-end details-title">
                <h3>Address</h3>
            </Row>
            <Row className="justify-content-end details-content">
                Wheathampstead<br />
                St. Albans <br />
                UK
            </Row>
        </>

    );
};

export default MyDetails;