import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import '../styles/site.css'
import '../styles/projects.css';

export default function Projects() {
  return (
    <div className="background">
      <h1 className="title">Projects</h1>
      <Container>
  <Row xs={1} sm={1} md={2} lg={2} >
    <Col> <Card className= "projectCard" id="projectCard1">
  <Card.Body className="cardBody">
    <Card.Title>Sous Chef</Card.Title>
    <Card.Text className="cardText">
      Sous Chef is for all the home cooks out there. Search a database of recipes!
    </Card.Text>
    <Button href="https://sous-chef-project-2.herokuapp.com/" variant="primary">Go to Site</Button>
  </Card.Body>
</Card></Col>
<Col> <Card className= "projectCard" id="projectCard2">
  <Card.Body className="cardBody">
    <Card.Title>This Day in Space</Card.Title>
    <Card.Text className="cardText">
     Want to know what's going on in Space today or any other Day? 
    </Card.Text>
    <Button href="https://mleesers.github.io/This-Day-In-Space/" variant="primary">Go to Site</Button>
  </Card.Body>
</Card></Col>
  </Row> <Row xs={1} sm={1} md={2} lg={2}>
  <Col> <Card className= "projectCard" id="projectCard3">
  <Card.Body className="cardBody">
    <Card.Title>Band Mate</Card.Title>
    <Card.Text className="cardText">
      Coming Soon!
    </Card.Text>
    <Button href="https://band--mates.herokuapp.com/" variant="primary">Go to Site</Button>
  </Card.Body>
</Card></Col>
<Col> <Card className= "projectCard" id="projectCard4">
  <Card.Body className="cardBody">
    <Card.Title>Daily Planner</Card.Title>
    <Card.Text className="cardText">
      Keep track of all your appointments with this interactive planner.
    </Card.Text>
    <Button href="https://justinreese160.github.io/Day-Planner/" variant="primary">Go to Site</Button>
  </Card.Body>
</Card></Col>
  </Row>
 
</Container>
      {/* <Card className= "projectCard" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body className="cardBody">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

      
    </div>
  );
}
