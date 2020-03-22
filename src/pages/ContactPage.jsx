import React, {useState} from 'react';
import ContactForm from "../components/ContactForm";
import MyDetails from "../components/MyDetails";
import {ScrollToTop} from "../components/ReactUtils";
import {Alert, Col, Container, Row} from "reactstrap";
import PortfolioPage from "../components/PortfolioPage";

const ContactPage = () => {

    const [successAlertVisible, setSuccessVisible] = useState(false);
    const [dangerAlertVisible, setDangerVisible] = useState(false);
    function openSuccessAlert() {
        setSuccessVisible(true);
    }
    function closeSuccessAlert() {
        setSuccessVisible(false);
    }
    const openDangerAlert = () => {
        setDangerVisible(true);
    };
    const closeDangerAlert = () => {
        setDangerVisible(false);
    };

    return (
        <PortfolioPage>
            <Alert className="toast-display alert-fixed" color="success" isOpen={successAlertVisible} toggle={closeSuccessAlert}>
                Your message has been sent successfully. I'll get back to you shortly.
            </Alert>
            <Alert className="toast-display alert-fixed" color="danger" isOpen={dangerAlertVisible} toggle={closeDangerAlert}>
                Your message has failed. Please try again.
            </Alert>
            <h2>Contact me</h2>
            <Container className="contact-page-container">
                <Row>
                    <Col>
                        <ContactForm
                            openSuccessAlert={openSuccessAlert}
                            closeSuccessAlert={closeSuccessAlert}
                            openDangerAlert={openDangerAlert}
                            closeDangerAlert={closeDangerAlert}/>
                    </Col>
                    <Col className="details-contact-form">
                        <MyDetails/>
                    </Col>
                </Row>
            </Container>
        </PortfolioPage>
    );
};

export default ContactPage;