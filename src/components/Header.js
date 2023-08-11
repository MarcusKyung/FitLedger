import React from "react";
import { Link } from "react-router-dom"; 
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo50 from '../img/Logo50.png';


function Header(props) {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><img alt="Fit-Ledger dumbbell logo" src={Logo50} width="30" height="30" className="d-inline-block align-top"/>{' '}Fit-Ledger</Navbar.Brand>
            <Nav className="ms-auto">
            <Navbar.Text className="ml-3">
              {props.currentUser ? (`Currently Signed in as: ${props.currentUser.email}`) : ("Not Signed in")}
            </Navbar.Text>              
            <Link to={"/sign-in"}>
              <Button style={{ marginLeft: "1rem" }} variant="outline-primary">
                {props.currentUser ? "Sign Out" : "Sign In"}
              </Button>
            </Link>
            <Link to="/">
              <Button style={{ marginLeft: "1rem" }} variant="outline-primary">Home</Button>
            </Link>
            <NavDropdown title="Tools" id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="1" as={Link} to="/tdee">TDEE Calculator</NavDropdown.Item>
              <NavDropdown.Item eventKey="2" as={Link} to="/1rm">1RM Calculator</NavDropdown.Item>
              <NavDropdown.Item eventKey="3" as={Link} to="/workout-builder">Workout Builder</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4" as={Link} to="/about">About</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
