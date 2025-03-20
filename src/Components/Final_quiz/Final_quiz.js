import React from "react";
import "./Final_quiz.css";
import Navbars from "../Navbar/Navbar";
import { Row } from "react-bootstrap";
function Final_quiz() {
  return (
    <Row>
      <Navbars/>
      <Row className="quiz_name m-auto">
      <center>
        <p className="nameofquiz ">Module 1 Challenge: The basics of user experience design</p>
        </center>
        </Row>
      
      
    </Row>
  );
}
export default Final_quiz;