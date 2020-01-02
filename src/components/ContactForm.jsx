import React, {useState} from "react";
import {Alert, Button, Form} from 'reactstrap';
import humanIcon from "../resources/human-icon.png"
import mailIcon from "../resources/mail-icon.png"
import ContactFormBox from "./ContactFormBox";

const ContactForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [content, setContent] = useState();
    const [successAlertVisible, setSuccessVisible] = useState(false);
    const [dangerAlertVisible, setDangerVisible] = useState(false);
    const openSuccessAlert = () => {
        setSuccessVisible(true);
    };
    const closeSuccessAlert = () => {
        setSuccessVisible(false);
    };
    const openDangerAlert = () => {
        setDangerVisible(true);
    };
    const closeDangerAlert = () => {
        setDangerVisible(false);
    };

    const send = () => {
        closeSuccessAlert();
        closeDangerAlert();

        var template_params = {
            "reply_to": email,
            "from_name": name,
            "message_html": content
        };

        var service_id = "default_service";
        var template_id = "template_594ZU3dk";
        try {
            window.emailjs.send(service_id, template_id, template_params);
            openSuccessAlert();
        } catch (e) {
            openDangerAlert();
        }

    };

    function wrapFunc(func){
        return function(event){
            return func(event.target.value);
        }
    }

    return <Form className="form">
        <tr>
            <ContactFormBox icon={humanIcon}
                            label="Name"
                            hintText="Jane Doe"
                            height="40"
                            value={name}
                            onChange={wrapFunc(setName)}/>
        </tr>
        <tr>
            <ContactFormBox icon={mailIcon}
                            label="Email"
                            hintText="janedoe123@email.com"
                            height="40"
                            value={email}
                            onChange={wrapFunc(setEmail)}/>
        </tr>
        <tr>
            <ContactFormBox label="Message"
                            hintText="Type something..."
                            inputType="textarea"
                            height="180"
                            value={content}
                            onChange={wrapFunc(setContent)}/>
        </tr>
        <tr align="right">
            <Button className="button-display button-with-shadow" onClick={send}>
                <b>SEND</b>
            </Button>
        </tr>
        <Alert className="toast-display" color="success" isOpen={successAlertVisible} toggle={closeSuccessAlert}>
            Your message has been sent successfully. I'll get back to you shortly.
        </Alert>
        <Alert className="toast-display" color="danger" isOpen={dangerAlertVisible} toggle={closeDangerAlert}>
            Your message has failed. Please try again.
        </Alert>
    </Form>
};

export default ContactForm;