import React from "react";
import PropTypes from "prop-types";

function Data(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenDataClicked(props.id)}>
        <h1>{props.entryDate}</h1>
        <h2>Nutrition Data</h2>
          <h3>Food:</h3>
            <p>{props.meal1Name}</p>
              <p>{props.meal1Calories} Calories</p>
              <p>{props.meal1Protein} g Protein</p>
              <p>{props.meal1Carbs} g Carbs</p>
              <p>{props.meal1Fats} g Fats</p>
            <p>{props.meal2Name}</p>
              <p>{props.meal2Calories} Calories</p>
              <p>{props.meal2Protein} g Protein</p>
              <p>{props.meal2Carbs} g Carbs</p>
              <p>{props.meal2Fats} g Fats</p>
            <p>{props.meal3Name}</p>
              <p>{props.meal3Calories} Calories</p>
              <p>{props.meal3Protein} g Protein</p>
              <p>{props.meal3Carbs} g Carbs</p>
              <p>{props.meal3Fats} g Fats</p>

          <h3>Fluids and Supplement Data</h3>
            <p>{props.waterIntake} oz</p>
            <p>{props.supplement1Name}</p>
            <p>{props.supplement1Amount} mg</p>
            <p>{props.supplement2Name}</p>
            <p>{props.supplement2Amount} mg</p>
            <p>{props.supplement3Name}</p>
            <p>{props.supplement3Amount} mg</p>

        <h2>Exercise Data</h2>
          <h3>Resistance Training:</h3>
            <p>{props.exercise1Name}</p>
              <p>{props.exercise1Sets} Sets</p>
              <p>{props.exercise1Reps} Reps</p>
              <p>{props.exercise1Weight} lbs</p>
              <p>{props.exercise1Note}</p>
            <p>{props.exercise2Name}</p>
              <p>{props.exercise2Sets} Sets</p>
              <p>{props.exercise2Reps} Reps</p>
              <p>{props.exercise2Weight} lbs</p>
              <p>{props.exercise2Note}</p>
            <p>{props.exercise3Name}</p>
              <p>{props.exercise3Sets} Sets</p>
              <p>{props.exercise3Reps} Reps</p>
              <p>{props.exercise3Weight} lbs</p>
              <p>{props.exercise3Note}</p>
            <p>{props.exercise4Name}</p>
              <p>{props.exercise4Sets} Sets</p>
              <p>{props.exercise4Reps} Reps</p>
              <p>{props.exercise4Weight} lbs</p>
              <p>{props.exercise4Note}</p>
            <p>{props.exercise5Name}</p>
              <p>{props.exercise5Sets} Sets</p>
              <p>{props.exercise5Reps} Reps</p>
              <p>{props.exercise5Weight} lbs</p>
              <p>{props.exercise5Note}</p>
          <h3>Resistance Training:</h3>
            <p>{props.cardioName}</p>
            <p>{props.cardioDuration}</p>
            <p>{props.cardioDistance}</p>
            <p>{props.cardioNote}</p>
      <h2>Recovery Data</h2>
          <h3>Sleep:</h3>
            <p>{props.sleepTime}</p>
            <p>{props.wakeTime}</p>
            <p>Will display time calculation using above props</p>
            <p>{props.sleepDescription}</p>
        <h2>Health Data</h2>
          <p>{props.dailyWeight}</p>
      </div>
    </React.Fragment>
  );
}

Data.propTypes = {
  entryDate: PropTypes.string,
  meal1Name: PropTypes.string,
  meal1Calories: PropTypes.number,
  meal1Protein: PropTypes.number,
  meal1Carbs: PropTypes.number,
  meal1Fats: PropTypes.number,
  meal2Name: PropTypes.string,
  meal2Calories: PropTypes.number,
  meal2Protein: PropTypes.number,
  meal2Carbs: PropTypes.number,
  meal2Fats: PropTypes.number,
  meal3Name: PropTypes.string,
  meal3Calories: PropTypes.number,
  meal3Protein: PropTypes.number,
  meal3Carbs: PropTypes.number,
  meal3Fats: PropTypes.number,
  waterIntake: PropTypes.number,
  supplement1Name: PropTypes.string,
  supplement1Amount: PropTypes.number,
  supplement2Name: PropTypes.string,
  supplement2Amount: PropTypes.number,
  supplement3Name: PropTypes.string,
  supplement3Amount: PropTypes.number,
  exercise1Name: PropTypes.string,
  exercise1Sets: PropTypes.number,
  exercise1Reps: PropTypes.number,
  exercise1Weight: PropTypes.number,
  exercise1Note: PropTypes.string,
  exercise2Name: PropTypes.string,
  exercise2Sets: PropTypes.number,
  exercise2Reps: PropTypes.number,
  exercise2Weight: PropTypes.number,
  exercise2Note: PropTypes.string,
  exercise3Name: PropTypes.string,
  exercise3Sets: PropTypes.number,
  exercise3Reps: PropTypes.number,
  exercise3Weight: PropTypes.number,
  exercise3Note: PropTypes.string,
  exercise4Name: PropTypes.string,
  exercise4Sets: PropTypes.number,
  exercise4Reps: PropTypes.number,
  exercise4Weight: PropTypes.number,
  exercise4Note: PropTypes.string,
  exercise5Name: PropTypes.string,
  exercise5Sets: PropTypes.number,
  exercise5Reps: PropTypes.number,
  exercise5Weight: PropTypes.number,
  exercise5Note: PropTypes.string,
  cardioName: PropTypes.string,
  cardioDuration: PropTypes.number,
  cardioDistance: PropTypes.number,
  cardioNote: PropTypes.string,
  sleepTime: PropTypes.string,
  wakeTime: PropTypes.string,
  sleepDescription: PropTypes.string,
  dailyWeight: PropTypes.number,
  id: PropTypes.string,
  whenDataClicked: PropTypes.func
}

export default Data;