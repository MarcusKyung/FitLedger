import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';


const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [result, setResult] = useState('');
  const [formula, setFormula] = useState('Brzycki');

  const calculateOneRepMax = () => {
    const weightLifted = parseFloat(weight);
    const reps = parseInt(repetitions);
    const selectedFormula = formula;

    if (isNaN(weightLifted) || isNaN(reps)) {
      setResult('Please enter valid numbers.');
    } else if (reps >20 || weightLifted < 0 || reps < 0) {
      setResult('Please enter valid numbers.');
    } else if (selectedFormula === "Brzycki") {
      const oneRepMax = calculateBrzyckiOneRepMax(weightLifted, reps);
      setResult(`Your estimated one-rep max is: ${oneRepMax.toFixed(2)} lbs`);
    } else if (selectedFormula === "Epley"){
      const oneRepMax = calculateEpleyOneRepMax(weightLifted, reps);
      setResult(`Your estimated one-rep max is: ${oneRepMax.toFixed(2)} lbs`);
    }
  };

  const clearFields = () => {
    setWeight('');
    setRepetitions('');
    setResult('');
    setFormula('Brzycki'); 
  };

  const calculateBrzyckiOneRepMax = (weight, reps) => {
    return weight / (1.0278 - (0.0278 * reps));
  };

  const calculateEpleyOneRepMax = (weight, reps) => {
    return weight * (1 + 0.0333 * reps);
  };

  return (
    <React.Fragment>
      <Container style={{marginTop: "10px"}}>
        <Row>
          <Col />
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>One-Rep Max Calculator (Brzycki Equation)</Card.Title>
                <hr />
                <Card.Text>
                  <p>This calculator can be used to estimate your maximum one rep max lift using previous submaximal lift data. This tool utilizes the commonly used Brzycki formula to generate results. Results are most accurate with a submaximal rep count between 1-10.</p>
                </Card.Text>
                <Form controlId="maxRepInput">
                  <Form.Group>
                    <Form.Select defaultValue="Brzycki" name="1rmFormulaSelect" value={formula} onChange={(e) => setFormula(e.target.value)} required>
                      <option disabled>Select 1RM Formula</option>
                      <option value="Brzycki">Brzycki Formula</option>
                      <option value="Epley">Epley Formula</option>
                    </Form.Select>
                    <Form.Control type="number" name="weightLifted" placeholder="Weight Lifted (in lbs)" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
                    <Form.Control type="number" name="repetitions" placeholder="Repetitions" min="1" max="20" value={repetitions} onChange={(e) => setRepetitions(e.target.value)} required />
                      <div style={{marginTop: "10px"}} className="d-grid gap-2">
                        <Button id="calculateBtn" onClick={calculateOneRepMax}>Calculate One-Rep Max</Button>
                        <Button id="clearBtn" variant="danger" onClick={clearFields}>Clear All</Button>
                      </div>
                  </Form.Group>
                  <div style={{marginTop: "10px"}} id="result" >{result}</div>
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
