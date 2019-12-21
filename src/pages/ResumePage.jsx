import React from 'react';
import icon from '../resources/download-icon.png';
import resume from '../resources/resume.pdf';

const ResumePage = () => {
    return (
        <div className="resume-page">
            <h3 className="resume-title"><b>Education</b></h3>
            <p><b>Masters, </b>English Philology, Jagiellonian University, 2015-2017, Grade: Distinction.</p>

            <h3 className="resume-title"><b>Training</b></h3>
            <p>Travis, David. <b>User Experience (UX): The Ultimate Guide to Usability and UX.</b> Udemy, 2019.</p>
            <p>Walter Scott, Daniel. <b>User Experience Design Essentials - Adobe XD UI UX Design.</b> Udemy, 2019.</p>
            <p>Natoli, Joe. <b>DESIGN RULES: Principles + Practices for Great UI Design.</b> Udemy, 2019.</p>

            <a className="resume-footer" href={resume} download>
                <img src={icon} alt="My Resume" height="25px" width="25px"/> My Resume
            </a>
        </div>
    );
};

export default ResumePage;