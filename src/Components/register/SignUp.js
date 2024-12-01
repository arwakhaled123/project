import React, { useState } from 'react';
import './SignUp.css';
import { Row, Col, Container } from 'react-bootstrap';
// import image from '../Assets/finde-zukunft-krRL9AjWjnY-unsplash 1.png'; 
//  import image from '../../Assets/finde-zukunft-krRL9AjWjnY-unsplash 1.png';
// import face from '../Assets/akar-icons_facebook-fill.png'; 
// import google from '../Assets/devicon_google.png'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUps() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password !== confirmpassword) {
    //   setMessage('Passwords do not match!');
    //   return;
    // }

    // setLoading(true);
    // setMessage('');
    
    try {
      // Send POST request to the ASP.NET API endpoint
      const response = await axios.post('https://localhost:7193/Account/Signup', {
        firstName: fname,
        lastName: lname,
        emailAddress: email,
        phoneaddress:phone,
        passwordHash: password,
        userConfPassword: confirmpassword,
      });
      console.log('Response:', response.data);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <Container className="sign-up-page">
      <Row className="align-items-center">
        <Col md={6}>
          {/* <img src={image} alt="Sign up" className="img-fluid" /> */}
        </Col>  
        <Col md={6}>
         <center><h2>Create An Account</h2></center> 
          <form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={4}>
                <label htmlFor="fname" id='label-col'>First Name</label>
                <input
                  type="text"
                  id="fname"
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                  className="inputfeild"
                  required
                />
              </Col>
              <Col md={{ span: 4, offset: 3 }}>
                <label htmlFor="lname" id='label-col'>Last Name</label>
                <input
                  type="text"
                  id="lname"
                  value={lname}
                  onChange={(e) => setLName(e.target.value)}
                  className="inputfeild"
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <label htmlFor="phone" id='label-col'>Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="inputfeild"
                  required
                />
              </Col>
              <Col md={{ span: 4, offset: 3 }}>
                <label htmlFor="email" id='label-col'>Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="inputfeild"
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <label htmlFor="password" id='label-col'>Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="inputfeild"
                  required
                />
              </Col>
              <Col md={{ span: 4, offset: 3 }}>
                <label htmlFor="confirmpassword" id='label-col'>Confirm Password</label>
                <input
                  type="password"
                  id="confirmpassword"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="inputfeild"
                  required
                />
              </Col>
            </Row>
            <div className="mb-3">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label htmlFor="agree" className="ms-2" id='terms'>
                I accept the <font color='red'>Terms</font> and <font color='red'>Conditions</font>
              </label>
            </div>
            <center>
            <button type="submit" id='button-col'>
              Create Account
            </button></center>
            <div class="styled-hr">OR</div>
            <Row>
            {/* <Col md={4}> <button type='submit' class='signup-with-google'> <img src={google} alt='google' id='google-img'/>Signup with Google </button></Col>
            <Col md={{ span: 4, offset: 3}}> <button type='submit' class='signup-with-facebook'><img src={face} alt='face' id='facebook-img'/>Signup with Facebook </button></Col> */}

            </Row>
            <center>
            <label id='have-account'>
            Already had an account?  <Link to="/login"> <font id='linkk' color='red'>LogIn</font></Link>
              </label>
            </center>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export {SignUps};
/*<Row>

            <Col md={4}> <button type='submit' class='signup-with-google'> <img src={google} alt='google' id='google-img'/>Signup with Google </button></Col>
            <Col md={{ span: 4, offset: 4 }}> <button type='submit' class='signup-with-facebook'><img src={face} alt='face' id='facebook-img'/>Signup with Facebook </button></Col>

            </Row>*/

          /**const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage('Passwords do not match!');
      return;
    }

    setLoading(true);
    setMessage('');
    
    try {
      const response = await axios.post('https://localhost:7193/Account/Signup', {
        firstName: fname,
        lastName: lname,
        emailAddress: email,
        phoneaddress:phone,
        passwordHash: password,
        userConfPassword: confirmpassword,
      });
      setMessage(response.data || 'Registration successful! Please check your email.');
    } catch (error) {
      setMessage(
        error.response?.data || 'An error occurred. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }; */