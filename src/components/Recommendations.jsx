import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import profilePhoto from '../images/profileimage.png';
const Recommendations = () => {

    const exps = [
        {companyName: "UPPCL", position: "Assistant Enginner", startDate: "20-01-2001", endDate: "17-06-2007"},
        {companyName: "MVVNL", position: "Excecutive Engineer", startDate: "17-06-2007", endDate: ""}
    ];

    const listgroup = exps.map((exp) => <ListGroup.Item variant="info"><Recommendation expe = {exp}/></ListGroup.Item>)
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection:"column", gap: "10px"}} className="container"> 
            <h1>Recommendations received</h1>    
            <div style={{display: "flex", gap:"10px"}}>
                {listgroup}
            </div>
            
        </div>
    );
}


const Recommendation = (props)=> {
    let expe = props.expe
    console.log(expe)
    return (
        <Card style={{ width: '18rem' }}>
            
            <Card.Header>
                <Card.Img variant="left" src={profilePhoto} height="50px"/>
                <Card.Text>
                    <b>Arvind Singh</b>
                </Card.Text>
                <Card.Text>
                    <b>UPPCL</b>
                </Card.Text>
            </Card.Header>
            <Card.Body>
                <Card.Title>{expe.companyName}</Card.Title>
                <Card.Text>
                    <b>Position:</b> {expe.position}
                    <br></br>
                    <b>Start Date:</b> {expe.startDate}
                    <br></br>
                    <b>End Date:</b> {expe.endDate}
                </Card.Text>
            </Card.Body>
        </Card>
    );
} 

export default Recommendations;