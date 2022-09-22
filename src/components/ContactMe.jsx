import React from 'react';
import profilePhoto from '../images/profileimage.png';
const ContactMe = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", gap: "20px"}}> 
            <h1>Contact Me</h1>
            <h3>mobile : 9415901135</h3>
            <h3> <a href="mailto:arvind@uppclonline.com">arvind@uppclonline.com</a> </h3>
            <h3>Address: MVVNL Head Office Gokhale Marg Lucknow UP</h3>
            <h3><a href = "https://www.google.com/maps/place/Madhyanchal+Vidyut+Vitran+Nigam+Ltd/@26.8557168,80.9601,17z/data=!3m1!4b1!4m5!3m4!1s0x399bfd15cb5a3955:0xd448c757dd9a3b52!8m2!3d26.8557168!4d80.9622887" > MVVNL, VX46+7W Lucknow, Uttar Pradesh </a> </h3>
            <h3>Mobile 9415901135</h3>
             <h3><a href = "../resume.pdf" download > My Resume </a> </h3>
        </div>
    );
}

export default ContactMe;