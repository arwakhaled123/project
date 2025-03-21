import { Fragment } from 'react';
import './App.css';
import Home from './Components/Home/home';
import { SignUps } from './Components/SignUp/SignUp';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LoginPage  from './Components/login/login'; 
import About_Us from './Components/About Us/About_Us';
import Quiz from './Components/Quiz/Quiz';
import HomeCourses from './Components/Home_Courses/home_courses';
import Footer from './Components/Footer/footer';
import Navbars from './Components/Navbar/Navbar';
import Tracks from './Components/Tracks/Tracks';
import My_learning from './Components/My_Learning/My_learning';
import My_learning2 from './Components/My_Learning/My_learning2';
import Rate from './Components/Rate/Rate';
import Final_quiz from './Components/Final_quiz/Final_quiz';
import Track_Courses from './Components/Track_Courses/Track_Courses';
import Track_Courses2 from './Components/Track_Courses/Track_Courses2';
import Quizz from './Components/Final_quiz/quiz';

function App() {
  return (
    <>
    <Home/>
    </>
    // For routing, uncomment and configure below,another way to connect pages
    // <Router>
    //   <Switch>
    //     <Route exact component={LoginPage} path='/login'/>
    //     <Route exact component={SignUps} path='/SignUp'/>
    //   </Switch>
    // </Router>
  );
}
export default App;