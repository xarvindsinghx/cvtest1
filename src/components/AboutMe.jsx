import React from 'react';
import profilePhoto from '../images/profileimage.png';
import Image from 'react-bootstrap/Image'

const AboutMe = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", gap: "20px"}}> 
            <h1>About Me</h1>

            <Image roundedCircle src={profilePhoto} height="200px" alt="My Photo" />
            <p style={{width: "50%"}}>
                Arvind Singh,
                BE Computer Science ,
                1998 from MNREC(Currently MNNIT),
                ERP Employee ID 13000017,
                Executive Engineer(RMS),
                
            </p>
            <p>

            </p>
        </div>
    );
}

export default AboutMe;