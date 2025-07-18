
import { Navbar,  Button, Form, Container, Nav, Row, Col } from 'react-bootstrap';
import image from "../../Assets/home/splash3.png";
import image1 from "../../Assets/home/img150k.png";
import image2 from "../../Assets/home/Alex.png";
import image3 from "../../Assets/home/explore1.png";
import image4 from "../../Assets/home/explore2.png";
import image5 from "../../Assets/home/explore3.png";
import image6 from "../../Assets/home/explore4.png";
import image7 from "../../Assets/home/explore5.png";
import './Home.css';
import { Link } from "react-router-dom";
// import Footer from "../Footer/footer";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react'

 function Home() {
    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!token && !!user);
  }, []);

  const handleExploreCourses = () => {
    const currentToken = localStorage.getItem('token');
    
    if (!currentToken) {
      // توجيه فوري إلى صفحة اللوجين بدون أي رسائل
      navigate('/login', { 
        state: { from: '/home-course' },
        replace: true 
      });
      return;
    }
    
    // التحقق من صلاحية التوكن
    fetch('https://localhost:7217/api/courses/recommendations?limit=4', {
      headers: {
        'Authorization': `Bearer ${currentToken}`
      }
    })
    .then(response => {
      if (response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login', { replace: true });
      } else {
        navigate('/home-course');
      }
    })
    .catch(() => {
      navigate('/home-course');
    });
  };
  return (
    <>
  <Navbar expand="lg" className="bg-body-white navv">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* <Navbar.Collapse id="navbarScroll"> */}
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="" id="link" className="home">Home</Link>
          <Link to="/about-us" id="link" className="about">About Us</Link>
  
        </Nav>
        <Col>
          <Link className=" logo-LEARNQUEST " id="link-logo" to='/home'><p id="logo-QUEST">L<i id="logo-EARN">EARN</i>QUEST</p></Link>
        </Col>
        <Link className="link-start" to='/sign-up'>
        <Button className="but1" id="but-reg" variant="light" size="sm">Register
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
            <path d="M19.0324 12.5324C19.6025 11.9622 19.6025 11.0378 19.0324 10.4676L9.74099 1.17624C9.17083 0.606075 8.24641 0.606075 7.67624 1.17624C7.10608 1.74641 7.10608 2.67083 7.67624 3.24099L15.9352 11.5L7.67624 19.759C7.10608 20.3292 7.10608 21.2536 7.67624 21.8238C8.24641 22.3939 9.17083 22.3939 9.74099 21.8238L19.0324 12.5324ZM0 12.96L18 12.96V10.04L0 10.04L0 12.96Z" fill="black" />
          </svg>
        </Button>{' '}
        </Link>
        <Link className="link-start" to='/login'>
        <Button className="but1" id="but-contact" size="sm">Login
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
            <path d="M19.0324 12.5324C19.6025 11.9622 19.6025 11.0378 19.0324 10.4676L9.74099 1.17624C9.17083 0.606075 8.24641 0.606075 7.67624 1.17624C7.10608 1.74641 7.10608 2.67083 7.67624 3.24099L15.9352 11.5L7.67624 19.759C7.10608 20.3292 7.10608 21.2536 7.67624 21.8238C8.24641 22.3939 9.17083 22.3939 9.74099 21.8238L19.0324 12.5324ZM0 12.96L18 12.96V10.04L0 10.04L0 12.96Z" fill="white" />
          </svg>
        </Button>{' '}
        </Link>
  
        {/* </Navbar.Collapse> */}
  
  
      </Container>
    </Navbar>
    <div className="container-fluid">
        <div className="content">
          <p className="master"><i id="master">Master Programming with AI-Powered Learning</i></p>
          <p id="start-join">
            Join Top Programming to unlock your potential with interactive courses, real-time assistance, and personalized progress tracking.
          </p>

          <div className="rating">
            <Button className="explore-button" onClick={handleExploreCourses}>
              Explore Courses
            </Button>
            <img src={image1} alt="Learning" id="img150" />
            <img src={image1} alt="Learning" id="img150" />
            <img src={image1} alt="Learning" id="img150" />
            <img src={image1} alt="Learning" id="img150" />
            <span id="rating">+150k</span>
          </div>
          <div id="social">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
              <path d="M20.0784 3.55322C17.9749 3.55322 15.892 3.96754 13.9486 4.77251C12.0053 5.57748 10.2395 6.75735 8.75207 8.24474C5.74814 11.2487 4.06055 15.3229 4.06055 19.5711C4.06055 26.651 8.65767 32.6577 15.0168 34.788C15.8177 34.9162 16.0739 34.4196 16.0739 33.9872V31.2801C11.637 32.2412 10.6919 29.1337 10.6919 29.1337C9.95512 27.2757 8.91396 26.7791 8.91396 26.7791C7.45633 25.786 9.02608 25.818 9.02608 25.818C10.6279 25.9302 11.4768 27.4679 11.4768 27.4679C12.8704 29.9026 15.225 29.1818 16.138 28.7974C16.2822 27.7562 16.6986 27.0514 17.1471 26.651C13.5912 26.2505 9.85901 24.873 9.85901 18.7702C9.85901 16.9922 10.4677 15.5666 11.5089 14.4293C11.3487 14.0289 10.788 12.363 11.669 10.2006C11.669 10.2006 13.0145 9.76815 16.0739 11.8345C17.3393 11.4821 18.7169 11.3059 20.0784 11.3059C21.4399 11.3059 22.8175 11.4821 24.0829 11.8345C27.1423 9.76815 28.4878 10.2006 28.4878 10.2006C29.3688 12.363 28.8081 14.0289 28.648 14.4293C29.6891 15.5666 30.2978 16.9922 30.2978 18.7702C30.2978 24.889 26.5496 26.2345 22.9776 26.635C23.5543 27.1315 24.0829 28.1086 24.0829 29.5983V33.9872C24.0829 34.4196 24.3392 34.9322 25.1561 34.788C31.5152 32.6417 36.0963 26.651 36.0963 19.5711C36.0963 17.4676 35.6819 15.3847 34.877 13.4413C34.072 11.4979 32.8921 9.73214 31.4047 8.24474C29.9173 6.75735 28.1515 5.57748 26.2082 4.77251C24.2648 3.96754 22.1819 3.55322 20.0784 3.55322Z" fill="white" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
              <path d="M33.4313 3.55296H6.29701C5.99199 3.54872 5.68913 3.60461 5.40572 3.71744C5.12231 3.83026 4.8639 3.99781 4.64524 4.21051C4.42659 4.42321 4.25198 4.67691 4.13138 4.9571C4.01078 5.23729 3.94656 5.5385 3.94238 5.84351V33.2981C3.94656 33.6031 4.01078 33.9043 4.13138 34.1845C4.25198 34.4647 4.42659 34.7184 4.64524 34.9311C4.8639 35.1438 5.12231 35.3114 5.40572 35.4242C5.68913 35.537 5.99199 35.5929 6.29701 35.5887H33.4313C33.7363 35.5929 34.0391 35.537 34.3225 35.4242C34.606 35.3114 34.8644 35.1438 35.083 34.9311C35.3017 34.7184 35.4763 34.4647 35.5969 34.1845C35.7175 33.9043 35.7817 33.6031 35.7859 33.2981V5.84351C35.7817 5.5385 35.7175 5.23729 35.5969 4.9571C35.4763 4.67691 35.3017 4.42321 35.083 4.21051C34.8644 3.99781 34.606 3.83026 34.3225 3.71744C34.0391 3.60461 33.7363 3.54872 33.4313 3.55296ZM13.6012 30.3668H8.79579V15.9508H13.6012V30.3668ZM11.1985 13.9325C10.5358 13.9325 9.90018 13.6693 9.43156 13.2007C8.96295 12.732 8.69969 12.0965 8.69969 11.4337C8.69969 10.771 8.96295 10.1354 9.43156 9.66684C9.90018 9.19822 10.5358 8.93496 11.1985 8.93496C11.5504 8.89505 11.9067 8.92992 12.2442 9.03729C12.5817 9.14465 12.8927 9.32209 13.1569 9.55799C13.4211 9.79389 13.6324 10.0829 13.7771 10.4062C13.9219 10.7294 13.9967 11.0796 13.9967 11.4337C13.9967 11.7879 13.9219 12.1381 13.7771 12.4613C13.6324 12.7846 13.4211 13.0736 13.1569 13.3095C12.8927 13.5454 12.5817 13.7228 12.2442 13.8302C11.9067 13.9376 11.5504 13.9724 11.1985 13.9325ZM30.9325 30.3668H26.1271V22.6302C26.1271 20.6921 25.4383 19.4267 23.6924 19.4267C23.1521 19.4306 22.6259 19.6001 22.1849 19.9123C21.7438 20.2244 21.409 20.6643 21.2257 21.1726C21.1003 21.5491 21.046 21.9456 21.0655 22.3419V30.3508H16.2601V15.9348H21.0655V17.969C21.502 17.2116 22.1369 16.5875 22.9018 16.1641C23.6667 15.7408 24.5326 15.5341 25.4063 15.5664C28.6099 15.5664 30.9325 17.6327 30.9325 22.0696V30.3668Z" fill="white" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
              <path d="M35.7545 19.5711C35.7545 10.7292 28.5785 3.55322 19.7366 3.55322C10.8947 3.55322 3.71875 10.7292 3.71875 19.5711C3.71875 27.3237 9.22889 33.7789 16.533 35.2686V24.3764H13.3295V19.5711H16.533V15.5666C16.533 12.4752 19.0478 9.96037 22.1393 9.96037H26.1437V14.7657H22.9402C22.0592 14.7657 21.3384 15.4865 21.3384 16.3675V19.5711H26.1437V24.3764H21.3384V35.5088C29.4274 34.708 35.7545 27.8843 35.7545 19.5711Z" fill="white" />
            </svg>
          </div>
        </div>
        {/* <div className="right">
          <img src={image1} id="img-big" alt="Learning" />
        </div> */}
      </div>

      <Row>
        <Col className="txt-next-img">
          <p id="your-skills">Boost Your Coding Skills</p>
          <p id="AI">AI-Driven Learning Experience</p>
          <p id="text1">Discover how our AI tools customize your learning path, making programming more intuitive and effective.</p>
          <Link className="link-start" to='/sign-up'><Button id="start"><p id="get">Get Start</p></Button></Link>
          <p id="text2">Learn Quest has transformed my learning experience. The AI-driven insights are invaluable.</p>

          <p id="text2"><img src={image2} alt="Alex" id="img-alex" />Alex Johnson</p>
        </Col>
        <Col md={6} className="img3" >
          <img src={image} alt="" className="img-fluid" />
        </Col>
      </Row>
      <Col className="explore">
        <Row>
          {/* <Col className="Explore-course"> */}
          <p id="Explore-course">Explore Our Course Gallery</p>
          {/* </Col> */}
        </Row>
        <Row>
          <Col >
            <p id="explore-txt">Dive into our extensive library of courses, each designed to enhance your programming skills.</p>

          </Col>
          <Col >
            <p id="explore-txt2">From beginner to advanced, find the right course to elevate your coding journey.</p>

          </Col>
        </Row>

        <Row className="imges">
          <Col className="explore-txt"><img src={image3} alt="Alex" id="img-exp" /></Col>
          <Col className="explore-txt"><img src={image4} alt="Alex" id="img-exp" /></Col>
          <Col className="explore-txt"><img src={image5} alt="Alex" id="img-exp" /></Col>
          <Col className="explore-txt"><img src={image6} alt="Alex" id="img-exp" /></Col>
          <Col className="explore-txt"><img src={image7} alt="Alex" id="img-exp" /></Col>
        </Row>
      </Col>
      <Row className="content-contact">
        <Row><p id="contact">Connect with Us</p></Row>
        <Row><Col><p id="txt-contact">Reach out to learn more about how Top Programming can enhance your coding journey.</p></Col></Row>
        <Row className="done">
          <Col>
            <p id="txt-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="44" viewBox="0 0 53 44" fill="none">
                <rect width="53" height="44" rx="8" fill="#CDB4DB" />
                <path d="M6.02344 17.9446V31.2782C6.02344 32.1622 6.44647 33.0101 7.19947 33.6352C7.95247 34.2604 8.97376 34.6116 10.0387 34.6116H42.1605C43.2254 34.6116 44.2467 34.2604 44.9997 33.6352C45.7527 33.0101 46.1757 32.1622 46.1757 31.2782V17.9446L26.0996 24.6114L6.02344 17.9446Z" fill="white" />
                <path d="M10.0387 9.7959C8.97376 9.7959 7.95247 10.1471 7.19947 10.7722C6.44647 11.3974 6.02344 12.2452 6.02344 13.1293L6.02344 16.4627L26.0996 23.1295L46.1757 16.4627V13.1293C46.1757 12.2452 45.7527 11.3974 44.9997 10.7722C44.2467 10.1471 43.2254 9.7959 42.1605 9.7959H10.0387Z" fill="white" />
              </svg>
              General Inquiries
            </p>
          </Col>
        </Row>
        <Row><p id="need-help">Have questions? We're here to help.</p></Row>
        <Row><p id="txt-arrow">Contact Us
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428932C8.95262 0.0384078 8.31946 0.0384078 7.92893 0.428932C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34315 14.5711L15.7071 8.20711ZM0 8.5L15 8.5V6.5L0 6.5L0 8.5Z" fill="#765378" />
          </svg>
        </p>
        </Row>

        <Row className="done">
          <Col>
            <p id="txt-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                <rect width="53" height="53" rx="8" fill="#CDB4DB" />
                <path d="M22.8559 33.234L22.8447 33.2092C22.6188 33.1587 22.3941 33.1032 22.171 33.0427L22.1541 33.0374C20.0194 32.4566 18.048 31.4336 16.3828 30.0424C14.5514 28.5134 13.143 26.5837 12.2805 24.4213C11.418 22.259 11.1274 19.9299 11.4342 17.6369C11.741 15.3439 12.6358 13.1568 14.0406 11.2662C15.4454 9.37564 17.3175 7.83901 19.4938 6.7903C21.67 5.74159 24.0843 5.21266 26.5261 5.24961C28.9679 5.28657 31.363 5.8883 33.5027 7.00233C35.6424 8.11636 37.4617 9.70886 38.8019 11.641C40.1421 13.5731 40.9626 15.7862 41.1917 18.0873C41.2647 18.8188 40.6303 19.4156 39.8537 19.4156C39.0789 19.4156 38.4595 18.8188 38.3697 18.089C38.1223 16.0758 37.3177 14.16 36.0372 12.5354C34.7567 10.9108 33.0457 9.63493 31.0772 8.83679C29.1086 8.03864 26.9524 7.74651 24.8263 7.98991C22.7002 8.23332 20.6798 9.00364 18.9691 10.223C17.2584 11.4424 15.9183 13.0676 15.084 14.9343C14.2497 16.801 13.951 18.8431 14.218 20.8541C14.4849 22.8651 15.3082 24.7738 16.6044 26.3872C17.9006 28.0006 19.624 29.2615 21.6002 30.0424L21.675 30.0725C22.0493 30.2178 22.4336 30.3459 22.8278 30.4569C23.159 29.6994 23.7576 29.0741 24.5215 28.6876C25.2854 28.301 26.1673 28.1773 27.0168 28.3373C27.8664 28.4974 28.631 28.9313 29.1802 29.5653C29.7295 30.1992 30.0294 30.9938 30.0289 31.8136C30.0297 32.6276 29.7343 33.4172 29.1922 34.0493C28.6502 34.6813 27.8946 35.1174 27.0527 35.2842C26.2107 35.4509 25.3338 35.3381 24.5695 34.9647C23.8051 34.5913 23.2 33.9801 22.8559 33.234ZM21.0107 35.4869C17.6862 34.5084 14.7385 32.6276 12.5333 30.0779C11.1667 30.2294 9.90639 30.8506 8.99183 31.8236C8.07726 32.7966 7.5721 34.0536 7.57227 35.3558V36.6222C7.57227 43.2073 15.4508 47.7538 26.2861 47.7538C37.1215 47.7538 45 42.9575 45 36.6222V35.3558C45 33.9466 44.4085 32.5951 43.3557 31.5987C42.3028 30.6022 40.8748 30.0424 39.3858 30.0424H32.5646C33.0061 31.4417 32.9114 32.9435 32.2973 34.2832C31.6832 35.6228 30.5891 36.7143 29.2079 37.3651C27.8266 38.016 26.247 38.1845 24.7474 37.8409C23.2477 37.4972 21.9244 36.6636 21.0107 35.4869ZM35.6431 19.4156C35.6431 16.7377 34.3892 14.3378 32.4037 12.7137C31.4075 11.9003 30.2412 11.2949 28.981 10.937C27.7208 10.5792 26.395 10.4768 25.0902 10.6367C23.7854 10.7967 22.5309 11.2152 21.4086 11.8651C20.2863 12.5149 19.3214 13.3815 18.5769 14.4082C17.8324 15.4349 17.3251 16.5986 17.088 17.8235C16.8509 19.0483 16.8895 20.3067 17.2011 21.5165C17.5127 22.7263 18.0904 23.8603 18.8965 24.8445C19.7025 25.8286 20.7188 26.6408 21.879 27.2281C23.0847 26.19 24.6561 25.6147 26.2861 25.6146C27.9168 25.6143 29.4889 26.1896 30.6951 27.2281C32.1902 26.4722 33.4403 25.3461 34.3117 23.9701C35.1832 22.5941 35.6434 21.0199 35.6431 19.4156Z" fill="white" />
              </svg>
              Technical Support
            </p>
          </Col>
        </Row>
        <Row><p id="need-help">Need assistance? Our support team is ready.</p></Row>
        <Row><p id="txt-arrow">Get Help
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428932C8.95262 0.0384078 8.31946 0.0384078 7.92893 0.428932C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34315 14.5711L15.7071 8.20711ZM0 8.5L15 8.5V6.5L0 6.5L0 8.5Z" fill="#765378" />
          </svg> </p>
        </Row>
        <Row className="done">
          <Col>
            <p id="txt-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect width="44" height="44" rx="8" fill="#CDB4DB" />
                <path d="M20.167 11H25.667L31.6987 4.95001C31.8691 4.77818 32.0719 4.64179 32.2953 4.54871C32.5187 4.45563 32.7583 4.40771 33.0003 4.40771C33.2424 4.40771 33.482 4.45563 33.7054 4.54871C33.9288 4.64179 34.1316 4.77818 34.302 4.95001L39.032 9.69834C39.3735 10.0418 39.5651 10.5065 39.5651 10.9908C39.5651 11.4752 39.3735 11.9398 39.032 12.2833L34.8337 16.5H20.167V20.1667C20.167 20.6529 19.9738 21.1192 19.63 21.463C19.2862 21.8069 18.8199 22 18.3337 22C17.8474 22 17.3811 21.8069 17.0373 21.463C16.6935 21.1192 16.5003 20.6529 16.5003 20.1667V14.6667C16.5003 13.6942 16.8866 12.7616 17.5743 12.074C18.2619 11.3863 19.1945 11 20.167 11ZM9.167 20.1667V27.5L4.96867 31.6983C4.62721 32.0418 4.43555 32.5065 4.43555 32.9908C4.43555 33.4752 4.62721 33.9398 4.96867 34.2833L9.69867 39.0317C9.8691 39.2035 10.0719 39.3399 10.2953 39.433C10.5187 39.5261 10.7583 39.574 11.0003 39.574C11.2424 39.574 11.482 39.5261 11.7054 39.433C11.9288 39.3399 12.1316 39.2035 12.302 39.0317L20.167 31.1667H27.5003C27.9866 31.1667 28.4529 30.9735 28.7967 30.6297C29.1405 30.2859 29.3337 29.8196 29.3337 29.3333V27.5H31.167C31.6532 27.5 32.1195 27.3069 32.4634 26.963C32.8072 26.6192 33.0003 26.1529 33.0003 25.6667V23.8333H34.8337C35.3199 23.8333 35.7862 23.6402 36.13 23.2964C36.4738 22.9526 36.667 22.4862 36.667 22V20.1667H23.8337V22C23.8337 22.9725 23.4474 23.9051 22.7597 24.5927C22.0721 25.2804 21.1395 25.6667 20.167 25.6667H16.5003C15.5279 25.6667 14.5952 25.2804 13.9076 24.5927C13.22 23.9051 12.8337 22.9725 12.8337 22V16.5L9.167 20.1667Z" fill="#FAF8F8" />
              </svg>
              Partnerships
            </p>
          </Col>
        </Row>
        <Row><p id="need-help">Interested in collaborating? Let's talk.</p></Row>
        <Row><p id="txt-arrow">Collaborate
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428932C8.95262 0.0384078 8.31946 0.0384078 7.92893 0.428932C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34315 14.5711L15.7071 8.20711ZM0 8.5L15 8.5V6.5L0 6.5L0 8.5Z" fill="#765378" />
          </svg>
        </p>
        </Row>
      </Row>

    </>
  )
}
export default Home;