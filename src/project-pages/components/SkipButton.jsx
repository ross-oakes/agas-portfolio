import * as React from "react"
import {Button} from "reactstrap";

const SkipButton = (props) => (
    <div className="skip-button">
        <div style={{display: "inline-grid", fontSize: "20px"}}>
            Skip the full case study
            <a href={props.link}>
                <Button className="primary-button-display" style={{fontSize: "12px"}}>
                    <b>GO STRAIGHT TO THE FINAL DESIGN</b>
                </Button>
            </a>
        </div>
    </div>
);

export default SkipButton;