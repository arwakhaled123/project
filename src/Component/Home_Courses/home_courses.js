import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import StartedCourses from "./started_courses";
import PopularCourses from "./popular_courses ";
import SkillCourses from "./skills_courses";
import { Link } from "react-router-dom";
import Navbars from "../Navbar/Navbar";
import axios from "axios";
import "./home_courses.css";
import image3 from "../../Assets/chatbot.png";


const API_BASE_URL = "https://localhost:7217/api/courses";

const HomeCourses = () => {
  const [startedCourses, setStartedCourses] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [skillCourses, setSkillCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const transformCourseData = (course) => ({
    id: course.courseId,
    title: course.courseName,
    instructor: course.instructorName || "Instructor name",
    skills: [course.level || "Beginner"],
    image: course.courseImage || "https://via.placeholder.com/120",
    price: course.coursePrice,
    rating: course.averageRating,
    enrollmentCount: course.enrollmentCount
  });

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

      // Fetch started courses (featured or recommended)
      let startedRes;
      if (isAuthenticated) {
        try {
          startedRes = await axios.get(
            `${API_BASE_URL}/recommendations`,
            { params: { limit: 4 }, headers }
          );
        } catch (err) {
          if (err.response?.status === 403) {
            startedRes = await axios.get(
              `${API_BASE_URL}/featured`,
              { params: { limit: 4 } }
            );
          } else {
            throw err;
          }
        }
      } else {
        startedRes = await axios.get(
          `${API_BASE_URL}/featured`,
          { params: { limit: 4 } }
        );
      }
      setStartedCourses(startedRes.data.data?.map(transformCourseData) || []);

      // Fetch popular courses
      const popularRes = await axios.get(
        `${API_BASE_URL}/popular`,
        { params: { limit: 4 } }
      );
      setPopularCourses(popularRes.data.data?.map(transformCourseData) || []);

      // Fetch skill-based courses
      const skillsRes = await axios.get(
        `${API_BASE_URL}/browse`,
        { params: { pageNumber: 1, pageSize: 4, level: 'Beginner' } }
      );
      setSkillCourses(skillsRes.data.data?.items?.map(transformCourseData) || []);

      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setLoading(false);
      console.error('Error fetching courses:', err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [isAuthenticated]);

  if (loading) return <div className="loading">Loading courses...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
    <div className="home_courses-left">
      <Navbars />
      <Row className="m-auto links_pages">
        <Col className="link_home"><Link to="/home-course" id="link_home">Home</Link></Col>
        <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link></Col>
        <Col className="link_learning"><Link to="/My-learning" id="link_learning">My learning</Link></Col>
        {/* <Col className="link_learning"><Link to="/Leaderboard" id="link_learning">Leaderboard</Link></Col> */}
      </Row>

      <Row>
        <h4 id="started_courses">
          {isAuthenticated ? "Recommended For You" : "Featured Courses"}
        </h4>
      </Row>
      <Row>
        {startedCourses.map((course) => (
          <Col md={3} key={course.id}>
            <Link to={`/course-page/${course.id}`}>
              <StartedCourses course={course} />
            </Link>
          </Col>
        ))}
      </Row>
      <Row>
        {/* <Col md={9}> */}
          <h4 id="started_courses">Most Popular Courses</h4>
        {/* </Col> */}
        {/* <Col md={3} className="text-end">
          <Link to="/chat" id="chatbot">
            <img src={image3} alt="Learning" id="chatbot" />
          </Link>
        </Col> */}
      </Row>
      <Row>
        {popularCourses.map((course) => (
          <Col md={3} key={course.id}>
            <Link to={`/course-page/${course.id}`}>
              <PopularCourses course={course} />
            </Link>
          </Col>
        ))}
      </Row>

      <Row>
        <h4 id="started_courses">Grow Your Skill Set</h4>
      </Row>
      <Row>
        {skillCourses.map((course) => (
          <Col md={3} key={course.id}>
            <Link to={`/course-page/${course.id}`}>
              <SkillCourses course={course} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
    <div className="home_courses-right">
        <Col md={12}>
          <Link to="/chat" id="chatbot">
            <img src={image3} alt="Learning" id="chatbot" />
          </Link>
        </Col>
    </div>
    </>
  );
};

export default HomeCourses;