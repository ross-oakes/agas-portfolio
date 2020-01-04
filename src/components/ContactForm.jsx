import React, {useState} from "react";
import {Alert, Button, Form} from 'reactstrap';
import humanIcon from "../resources/human-icon.png"
import mailIcon from "../resources/mail-icon.png"
import ContactFormBox from "./ContactFormBox";

const ContactForm = ({openSuccessAlert, closeSuccessAlert,
                     openDangerAlert, closeDangerAlert}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [content, setContent] = useState();

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
            closeSuccessAlert();
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
            <Button className="contact-me-button" onClick={send}>
                <b>SEND</b>
            </Button>
        </tr>
    </Form>
};

export default ContactForm;