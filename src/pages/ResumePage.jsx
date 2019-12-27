import React from 'react';
import downloadIcon from '../resources/download-icon.png';
import linkedinIcon from '../resources/linkedIn-icon.png';
import resume from '../resources/resume.pdf';
import {Col, Container, Row} from "reactstrap";

const ResumePage = () => {
    return (
        <div className="resume-page">
            <div className="resume-text">
                <h3 className="resume-title"><b>Education</b></h3>
                <p><b>Masters, </b>English Philology, Jagiellonian University, 2015-2017, Grade: Distinction.</p>

                <h3 className="resume-title"><b>Training</b></h3>
                <p>Travis, David. <b>User Experience (UX): The Ultimate Guide to Usability and UX.</b> Udemy, 2019.</p>
                <p>Walter Scott, Daniel. <b>User Experience Design Essentials - Adobe XD UI UX Design.</b> Udemy, 2019.</p>
                <p>Natoli, Joe. <b>DESIGN RULES: Principles + Practices for Great UI Design.</b> Udemy, 2019.</p>
                <p>Barnard, Leon. <b>Wireframing with Balsamiq Mockups.</b> Udemy, 2019.</p>
                <p>Natoli, Joe. <b>UX & Web Design Master Course: Strategy, Design, Development.</b> Udemy, 2019.</p>
            </div>
            <Container className="resume-footer">
                <Row>
                    <Col xs>
                        <a href={resume} download>
                            <img src={downloadIcon} alt="" height="25px" width="25px"/> Download My Resume
                        </a>
                    </Col>
                    <Col xs>
                        <a href="https://www.linkedin.com/in/agnieszka-matyja-09b07b198/">
                            <img src={linkedinIcon} alt="" height="25px" width="25px"/> LinkedIn profile
                        </a>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ResumePage;