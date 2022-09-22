import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Skills = () => {
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection:"column", gap: "10px"}}> 
            <h1>Skills</h1>
        	
            <div style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection:"column"}}>
                <h3>Programming Languages</h3>
                <ListGroup horizontal>
                    <ListGroup.Item>Pascal</ListGroup.Item>
                    <ListGroup.Item>C</ListGroup.Item>
                    <ListGroup.Item>Java</ListGroup.Item>
                    <ListGroup.Item>Python</ListGroup.Item>
                    <ListGroup.Item>Javascipt</ListGroup.Item>
                    <ListGroup.Item>SQl</ListGroup.Item>
                
                </ListGroup>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection:"column"}}>
                <h3>Development</h3>
                <ListGroup>
                    <ListGroup.Item>Web development using React, Mongoose, Express</ListGroup.Item>
                    <ListGroup.Item>Software Development using Java and Python</ListGroup.Item>
                </ListGroup>
            </div> 
            <div style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection:"column"}}>
                <h3>Domain Expert</h3>
                <ListGroup>
                    <ListGroup.Item>Functional </ListGroup.Item>
                    <ListGroup.Item>Technical</ListGroup.Item>
                    <ListGroup.Item>Data Analytics</ListGroup.Item>
                </ListGroup>
            </div> 

        </div>
    );
}

export default Skills;