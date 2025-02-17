import React from "react";
import "./home_courses.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from "../../Assets/home_courses/Profile.png";
import StartedCourses from "./started_courses";


const HomeCourses = () => {

  const startedCourses = [
    {
      title: "OOP C++",
      instructor: "Instructor name",
      skills: ["Intermediate"],
      image: "https://via.placeholder.com/120",
    },
    {
      title: "Introduction for Generative AI",
      instructor: "Instructor name",
      skills: ["Beginner"],
      image: "https://via.placeholder.com/120",
    },
  ];

  return (

    <body >


      <Navbar expand="lg" className="bg-white">
        {/* <Container> */}
        <Navbar.Brand id="logo-LEARNQUEST" href="#home"><p id="logo-QUEST">L<i id="logo-EARN">EARN</i>QUEST</p></Navbar.Brand>
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
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
        <Row className="m-auto links_pages">
          <Col className="link_home"><a id="link_home" href="">Home</a> </Col>
          <Col className="link_learning"><a id="link_learning" href="">My learning</a> </Col>
          <Col className="link_Leaderboard"><a id="link_Leaderboard" href="">Leaderboard</a> </Col>
        </Row>
      <Row>
        <h4 id="started_courses">Get Started with These Courses</h4>
        </Row>
      <Row>
        <Col md={3}>
        <StartedCourses/>
        </Col>
        <Col md={3}>
        <StartedCourses/>
        </Col>
        <Col md={3}>
        <StartedCourses/>
        </Col>
        <Col md={3}>
        <StartedCourses/>
        </Col>
      </Row>
      {/* <footer className="bg-purple-900 text-white py-6 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Review</a>
        </div>
        <p className="mt-4">&copy; 2024 LearnQuest. Empowering Future Coders.</p>
      </footer> */}
      {/* Footer */}
      <footer className="settings-footer">
        <div className="footer-links">
          <a href="#about" id="link">About Us</a>
          <a href="#courses" id="link">Courses</a>
          <a href="#contact" id="link">Contact</a>
          <a href="#review" id="link"> Review</a>
        </div>
        <div className="social-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M14.9207 2.48682C13.2878 2.48682 11.671 2.80843 10.1624 3.43329C8.6539 4.05815 7.2832 4.97402 6.12861 6.12861C3.79681 8.46041 2.48682 11.623 2.48682 14.9207C2.48682 20.4164 6.05534 25.0791 10.9916 26.7328C11.6133 26.8323 11.8122 26.4469 11.8122 26.1112V24.0098C8.36803 24.7559 7.63444 22.3437 7.63444 22.3437C7.06248 20.9014 6.25428 20.5159 6.25428 20.5159C5.1228 19.745 6.34131 19.7699 6.34131 19.7699C7.5847 19.8569 8.24369 21.0506 8.24369 21.0506C9.32544 22.9405 11.1532 22.381 11.8619 22.0826C11.9739 21.2744 12.2971 20.7273 12.6453 20.4164C9.88496 20.1056 6.98787 19.0363 6.98787 14.299C6.98787 12.9188 7.46036 11.8122 8.26856 10.9294C8.14422 10.6186 7.70904 9.32544 8.3929 7.64687C8.3929 7.64687 9.43735 7.31116 11.8122 8.91512C12.7945 8.64158 13.8638 8.50481 14.9207 8.50481C15.9776 8.50481 17.0469 8.64158 18.0291 8.91512C20.404 7.31116 21.4485 7.64687 21.4485 7.64687C22.1323 9.32544 21.6971 10.6186 21.5728 10.9294C22.381 11.8122 22.8535 12.9188 22.8535 14.299C22.8535 19.0487 19.944 20.0932 17.1712 20.404C17.6188 20.7895 18.0291 21.5479 18.0291 22.7043V26.1112C18.0291 26.4469 18.2281 26.8448 18.8622 26.7328C23.7985 25.0667 27.3545 20.4164 27.3545 14.9207C27.3545 13.2878 27.0329 11.671 26.4081 10.1624C25.7832 8.6539 24.8673 7.2832 23.7127 6.12861C22.5582 4.97402 21.1875 4.05815 19.6789 3.43329C18.1704 2.80843 16.5535 2.48682 14.9207 2.48682Z" fill="white"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
        <path d="M28.2276 14.9207C28.2276 8.05719 22.6572 2.48682 15.7937 2.48682C8.93023 2.48682 3.35986 8.05719 3.35986 14.9207C3.35986 20.9387 7.63711 25.9495 13.307 27.1059V18.6508H10.8202V14.9207H13.307V11.8122C13.307 9.41248 15.2591 7.46036 17.6588 7.46036H20.7673V11.1905H18.2805C17.5966 11.1905 17.0371 11.75 17.0371 12.4339V14.9207H20.7673V18.6508H17.0371V27.2924C23.3162 26.6707 28.2276 21.3739 28.2276 14.9207Z" fill="white"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <g clip-path="url(#clip0_80_300)">
            <mask id="mask0_80_300"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
            <path d="M0.436768 0.920654H27.4368V27.9207H0.436768V0.920654Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_80_300)">
            <path d="M21.6993 2.18591H25.8399L16.7949 12.5501L27.4368 26.6556H19.1053L12.5752 18.1024L5.11162 26.6556H0.967125L10.6408 15.5663L0.436768 2.18784H8.98034L14.8741 10.0043L21.6993 2.18591ZM20.2432 24.1716H22.5382L7.72677 4.5407H5.26591L20.2432 24.1716Z" fill="white"/>
            </g>
        </g>
        <defs>
            <clipPath id="clip0_80_300">
            <rect width="27" height="27" fill="white" transform="translate(0.436768 0.920654)"/>
            </clipPath>
        </defs>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M9.85715 2.48682H20.3016C24.2804 2.48682 27.5132 5.71962 27.5132 9.69846V20.1429C27.5132 22.0555 26.7534 23.8899 25.401 25.2423C24.0485 26.5947 22.2142 27.3545 20.3016 27.3545H9.85715C5.87831 27.3545 2.64551 24.1217 2.64551 20.1429V9.69846C2.64551 7.78581 3.4053 5.9515 4.75775 4.59906C6.11019 3.24661 7.9445 2.48682 9.85715 2.48682ZM9.60847 4.97359C8.42131 4.97359 7.28277 5.44519 6.44333 6.28464C5.60388 7.12408 5.13228 8.26262 5.13228 9.44978V20.3916C5.13228 22.8659 7.13413 24.8678 9.60847 24.8678H20.5503C21.7374 24.8678 22.876 24.3962 23.7154 23.5567C24.5549 22.7173 25.0265 21.5787 25.0265 20.3916V9.44978C25.0265 6.97544 23.0246 4.97359 20.5503 4.97359H9.60847ZM21.6071 6.83867C22.0194 6.83867 22.4147 7.00242 22.7062 7.29389C22.9976 7.58537 23.1614 7.98069 23.1614 8.3929C23.1614 8.80511 22.9976 9.20043 22.7062 9.49191C22.4147 9.78338 22.0194 9.94713 21.6071 9.94713C21.1949 9.94713 20.7996 9.78338 20.5081 9.49191C20.2167 9.20043 20.0529 8.80511 20.0529 8.3929C20.0529 7.98069 20.2167 7.58537 20.5081 7.29389C20.7996 7.00242 21.1949 6.83867 21.6071 6.83867ZM15.0794 8.70375C16.7282 8.70375 18.3095 9.35874 19.4754 10.5246C20.6413 11.6905 21.2963 13.2718 21.2963 14.9207C21.2963 16.5695 20.6413 18.1508 19.4754 19.3167C18.3095 20.4826 16.7282 21.1376 15.0794 21.1376C13.4305 21.1376 11.8492 20.4826 10.6833 19.3167C9.51744 18.1508 8.86244 16.5695 8.86244 14.9207C8.86244 13.2718 9.51744 11.6905 10.6833 10.5246C11.8492 9.35874 13.4305 8.70375 15.0794 8.70375ZM15.0794 11.1905C14.0901 11.1905 13.1413 11.5835 12.4417 12.2831C11.7422 12.9826 11.3492 13.9314 11.3492 14.9207C11.3492 15.91 11.7422 16.8588 12.4417 17.5583C13.1413 18.2578 14.0901 18.6508 15.0794 18.6508C16.0687 18.6508 17.0175 18.2578 17.717 17.5583C18.4165 16.8588 18.8095 15.91 18.8095 14.9207C18.8095 13.9314 18.4165 12.9826 17.717 12.2831C17.0175 11.5835 16.0687 11.1905 15.0794 11.1905Z" fill="white"/>
        </svg>
        </div>
        <p id="copy">&copy; 2024 Top Programming, Empowering Future Coders</p>
      </footer>
    </body>
  );
}
export default HomeCourses;





