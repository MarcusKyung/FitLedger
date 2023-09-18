import React from 'react'
import { Card } from "react-bootstrap";
import { db, auth } from "../firebase.js";

export default function Profile() {
  return (
    <React.Fragment>
      <Card>
        <Card.Header>
          <h1>Profile</h1>
        </Card.Header>
        <Card.Body>
          This is a user's profile
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}
