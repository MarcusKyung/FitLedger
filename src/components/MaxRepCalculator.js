import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';


const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [result, setResult] = useState('');

  const calculateOneRepMax = () => {
    const weightLifted = parseFloat(weight);
    const reps = parseInt(repetitions);

    if (isNaN(weightLifted) || isNaN(reps)) {
      setResult('Please enter valid numbers.');
    } else {
      const oneRepMax = calculateBrzyckiOneRepMax(weightLifted, reps);
      setResult(`Your estimated one-rep max is: ${oneRepMax.toFixed(2)} lbs`);
    }
  };

  const calculateBrzyckiOneRepMax = (weight, reps) => {
    return weight / (1.0278 - (0.0278 * reps));
  };

  return (
    <React.Fragment>
      <Container style={{marginTop: "10px"}}>
        <Row>
          <Col />
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>One-Rep Max Calculator</Card.Title>
                <hr />
                <Form controlId="maxRepInput">
                  <Form.Group>
                    <Form.Control type="number" name="weightLifted" placeholder="Weight Lifted (in lbs)" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
                    <Form.Control type="number" name="repetitions" placeholder="Repetitions" min="1" max="20" value={repetitions} onChange={(e) => setRepetitions(e.target.value)} required />
                    <br />
                    <Button id="calculateBtn" onClick={calculateOneRepMax}>Calculate One-Rep Max</Button>
                  </Form.Group>
                  <br />
                  <Card>
                    <Card.Body>
                      <div id="result">{result}</div>
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
};

export default OneRepMaxCalculator;
