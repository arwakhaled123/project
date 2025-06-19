import React, { useEffect, useState } from "react";
import "./home_courses.css";
import { Row, Col} from "react-bootstrap";
import image from "../../Assets/home_courses/Profile.png";
import StartedCourses from "./started_courses";
import PopularCourses from "./popular_courses ";
import SkillCourses from "./skills_courses";
import { Link } from "react-router-dom";
import Navbars from "../Navbar/Navbar";
// import {useEffect, useState} from "react";


const HomeCourses = () => {

  const api_url = "https://fakestoreapi.com/products/category/jewelery"
  const api_url2 = "https://fakestoreapi.com/products/category/electronics"
  const api_url3 = "https://fakestoreapi.com/products/category/men's clothing"
  const [products, setProducts] = useState([]);
  const [popularcourse, setPopularcourse] = useState([]);
  const [skilcourse, setSkillcourse] = useState([]);
  const getstartedcourse = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));

  }
  const getPopularcourse = () => {
    fetch(api_url2)
      .then((res) => res.json())
      .then((data) => setPopularcourse(data));

  }
  const getSkillcourse = () => {
    fetch(api_url3)
      .then((res) => res.json())
      .then((data) => setSkillcourse(data));

  }
  useEffect(() => {
    getstartedcourse();
    getPopularcourse();
    getSkillcourse();

  }, []);
  // const startedCourses = [
  //   {
  //     title: "OOP C++",
  //     instructor: "Instructor name",
  //     skills: ["Intermediate"],
  //     image: "https://via.placeholder.com/120",
  //   },
  //   {
  //     title: "Introduction for Generative AI",
  //     instructor: "Instructor name",
  //     skills: ["Beginner"],
  //     image: "https://via.placeholder.com/120",
  //   },
  // ];

  return (

    <>
      <Navbars/>
      <Row className="m-auto links_pages">
        <Col className="link_home"><Link to="/home-course" id="link_home" >Home</Link></Col>
        <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
        <Col className="link_learning"><Link to="/My-learning" id="link_learning">My learning</Link> </Col>
        <Col className="link_learning"><Link to="/Leaderboard" id="link_learning">Leaderboard</Link> </Col>
      </Row>
      <Row>
        <h4 id="started_courses">Get Started with These Courses</h4>
      </Row>
      <Row >
        {products.map((product) => {
          return (
            <Col md={3} key={product.id}>
              <StartedCourses product={product} />
            </Col>
          );
        })}
      </Row>

      <Row>
        <h4 id="started_courses">Most Popular Courses</h4>
      </Row>
      <Row >
        {popularcourse.map((product) => {
          return (
            <Col md={3} key={product.id}>
              <PopularCourses product={product} />
            </Col>

          );
        })}
      </Row>
      <Row>
        <h4 id="started_courses">Grow Your Skill Set</h4>
      </Row>
      <Row >
        {skilcourse.map((product) => {
          return (
            <Col md={3} key={product.id}>
              <SkillCourses product={product} />
            </Col>

          );
        })}
      </Row>
    </>
  );
}
export default HomeCourses;

// this page for search
// import React, { useState, useEffect } from "react";
// import { Row, Col, Form, Spinner } from "react-bootstrap";
// import StartedCourses from "./started_courses";
// import PopularCourses from "./popular_courses ";
// import SkillCourses from "./skills_courses";
// import "./home_courses.css";

// const CourseSearch = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [allCourses, setAllCourses] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // API endpoints
//   const apiUrls = [
//     "https://fakestoreapi.com/products/category/jewelery",
//     "https://fakestoreapi.com/products/category/electronics",
//     "https://fakestoreapi.com/products/category/men's clothing"
//   ];

//   // Fetch all courses data
//   useEffect(() => {
//     const fetchCourses = async () => {
//       setLoading(true);
//       try {
//         const responses = await Promise.all(
//           apiUrls.map(url => fetch(url).then(res => res.json()))
//         );
//         const combined = responses.flat();
//         setAllCourses(combined);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   // Filter courses based on search query
//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setFilteredCourses([]);
//       return;
//     }

//     const query = searchQuery.toLowerCase();
//     const results = allCourses.filter(course => 
//       course.title.toLowerCase().includes(query) ||
//       (course.description && course.description.toLowerCase().includes(query))
//     );
    
//     setFilteredCourses(results);
//   }, [searchQuery, allCourses]);

//   return (
//     <div className="course-search-container">
//       {/* Search Input */}
//       <Row className="mb-4">
//         <Col md={6} className="mx-auto">
//           <Form.Group controlId="courseSearch">
//             <Form.Control
//               type="search"
//               placeholder="Search courses by title or description..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="search-input"
//             />
//             {loading && (
//               <div className="text-center mt-2">
//                 <Spinner animation="border" size="sm" />
//               </div>
//             )}
//           </Form.Group>
//         </Col>
//       </Row>

//       {/* Search Results */}
//       {searchQuery && (
//         <div className="search-results-section">
//           <Row>
//             <h4 className="search-results-title">
//               {filteredCourses.length > 0 
//                 ? `Found ${filteredCourses.length} matching courses`
//                 : "No courses found matching your search"}
//             </h4>
//           </Row>
          
//           {filteredCourses.length > 0 && (
//             <Row>
//               {filteredCourses.map((course) => (
//                 <Col md={3} key={course.id}>
//                   <StartedCourses product={course} />
//                 </Col>
//               ))}
//             </Row>
//           )}
//         </div>
//       )}

//       {/* Error Message */}
//       {error && (
//         <Row>
//           <Col className="text-center text-danger">
//             Error loading courses: {error}
//           </Col>
//         </Row>
//       )}
//     </div>
//   );
// };

// export default CourseSearch;