import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

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

        <input type='text' name='exercise1Name' placeholder='Exercise 1 Name' />
        <input type='number' name='exercise1Sets' placeholder='Exercise 1 Sets' />
        <input type='number' name='exercise1Reps' placeholder='Exercise 1 Reps' />
        <input type='number' name='exercise1Weight' placeholder='Exercise 1 Weight' />
        <input type='text' name='exercise1Notes' placeholder='Exercise 1 Notes' />

        <input type='text' name='exercise2Name' placeholder='Exercise 2 Name' />
        <input type='number' name='exercise2Sets' placeholder='Exercise 2 Sets' />
        <input type='number' name='exercise2Reps' placeholder='Exercise 2 Reps' />
        <input type='number' name='exercise2Weight' placeholder='Exercise 2 Weight' />
        <input type='text' name='exercise2Notes' placeholder='Exercise 2 Notes' />

        <input type='text' name='exercise3Name' placeholder='Exercise 3 Name' />
        <input type='number' name='exercise3Sets' placeholder='Exercise 3 Sets' />
        <input type='number' name='exercise3Reps' placeholder='Exercise 3 Reps' />
        <input type='number' name='exercise3Weight' placeholder='Exercise 3 Weight' />
        <input type='text' name='exercise3Notes' placeholder='Exercise 3 Notes' />

        <input type='text' name='exercise4Name' placeholder='Exercise 4 Name' />
        <input type='number' name='exercise4Sets' placeholder='Exercise 4 Sets' />
        <input type='number' name='exercise4Reps' placeholder='Exercise 4 Reps' />
        <input type='number' name='exercise4Weight' placeholder='Exercise 4 Weight' />
        <input type='text' name='exercise4Notes' placeholder='Exercise 4 Notes' />

        <input type='text' name='exercise5Name' placeholder='Exercise 5 Name' />
        <input type='number' name='exercise5Sets' placeholder='Exercise 5 Sets' />
        <input type='number' name='exercise5Reps' placeholder='Exercise 5 Reps' />
        <input type='number' name='exercise5Weight' placeholder='Exercise 5 Weight' />
        <input type='text' name='exercise5Notes' placeholder='Exercise 5 Notes' />

        <select name="cardioName">
          <option value="" disabled selected>Select Cardio Type</option>
          <option value="Run/Walk">Run/Walk</option>
          <option value="Elliptical">Elliptical</option>
          <option value="Cycling">Cycling</option>
          <option value="Stairmaster">Stairmaster</option>
          <option value="Swim">Swim</option>
        </select>        
        <input type='number' name='cardioDuration' placeholder='Cardio Duration' />
        <input type='number' name='cardioDistance' placeholder='Cardio Distance' />
        <input type='text' name='cardioNote' placeholder='Cardio Note' />

        <hr />

        <input type='time' name='sleepTime' placeholder='Sleep Time' />
        <input type='time' name='wakeTime' placeholder='Wake Time' />
        <input type='text' name='sleepDescription' placeholder='Sleep Quality Description' />
        <input type='number' name='sleepScore' placeholder='Sleep Score 1-10' min="1" max="10" />

        <input type='number' name='dailyWeight' placeholder='Daily Weight (lbs)' />

        <button type='submit'>{props.buttonText}</button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;