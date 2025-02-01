import { Fragment } from 'react';
import './App.css';
import Home from './Components/Home/home';
import { SignUps } from './Components/SignUp/SignUp';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LoginPage  from './Components/login/login'; 
import About_Us from './Components/About Us/About_Us';
import Quiz from './Components/Quiz/Quiz';
import Video from './Components/Video/Video';

function App() {
  return (
    <Quiz/>
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