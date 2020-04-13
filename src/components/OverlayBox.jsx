import * as React from "react";
import {Button} from "reactstrap";

const OverlayBox = (props) => {
    return <div className="overlay-box">
        <div className="overlay-title">
            {props.title}</div>
        <div className="overlay-subtitle">
            {props.subtitle}</div>
        <p className="overlay-description">
            {props.description}</p>
        <a href={props.link}>
            <Button className="primary-button-display">{props.buttonText}</Button>
        </a>
    </div>
};

export default OverlayBox;
