import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewDataForm(props){

  function handleNewDataFormSubmission(event) {
    event.preventDefault();
    props.onNewDataCreation({
      entryDate: event.target.entryData.value,
      meal1Name: event.target.meal1Name.value,
        meal1Calories: parseInt(event.target.meal1Calories.value),
        meal1Protein: parseInt(event.target.meal1Protein.value),
        meal1Carbs: parseInt(event.target.meal1Carbs.value),
        meal1Fats: parseInt(event.target.meal1Fats.value), 
      meal2Name: event.target.meal2Name.value,
        meal2Calories: parseInt(event.target.meal2Calories.value),
        meal2Protein: parseInt(event.target.meal2Protein.value),
        meal2Carbs: parseInt(event.target.meal2Carbs.value),
        meal2Fats: parseInt(event.target.meal2Fats.value),
      meal3Name: event.target.meal3Name.value,
        meal3Calories: parseInt(event.target.meal3Calories.value),
        meal3Protein:  parseInt(event.target.meal3Protein.value),
        meal3Carbs: parseInt(event.target.meal3Carbs.value),
        meal3Fats: parseInt(event.target.meal3Fats.value),
      waterIntake: parseInt(event.target.waterIntake.value),
      supplement1Name: event.target.supplement1Name.value,
        supplement1Amount: parseInt(event.target.supplement1Amount.value),
      supplement2Name: event.target.supplement2Name.value,
        supplement2Amount: parseInt(event.target.supplement2Amount.value),
      supplement3Name: event.target.supplement3Name.value,
        supplement3Amount: parseInt(event.target.supplement3Amount.value),
      exercise1Name: event.target.exercise1Name.value,
        exercise1Sets: parseInt(event.target.exercise1Sets.value),
        exercise1Reps: parseInt(event.target.exercise1Reps.value),
        exercise1Weight: parseInt(event.target.exercise1Weight.value),
        exercise1s: event.target.exercise1Notes.value,
      exercise2Name: event.target.exercise2Name.value,
        exercise2Sets: parseInt(event.target.exercise2Sets.value),
        exercise2Reps: parseInt(event.target.exercise2Reps.value),
        exercise2Weight: parseInt(event.target.exercise2Weight.value),
        exercise2Notes: event.target.exercise2Notes.value,
      exercise3Name: event.target.exercise3Name.value,
        exercise3Sets: parseInt(event.target.exercise3Sets.value),
        exercise3Reps: parseInt(event.target.exercise3Reps.value),
        exercise3Weight: parseInt(event.target.exercise3Weight.value),
        exercise3Notes: event.target.exercise3Notes.value,
      exercise4Name: event.target.exercise4Name.value,
        exercise4Sets: parseInt(event.target.exercise4Sets.value),
        exercise4Reps: parseInt(event.target.exercise4Reps.value),
        exercise4Weight: parseInt(event.target.exercise4Weight.value),
        exercise4Notes: event.target.exercise4Notes.value,
      exercise5Name: event.target.exercise5Name.value,
        exercise5Sets: parseInt(event.target.exercise5Sets.value),
        exercise5Reps: parseInt(event.target.exercise5Reps.value),
        exercise5Weight: parseInt(event.target.exercise5Weight.value),
        exercise5Notes: event.target.exercise5Notes.value,
      cardioName: event.target.cardioName.value,
        cardioDuration: parseInt(event.target.cardioDuration.value),
        cardioDistance: parseInt(event.target.cardioDistance.value),
        cardioNotes: event.target.cardioNotes.value,
      sleepTime: event.target.sleepTime.value,
      wakeTime: event.target.wakeTime.value,
      sleepQuality: event.target.sleepQuality.value,
      sleepScore: event.target.sleepScore.value,
      dailyWeight: parseInt(event.target.dailyWeight.value),
      dailyStatus: event.target.dailyStatus.value,

      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewDataFormSubmission}
        buttonText="Submit Data Entry" />
    </React.Fragment>
  );
}

NewDataForm.propTypes = {
  onNewDataCreation: PropTypes.func
};

export default NewDataForm;
