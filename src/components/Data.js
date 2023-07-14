import React from "react";
import PropTypes from "prop-types";

function Data(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h2>Nutrition Data</h2>
          <h3>Food:</h3>
            <p>{props.meal1Name}</p>
              <p>{props.meal1Calories}</p>
              <p>{props.meal1Protein}</p>
              <p>{props.meal1Carbs}</p>
              <p>{props.meal1Fats}</p>
            <p>{props.meal2Name}</p>
              <p>{props.meal2Calories}</p>
              <p>{props.meal2Protein}</p>
              <p>{props.meal2Carbs}</p>
              <p>{props.meal2Fats}</p>
            <p>{props.meal3Name}</p>
              <p>{props.meal3Calories}</p>
              <p>{props.meal3Protein}</p>
              <p>{props.meal3Carbs}</p>
              <p>{props.meal3Fats}</p>
          <h3>Fluids and Supplement Data</h3>
              <p>{props.waterIntake}</p>
              <p>{props.supplement1Name}</p>
              <p>{props.supplement1Amount}</p>
              <p>{props.supplement2Name}</p>
              <p>{props.supplement2Amount}</p>
              <p>{props.supplement3Name}</p>
              <p>{props.supplement3Amount}</p>
        <h2>Exercise Data</h2>
        <h2>Recovery Data</h2>
        <h2>Health Data</h2>
        <h3></h3>
        <p>{props.dailyWeight}</p>
      </div>
    </React.Fragment>
  );
}

Data.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenDataClicked: PropTypes.func
}

export default Ticket;