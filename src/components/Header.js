import React from "react";
import { Link } from "react-router-dom"; 
import { Button, Container, Nav, Navbar } from 'react-bootstrap';


function Header(props) {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Project Title</Navbar.Brand>
            <Nav className="ms-auto">
            <Navbar.Text className="ml-3">
              {props.currentUser ? (`Currently Signed in as: ${props.currentUser.email}`) : ("Not Signed in")}
            </Navbar.Text>              
            <Button style={{ marginLeft: "1rem", }} variant="outline-primary"><Link to="/sign-in">{props.currentUser ? "Sign Out" : "Sign In"}</Link></Button>
            <Button style={{ marginLeft: "1rem", }} variant="outline-primary"><Link to="/">Home</Link></Button>
            <Button style={{ marginLeft: "1rem", }} variant="outline-primary"><Link to="tdee">TDEE</Link></Button>
            </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
