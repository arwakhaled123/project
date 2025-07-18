import React, { useState, useEffect } from 'react';
import './Upload Courses.css';
import { Link } from 'react-router-dom';
// import Navbars from '../Navbar/Navbar';
import { Col, Row, Table } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import img from "../../Assets/Courses/Frame 106.png";
// import action from "../../Assets/Courses/icon.png";
import { Button } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navbar/Navbar.css';


// Mock API Base URL (replace with your actual API endpoint)
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Example public API, adapt as needed
// const API_BASE_URL = 'https://localhost:7217/api'; // For local mock server

export default function UploadCourses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [actionMenuOpen, setActionMenuOpen] = useState(null);
  const [role, setRole] = useState('Instructor'); // Default role
  const [token, setToken] = useState('fake-jwt-token-123'); // Mock token, replace with real auth token
  

  // Fetch courses from API
  useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'Admin') {
      window.location.href = '/login';
      return;
    }
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/courses`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw new Error('Failed to fetch courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, [token]);

  const handleActionClick = (courseId) => {
    setActionMenuOpen(actionMenuOpen === courseId ? null : courseId);
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setActionMenuOpen(null);
  };

  const handleSaveCourse = async (updatedCourseData) => {
    if (selectedCourse && token) {
      try {
        const response = await fetch(`${API_BASE_URL}/courses/${selectedCourse.id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCourseData),
        });
        if (!response.ok) throw new Error('Failed to update course');
        const updatedCourse = await response.json();
        setCourses(courses.map(course => course.id === selectedCourse.id ? updatedCourse : course));
        setSelectedCourse(null);
      } catch (error) {
        console.error('Error updating course:', error);
      }
    }
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw new Error('Failed to delete course');
        setCourses(courses.filter(course => course.id !== courseId));
      } catch (error) {
        console.error('Error deleting course:', error);
      }
      setActionMenuOpen(null);
    }
  };

  const isAdmin = role === 'Admin';

  return (
    <>
      <Row>
        <Navbar expand="lg" className="bg-white">
          <Navbar.Brand id="logo-LEARNQUEST"><Link id="link-logo" to='/home'><p id="logo-QUEST">L<i id="logo-EARN">EARN</i>QUEST</p></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="m-auto d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="text-search"
              />
              <svg id="icon-search" xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                <rect x="1.55157" y="0.666801" width="47.9511" height="47.9511" rx="23.9756" fill="#CDB4DB" />
                <rect x="1.55157" y="0.666801" width="47.9511" height="47.9511" rx="23.9756" stroke="#EEE6F2" stroke-width="1.16954" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8111 29.9043C34.6343 27.5528 35.4935 24.5948 35.214 21.6321C34.9345 18.6693 33.5373 15.9244 31.3065 13.9557C29.0758 11.987 26.1791 10.9424 23.2058 11.0344C20.2325 11.1265 17.4059 12.3482 15.3011 14.4511C13.1945 16.5555 11.9692 19.3843 11.875 22.3611C11.7808 25.3378 12.8247 28.2385 14.7941 30.472C16.7635 32.7054 19.51 34.1036 22.4741 34.3816C25.4381 34.6596 28.3966 33.7965 30.7466 31.9681L30.8095 32.0339L37.0117 38.24C37.1475 38.3759 37.3088 38.4837 37.4863 38.5573C37.6638 38.6308 37.854 38.6687 38.0461 38.6687C38.2382 38.6687 38.4284 38.6308 38.6059 38.5573C38.7834 38.4837 38.9447 38.3759 39.0805 38.24C39.2164 38.1041 39.3241 37.9428 39.3976 37.7652C39.4712 37.5877 39.509 37.3974 39.509 37.2052C39.509 37.013 39.4712 36.8227 39.3976 36.6451C39.3241 36.4676 39.2164 36.3062 39.0805 36.1703L32.8769 29.9657L32.8111 29.9043ZM29.7758 16.5208C30.6013 17.3333 31.2578 18.3013 31.7075 19.3688C32.1572 20.4364 32.3911 21.5825 32.3959 22.741C32.4006 23.8995 32.176 25.0475 31.735 26.1187C31.294 27.1899 30.6454 28.1631 29.8265 28.9823C29.0077 29.8015 28.0348 30.4504 26.964 30.8916C25.8932 31.3327 24.7457 31.5574 23.5877 31.5527C22.4297 31.548 21.284 31.3139 20.2169 30.8641C19.1497 30.4142 18.1821 29.7574 17.37 28.9316C15.7469 27.2812 14.8415 25.0562 14.8509 22.741C14.8604 20.4259 15.7839 18.2082 17.4203 16.5712C19.0567 14.9341 21.2735 14.0102 23.5877 14.0008C25.9019 13.9914 28.1261 14.8971 29.7758 16.5208Z" fill="white" />
              </svg>
            </Form>
            <Link className="link-start" to='/course-details'>
              <Button className="but1" id="but-contact">Upload
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M15.3332 20.7692V9.23584L12.2265 12.3425L11.2825 11.3852L15.9998 6.6665L20.7185 11.3852L19.7745 12.3438L16.6665 9.23584V20.7692H15.3332ZM8.82117 25.3332C8.20695 25.3332 7.6945 25.1278 7.28384 24.7172C6.87317 24.3065 6.66739 23.7936 6.6665 23.1785V19.9478H7.99984V23.1785C7.99984 23.3838 8.08517 23.5723 8.25584 23.7438C8.4265 23.9154 8.6145 24.0007 8.81984 23.9998H23.1798C23.3843 23.9998 23.5723 23.9145 23.7438 23.7438C23.9154 23.5732 24.0007 23.3847 23.9998 23.1785V19.9478H25.3332V23.1785C25.3332 23.7927 25.1278 24.3052 24.7172 24.7158C24.3065 25.1265 23.7936 25.3323 23.1785 25.3332H8.82117Z" fill="white" />
                </svg>
              </Button>
            </Link>
            <Nav className="ms-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <g clip-path="url(#clip0_739_363)">
                  <path d="M37.9286 32.4683C36.8036 31.4654 35.8186 30.3156 35.0003 29.05C34.106 27.3033 33.5704 25.3952 33.4253 23.4383V17.675C33.433 14.6015 32.3181 11.631 30.2901 9.3216C28.2621 7.01218 25.4606 5.5228 22.4119 5.1333V3.6283C22.4119 3.21523 22.2478 2.81907 21.9557 2.52698C21.6637 2.23489 21.2675 2.0708 20.8544 2.0708C20.4414 2.0708 20.0452 2.23489 19.7531 2.52698C19.461 2.81907 19.2969 3.21523 19.2969 3.6283V5.15663C16.2756 5.57422 13.5079 7.0726 11.5065 9.37426C9.50519 11.6759 8.40578 14.6249 8.41193 17.675V23.4383C8.26674 25.3952 7.73122 27.3033 6.83693 29.05C6.03296 30.3127 5.06382 31.4623 3.95526 32.4683C3.83081 32.5776 3.73108 32.7122 3.66268 32.8631C3.59429 33.0139 3.5588 33.1777 3.55859 33.3433V34.93C3.55859 35.2394 3.68151 35.5361 3.9003 35.7549C4.11909 35.9737 4.41584 36.0966 4.72526 36.0966H37.1586C37.468 36.0966 37.7648 35.9737 37.9836 35.7549C38.2023 35.5361 38.3253 35.2394 38.3253 34.93V33.3433C38.3251 33.1777 38.2896 33.0139 38.2212 32.8631C38.1528 32.7122 38.053 32.5776 37.9286 32.4683ZM5.98526 33.7633C7.07049 32.7145 8.02619 31.5394 8.83193 30.2633C9.95868 28.1539 10.6154 25.8256 10.7569 23.4383V17.675C10.7107 16.3077 10.94 14.9451 11.4313 13.6682C11.9226 12.3914 12.6658 11.2265 13.6167 10.243C14.5676 9.25936 15.7067 8.47716 16.9661 7.94295C18.2256 7.40874 19.5797 7.13344 20.9478 7.13344C22.3158 7.13344 23.6699 7.40874 24.9294 7.94295C26.1888 8.47716 27.3279 9.25936 28.2788 10.243C29.2297 11.2265 29.9729 12.3914 30.4642 13.6682C30.9555 14.9451 31.1849 16.3077 31.1386 17.675V23.4383C31.2801 25.8256 31.9368 28.1539 33.0636 30.2633C33.8693 31.5394 34.825 32.7145 35.9103 33.7633H5.98526Z" fill="#939292" />
                  <path d="M20.9997 39.9935C21.7346 39.9766 22.4399 39.7003 22.9907 39.2135C23.5416 38.7267 23.9025 38.0608 24.0097 37.3335H17.873C17.9833 38.0805 18.3611 38.7621 18.9362 39.2514C19.5114 39.7407 20.2447 40.0044 20.9997 39.9935Z" fill="#939292" />
                </g>
                <defs>
                  <clipPath id="clip0_739_363">
                    <rect width="42" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="88" height="62" viewBox="0 0 88 62" fill="none">
                <circle cx="31" cy="31" r="31" fill="#D9D9D9" />
                <path d="M86.2837 31.0001L88 32.7179L78.6463 42.0748C78.4965 42.2257 78.3182 42.3454 78.1219 42.427C77.9256 42.5087 77.7151 42.5508 77.5024 42.5508C77.2898 42.5508 77.0793 42.5087 76.8829 42.427C76.6866 42.3454 76.5084 42.2257 76.3585 42.0748L67 32.7179L68.7163 31.0017L77.5 39.7838L86.2837 31.0001Z" fill="#939292" />
              </svg>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>

      <div className="users-table">
        <div className="table-header table-headd">
          <div className="header-col email-col">Course Name</div>
          <div className="header-col courses-col">Status</div>
          <div className="header-col actions-col">Actions</div>
        </div>
        {courses.map(course => (
          
           <div className="course-row" key={course.id}>
            <Link to={`/all-video/${course.id}`} className="course-link" style={{ textDecoration: 'none' }}>
            <div className="header-col email-col">
              <div className="course-info">
                <span>{course.id}</span>
                <img src={course.image || img} alt={course.name} className="course-thumbnail" />
                <span>{course.name}</span>
              </div>
             </div>
            </Link>
            <div className="header-col courses-col">{course.status || 'N/A'}</div>
            <div className="header-col actions-col">
              <button className="action-button" onClick={() => handleActionClick(course.id)}>⋮</button>
              {actionMenuOpen === course.id && (
                <div className="action-menu">
                  {isAdmin && <button onClick={() => handleEditCourse(course)} id="btn_mng_course">Edit</button>}
                  <button onClick={() => handleDeleteCourse(course.id)} id="btn_mng_course">Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}