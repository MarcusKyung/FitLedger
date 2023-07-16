import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group className="mb-3" controlId="formMeal1Data">
          <Form.Control type="text" placeholder="Meal 1 Name" />
          <Form.Control type="number" placeholder="Meal 1 Calories (cal)" />
          <Form.Control type="number" placeholder="Meal 1 Protein (g)" />
          <Form.Control type="number" placeholder="Meal 1 Carbs (g)" />
          <Form.Control type="number" placeholder="Meal 1 Fats (g)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMeal2Data">
          <Form.Control type="text" placeholder="Meal 1 Name" />
          <Form.Control type="number" placeholder="Meal 2 Calories (cal)" />
          <Form.Control type="number" placeholder="Meal 2 Protein (g)" />
          <Form.Control type="number" placeholder="Meal 2 Carbs (g)" />
          <Form.Control type="number" placeholder="Meal 2 Fats (g)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMeal3Data">
          <Form.Control type="text" placeholder="Meal 3 Name" />
          <Form.Control type="number" placeholder="Meal 3 Calories (cal)" />
          <Form.Control type="number" placeholder="Meal 3 Protein (g)" />
          <Form.Control type="number" placeholder="Meal 3 Carbs (g)" />
          <Form.Control type="number" placeholder="Meal 3 Fats (g)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWaterIntakeData">
          <Form.Control type="number" placeholder="Daily Water Intake (oz)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSupplement1Data">
          <Form.Control type="text" placeholder="Supplement 1 Name" />
          <Form.Control type="number" placeholder="Supplement 1 Amount (mg)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSupplement2Data">
          <Form.Control type="text" placeholder="Supplement 2 Name" />
          <Form.Control type="number" placeholder="Supplement 2 Amount (mg)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSupplement2Data">
          <Form.Control type="text" placeholder="Supplement 2 Name" />
          <Form.Control type="number" placeholder="Supplement 2 Amount (mg)" />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formExercise1Data">
          <Form.Control type="text" placeholder="Exercise 1 Name" />
          <Form.Control type="number" placeholder="Exercise 1 Sets" />
          <Form.Control type="number" placeholder="Exercise 1 Reps" />
          <Form.Control type="number" placeholder="Exercise 1 Weight" />
          <Form.Control type="text" placeholder="Exercise 1 Notes" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formExercise2Data">
          <Form.Control type="text" placeholder="Exercise 2 Name" />
          <Form.Control type="number" placeholder="Exercise 2 Sets" />
          <Form.Control type="number" placeholder="Exercise 2 Reps" />
          <Form.Control type="number" placeholder="Exercise 2 Weight" />
          <Form.Control type="text" placeholder="Exercise 2 Notes" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formExercise3Data">
          <Form.Control type="text" placeholder="Exercise 3 Name" />
          <Form.Control type="number" placeholder="Exercise 3 Sets" />
          <Form.Control type="number" placeholder="Exercise 3 Reps" />
          <Form.Control type="number" placeholder="Exercise 3 Weight" />
          <Form.Control type="text" placeholder="Exercise 3 Notes" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formExercise4Data">
          <Form.Control type="text" placeholder="Exercise 4 Name" />
          <Form.Control type="number" placeholder="Exercise 4 Sets" />
          <Form.Control type="number" placeholder="Exercise 4 Reps" />
          <Form.Control type="number" placeholder="Exercise 4 Weight" />
          <Form.Control type="text" placeholder="Exercise 4 Notes" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formExercise5Data">
          <Form.Control type="text" placeholder="Exercise 5 Name" />
          <Form.Control type="number" placeholder="Exercise 5 Sets" />
          <Form.Control type="number" placeholder="Exercise 5 Reps" />
          <Form.Control type="number" placeholder="Exercise 5 Weight" />
          <Form.Control type="text" placeholder="Exercise 5 Notes" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCardioData">
          <Form.Label>Select Cardio Type</Form.Label>
          <Form.Select>
            <option value="" disabled selected>Select Cardio Type</option>
            <option value="Run/Walk">Run/Walk</option>
            <option value="Elliptical">Elliptical</option>
            <option value="Cycling">Cycling</option>
            <option value="Stairmaster">Stairmaster</option>
            <option value="Swim">Swim</option>
          </Form.Select>
          <Form.Control type="text" placeholder="Cardio Duration" />
          <Form.Control type="number" placeholder="Cardio Distance" />
          <Form.Control type="text" placeholder="Cardio Note" />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formSleepData">
          <Form.Control type="time" placeholder="Sleep Time" />
          <Form.Control type="time" placeholder="Wake Time" />
          <Form.Control type="text" placeholder="Sleep Quality Description" />
          <Form.Control type="number" placeholder="Sleep Score 1-10" min="1" max="10"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSleepData">
          <Form.Control type="number" placeholder="Daily Weight (lbs)" />
        </Form.Group>
        <Button type='submit'>{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;