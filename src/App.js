
import { Fragment } from 'react';
import './App.css';
import Navbars from './Components/Nav/Navs';
import {LoginPage} from './Components/login/login';
import { SignUps } from './Components/register/SignUp';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <App/>

    // another way to connect pages
    // <Router>
    //   <Switch>
    //     <Route exact Component={LoginPage} path='/login'/>
    //     <Route exact Component={SignUps} path='/SignUp'/>

    //   </Switch>
    // </Router>
  
  );
}

export default App;
