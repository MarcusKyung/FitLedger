import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function Data(props){

  return (
    <React.Fragment>
      <Card style={{width: "600px"}} onClick = {() => props.whenDataClicked(props.id)}> 
        <h1>{props.entryDate}</h1>
      </Card>
    </React.Fragment>
  );
}

Data.propTypes = {
  entryDate: PropTypes.string,
  id: PropTypes.string,
  whenDataClicked: PropTypes.func
}

export default Data;