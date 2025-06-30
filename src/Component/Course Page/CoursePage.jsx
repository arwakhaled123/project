import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import image1 from "../../Assets/Rectangle (1).png";
import image2 from "../../Assets/sec_img.png";
import image3 from "../../Assets/chatbot.png";
import circle from "../../Assets/img150k.png";
import "./CoursePage.css";
import { Link } from "lucide-react";

export default function CoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        
        // Fetch public course details
        const courseRes = await axios.get(
          `https://localhost:7217/api/courses/${id}/public`,
          { headers }
        );

        setCourse(courseRes.data.data);

        // Check enrollment status if user is authenticated
        if (token) {
          try {
            const enrollmentRes = await axios.get(
              `https://localhost:7217/api/courses/${id}/enrollments/status`,
              { headers }
            );
            setIsEnrolled(enrollmentRes.data.isEnrolled);
          } catch (enrollmentError) {
            console.error("Error checking enrollment:", enrollmentError);
          }
        }

        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch course details");
        console.error("API Error:", err);
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [id]);

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login', { state: { from: `/course-page/${id}` } });
        return;
      }

      const headers = { Authorization: `Bearer ${token}` };
      await axios.post(
        `https://localhost:7217/api/courses/${id}/enroll`,
        {},
        { headers }
      );
      
      setIsEnrolled(true);
      navigate('/my-learning');
    } catch (err) {
      setError(err.response?.data?.message || "Failed to enroll in course");
      console.error("Enrollment Error:", err);
    }
  };

  if (loading) return <div className="loading">Loading course details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!course) return <div className="error">No course data available</div>;

  return (
    <>
      <header className="course-header">
        <a href="/home" id="LEARNQUEST" className="LEARNQUEST">
          LEARNQUEST
        </a>
        <div className="search_div">
          <input type="text" placeholder="Search" id="search" />
          <button id="search-buttom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
            >
              {/* Search icon SVG */}
            </svg>
          </button>
        </div>
        <div className="course-icons">
          {/* Notification and profile icons */}
        </div>
      </header>

      <div className="container-fluid">
        <div className="content2">
          <div className="rating2">
            <h2 className="master2">
              <a href="/course" className="master2">
                {course.courseName}
              </a>
            </h2>
            <div id="img_txt">
              <img src={course.instructorImage || circle} alt="Instructor" id="photo" />
              <span id="txt">Instructor: {course.instructorName}</span>
            </div>
            {/* <Link to='/course'> */}
            <Button 
              className="explore-button2" 
              onClick={handleEnroll}
              disabled={isEnrolled}
            >
              {isEnrolled ? 'Already Enrolled' : 'Enroll'}
            </Button>
            {/* </Link> */}
          </div>
        </div>
        <div className="right">
          <img src={course.courseImage || image1} alt="Course" id="learn" />
        </div>
      </div>

      <Col className="sec_div">
        <Row className="btns">
          <Button type="submit" id="course_btn">
            About
          </Button>
          <Button type="submit" id="course_btn">
            Outcomes
          </Button>
          <Button type="submit" id="course_btn">
            Content
          </Button>
          <Button type="submit" id="course_btn">
            Reviews
          </Button>
        </Row>
        <Col md={6} className="col_paragrapph">
          <p className="paragrapph">{course.description}</p>
        </Col>
        <Link to="/chat" id="chatbot">
          <img src={image3} alt="Chatbot" id="chatbot" />
        </Link>
      </Col>

      <Row className="third_div">
        <Col md={6} className="skills_txt">
          <p id="gain">Skills you'll gain</p>
          <Row id="three_txt_row">
            {course.courseSkills?.slice(0, 2).map((skill, index) => (
              <p key={index} id="three_txt">
                {skill}
              </p>
            ))}
          </Row>
          {course.courseSkills?.length > 2 && (
            <p id="three_txt">{course.courseSkills[2]}</p>
          )}
          <p id="build_txt">Build your expertise</p>
          {course.aboutCourses?.map((item, index) => (
            <p key={index} id="same_txt">
              {item.aboutCourseText}
            </p>
          ))}
        </Col>
        <img src={image2} alt="Learning" id="sec_img" />
      </Row>

      {/* Reviews Section */}
      {course.averageRating && (
        <Row className="reviews-section">
          <Col>
            <h4>Course Reviews</h4>
            <div className="rating-summary">
              <h3>{course.averageRating.toFixed(1)} out of 5</h3>
              <div className="star-ratings">
                {/* Render star ratings based on averageRating */}
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.floor(course.averageRating) ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <p>{course.reviewCount} reviews</p>
            </div>
          </Col>
        </Row>
      )}

      {/* Course Statistics */}
      {course.durationMinutes && (
        <Row className="stats-section">
          <Col md={4}>
            <h4>Course Details</h4>
            <p>Duration: {Math.floor(course.durationMinutes / 60)}h {course.durationMinutes % 60}m</p>
            <p>Level: {course.level}</p>
            {course.hasCertificate && <p>Certificate: Included</p>}
          </Col>
        </Row>
      )}

      {/* Footer remains the same */}
      <footer className="settings-footer2">
        {/* Footer content */}
      </footer>
    </>
  );
}