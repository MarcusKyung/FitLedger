import React from 'react'
import { Container, Card } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <Card style={{ width: "100%", padding: "1em" }}>
        <Card.Header>
          <Card.Title>About This Application</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>This program was designed to be a single source of truth for a user's health and fitness data. To use this application simply fill out the daily data entry form on the homepage. Health and exercise data is stored in Google's Firestore Database and is accessible to each user once logged in.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}
