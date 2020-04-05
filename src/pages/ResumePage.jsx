import React from 'react';
import downloadIcon from '../resources/icons/download.png';
import resume from '../resources/resume.pdf';
import {Col, Container, Row} from "reactstrap";
import PortfolioPage from "../components/PortfolioPage";

const ResumePage = () => {
    return (
        <PortfolioPage>
            <div className="resume-text">
                <h3 className="resume-title"><b>Education</b></h3>
                <p><b>Masters, </b>English Philology, Jagiellonian University, 2015-2017, Grade: Distinction.</p>

                <h3 className="resume-title"><b>Postgraduate courses</b></h3>
                <p>University of Michigan. <b>User Experience Research and Design Specialization.</b> 2020.</p>

                <h3 className="resume-title"><b>Other certified courses</b></h3>
                <p>Travis, David. <b>User Experience (UX): The Ultimate Guide to Usability and UX.</b> 2019.</p>
                <p>Walter Scott, Daniel. <b>User Experience Design Essentials - Adobe XD UI UX Design.</b> 2019.</p>
                <p>Natoli, Joe. <b>DESIGN RULES: Principles + Practices for Great UI Design.</b> 2019.</p>
                <p>Barnard, Leon. <b>Wireframing with Balsamiq Mockups.</b> 2019.</p>
                <p>Natoli, Joe. <b>UX & Web Design Master Course: Strategy, Design, Development.</b> 2019.</p>
                <p>Angelo Todaro, Joseph. <b>Sketch from A to Z (2019): Become an app designer.</b> 2020.</p>
                <p>Travis, David. <b>Usability Testing Boot Camp.</b> 2020.</p>
                <p>Cooper Professional Education. <b>Cooper Crash Course: Design Thinking in 3 Steps.</b> 2020.</p>
                <p>Sutcliffe, Rob. <b>Master Digital Product Design: UX Research & UI Design.</b> 2020.</p>
                <p>Eyal, Nir. <b>How to Build Habit-Forming Products.</b> 2020.</p>
                <p>Walter Scott, Daniel. <b>After Effects - Motion Graphics and Data Visualisation.</b> 2020.</p>
                <p>Walter Scott, Daniel. <b>Adobe Photoshop CC - Essentials Training Course.</b> 2020.</p>
            </div>
            <Container className="resume-footer">
                <Row>
                    <Col>
                        <a href={resume} download>
                            <img src={downloadIcon} alt="" height="25px" width="25px"/> Download My Resume
                        </a>
                    </Col>
                </Row>
            </Container>

        </PortfolioPage>
    );
};

export default ResumePage;