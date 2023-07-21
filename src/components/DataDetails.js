import React from 'react'
import PropTypes from "prop-types";
import { Container, Card, CardGroup, Accordion, Button } from 'react-bootstrap'



export default function DataDetails(props) {
const { data, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>{data.entryDate}</h1>
      <Container>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Food Data</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
              <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{data.meal1Name}</Accordion.Header>
                  <Accordion.Body>
                    <p>{data.meal1Calories} Calories</p>
                    <p>{data.meal1Protein} g Protein</p>
                    <p>{data.meal1Carbs} g Carbs</p>
                    <p>{data.meal1Fats} g Fats</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{data.meal2Name}</Accordion.Header>
                  <Accordion.Body>
                    <p>{data.meal2Calories} Calories</p>
                      <p>{data.meal2Protein} g Protein</p>
                      <p>{data.meal2Carbs} g Carbs</p>
                      <p>{data.meal2Fats} g Fats</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>{data.meal3Name}</Accordion.Header>
                  <Accordion.Body>
                    <p>{data.meal3Calories} Calories</p>
                      <p>{data.meal3Protein} g Protein</p>
                      <p>{data.meal3Carbs} g Carbs</p>
                      <p>{data.meal3Fats} g Fats</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Fluids and Supplement Data</Accordion.Header>
                  <Accordion.Body>
                  <p>{data.waterIntake} oz</p>
                  <p>{data.supplement1Name}</p> - <p>{data.supplement1Amount} mg</p>
                  <p>{data.supplement2Name}</p> - <p>{data.supplement2Amount} mg</p>
                  <p>{data.supplement3Name}</p> - <p>{data.supplement3Amount} mg</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Resistance/Cardio Data</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{data.exercise1Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{data.exercise1Sets} Sets</p>
                      <p>{data.exercise1Reps} Reps</p>
                      <p>{data.exercise1Weight} lbs</p>
                      <p>{data.exercise1Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>{data.exercise2Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{data.exercise2Sets} Sets</p>
                      <p>{data.exercise2Reps} Reps</p>
                      <p>{data.exercise2Weight} lbs</p>
                      <p>{data.exercise2Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>{data.exercise3Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{data.exercise3Sets} Sets</p>
                      <p>{data.exercise3Reps} Reps</p>
                      <p>{data.exercise3Weight} lbs</p>
                      <p>{data.exercise3Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>{data.exercise4Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{data.exercise4Sets} Sets</p>
                      <p>{data.exercise4Reps} Reps</p>
                      <p>{data.exercise4Weight} lbs</p>
                      <p>{data.exercise4Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>{data.exercise5Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{data.exercise5Sets} Sets</p>
                      <p>{data.exercise5Reps} Reps</p>
                      <p>{data.exercise5Weight} lbs</p>
                      <p>{data.exercise5Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>{data.cardioName}</Accordion.Header>
                    <Accordion.Body>
                    <p>{data.cardioDuration}</p>
                    <p>{data.cardioDistance}</p>
                    <p>{data.cardioNote}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Recovery Data</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
              <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Sleep Data:</Accordion.Header>
                  <Accordion.Body>
                    <p>{data.sleepTime} Reps</p>
                    <p>{data.wakeTime} lbs</p>
                    <p>{data.sleepDescription}</p>
                    <p>{data.sleepScore}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
      <Card>
        <Card.Body>
          <Card.Title>Health Data</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            <p>{data.dailyWeight}</p>
            <p>{data.dailyStatus}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        </Card.Footer>
      </Card>
      <Button onClick={onClickingEdit} variant="primary" size="lg">Update Data</Button>
      <Button onClick={() => onClickingDelete(data.id)} variant="danger" size="lg">Delete Data Entry</Button>
    </React.Fragment>
  )
}

DataDetails.propTypes = {
  data: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};
