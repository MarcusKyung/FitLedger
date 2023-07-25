import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";

// function calculateTotalCals(meal1Calories, meal2Calories, meal3Calories) {
//   const dailyCals = meal1Calories+meal2Calories+meal3Calories;
//   return dailyCals;
// }



function Data(props){

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col />
          <Col xs={6}>
            <Card style={{width: "200px", height: "200px"}} onClick = {() => props.whenDataClicked(props.id)}> 
              <h3 style={{textAlign: "center"}}>{props.entryDate}</h3>
              <p style={{textAlign: "center", outline: "2px solid red"}}><em>{props.dailyStatus}</em></p>
              <p style={{textAlign: "center", outline: "2px solid red"}}><em>{props.meal1Calories}</em></p>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </React.Fragment>
  );
}

Data.propTypes = {
  entryDate: PropTypes.string,
  id: PropTypes.string,
  whenDataClicked: PropTypes.func
}

export default Data;