import React from "react";
import PropTypes from 'prop-types';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const currentDate = new Date().toISOString().split('T')[0];


function ReusableForm(props) {
  return (
    <React.Fragment>
      <Container>
        <Form onSubmit={props.formSubmissionHandler}>
          <Row style={{marginTop: "25px"}}>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formEntryDate">
                <Form.Label style={{fontWeight: "bold"}}>Entry Date:</Form.Label>
                <Form.Control type="date" name="entryDate" placeholder="Entry Date" defaultValue={currentDate}  required/>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <h5 style={{textDecoration: "underline"}}>Meal Data:</h5>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formMeal1Data">
                <Form.Control style={{marginBottom: "10px", fontWeight: "bold"}} type="text" name="meal1Name" placeholder="Meal 1 Name" required/>
                <Form.Control type="number" name="meal1Protein" placeholder="Meal 1 Protein (g)" required/>
                <Form.Control type="number" name="meal1Carbs" placeholder="Meal 1 Carbs (g)" required/>
                <Form.Control type="number" name="meal1Fats" placeholder="Meal 1 Fats (g)" required/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formMeal1Data">
                <Form.Control style={{marginBottom: "10px", fontWeight: "bold"}} type="text" name="meal2Name" placeholder="Meal 2 Name" required/>
                <Form.Control type="number" name="meal2Protein" placeholder="Meal 2 Protein (g)" required/>
                <Form.Control type="number" name="meal2Carbs" placeholder="Meal 2 Carbs (g)" required/>
                <Form.Control type="number" name="meal2Fats" placeholder="Meal 2 Fats (g)" required/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formMeal1Data">
                <Form.Control style={{marginBottom: "10px", fontWeight: "bold"}} type="text" name="meal3Name" placeholder="Meal 3 Name"  required/>
                <Form.Control type="number" name="meal3Protein" placeholder="Meal 3 Protein (g)" required/>
                <Form.Control type="number" name="meal3Carbs" placeholder="Meal 3 Carbs (g)" required/>
                <Form.Control type="number" name="meal3Fats" placeholder="Meal 3 Fats (g)" required/>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <h5 style={{textDecoration: "underline"}}>Fluids and Supplement Data</h5>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formWaterIntakeData">
                <Form.Label>Water Intake:</Form.Label>
                <Form.Control type="number" name="waterIntake" placeholder="Daily Water Intake (oz)"  required/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formSupplement1Data">
                <Form.Label>Supplement 1 Entry:</Form.Label>
                <Form.Control type="text" name="supplement1Name" placeholder="Supplement 1 Name"  required/>
                <Form.Control type="number" name="supplement1Amount" placeholder="Supplement 1 Amount (mg)" min="0" required/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formSupplement2Data">
                <Form.Label>Supplement 2 Entry:</Form.Label>
                <Form.Control type="text" name="supplement2Name" placeholder="Supplement 2 Name"  required/>
                <Form.Control type="number" name="supplement2Amount" placeholder="Supplement 2 Amount (mg)" min="0" required/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formSupplement3Data">
                <Form.Label>Supplement 3 Entry:</Form.Label>
                <Form.Control type="text" name="supplement3Name" placeholder="Supplement 3 Name"  required/>
                <Form.Control type="number" name="supplement3Amount" placeholder="Supplement 3 Amount (mg)" min="0" required/>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <h5 style={{textDecoration: "underline"}}>Resistance/Cardio Data</h5>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise1Data">
                <Form.Control style={{marginBottom: "10px", fontWeight: "bold"}}  type="text" name="exercise1Name" placeholder="Exercise 1 Name"  required/>
                <Form.Control type="number" name="exercise1Sets" placeholder="Exercise 1 Sets"  required/>
                <Form.Control type="number" name="exercise1Reps" placeholder="Exercise 1 Reps"  required/>
                <Form.Control type="number" name="exercise1Weight" placeholder="Exercise 1 Weight"  required/>
                <Form.Control type="text" name="exercise1Notes" placeholder="Exercise 1 Notes"  required/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise2Data">
                <Form.Control style={{marginBottom: "10px", fontWeight: "bold"}}  type="text" name="exercise2Name" placeholder="Exercise 2 Name"  required/>
                <Form.Control type="number" name="exercise2Sets" placeholder="Exercise 2 Sets"  required/>
                <Form.Control type="number" name="exercise2Reps" placeholder="Exercise 2 Reps"  required/>
                <Form.Control type="number" name="exercise2Weight" placeholder="Exercise 2 Weight"  required/>
                <Form.Control type="text" name="exercise2Notes" placeholder="Exercise 2 Notes"  required/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise3Data">
                <Form.Control style={{marginBottom: "10px", fontWeight: "bold"}}  type="text" name="exercise3Name" placeholder="Exercise 3 Name"  required/>
                <Form.Control type="number" name="exercise3Sets" placeholder="Exercise 3 Sets"  required/>
                <Form.Control type="number" name="exercise3Reps" placeholder="Exercise 3 Reps"  required/>
                <Form.Control type="number" name="exercise3Weight" placeholder="Exercise 3 Weight"  required/>
                <Form.Control type="text" name="exercise3Notes" placeholder="Exercise 3 Notes"  required/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise4Data">
                <Form.Control style={{marginBottom: "10px", fontWeight: "bold"}}  type="text" name="exercise4Name" placeholder="Exercise 4 Name"  required/>
                <Form.Control type="number" name="exercise4Sets" placeholder="Exercise 4 Sets"  required/>
                <Form.Control type="number" name="exercise4Reps" placeholder="Exercise 4 Reps"  required/>
                <Form.Control type="number" name="exercise4Weight" placeholder="Exercise 4 Weight"  required/>
                <Form.Control type="text" name="exercise4Notes" placeholder="Exercise 4 Notes"  required/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formExercise5Data">
                <Form.Control style={{marginBottom: "10px", fontWeight: "bold"}}  type="text" name="exercise5Name" placeholder="Exercise 5 Name"  required/>
                <Form.Control type="number" name="exercise5Sets" placeholder="Exercise 5 Sets"  required/>
                <Form.Control type="number" name="exercise5Reps" placeholder="Exercise 5 Reps"  required/>
                <Form.Control type="number" name="exercise5Weight" placeholder="Exercise 5 Weight"  required/>
                <Form.Control type="text" name="exercise5Notes" placeholder="Exercise 5 Notes"  required/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formCardioData">
                <Form.Label>Select Cardio Type:</Form.Label>
                <Form.Select style={{marginBottom: "15px", fontWeight: "bold"}} name="cardioName"  required>
                  <option disabled defaultValue="">Select Cardio Type</option>
                  <option value="Treadmill">Treadmill</option>
                  <option value="Elliptical">Elliptical</option>
                  <option value="Cycling">Cycling</option>
                  <option value="Stairmaster">Stairmaster</option>
                  <option value="Swim">Swim</option>
                  <option value="None">None</option>
                </Form.Select>
                <Form.Control type="text" name="cardioDuration" placeholder="Cardio Duration"  required/>
                <Form.Control type="number" name="cardioDistance" placeholder="Cardio Distance"  required/>
                <Form.Control type="text" name="cardioNotes" placeholder="Cardio Note"  required/>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <h5 style={{textDecoration: "underline"}}>Recovery & Health Data</h5>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formSleepTime">
                <Form.Label>Sleep Data:</Form.Label>
                <Form.Control type="time" name="sleepTime" placeholder="Sleep Time"  required/>
                <Form.Control type="time" name="wakeTime" placeholder="Wake Time"  required/>

              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formSleepQuality">
                <Form.Label>Daily Sleep Status:</Form.Label>
                <Form.Control type="text" name="sleepQuality" placeholder="Sleep Quality Notes"  required/>
                <Form.Select defaultValue="" name="sleepScore" required>
                  <option disabled>Select Daily Status</option>
                  <option value="1">1 - Very Poor: Extremely restless sleep, constant waking up, and unable to fall back asleep easily.</option>
                  <option value="2">2 - Poor: Frequent disturbances, difficulty staying asleep, and feeling tired upon waking.</option>
                  <option value="3">3 - Fair: Some interruptions during the night, and waking up feeling somewhat fatigued.</option>
                  <option value="4">4 - Below Average: Occasional disruptions, feeling somewhat rested but not fully rejuvenated.</option>
                  <option value="5">5 - Average: Adequate sleep with occasional interruptions, waking up feeling moderately refreshed.</option>
                  <option value="6">6 - Above Average: Generally good sleep, waking up feeling somewhat refreshed.</option>
                  <option value="7">7 - Good: Consistently restful sleep, waking up feeling refreshed and energized.</option>
                  <option value="8">8 - Very Good: High-quality sleep, waking up feeling fully rejuvenated.</option>
                  <option value="9">9 - Excellent: Near-perfect sleep, waking up feeling exceptionally rested.</option>
                  <option value="10">10 - Outstanding: The best sleep possible, waking up feeling completely revitalized and ready to take on the day.</option>
                </Form.Select>

              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="dailyHealthData">
                <Form.Label>Daily Health Status:</Form.Label>
                <Form.Control type="number" name="dailyWeight" placeholder="Daily Weight (lbs)" min="0" max="500" required/>
                <Form.Select defaultValue="" name="dailyStatus" required>
                  <option disabled>Select Daily Status</option>
                  <option value="Very Sick">Very Sick: Severely unwell, experiencing intense discomfort or serious illness.</option>
                  <option value="Unwell">Unwell: Feeling sick and experiencing noticeable symptoms affecting daily activities.</option>
                  <option value="Under the Weatherk">Under the Weather: Slightly unwell, with mild symptoms but still able to function.</option>
                  <option value="Struggling">Struggling: Facing health challenges, not feeling well enough to be fully active.</option>
                  <option value="Okay">Okay: Neither sick nor healthy, feeling average or mediocre in terms of well-being.</option>
                  <option value="Fairly Healthy">Fairly Healthy: Generally well, but with some minor issues or lingering tiredness.</option>
                  <option value="Healthy">Healthy: Feeling fine and in good overall health, able to perform regular activities.</option>
                  <option value="Very Healthy">Very Healthy: In excellent health, feeling energetic and vibrant.</option>
                  <option value="Thriving">Thriving: Flourishing with robust health, full of vitality and strength.</option>
                  <option value="Peak of Health">Peak of Health: At the best possible health state, feeling exceptionally strong and vibrant.</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <div className="d-grid gap-2">
          <Button type="submit">{props.buttonText}</Button>
          </div>
          <hr />
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