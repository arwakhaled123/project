
import React from "react";
import "./quiz.css";
import { Col, Row } from "react-bootstrap";

function Quizz() {
  return (
    // <center>
  <Col >  
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square" />
      </svg>
      <p className="name-quiz">    Module 1 Challenge: The basics of user experience design</p>
      <br/>
      <br />
    <Col className="col-auto">
      <ol>
        <li>
          <p className="ques-txt">What is the capital of France?</p></li>
        <div>
          <input type="radio" name="answer1" id="answer1" value="A" />
          <label htmlFor="answer1A" className="answer-txt"> New York</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="B" />
          <label htmlFor="answer1B" className="answer-txt"> London</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="C" />
          <label htmlFor="answer1C" className="answer-txt"> Paris</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="D" />
          <label htmlFor="answer1D" className="answer-txt"> Assuit</label>
        </div>
        {/* <br/> */}
        <li>
          <p className="ques-txt">What is the capital of France?</p></li>
        <div>
          <input type="radio" name="answer1" id="answer1" value="A" />
          <label htmlFor="answer1A" className="answer-txt"> New York</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="B" />
          <label htmlFor="answer1B" className="answer-txt"> London</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="C" />
          <label htmlFor="answer1C" className="answer-txt"> Paris</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="D" />
          <label htmlFor="answer1D" className="answer-txt"> Assuit</label>
        </div>
        {/* <br/> */}
        <li>
          <p className="ques-txt">What is the capital of France?</p></li>
        <div>
          <input type="radio" name="answer1" id="answer1" value="A" />
          <label htmlFor="answer1A" className="answer-txt"> New York</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="B" />
          <label htmlFor="answer1B" className="answer-txt"> London</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="C" />
          <label htmlFor="answer1C" className="answer-txt"> Paris</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="D" />
          <label htmlFor="answer1D" className="answer-txt"> Assuit</label>
        </div>
        {/* <br/> */}
        <li>
          <p className="ques-txt">What is the capital of France?</p></li>
        <div>
          <input type="radio" name="answer1" id="answer1" value="A" />
          <label htmlFor="answer1A" className="answer-txt"> New York</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="B" />
          <label htmlFor="answer1B" className="answer-txt"> London</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="C" />
          <label htmlFor="answer1C" className="answer-txt"> Paris</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer1" value="D" />
          <label htmlFor="answer1D" className="answer-txt"> Assuit</label>
        </div>
      </ol>
      <button type="submit" className="btn-submitt">Submit</button>
    </Col>
  </Col>
    // </center> 
  );
}
export default Quizz;