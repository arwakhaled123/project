import React from "react";
import "./Quiz.css";
import { Container, Row, Col, Form ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";



const Quiz = () => {
  return (
    <Row className="parent1">
      <Row>
        <Col> <h3 id="question">Question</h3></Col>
      </Row>
      <Row className="content2">
        <Col md={12} ><h5 id="numofques">question 1 ?</h5>

          <Form>

            <Form.Check
              label="Statement1"
              name="group1"
              type="radio"
              id="custom-radio"
            />
            <Form.Check
              label="Statement2"
              name="group1"
              type="radio"
              id="custom-radio"
            />
            <Form.Check
              label="Statement3"
              name="group1"
              type="radio"
              id="custom-radio"
            />
            <Form.Check
              label="Statement4"
              name="group1"
              type="radio"
              id="custom-radio"
            />
          </Form>

        </Col>

        <Col ><h5 id="numofques">question 2 ?</h5>
          <Form>

            <Form.Check
              label="Statement1"
              name="group1"
              type="radio"
              id="custom-radio"
            />
            <Form.Check
              label="Statement2"
              name="group1"
              type="radio"
              id="custom-radio"
            />
          </Form>
          

        </Col>
        
      </Row>
      {/* <Row className="btnn"><button id="txt-btn" type="submit"><Link>Continuo</Link></button></Row> */}
      <Row className="continuo" >
              <button className="btn-cont"><Link id="btn-cont" to="/video">Done</Link></button>
            </Row>
    </Row>

  )
}

export default Quiz;