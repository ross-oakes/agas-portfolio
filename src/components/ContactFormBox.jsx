import * as React from "react";
import {Col, Container, FormGroup, Input, Label, Row} from "reactstrap";

const ContactFormBox = ({icon, inputType, label, hintText, height, value, onChange}) => {

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
                <Label>{label}</Label>
                <Input className="input-display"
                       type={inputType || "text"}
                       name="user name"
                       id="username"
                       placeholder={hintText}
                       value={value}
                       style={{height: height + 'px'}}
                       onChange={onChange}
                />
            </Col>
        </Row>
        {/*<table>*/}
        {/*<tbody>*/}
        {/*<tr className="form-group-display">*/}
        {/*<td className="icon-display">*/}
        {/*{icon &&*/}
        {/*<img className="icon-size" src={icon} alt=""/>}*/}
        {/*</td>*/}
        {/*<td className="td-custom">*/}
        {/*<div>*/}
        {/*<Label className="label-display">{label}</Label>*/}
        {/*<Input className="input-display"*/}
        {/*type={inputType || "text"}*/}
        {/*name="user name"*/}
        {/*id="username"*/}
        {/*placeholder={hintText}*/}
        {/*value={value}*/}
        {/*style={{height: height + 'px'}}*/}
        {/*onChange={onChange}*/}
        {/*/>*/}
        {/*</div>*/}
        {/*</td>*/}
        {/*</tr>*/}
        {/*</tbody>*/}
        {/*</table>*/}
    </FormGroup>
};

export default ContactFormBox;