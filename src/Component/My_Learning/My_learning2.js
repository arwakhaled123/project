import React,{useState} from 'react';
import './My_learning.css';
import Navbars from '../Navbar/Navbar';
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: "flex", gap: "15px", fontSize: "90px", cursor: "pointer" }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              color: starValue <= (hover || rating) ? "#765378" : "#FFF",
              transition: "color 0.6s"
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};
return (
  <Row className="content-rate">
      <Row className="justify-content-md-center linkk-pages">
        <Col xs lg="2" className="link_course"><Link id="link_course" >Course</Link></Col>
        <Col xs lg="2" className="link_Instructor"><Link to="/Rate-Instructor" id="link_course">Instructor</Link></Col>
      </Row>
      <Row>

        <div style={{ margin: "50px" }}>
          <h3 className="rate-course" >Rate Our Course</h3>
            <StarRating totalStars={5} />
        </div>
      </Row>
      <Row className="m-auto">
        <label htmlFor="comment" id="add-comment"> Add Comments</label>
        <textarea
          className="comment"
          id="comment"
          name="comment"
          placeholder="Write your comment here..."
        ></textarea>

      </Row>


      <Row className="done" >
        <button className="btn-done" onClick={onClose}>Done</button>
      </Row>
    </Row>
  );
  }

function My_learning2() {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <Navbars />
      <Row className="m-auto links_pages">
        <Col className="link_learning"><Link to="/home-course" id="link_learning" >Home</Link></Col>
        <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
        <Col className="link_home"><Link to="/My-learning" id="link_home">My learning</Link> </Col>
        <Col className="link_Leaderboard"><Link to="/Leaderboard" id="link_Leaderboard">Leaderboard</Link> </Col>
      </Row>
      <Row>
        <h4 id="My-learning-txt">My learning</h4>
      </Row>
      <Row className='btns'>
        <button className="btn-complete"><p id='btn-complete-txt'><Link id='btn-complete-txt' to="/My-learning">In Progress</Link></p></button>
        <button className="btn-progress"><p id='btn-progress-txt'><Link id='btn-progress-txt' to="/My-learning2">Complete</Link></p></button>
      </Row>
      <Row className="bordd">
        <Col>
        <Card.Img className='card_img2' variant="top" /*src={product.image}*/ />
        </Col>
        <Col xs={6} className='m-auto content-progress'> 
         <Card.Body>
          <Card.Title className='card_title1'>Programming in C++</Card.Title>
          <div className='content-checkbox'>
            <input type="checkbox" id='check' checked />
            <p className='txt-checkbox'>Great Work! You have passed all requirements.</p>
          </div> 
        </Card.Body>
        </Col>
        <Col className='content-next'>
          <div id='line'></div>
        </Col>
        <Col>
          {/* <center> */}
          <div className='ratee'>
            <button className="rate" onClick={() => setIsModalOpen(true)}>Rate</button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
          {/* </center> */}
        </Col>
      </Row>
    </>
  );
}
export default My_learning2;