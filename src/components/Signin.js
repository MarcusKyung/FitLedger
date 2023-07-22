import React, { useState } from "react";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { Card, Row, Col, Button, Form, Container } from 'react-bootstrap';

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault(); 
    const email = event.target.email.value; 
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setSignUpSuccess("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password) 
      .then((userCredential) => {
        setSignUpSuccess(
          `You've successfully signed up, ${userCredential.user.email}!`
        );
      })
      .catch((error) => { 
        setSignUpSuccess(`There was an error signing up: ${error.message}!`);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(
          `You've successfully signed in as ${userCredential.user.email}!`
        );
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess("You have successfully signed out!");
      })
      .catch(function (error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <React.Fragment>
      <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header><h1>Sign up</h1></Card.Header>
            <Card.Body>
              {signUpSuccess}
              <Form onSubmit={doSignUp}>
                <Form.Group>
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control type="text" name="email" placeholder="Email" />
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" />
                  <Form.Label>Password Confirmation:</Form.Label>
                  <Form.Control type="password" name="confirmPassword" placeholder="Password Confirmation" />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">Sign Up</Button>
              </Form>
            </Card.Body>  
          </Card>
          <br />
          <Card>
            <Card.Header><h1>Sign In</h1></Card.Header>
            <Card.Body>
              {signInSuccess}
              <Form onSubmit={doSignIn}>
                <Form.Group>
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control type="text" name="signinEmail" placeholder="Email" />
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" name="signinPassword" placeholder="Password" />
                  <br />
                  <Button variant="primary" type="submit">Sign In</Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header><h1>Sign Out</h1></Card.Header>
            <Card.Body>
              {signOutSuccess}
              <Button variant="primary" onClick={doSignOut}>Sign Out</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </React.Fragment>
  );
}

export default SignIn;

