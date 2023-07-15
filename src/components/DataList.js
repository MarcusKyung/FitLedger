import React from 'react';
import PropTypes from "prop-types";
import Data from "./Data";

export default function DataList() {
  return (
    <React.Fragment>
      <hr/>
      {props.dataList.map((data) => 
        <Data 
          whenDataClicked={props.onDataSelection}
          entryDate={data.entryDate}
          meal1Name={data.meal1Name}
          meal1Calories={data.meal1Calories} 
          meal1Protein={data.meal1Protein}
          meal1Carbs={data.meal1Carbs}
          meal1Fats={data.meal1Fats}
          meal2Name={data.meal2Name}
          meal2Calories={data.meal2Calories}
          meal2Protein={data.meal2Protein}
          meal2Carbs={data.meal2Carbs}
          meal2Fats={data.meal2Fats}
          meal3Name={data.meal3Name}
          meal3Calories={data.meal3Calories}
          meal3Protein={data.meal3Protein}
          meal3Carbs={data.meal3Carbs}
          meal3Fats={data.meal3Fats}
          waterIntake={data.waterIntake}
          supplement1Name={data.supplement1Name}
          supplement1Amount={data.supplement1Amount}
          supplement2Name={data.supplement2Name}
          supplement2Amount={data.supplement2Amount}
          supplement3Name={data.supplement3Name}
          supplement3Amount={data.supplement3Amount}
          exercise1Name={data.exercise1Name}
          exercise1Sets={data.exercise1Sets}
          exercise1Reps={data.exercise1Reps}
          exercise1Weight={data.exercise1Weight}
          exercise1Note={data.exercise1Note}
          exercise2Name={data.exercise2Name}
          exercise2Sets={data.exercise2Sets}
          exercise2Reps={data.exercise2Reps}
          exercise2Weight={data.exercise2Weight}
          exercise2Note={data.exercise2Note}
          exercise3Name={data.exercise3Name}
          exercise3Sets={data.exercise3Sets}
          exercise3Reps={data.exercise3Reps}
          exercise3Weight={data.exercise3Weight}
          exercise3Note={data.exercise3Note}
          exercise4Name={data.exercise4Name}
          exercise4Sets={data.exercise4Sets}
          exercise4Reps={data.exercise4Reps}
          exercise4Weight={data.exercise4Weight}
          exercise4Note={data.exercise4Note}
          exercise5Name={data.exercise5Name}
          exercise5Sets={data.exercise5Sets}
          exercise5Reps={data.exercise5Reps}
          exercise5Weight={data.exercise5Weight}
          exercise5Note={data.exercise5Note}
          cardioName={data.cardioName}
          cardioDuration={data.cardioDuration}
          cardioDistance={data.cardioDistance}
          cardioNote={data.cardioNote}
          sleepTime={data.sleepTime}
          wakeTime={data.wakeTime}
          sleepDescription={data.sleepDescription}
          dailyWeight={data.dailyWeight}
          id={data.id}
          key={data.id}/>
      )}
    </React.Fragment>  )
}

DataList.propTypes = {
  dataList: PropTypes.array,
  onDataSelection: PropTypes.func
};