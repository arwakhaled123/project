import React from 'react';
import './My_learning.css';
import Navbars from '../Navbar/Navbar';
import Footer from '../Footer/footer';
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function My_learning() {
  return (
    <>
      <Navbars/>
      <Row className="m-auto links_pages">
        <Col className="link_learning"><Link to="/home-course" id="link_learning" >Home</Link></Col>
        <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
        <Col className="link_home"><Link to="/My-learning" id="link_home">My learning</Link> </Col>
        <Col className="link_Leaderboard"><Link to="" id="link_Leaderboard">Leaderboard</Link> </Col>
      </Row>
      <Row>
        <h4 id="My-learning-txt">My learning</h4>
      </Row>
      <Row>
        <button className="btn-progress"><p id='btn-progress-txt'>In Progress</p></button>
        <button className="btn-complete"><p id='btn-complete-txt'>Complete</p></button>
      </Row>
      <Footer/>
    </>
  );
} 
export default My_learning;