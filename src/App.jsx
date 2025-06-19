
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import logo from './logo.svg'; // Imported from App.js, if needed

// Component_tasneem from App.jsx 
import  Login  from './Component/Login/login';
import  Home  from './Component/Home/HomePage';
import  SignUps  from './Component/SignUp/SignUp';
import  VerifyEmail  from './Component/verify/VerifyEmail';
import  About_Us  from './Component/About Us/About_Us';
import  Account  from './Component/setting/Account';
import  Security  from './Component/setting/security';
import  ChatPage  from './Component/chat/Chatpage';
import  ProfilePage  from './Component/profile/ProfilePage';
import  CoursePage  from './Component/Course Page/CoursePage';
import  Course  from './Component/Course/Course';
import  ContactUs  from './Component/Contact Us/ContactUs';
import  Video  from './Component/Video/Video';
import  Section from './Component/Section/Section';
import  MyLesson  from './Component/MyLesson/MyLesson';
import { Publish } from './Component/Publish/Publish';
import  SectionReview  from './Component/Section Review/SectionReview';
import  PublishTrack  from './Component/Publish track/PublishTrack';
import { Dashboard } from './Component/Dashboard/Dashboard';
import { ManageCourses } from './Component/Dashboard/ManageCourses';
import { SettingsManagement } from './Component/Dashboard/SettingsManagement';
import { Notifications } from './Component/Dashboard/Notifications';
import { AddCourseForm } from './Component/Dashboard/AddCourseForm';
import { ManageUsers } from './Component/Dashboard/ManageUsers';
import { ManageInstructors } from './Component/Dashboard/ManageInstructors';
import { QuizQuestionPage } from './Component/QuizQuestionPage/QuizQuestionPage';
import { ManageSections } from './Component/Dashboard/ManageSections';

// Component_arwa from App.js
import Layout from './Component/Layout/Layout';
import HomeCourses from './Component/Home_Courses/home_courses';
import Tracks from './Component/Tracks/Tracks';
import My_learning from './Component/My_Learning/My_learning';
import My_learning2 from './Component/My_Learning/My_learning2';
import Rate from './Component/Rate/Rate';
import RateInstructor from './Component/Rate/Rate-instructor';
import Leaderboard from './Component/Leaderboard/Leaderboard';
import Track_Courses from './Component/Track_Courses/Track_Courses';
import Track_Courses2 from './Component/Track_Courses/Track_Courses2';
import NotFound from './Component/NotFound/NotFound';
import Course_Details from './Component/Course_Details/Course_Details';
import Courses from './Component/Courses/Courses';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import ProtectedRoute2 from './Component/ProtectedRoute2/ProtectedRoute2';

// const routers = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home />},
//       { path: 'home', element: <ProtectedRoute2 userData={test}><Home /></ProtectedRoute2>  },
//       { path: 'about-us', element: <ProtectedRoute userData={test}><About_Us /></ProtectedRoute> },
      
//       { path: 'home-course', element: <ProtectedRoute2 userData={test} ><HomeCourses /></ProtectedRoute2> },
//       { path: 'tracks', element: <Tracks /> },
//       { path: 'my-learning', element: <My_learning /> },
//       { path: 'my-learning2', element: <My_learning2 /> },
//       { path: 'rate', element: <Rate /> },
//       { path: 'Rate-Instructor', element: <RateInstructor /> },
//       { path: 'leaderboard', element: <Leaderboard /> },
//       { path: 'track_Courses', element: <Track_Courses /> },
//       { path: 'Track_Courses2', element: <Track_Courses2 /> },
//       { path: 'course-page', element: <CoursePage /> },
//       { path: 'course', element: <Course /> },
//       { path: 'video', element: <Video /> },
//       { path: 'contact-us', element: <ContactUs /> },
//       { path: 'account', element: <Account /> },
//       { path: 'profile', element: <ProfilePage /> },
//       { path: 'security', element: <Security /> },
//     ],
//   },
//   // Routes outside Layout (e.g., Dashboard-related)
//   { path: 'dashboard', element: <Dashboard /> },
//   { path: 'manage-courses', element: <ManageCourses /> },
//   { path: 'settings-management', element: <SettingsManagement /> },
//   { path: 'notifications', element: <Notifications /> },
//   { path: 'add-course-form', element: <AddCourseForm /> },
//   { path: 'manage-users', element: <ManageUsers /> },
//   { path: 'manage-instructors', element: <ManageInstructors /> },
//   { path: 'manage-sections', element: <ManageSections /> },
//   { path: 'verify-email', element: <VerifyEmail /> },
//   { path: 'publish-track', element: <PublishTrack /> },
//   { path: 'quiz-question-page', element: <QuizQuestionPage /> },

//   { path: 'sign-up', element: <SignUps /> },
//   { path: 'login', element: <Login /> },
//   { path: 'chat', element: <ChatPage /> },
//   { path: 'section', element: <Section /> },
//   { path: 'my-lesson', element: <MyLesson /> },
//   { path: 'publish', element: <Publish /> },
//   { path: 'section-review', element: <SectionReview /> },
//   {path: 'course_details', element: <Course_Details />},
//   {path: 'courses', element: <Courses />},
//   // Catch-all route for 404
//   { path: '*', element: <NotFound /> },
// ]);

function App() {
  
const test=1
const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />},
      { path: 'home', element: <ProtectedRoute2 userData={test}><Home /></ProtectedRoute2>  },
      { path: 'about-us', element: <ProtectedRoute userData={test}><About_Us /></ProtectedRoute> },
      
      { path: 'home-course', element: <ProtectedRoute2 userData={test} ><HomeCourses /></ProtectedRoute2> },
      { path: 'tracks', element: <Tracks /> },
      { path: 'my-learning', element: <My_learning /> },
      { path: 'my-learning2', element: <My_learning2 /> },
      { path: 'rate', element: <Rate /> },
      { path: 'Rate-Instructor', element: <RateInstructor /> },
      { path: 'leaderboard', element: <Leaderboard /> },
      { path: 'track_Courses', element: <Track_Courses /> },
      { path: 'Track_Courses2', element: <Track_Courses2 /> },
      { path: 'course-page', element: <CoursePage /> },
      { path: 'course', element: <Course /> },
      { path: 'video', element: <Video /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'account', element: <Account /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'security', element: <Security /> },
    ],
  },
  // Routes outside Layout (e.g., Dashboard-related)
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'manage-courses', element: <ManageCourses /> },
  { path: 'settings-management', element: <SettingsManagement /> },
  { path: 'notifications', element: <Notifications /> },
  { path: 'add-course-form', element: <AddCourseForm /> },
  { path: 'manage-users', element: <ManageUsers /> },
  { path: 'manage-instructors', element: <ManageInstructors /> },
  { path: 'manage-sections', element: <ManageSections /> },
  { path: 'verify-email', element: <VerifyEmail /> },
  { path: 'publish-track', element: <PublishTrack /> },
  { path: 'quiz-question-page', element: <QuizQuestionPage /> },

  { path: 'sign-up', element: <SignUps /> },
  { path: 'login', element: <Login /> },
  { path: 'chat', element: <ChatPage /> },
  { path: 'section', element: <Section /> },
  { path: 'my-lesson', element: <MyLesson /> },
  { path: 'publish', element: <Publish /> },
  { path: 'section-review', element: <SectionReview /> },
  {path: 'course_details', element: <Course_Details />},
  {path: 'courses', element: <Courses />},
  // Catch-all route for 404
  { path: '*', element: <NotFound /> },
]);
  return <RouterProvider router={routers} />;
}

export default App;