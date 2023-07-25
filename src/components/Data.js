import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";

// function calculateTotalCals(meal1Calories, meal2Calories, meal3Calories) {
//   const dailyCals = meal1Calories+meal2Calories+meal3Calories;
//   return dailyCals;
// }



function Data(props){
  const formattedMMDD = props.entryDate.slice(5, 10); // Extract the month and day part (e.g., "MM-DD")
  const formattedYear = props.entryDate.slice(0, 4); // Extract the year part (e.g., "YYYY")

  return (
    <React.Fragment>
      <Container>
        <Card style={{width: "100%" , height: "200px"}} onClick = {() => props.whenDataClicked(props.id)}> 
        <Row>
          <Col style={{ display: "flex", alignItems: "center", paddingTop: "3em" }}>
            <div style={{ outline: "2px solid red", margin: "auto" }}>
              <h1 style={{ textAlign: "center" }}>{formattedMMDD}</h1>
              <h1 style={{ textAlign: "center" }}>{formattedYear}</h1>
            </div>
          </Col>
          <Col>
            <p style={{textAlign: "center"}}><em>{props.dailyStatus}</em></p>
            <p style={{textAlign: "center"}}><em>{props.meal1Calories}</em></p>
          </Col>
        </Row>
        </Card>
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