// import { useState } from "react";
// import { Search, Bell } from "lucide-react";

// const courses = {
//   "Get Started with These Courses": [
//     { title: "UX Design", image: "ux-design.jpg" },
//     { title: "Cybersecurity", image: "cybersecurity.jpg" },
//     { title: "Data Analytics", image: "data-analytics.jpg" },
//     { title: "SQL", image: "sql.jpg" },
//   ],
//   "Most Popular Courses": [
//     { title: "OOP C++", image: "oop.jpg" },
//     { title: "AI Developer", image: "ai-dev.jpg" },
//     { title: "Graphic Design", image: "graphic-design.jpg" },
//     { title: "UI / UX Design", image: "ui-ux.jpg" },
//   ],
//   "Grow Your Skill Set": [
//     { title: "Search Engine Optimization", image: "seo.jpg" },
//     { title: "Introduction for Generative AI", image: "gen-ai.jpg" },
//     { title: "Data Engineering", image: "data-eng.jpg" },
//     { title: "AI Engineering", image: "ai-eng.jpg" },
//   ],
// };

// export default function LearnQuest() {
//   const [activeTab, setActiveTab] = useState("Home");

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       {/* Navbar */}
//       <nav className="bg-white p-4 shadow-md flex justify-between items-center">
//         <h1 className="text-xl font-bold">LEARNQUEST</h1>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-10 py-2 border rounded-md focus:outline-none"
//             />
//           </div>
//           <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
//         </div>
//       </nav>

//       {/* Tabs */}
//       <div className="flex justify-center mt-4 border-b pb-2">
//         {["Home", "My Learning", "Leaderboard"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`mx-4 pb-2 ${activeTab === tab ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Course Sections */}
//       <div className="container mx-auto p-6">
//         {Object.entries(courses).map(([section, courseList]) => (
//           <div key={section} className="mb-8">
//             <h2 className="text-2xl font-bold mb-4">{section}</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {courseList.map((course) => (
//                 <div key={course.title} className="bg-white p-4 rounded-lg shadow-md">
//                   <img
//                     src={`/images/${course.image}`}
//                     alt={course.title}
//                     className="w-full h-32 object-cover rounded-md"
//                   />
//                   <h3 className="mt-2 font-semibold text-lg">{course.title}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="bg-purple-900 text-white py-6 text-center">
//         <div className="flex justify-center space-x-4">
//           <a href="#" className="hover:underline">About Us</a>
//           <a href="#" className="hover:underline">Courses</a>
//           <a href="#" className="hover:underline">Contact</a>
//           <a href="#" className="hover:underline">Review</a>
//         </div>
//         <p className="mt-4">&copy; 2024 LearnQuest. Empowering Future Coders.</p>
//       </footer>
//     </div>
//   );
// }
