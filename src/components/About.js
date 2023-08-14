import React from 'react'
import { Container, Card, Button } from "react-bootstrap";
import { FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <Container style={{ marginTop: "10px"}}>
      <Card>
        <Card.Body>
          <Card.Title>About Fit-Ledger</Card.Title>
          <hr />
          <Card.Text>
            This project was created by Marcus Kyung as a capstone for the Epicodus full stack software engineering bootcamp. Fit-Ledger is a program designed to be a single source of truth for an athlete's health and fitness data. To use this application simply fill out the daily data entry form on the homepage. Data entries are stored in Google's Firestore Database and are accessible only to the user to which it belongs. View this project's source code on <a href="https://github.com/MarcusKyung/fit-ledger" target="blank">github.</a>
          </Card.Text>
          <div style={{ marginTop: "10px" }} className="d-grid gap-2">
            <Button style={{ textDecoration: 'none' }}>
              <a href="https://github.com/MarcusKyung/FitLedger" target="_blank" style={{ textDecoration: 'none', color: 'white', display: 'block', width: '100%', height: '100%' }}>View Source Code <FaGithub /></a>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}
