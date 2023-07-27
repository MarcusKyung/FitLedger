import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import { VictoryPie } from "victory";


function Data(props){
  return (
    <React.Fragment>
      <Container>
        <Card style={{ width: "100%", padding: "1em" }} onClick={() => props.whenDataClicked(props.id)}>
          <Row>
            <Col style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
              <div>
                <h1>{props.entryDate}</h1>
              </div>
            </Col>
            <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div>
                <p><strong>Daily Status:</strong> {props.dailyStatus}</p>
                <p><strong>Total Daily Calories:</strong> {props.totalCalories} cal</p>
                <p><strong>Total Daily Protein:</strong> {props.totalProtein} g</p>
                <p><strong>Total Daily Carbs:</strong> {props.totalCarbs} g</p>
                <p><strong>Total Daily Fats:</strong> {props.totalFats} g</p>
                <p><strong>Total Daily Water Intake:</strong> {props.waterIntake} oz</p>
              </div>
            </Col>
            <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div>
                <h5 style={{ textAlign: "center" }}>Macronutrient Breakdown:</h5>
                <h6 style={{ textAlign: "center" }}>Total Caloric Intake: {props.totalCalories}</h6>
                <VictoryPie
                  height={300}
                  labelRadius={({ innerRadius }) => innerRadius + 40} // Adjust the label position
                  labels={({ datum }) => `${datum.x}\n${datum.y} g`} // Combine x and y values for the label
                  data={[
                    { x: "Protein", y: props.totalProtein },
                    { x: "Carbs", y: props.totalCarbs },
                    { x: "Fats", y: props.totalFats }
                  ]}
                  colorScale={["#2d6efd", "#81b4fe", "#dee2e6"]}
                />
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