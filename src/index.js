import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import LoginPage from './Components/login/login';
import { SignUps } from './Components/SignUp/SignUp';
import Home from './Components/Home/home';
import About_Us from './Components/About Us/About_Us';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import HomeCourses from './Components/Home_Courses/home_courses.js';
import Tracks from './Components/Tracks/Tracks.js';
import My_learning from './Components/My_Learning/My_learning.js';
import My_learning2 from './Components/My_Learning/My_learning2.js';
import Rate from './Components/Rate/Rate.js';
import RateInstructor from './Components/Rate/Rate-instructor.js';
import Leaderboard from './Components/Track_Courses/Track_Courses.js';
import Track_Courses from './Components/Track_Courses/Track_Courses.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "sign",
    element: <SignUps />,
  },
  {
    path: "home",
    element: <Home/>
  },
  {
    path: "about-us",
    element: <About_Us/>
  },
  {
    path: "home-course",
    element: <HomeCourses/>
  },
  {
    path: "tracks",
    element: <Tracks/>
  },
  {
    path: "My-learning",
    element: <My_learning/>
  },
  {
  path: "My-learning2",
  element: <My_learning2/>
},
{
  path: "Rate",
  element: <Rate/>
},
{
  path: "RateInstructor",
  element: <RateInstructor/>
},
{
  path: "Track_Courses",
  element: <Track_Courses/>
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
