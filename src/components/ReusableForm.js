import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='names' placeholder='Meal 1 Name' />
        <input type='number' name='meal1Calories' placeholder='Meal 1 Calories' />
        <input type='number' name='meal1Protein' placeholder='Meal 1 Protein' />
        <input type='number' name='meal1Carbs' placeholder='Meal 1 Carbs' />
        <input type='number' name='meal1Fats' placeholder='Meal 1 Fats' />

        <input type='text' name='names' placeholder='Meal 2 Name' />
        <input type='number' name='meal2Calories' placeholder='Meal 2 Calories' />
        <input type='number' name='meal2Protein' placeholder='Meal 2 Protein' />
        <input type='number' name='meal2Carbs' placeholder='Meal 2 Carbs' />
        <input type='number' name='meal2Fats' placeholder='Meal 2 Fats' />

        <input type='text' name='names' placeholder='Meal 3 Name' />
        <input type='number' name='meal3Calories' placeholder='Meal 3 Calories' />
        <input type='number' name='meal3Protein' placeholder='Meal 3 Protein' />
        <input type='number' name='meal3Carbs' placeholder='Meal 3 Carbs' />
        <input type='number' name='meal3Fats' placeholder='Meal 3 Fats' />

        <input type='number' name='waterIntake' placeholder='Water Intake' />

        <input type='text' name='supplement1Name' placeholder='Supplement 1 Name' />
        <input type='number' name='supplement1Amount' placeholder='Supplement 1 Amount' />

        <input type='text' name='supplement2Name' placeholder='Supplement 2 Name' />
        <input type='number' name='supplement1Amount' placeholder='Supplement 2 Amount' />

        <input type='text' name='supplement3Name' placeholder='Supplement 3 Name' />
        <input type='number' name='supplement3Amount' placeholder='Supplement 3 Amount' />

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
          <option value="Cycling">Cycling</option>
          <option value="Stairmaster">Stairmaster</option>
        </select>        
        <input type='number' name='cardioDuration' placeholder='Cardio Duration' />
        <input type='number' name='cardioDistance' placeholder='Cardio Distance' />
        <input type='text' name='cardioNote' placeholder='Cardio Note' />

        <input type='time' name='sleepTime' placeholder='Sleep Time' />
        <input type='time' name='wakeTime' placeholder='Wake Time' />
        <input type='text' name='sleepDescription' placeholder='Sleep Quality Description' />

        <input type='number' name='dailyWeight' placeholder='Daily Weight (lbs)' />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;