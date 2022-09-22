import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Experience = () => {

    const exps = [
        {companyName: "UPPCL", position: "Assistant Enginner", startDate: "20-01-2001", endDate: "17-06-2007"},
        {companyName: "MVVNL", position: "Excecutive Engineer", startDate: "17-06-2007", endDate: ""}
    ];

    const listgroup = exps.map((exp) => <SingleExperience expe = {exp}/>)
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection:"column", gap: "10px"}}> 
            <h1>Experiences</h1>  
            <div style={{display: "flex", gap:"10px"}}>
            {listgroup} 
            </div>  
                
        </div>
    );
}


const SingleExperience = (props)=> {
    let expe = props.expe
    console.log(expe)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>{expe.companyName}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <b>Position:</b> {expe.position}
                </Card.Text>
                <Card.Text>
                    <b>Start Date:</b> {expe.startDate}
                </Card.Text>
                <Card.Text>
                    <b>End Date:</b> {expe.endDate}
                </Card.Text>
            </Card.Body>
        </Card>
    );
} 

export default Experience;