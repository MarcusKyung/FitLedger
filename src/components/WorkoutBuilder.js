import React from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
// import { db } from "../firebase.js";


export default function WorkoutBuilder() {
  // const [selectedOption, setSelectedOption] = useState("");
  // const [workout, setWorkout] = useState([]);

  // const handleOptionChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const exercisesRef = db.collection("exercises").doc(selectedOption);
  //     const doc = await exercisesRef.get();

  //     if (doc.exists) {
  //       const data = doc.data();

  //       const randomWorkout = Object.keys(data)
  //         .filter((key) => key.startsWith("Movement"))
  //         .map((key) => data[key])
  //         .sort(() => 0.5 - Math.random())
  //         .slice(0, 5);

  //       setWorkout(randomWorkout);
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching exercises:", error);
  //   }
  // };

  return (
<React.Fragment>
      <Container style={{marginTop: "10px"}}>
        <Row>
          <Col />
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>Coming Soon</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </React.Fragment>
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>
    //       <input
    //         type="radio"
    //         name="exerciseType"
    //         value="Chest"
    //         checked={selectedOption === "Chest"}
    //         onChange={handleOptionChange}
    //       />
    //       Chest
    //     </label>
    //   </div>
    //   <div>
    //     <label>
    //       <input
    //         type="radio"
    //         name="exerciseType"
    //         value="Legs"
    //         checked={selectedOption === "Legs"}
    //         onChange={handleOptionChange}
    //       />
    //       Legs
    //     </label>
    //   </div>
    //   <button type="submit">Generate Workout</button>

    //   {workout.length > 0 && (
    //     <div>
    //       <h2>Workout:</h2>
    //       <ul>
    //         {workout.map((exercise, index) => (
    //           <li key={index}>{exercise}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </form>
  );
}
