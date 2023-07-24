import React, { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';

function calculateTDEE(bodyWeight, bodyHeight, userAge, activityFactor) {
  const bmr = 10 * (bodyWeight * 0.45359237) + 6.25 * (bodyHeight * 2.54) - 5 * userAge + 5;
  const tdee = bmr * activityFactor;
  return tdee;
}

export default function TDEECalculator() {
  const [tdee, setTDEE] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const bodyWeight = parseFloat(event.target.elements.bodyWeight.value);
    const bodyHeight = parseFloat(event.target.elements.bodyHeight.value);
    const userAge = parseFloat(event.target.elements.userAge.value);
    const activityFactor = parseFloat(event.target.elements.activityFactor.value);
    const tdeeValue = calculateTDEE(bodyWeight, bodyHeight, userAge, activityFactor);
    setTDEE(tdeeValue);
  };

  return (
    <React.Fragment>
      <Row>
        <Col />
        <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="tDEEInput">
            <Form.Control type="number" name="bodyWeight" placeholder="Body Weight in lbs" required/>
            <Form.Control type="number" name="bodyHeight" placeholder="Height in inches" required/>
            <Form.Control type="number" name="userAge" placeholder="Age" required/>
            <Form.Select defaultValue="" name="activityFactor" required>
              <option disabled>Select Daily Status</option>
              <option value="1.2">Sedentary</option>
              <option value="1.375">Lightly Active</option>
              <option value="1.55">Moderately Active</option>
              <option value="1.725">Very Active</option>
              <option value="1.9">Super Active</option>
            </Form.Select>
            <Button type="submit">Calculate TDEE</Button>
          </Form.Group>
          {tdee !== null && (
            <p>Your Total Daily Energy Expenditure (TDEE) is: {tdee.toFixed(2)}</p>
          )}
        </Form>
        </Col>
        <Col />
      </Row>
    </React.Fragment>
  );
}