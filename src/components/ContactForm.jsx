import React, {useState} from "react";
import {Button, Form, FormGroup} from 'reactstrap';
import humanIcon from "../resources/icons/human.png"
import mailIcon from "../resources/icons/mail.png"
import ContactFormBox from "./ContactFormBox";

const ContactForm = ({
                         openSuccessAlert, closeSuccessAlert,
                         openDangerAlert, closeDangerAlert
                     }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [emailInvalid, setEmailInvalid] = useState();
    const [content, setContent] = useState();
    const [contentInvalid, setContentInvalid] = useState();

    const validateThenSend = () => {
        let allInputIsValid = validateEmail() && true;
        allInputIsValid = validateContent() && allInputIsValid;

        if (allInputIsValid) {
            send();
        }
    };

    const send = () => {
        closeSuccessAlert();
        closeDangerAlert();

        let template_params = {
            "reply_to": email,
            "from_name": name,
            "message_html": content
        };

        const service_id = "default_service";
        const template_id = "template_594ZU3dk";
        try {
            window.emailjs.send(service_id, template_id, template_params);
            openSuccessAlert();
            setName("");
            setEmail("");
            setContent("")
        } catch (e) {
            closeSuccessAlert();
            openDangerAlert();
        }

    };

    function setValue(setValue) {
        return function (event) {
            setValue(event.target.value);
        }
    }

    function validateAndSetValue(setValue, validationMethod) {
        return function (event) {
            let value = event.target.value;
            setValue(value);
            validationMethod(value);
        }
    }

    function validateEmail() {
        let isValid = email && email.match("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])");
        setEmailInvalid(!isValid);
        return isValid;
    }

    function validateContent() {
        let isValid = content && true;
        setContentInvalid(!isValid);
        return isValid;
    }

    return <Form className="form">
        <ContactFormBox icon={humanIcon}
                        label="Name"
                        height="40"
                        value={name}
                        onChange={setValue(setName)}
                        isInvalid={false}
        />
        <ContactFormBox icon={mailIcon}
                        label="Email"
                        height="40"
                        value={email}
                        onChange={validateAndSetValue(setEmail, validateEmail)}
                        isInvalid={emailInvalid}
                        invalidText="Ooops! Please enter a valid email address"/>
        <ContactFormBox label="Message"
                        inputType="textarea"
                        height="180"
                        value={content}
                        onChange={validateAndSetValue(setContent, validateContent)}
                        isInvalid={contentInvalid}
                        invalidText="Ooops! Please enter your message."/>
        <FormGroup align="right">
            <Button className="contact-me-button" onClick={validateThenSend}>
                <b>SEND</b>
            </Button>
        </FormGroup>
    </Form>
};

export default ContactForm;