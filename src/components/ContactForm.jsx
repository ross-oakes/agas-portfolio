import React from "react";
import {Button, Form} from 'reactstrap';
import humanIcon from "../resources/human-icon.png"
import mailIcon from "../resources/mail-icon.png"
import ContactFormBox from "./ContactFormBox";

const ContactForm = () =>  (
    <Form className="form">
        <tr>
            <ContactFormBox icon={humanIcon}
                            label="Name"
                            hintText="Jane Doe"
                            height="40"/>
        </tr>
        <tr>
            <ContactFormBox icon={mailIcon}
                            label="Email"
                            hintText="janedoe123@email.com"
                            height="40"/>
        </tr>
        <tr>
            <ContactFormBox label="Message"
                            hintText="Type something..."
                            inputType="textarea"
                            height="180"/>
        </tr>
        <tr align="right">
            <Button className="button-display">
                <b>SEND</b>
            </Button>
        </tr>

    </Form>
);

export default ContactForm;