import * as React from "react";
import {Col, FormFeedback, FormGroup, Input, Label, Row} from "reactstrap";

const ContactFormBox = ({icon, inputType, label, height, value, onChange, isInvalid, invalidText, required}) => {
    return <FormGroup>
        <Row className="form-group-display">
            {icon &&
            <Col xs="auto" className="icon-display">
                {icon &&
                <img src={icon} alt=""/>}
            </Col>
            }
            {!icon &&
            <Col xs="auto" className="no-icon-display">
                {icon &&
                <img src={icon} alt=""/>}
            </Col>
            }
            <Col xs="auto" className="form-display">
                <Label className="label-display"> {label}</Label>
                {required && <text style={{color:"red"}}>*</text>}
                <Input className="input-display"
                       type={inputType || "text"}
                       name="user name"
                       id="username"
                       value={value}
                       style={{height: height + 'px'}}
                       onChange={onChange}
                       invalid={isInvalid}
                />
                <FormFeedback>{invalidText}</FormFeedback>
            </Col>
        </Row>
    </FormGroup>
};

export default ContactFormBox;