import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

function calculateTDEE(bodyWeight, bodyHeight, userAge, activityFactor) {
  const bmr = 10 * (bodyWeight * 0.45359237) + 6.25 * (bodyHeight * 2.54) - 5 * userAge + 5;
  const tdee = bmr * activityFactor;
  return tdee;
}

export default function TDEECalculator() {
  const [tdee, setTDEE] = useState(null);
  const [tdeeWithDesiredOutcome, setTDEEWithDesiredOutcome] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const bodyWeight = parseFloat(event.target.elements.bodyWeight.value);
    const bodyHeight = parseFloat(event.target.elements.bodyHeight.value);
    const userAge = parseFloat(event.target.elements.userAge.value);
    const activityFactor = parseFloat(event.target.elements.activityFactor.value);
    const desiredOutcome = parseFloat(event.target.elements.desiredOutcome.value);


    const tdeeValue = calculateTDEE(bodyWeight, bodyHeight, userAge, activityFactor);
    setTDEE(tdeeValue);

    const tdeeWithDesiredOutcomeValue = tdeeValue + desiredOutcome;
    setTDEEWithDesiredOutcome(tdeeWithDesiredOutcomeValue);
  };

  const clearFields = () => {
    setTDEE(null);
    setTDEEWithDesiredOutcome(null);
    document.getElementById('tDEEInput').reset();
  };

  return (
    <React.Fragment>
      <Container style={{marginTop: "10px"}}>
        <Row>
          <Col />
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>TDEE Calculator (Total Daily Energy Expenditure)</Card.Title>
                <hr />
                <Form id="tDEEInput" onSubmit={handleSubmit} style={{marginTop: "10px"}}>
                  <Form.Group controlId="tDEEInput">
                    <Form.Control type="number" name="bodyWeight" placeholder="Body Weight in lbs" min="60" required/>
                    <Form.Control type="number" name="bodyHeight" placeholder="Height in inches" min="0" required/>
                    <Form.Control type="number" name="userAge" placeholder="Age" min="0" required/>
                    <Form.Select defaultValue="" name="activityFactor" required>
                      <option disabled>Select Activity Factor Status</option>
                      <option value="1.2">Sedentary</option>
                      <option value="1.375">Lightly Active</option>
                      <option value="1.55">Moderately Active</option>
                      <option value="1.725">Very Active</option>
                      <option value="1.9">Super Active</option>
                    </Form.Select>
                    <Form.Select defaultValue="" name="desiredOutcome" required>
                      <option disabled>Desired Weekly Outcome</option>
                      <option value="-500">Lose 1 lb/week</option>
                      <option value="-250">Lose .5 lb/week</option>
                      <option value="0">Maintain Weight</option>
                      <option value="250">Gain .5 lb/week</option>
                      <option value="500">Gain 1 lb/week</option>
                    </Form.Select>
                    <div style={{marginTop: "10px"}} className="d-grid gap-2">
                      <Button style={{marginTop: "10px"}} type="submit">Calculate TDEE</Button>
                      <Button id="clearBtn" variant="danger" onClick={clearFields}>Clear All</Button>
                    </div>
                  </Form.Group>
                  <br />
                  <Card>
                    <Card.Body>
                    {tdee !== null && (<p>Your Total Daily Energy Expenditure (TDEE) is: <strong>{tdee.toFixed(2)} calories</strong></p>)}
                    {tdeeWithDesiredOutcome !== null && (<p>Your adjusted TDEE based on your selected goal is: <strong>{tdeeWithDesiredOutcome.toFixed(2)} calories</strong></p>)}
                    </Card.Body>
                  </Card>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </React.Fragment>
  );
}