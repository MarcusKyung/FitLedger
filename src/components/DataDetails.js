import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, CardGroup, Accordion, Button } from 'react-bootstrap';
import { VictoryPie } from 'victory';

export default function DataDetails(props) {
  const { data, onClickingDelete, onClickingEdit } = props;
  
  return (
    <React.Fragment>
      <Container style={{marginTop: "10px"}}>
        <Card>
          <h1 style={{textAlign: "center"}}>{data.entryDate}</h1>
        </Card>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Food Data</Card.Title>
              <hr />
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Meal 1: {data.meal1Name}</Accordion.Header>
                  <Accordion.Body>
                    {data.meal1Calories} Calories <br />
                    {data.meal1Protein} g Protein <br />
                    {data.meal1Carbs} g Carbs <br />
                    {data.meal1Fats} g Fats <br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Meal 2: {data.meal2Name}</Accordion.Header>
                  <Accordion.Body>
                    {data.meal2Calories} Calories <br />
                    {data.meal2Protein} g Protein <br />
                    {data.meal2Carbs} g Carbs <br />
                    {data.meal2Fats} g Fats <br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Meal 3: {data.meal3Name}</Accordion.Header>
                  <Accordion.Body>
                    {data.meal3Calories} Calories <br />
                    {data.meal3Protein} g Protein <br />
                    {data.meal3Carbs} g Carbs <br />
                    {data.meal3Fats} g Fats <br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Fluids and Supplement Data</Accordion.Header>
                  <Accordion.Body>
                    {data.waterIntake} oz <br />
                    {data.supplement1Name} - {data.supplement1Amount} mg <br />
                    {data.supplement2Name} - {data.supplement2Amount} mg <br />
                    {data.supplement3Name} - {data.supplement3Amount} mg <br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Caloric Breakdown by Meal:</Accordion.Header>
                  <Accordion.Body>
                    <VictoryPie
                      height={300}
                      labelRadius={({ innerRadius }) => innerRadius + 40} 
                      labels={({ datum }) => `${datum.x}\n${datum.y} cals`} 
                      data={[
                        { x: "Meal 1", y: data.meal1Calories },
                        { x: "Meal 2", y: data.meal2Calories },
                        { x: "Meal 3", y: data.meal3Calories }
                      ]}
                      colorScale={["#2d6efd", "#81b4fe", "#dee2e6"]}/>
                    </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Resistance/Cardio Data</Card.Title>
              <hr />
              <Card.Text>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Exercise 1: {data.exercise1Name}</Accordion.Header>
                    <Accordion.Body>
                      {data.exercise1Sets} Sets <br />
                      {data.exercise1Reps} Reps <br />
                      {data.exercise1Weight} lbs <br />
                      {data.exercise1Notes} <br />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Exercise 2: {data.exercise2Name}</Accordion.Header>
                    <Accordion.Body>
                      {data.exercise2Sets} Sets <br />
                      {data.exercise2Reps} Reps <br />
                      {data.exercise2Weight} lbs <br />
                      {data.exercise2Notes} <br />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Exercise 3: {data.exercise3Name}</Accordion.Header>
                    <Accordion.Body>
                      {data.exercise3Sets} Sets <br />
                      {data.exercise3Reps} Reps <br />
                      {data.exercise3Weight} lbs <br />
                      {data.exercise3Notes} <br />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Exercise 4: {data.exercise4Name}</Accordion.Header>
                    <Accordion.Body>
                      {data.exercise4Sets} Sets <br />
                      {data.exercise4Reps} Reps <br />
                      {data.exercise4Weight} lbs <br />
                      {data.exercise4Notes} <br />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Exercise 5: {data.exercise5Name}</Accordion.Header>
                    <Accordion.Body>
                      {data.exercise5Sets} Sets <br />
                      {data.exercise5Reps} Reps <br />
                      {data.exercise5Weight} lbs <br />
                      {data.exercise5Notes} <br />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Cardio: {data.cardioName}</Accordion.Header>
                    <Accordion.Body>
                      Duration: {data.cardioDuration} Minutes <br />
                      Distance: {data.cardioDistance} mi <br />
                      Notes: {data.cardioNotes} <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Recovery Data</Card.Title>
              <hr />
              <Card.Text>
                Bedtime: {data.sleepTime} <br />
                Waketime: {data.wakeTime} <br />
                Sleep Quality Description: {data.sleepQuality} <br />
                Sleep rating: {data.sleepScore}/10 <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </CardGroup>
        
        <Card style={{marginTop: "10px"}}>
          <Card.Body>
            <Card.Title>Health Data</Card.Title>
            <hr />
            <Card.Text>
              Daily Weight: {data.dailyWeight} <br />
              Daily Status: {data.dailyStatus}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>

        <div style={{marginTop: "10px"}} className="d-grid gap-2">
          <Button onClick={onClickingEdit} variant="primary" size="lg">
            Update Data
          </Button>
          <Button onClick={() => onClickingDelete(data.id)} variant="danger" size="lg">
            Delete Data Entry
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}

DataDetails.propTypes = {
  data: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};
