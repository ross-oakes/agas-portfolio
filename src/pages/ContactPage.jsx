import React, {useState} from 'react';
import ContactForm from "../components/ContactForm";
import MyDetails from "../components/MyDetails";
import {ScrollToTop} from "../components/ReactUtils";
import {Alert} from "reactstrap";

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
        <>
            <ScrollToTop/>
            <Alert className="toast-display alert-fixed" color="success" isOpen={successAlertVisible} toggle={closeSuccessAlert}>
                Your message has been sent successfully. I'll get back to you shortly.
            </Alert>
            <Alert className="toast-display alert-fixed" color="danger" isOpen={dangerAlertVisible} toggle={closeDangerAlert}>
                Your message has failed. Please try again.
            </Alert>
            <div className="contact-page">
                <h2>Contact me</h2>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <ContactForm
                                    openSuccessAlert={openSuccessAlert}
                                    closeSuccessAlert={closeSuccessAlert}
                                    openDangerAlert={openDangerAlert}
                                    closeDangerAlert={closeDangerAlert}/>
                            </td>
                            <td className="contact-info">
                                <MyDetails/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ContactPage;