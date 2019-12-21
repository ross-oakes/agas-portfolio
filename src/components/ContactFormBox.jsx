import * as React from "react";
import {FormGroup, Input, Label} from "reactstrap";

const ContactFormBox = ({icon, inputType, label, hintText, height}) => (
        <FormGroup>
            <table>
                <tbody>
                <tr className="form-group-display">
                    <td className="icon-display">
                        {icon &&
                        <img className="icon-size" src={icon} alt=""/>}
                    </td>
                    <td className="td-custom">
                        <div>
                            <Label className="label-display">{label}</Label>
                            <Input className="input-display"
                                   type={inputType || "text"}
                                   name="user name"
                                   id="username"
                                   placeholder={hintText}
                                   style={{height: height + 'px'}}
                        />
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </FormGroup>
);

export default ContactFormBox;