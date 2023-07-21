import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function EditDataForm(props){
const { data } = props;

  function handleEditDataFormSubmission(event) {
    event.preventDefault();
    props.onEditData({
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
        exercise1Note: event.target.exercise1Note.value,
      exercise2Name: event.target.exercise2Name.value,
        exercise2Sets: parseInt(event.target.exercise2Sets.value),
        exercise2Reps: parseInt(event.target.exercise2Reps.value),
        exercise2Weight: parseInt(event.target.exercise2Weight.value),
        exercise2Note: event.target.exercise2Note.value,
      exercise3Name: event.target.exercise3Name.value,
        exercise3Sets: parseInt(event.target.exercise3Sets.value),
        exercise3Reps: parseInt(event.target.exercise3Reps.value),
        exercise3Weight: parseInt(event.target.exercise3Weight.value),
        exercise3Note: event.target.exercise3Note.value,
      exercise4Name: event.target.exercise4Name.value,
        exercise4Sets: parseInt(event.target.exercise4Sets.value),
        exercise4Reps: parseInt(event.target.exercise4Reps.value),
        exercise4Weight: parseInt(event.target.exercise4Weight.value),
        exercise4Note: event.target.exercise4Note.value,
      exercise5Name: event.target.exercise5Name.value,
        exercise5Sets: parseInt(event.target.exercise5Sets.value),
        exercise5Reps: parseInt(event.target.exercise5Reps.value),
        exercise5Weight: parseInt(event.target.exercise5Weight.value),
        exercise5Note: event.target.exercise5Note.value,
      cardioName: event.target.cardioName.value,
        cardioDuration: parseInt(event.target.cardioDuration.value),
        cardioDistance: parseInt(event.target.cardioDistance.value),
        cardioNote: event.target.cardioNote.value,
      sleepTime: event.target.sleepTime.value,
      wakeTime: event.target.wakeTime.value,
      sleepQuality: event.target.sleepQuality.value,
      sleepScore: event.target.sleepScore.value,
      dailyWeight: parseInt(event.target.dailyWeight.value),
      dailyStatus: event.target.dailyStatus.value,

      id: data.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditDataFormSubmission}
        buttonText="Update Data Entry" />
    </React.Fragment>
  );
}

EditDataForm.propTypes = {
  onEditData: PropTypes.func,
  data: PropTypes.object
};

export default EditDataForm;
