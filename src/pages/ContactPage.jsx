import React from 'react';
import ContactForm from "../components/ContactForm";
import MyDetails from "../components/MyDetails";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h2>Contact me</h2>
            <table width="100%">
                <tbody>
                    <tr>
                        <td>
                            <ContactForm/>
                        </td>
                        <td className="contact-info">
                            <MyDetails/>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default ContactPage;