import React from 'react'
import { Container, Card, CardGroup } from 'react-bootstrap'

//condense info using accordion component

export default function DataDetails(props) {
const { data, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>{data.entryDate}</h1>
      <Container>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Food</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
              <h2>Nutrition Data</h2>
                <h3>Food:</h3>
                  <p>{data.meal1Name}</p>
                    <p>{data.meal1Calories} Calories</p>
                    <p>{data.meal1Protein} g Protein</p>
                    <p>{data.meal1Carbs} g Carbs</p>
                    <p>{data.meal1Fats} g Fats</p>
                  <p>{data.meal2Name}</p>
                    <p>{data.meal2Calories} Calories</p>
                    <p>{data.meal2Protein} g Protein</p>
                    <p>{data.meal2Carbs} g Carbs</p>
                    <p>{data.meal2Fats} g Fats</p>
                  <p>{data.meal3Name}</p>
                    <p>{data.meal3Calories} Calories</p>
                    <p>{data.meal3Protein} g Protein</p>
                    <p>{data.meal3Carbs} g Carbs</p>
                    <p>{data.meal3Fats} g Fats</p>

                <h3>Fluids and Supplement Data</h3>
                  <p>{prodataps.waterIntake} oz</p>
                  <p>{data.supplement1Name}</p>
                  <p>{data.supplement1Amount} mg</p>
                  <p>{data.supplement2Name}</p>
                  <p>{data.supplement2Amount} mg</p>
                  <p>{data.supplement3Name}</p>
                  <p>{data.supplement3Amount} mg</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </React.Fragment>
  )
}
