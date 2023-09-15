import React from 'react'
import { Container, Button, Accordion } from "react-bootstrap";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <Container style={{ marginTop: "10px"}}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About Fit-Ledger</Accordion.Header>
            <Accordion.Body>
            This project was created by Marcus Kyung as a capstone for the Epicodus full stack software engineering bootcamp. Fit-Ledger is a program designed to be a single source of truth for an athlete's health and fitness data. To use this application simply fill out the daily data entry form on the homepage. Data entries are stored in Google's Firestore Database and are accessible only to the user to which it belongs.
            <div style={{ marginTop: "10px" }} className="d-grid gap-2">
              <Button style={{ textDecoration: 'none' }}>
                <a href="https://www.linkedin.com/in/marcuskyung/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white', display: 'block', width: '100%', height: '100%' }}>View Source Code <FaGithub /></a>
              </Button>
            </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>About TDEE</Accordion.Header>
            <Accordion.Body>
              TDEE (or Total Daily Energy Expenditure) is a measure of how many calories you burn per day. This number is calculated by taking into account your Basal Metabolic Rate (BMR) and your activity level. This number is useful for determining how many calories you should be consuming per day to maintain, gain, or lose weight. TDEE calculations provided by this application are based on the Mifflin-St. Jeor Equation and are only as accurate as the data provided by the user. Furthermore, TDEE calculations should be used as a starting point for determining your caloric needs and should be adjusted based on your individual results and guidance from a medical professional.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Future Planned Features</Accordion.Header>
            <Accordion.Body>
              While this application acomplishes the goals it was initially designed to do, there are several additional new features planned for future development. These features include: user goal setting, user customized styling, additional data visualizations/time horizons, and a AI (ChatGPT-4) driven workout builder. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>About Marcus Kyung</Accordion.Header>
            <Accordion.Body>
              Marcus Kyung is a software engineer and former project manager/marketing professional. He is a graduate of the University of San Diego and the full stack software development bootcamp at Epicodus. He is currently seeking a Portland, Oregon or remote full time software engineering position. 
              <div style={{ marginTop: "10px" }} className="d-grid gap-2">
                <Button style={{ textDecoration: 'none' }}>
                  <a href="https://github.com/MarcusKyung/FitLedger" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white', display: 'block', width: '100%', height: '100%' }}>Connect On LinkedIn <FaLinkedin /></a>
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    </Container>
  )
}
