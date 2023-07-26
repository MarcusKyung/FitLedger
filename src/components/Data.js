import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";


function Data(props){
  return (
    <React.Fragment>
      <Container>
        <Card style={{width: "100%" , padding: "1em"}} onClick = {() => props.whenDataClicked(props.id)}> 
        <Row>
          <Col style={{ display: "flex", alignItems: "center", paddingTop: "3em" }}>
            <div style={{ borderRadius: "5px", background: "lightGrey", padding: "10px", margin: "auto" }}>
              <h1 style={{ textAlign: "center" }}>{props.entryDate}</h1>
            </div>
          </Col>
          <Col>
            <div>
              <p style={{textAlign: "left"}}><strong>Daily Status:</strong> {props.dailyStatus}</p>
              <p style={{textAlign: "left"}}><strong>Total Daily Calories:</strong> {props.totalCalories} cal</p>
              <p style={{textAlign: "left"}}><strong>Total Daily Protein:</strong> {props.totalProtein} g</p>
              <p style={{textAlign: "left"}}><strong>Total Daily Carbs:</strong> {props.totalCarbs} g</p>
              <p style={{textAlign: "left"}}><strong>Total Daily Fats:</strong> {props.totalFats} g</p>
            </div>
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