import React from "react";
import { Link } from "react-router-dom"; 
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


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
            <Link to={props.currentUser ? "/sign-out" : "/sign-in"}>
              <Button style={{ marginLeft: "1rem" }} variant="outline-primary">
                {props.currentUser ? "Sign Out" : "Sign In"}
              </Button>
            </Link>
            <Link to="/">
              <Button style={{ marginLeft: "1rem" }} variant="outline-primary">Home</Button>
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="1" as={Link} to="/tdee">TDEE Calculator</NavDropdown.Item>
              <NavDropdown.Item eventKey="2" as={Link} to="/1rm">1RM Calculator</NavDropdown.Item>
              <NavDropdown.Item eventKey="3" href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4" href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
