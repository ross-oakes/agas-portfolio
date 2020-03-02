import * as React from "react"

const SkipButton = (props) => (
    <div className="skip-button">
        <div style={{display: "inline-grid", fontSize: "20px"}}>
            Skip the full case study
            {console.log(`Ross... ${props.link}`)}
            <a href={props.link}>
                <button className="primary-button-display" style={{fontSize: "12px"}}>
                    <b style={{margin: "2px"}}>GO STRAIGHT TO THE FINAL DESIGN</b>
                </button>
            </a>
        </div>
    </div>
);

export default SkipButton;