import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Container>
        <Form onSubmit={props.formSubmissionHandler}>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formEntryDate">
                <Form.Label>Entry Date:</Form.Label>
                <Form.Control type="date" name="entryDate" placeholder="Entry Date" />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <h5 style={{textDecoration: "underline"}}>Meal Data:</h5>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formMeal1Data">
                <Form.Control type="text" name="meal1Name" placeholder="Meal 1 Name" />
                <Form.Control type="number" name="meal1Calories" placeholder="Meal 1 Calories (cal)" />
                <Form.Control type="number" name="meal1Protein" placeholder="Meal 1 Protein (g)" />
                <Form.Control type="number" name="meal1Carbs" placeholder="Meal 1 Carbs (g)" />
                <Form.Control type="number" name="meal1Fats" placeholder="Meal 1 Fats (g)" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formMeal1Data">
                <Form.Control type="text" name="meal1Name" placeholder="Meal 1 Name" />
                <Form.Control type="number" name="meal1Calories" placeholder="Meal 1 Calories (cal)" />
                <Form.Control type="number" name="meal1Protein" placeholder="Meal 1 Protein (g)" />
                <Form.Control type="number" name="meal1Carbs" placeholder="Meal 1 Carbs (g)" />
                <Form.Control type="number" name="meal1Fats" placeholder="Meal 1 Fats (g)" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formMeal1Data">
                <Form.Control type="text" name="meal1Name" placeholder="Meal 1 Name" />
                <Form.Control type="number" name="meal1Calories" placeholder="Meal 1 Calories (cal)" />
                <Form.Control type="number" name="meal1Protein" placeholder="Meal 1 Protein (g)" />
                <Form.Control type="number" name="meal1Carbs" placeholder="Meal 1 Carbs (g)" />
                <Form.Control type="number" name="meal1Fats" placeholder="Meal 1 Fats (g)" />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <h5 style={{textDecoration: "underline"}}>Fluids and Supplement Data</h5>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formWaterIntakeData">
                <Form.Label>Water Intake:</Form.Label>
                <Form.Control type="number" name="waterIntake" placeholder="Daily Water Intake (oz)" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formSupplement1Data">
                <Form.Label>Supplement 1 Entry:</Form.Label>
                <Form.Control type="text" name="supplement1Name" placeholder="Supplement 1 Name" />
                <Form.Control type="number" name="supplement1Amount" placeholder="Supplement 1 Amount (mg)" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formSupplement2Data">
                <Form.Label>Supplement 2 Entry:</Form.Label>
                <Form.Control type="text" name="supplement2Name" placeholder="Supplement 2 Name" />
                <Form.Control type="number" name="supplement2Amount" placeholder="Supplement 2 Amount (mg)" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formSupplement3Data">
                <Form.Label>Supplement 3 Entry:</Form.Label>
                <Form.Control type="text" name="supplement3Name" placeholder="Supplement 3 Name" />
                <Form.Control type="number" name="supplement3Amount" placeholder="Supplement 3 Amount (mg)" />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <h5 style={{textDecoration: "underline"}}>Resistance/Cardio Data</h5>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise1Data">
                <Form.Control type="text" name="exercise1Name" placeholder="Exercise 1 Name" />
                <Form.Control type="number" name="exercise1Sets" placeholder="Exercise 1 Sets" />
                <Form.Control type="number" name="exercise1Reps" placeholder="Exercise 1 Reps" />
                <Form.Control type="number" name="exercise1Weight" placeholder="Exercise 1 Weight" />
                <Form.Control type="text" name="exercise1Notes" placeholder="Exercise 1 Notes" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise1Data">
                <Form.Control type="text" name="exercise2Name" placeholder="Exercise 2 Name" />
                <Form.Control type="number" name="exercise2Sets" placeholder="Exercise 2 Sets" />
                <Form.Control type="number" name="exercise2Reps" placeholder="Exercise 2 Reps" />
                <Form.Control type="number" name="exercise2Weight" placeholder="Exercise 2 Weight" />
                <Form.Control type="text" name="exercise2Notes" placeholder="Exercise 2 Notes" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise1Data">
                <Form.Control type="text" name="exercise3Name" placeholder="Exercise 3 Name" />
                <Form.Control type="number" name="exercise3Sets" placeholder="Exercise 3 Sets" />
                <Form.Control type="number" name="exercise3Reps" placeholder="Exercise 3 Reps" />
                <Form.Control type="number" name="exercise3Weight" placeholder="Exercise 3 Weight" />
                <Form.Control type="text" name="exercise3Notes" placeholder="Exercise 3 Notes" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise1Data">
                <Form.Control type="text" name="exercise4Name" placeholder="Exercise 4 Name" />
                <Form.Control type="number" name="exercise4Sets" placeholder="Exercise 4 Sets" />
                <Form.Control type="number" name="exercise4Reps" placeholder="Exercise 4 Reps" />
                <Form.Control type="number" name="exercise4Weight" placeholder="Exercise 4 Weight" />
                <Form.Control type="text" name="exercise4Notes" placeholder="Exercise 4 Notes" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise1Data">
                <Form.Control type="text" name="exercise5Name" placeholder="Exercise 5 Name" />
                <Form.Control type="number" name="exercise5Sets" placeholder="Exercise 5 Sets" />
                <Form.Control type="number" name="exercise5Reps" placeholder="Exercise 5 Reps" />
                <Form.Control type="number" name="exercise5Weight" placeholder="Exercise 5 Weight" />
                <Form.Control type="text" name="exercise5Notes" placeholder="Exercise 5 Notes" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formCardioData">
                <Form.Label>Select Cardio Type:</Form.Label>
                <Form.Select name="cardioName">
                  <option disabled defaultValue="">Select Cardio Type</option>
                  <option value="Run/Walk">Run/Walk</option>
                  <option value="Elliptical">Elliptical</option>
                  <option value="Cycling">Cycling</option>
                  <option value="Stairmaster">Stairmaster</option>
                  <option value="Swim">Swim</option>
                </Form.Select>
                <Form.Control type="text" name="cardioDuration" placeholder="Cardio Duration" />
                <Form.Control type="number" name="cardioDistance" placeholder="Cardio Distance" />
                <Form.Control type="text" name="cardioNotes" placeholder="Cardio Note" />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <h5 style={{textDecoration: "underline"}}>Recovery & Health Data</h5>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formSleepData">
                <Form.Label>Sleep Data:</Form.Label>
                <Form.Control type="time" name="sleepTime" placeholder="Sleep Time" />
                <Form.Control type="time" name="wakeTime" placeholder="Wake Time" />
                <Form.Control type="text" name="sleepQuality" placeholder="Sleep Quality Description" />
                <Form.Control type="number" name="sleepScore" placeholder="Sleep Score 1-10" min="1" max="10" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="dailyHealthData">
                <Form.Label>Daily Health Status:</Form.Label>
                <Form.Control type="number" name="dailyWeight" placeholder="Daily Weight (lbs)" />
                <Form.Select defaultValue="" name="dailyStatus">
                  <option disabled>Select Daily Status</option>
                  <option value="Healthy">Healthy</option>
                  <option value="Tired">Tired</option>
                  <option value="Sick">Sick</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">{props.buttonText}</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
