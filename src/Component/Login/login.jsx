import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://localhost:7217/api/Auth/signin', {
        email: email,
        password: password,
      }, {
        withCredentials: true,
      });

      console.log('Response:', response.data);
      if (response.data.success) {
        // تخزين التوكن وبيانات المستخدم
        if (response.data.data?.token) {
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('userId', response.data.data.userId);
        }
        if (response.data.data) { // تخزين كامل بيانات المستخدم بما فيها الـ role
          localStorage.setItem('user', JSON.stringify(response.data.data));
        }

        // التوجيه بناءً على دور المستخدم
        const userRole = response.data.data?.role;
        if (userRole === 'Admin') {
          navigate('/dashboard');
        } else if (userRole === 'Instructor') {
          navigate('/publish');
        } else {
          // افتراضيًا إلى الصفحة الرئيسية للطلاب
          navigate('/home-course');
        }
      }
    } catch (err) {
      console.error('Error during login:', err.response?.data);
      const errorMsg = err.response?.data?.message || 'Login failed. Please check your credentials.';
      setError(errorMsg);
      if (errorMsg.includes('not verified')) {
        navigate('/verify-email');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='parent'>
        <div>
          <Link className=" logo-LEARNQUEST " id="link-logo" to='/home'><p id="logo-QUEST">L<i id="logo-EARN">EARN</i>QUEST</p></Link>
        </div>
        <div className="right-side">
          <div className="head">
            <h2 className="text-3xl font-bold mb-4 welcome">
              <em>Welcome</em> Back!
              <p>Login To Get Start</p>
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 email">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <div className="relative">
                <input
                  className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="Enter E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4 password">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  onClick={() => setShowPassword(!showPassword)}
                />
                {/* <svg
                  id="eye-icon10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                >
                  <path d="M19 12.8335C20.3082 11.3317 21 10 21 10C21 10 17.3636 3 11 3C10.6588 3 10.3254 3.02013 10 3.05822C9.6578 3.09828 9.3244 3.15822 9 3.23552" stroke="#9F9595" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 7C11.3506 7 11.6872 7.06015 12 7.17071C12.8524 7.47199 13.528 8.1476 13.8293 9C13.9398 9.3128 14 9.6494 14 10" stroke="#9F9595" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 1L20 19" stroke="#9F9595" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 13C10.6494 13 10.3128 12.9398 10 12.8293C9.14763 12.528 8.47201 11.8524 8.17073 11C8.11389 10.8392 8.07037 10.6721 8.0415 10.5" stroke="#9F9595" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.14701 7C2.83877 7.34451 2.56234 7.68241 2.31864 8C1.45286 9.1282 1 10 1 10C1 10 4.63636 17 11 17C11.3412 17 11.6746 16.9799 12 16.9418" stroke="#9F9595" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
                <br />
                <div className="forget">
                  <a href="#" className="f-pass">Forgot password?</a>
                </div>
              </div>
            </div>
            <div className="btn">
              <button
                id="login-btn"
                className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <div className="SU-div">
            <p className="SU-sentence">Don’t have an account? <Link to="/sign-up" className="SU">SignUp</Link></p>
          </div>
          <div className="styled-hr"><p id='Or'>Or</p></div>
          <Row>
            <Col md={4}>
              <button type='button' className='signup-with-google'>
                <div id='google'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <g clipPath="url(#clip0_356_477)">
                      <path d="M23.8936 10.0146H21.5136V12.3837H19.1445V14.7637H21.5136V17.1328H23.8936V14.7637H26.2627V12.3837H23.8936V10.0146Z" fill="white" />
                      <path d="M8.30825 21.4407C13.0181 21.4407 16.1468 18.1347 16.1468 13.4683C16.1468 12.934 16.0913 12.5215 16.014 12.1102H8.30934V14.9157H12.942C12.7526 16.1073 11.5392 18.4339 8.30934 18.4339C5.52672 18.4339 3.25448 16.129 3.25448 13.279C3.25448 10.4289 5.52563 8.12289 8.30934 8.12289C9.90143 8.12289 10.9592 8.80195 11.561 9.38089L13.7766 7.25448C12.35 5.91922 10.513 5.11719 8.30825 5.11719C3.7986 5.11719 0.146484 8.76931 0.146484 13.279C0.146484 17.7886 3.7986 21.4407 8.30825 21.4407Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_356_477">
                        <rect width="26.1176" height="26.1176" fill="white" transform="translate(0.146484 0.220215)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                Signup with Google
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}