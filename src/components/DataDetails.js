import React from 'react'
import { Container, Card, CardGroup, Accordion } from 'react-bootstrap'

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
                  <Accordion.Header>{data.Meal1Name}</Accordion.Header>
                  <Accordion.Body>
                    <p>{data.Meal1Calories} Calories</p>
                    <p>{data.Meal1Protein} g Protein</p>
                    <p>{data.Meal1Carbs} g Carbs</p>
                    <p>{data.Meal1Fats} g Fats</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{data.Meal2Name}</Accordion.Header>
                  <Accordion.Body>
                    <p>{data.Meal2Calories} Calories</p>
                      <p>{data.Meal2Protein} g Protein</p>
                      <p>{data.Meal2Carbs} g Carbs</p>
                      <p>{data.Meal2Fats} g Fats</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>{data.Meal3Name}</Accordion.Header>
                  <Accordion.Body>
                    <p>{data.Meal3Calories} Calories</p>
                      <p>{data.Meal3Protein} g Protein</p>
                      <p>{data.Meal3Carbs} g Carbs</p>
                      <p>{data.Meal3Fats} g Fats</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Fluids and Supplement Data</Accordion.Header>
                  <Accordion.Body>
                  <p>{props.waterIntake} oz</p>
                  <p>{props.supplement1Name}</p> - <p>{props.supplement1Amount} mg</p>
                  <p>{props.supplement2Name}</p> - <p>{props.supplement2Amount} mg</p>
                  <p>{props.supplement3Name}</p> - <p>{props.supplement3Amount} mg</p>
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
                    <Accordion.Header>{props.exercise1Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{props.exercise1Sets} Sets</p>
                      <p>{props.exercise1Reps} Reps</p>
                      <p>{props.exercise1Weight} lbs</p>
                      <p>{props.exercise1Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>{props.exercise2Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{props.exercise2Sets} Sets</p>
                      <p>{props.exercise2Reps} Reps</p>
                      <p>{props.exercise2Weight} lbs</p>
                      <p>{props.exercise2Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>{props.exercise3Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{props.exercise3Sets} Sets</p>
                      <p>{props.exercise3Reps} Reps</p>
                      <p>{props.exercise3Weight} lbs</p>
                      <p>{props.exercise3Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>{props.exercise4Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{props.exercise4Sets} Sets</p>
                      <p>{props.exercise4Reps} Reps</p>
                      <p>{props.exercise4Weight} lbs</p>
                      <p>{props.exercise4Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>{props.exercise5Name}</Accordion.Header>
                    <Accordion.Body>
                      <p>{props.exercise5Sets} Sets</p>
                      <p>{props.exercise5Reps} Reps</p>
                      <p>{props.exercise5Weight} lbs</p>
                      <p>{props.exercise5Note}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>{props.cardioName}</Accordion.Header>
                    <Accordion.Body>
                    <p>{props.cardioDuration}</p>
                    <p>{props.cardioDistance}</p>
                    <p>{props.cardioNote}</p>
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
                    <p>{props.sleepTime} Reps</p>
                    <p>{props.wakeTime} lbs</p>
                    <p>{props.sleepDescription}</p>
                    <p>{props.sleepScore}</p>
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
            <p>{props.dailyWeight}</p>
            <p>{props.dailyStatus}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        </Card.Footer>
      </Card>
      <Button onClick={onClickingEdit} variant="primary" size="lg" block>Update Data</Button>
      <Button onClick={() => onClickingDelete(ticket.id)} variant="danger" size="lg" block>Delete Data Entry</Button>
    </React.Fragment>
  )
}
