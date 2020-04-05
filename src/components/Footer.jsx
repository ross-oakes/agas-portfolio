import * as React from "react";
import logo from "../resources/agaux-logo.png"
import {Col, Container, Row} from "reactstrap";
import linkedIn from "../resources/icons/linkedIn.png"
import instagram from "../resources/icons/instagram.png"

const Footer = () => (
    <div className="footer-display">
        <Container>
            <Row className="d-flex justify-content-sm-between">
                <Col sm={{size: 'auto'}}>
                    <div className="logo-copyright-display">
                        <img src={logo} alt="" className="logo-display"/>
                        Copyright &copy; agaux 2020
                    </div>
                </Col>
                <Col sm={{size: 'auto'}} className="contact-details-display d-flex align-items-center">
                    agnieszkamatyja93@gmail.com<br/>
                    +44 (0) 7514 487 378<br/>
                    Wheathampstead, St. Albans, UK
                </Col>
                <Col className="d-flex align-items-center" sm={{size: 'auto'}} style={{lineHeight: "200%"}}>
                    <div>
                        Connect with me
                        <Row>
                            <Col>
                                <a href="https://www.instagram.com/aga.ux/"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <img src={instagram} alt="" height="25px" width="25px"/>
                                </a>
                            </Col>
                            <Col
                                className="text-md-right">
                                <a href="https://www.linkedin.com/in/agnieszka-matyja-09b07b198/"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <img src={linkedIn} alt="" height="25px" width="25px"/>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Footer;