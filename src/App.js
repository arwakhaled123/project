
import { Fragment } from 'react';
import './App.css';
import Navbars from './Components/Nav/Navs';
// import {LoginPage} from './Components/login/login';
import { SignUps } from './Components/register/SignUp';
// import { LoginPage } from './Components/login/login';

import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import LoginPage from './Components/login/login'; // Default import

function App() {
  return (
    <SignUps/>
    // For routing, uncomment and configure below
    // <Router>
    //   <Switch>
    //     <Route exact component={LoginPage} path='/login'/>
    //     <Route exact component={SignUps} path='/SignUp'/>
    //   </Switch>
    // </Router>
  );
}

export default App;

// function App() {
//   return (
//     <LoginPage />

//     // another way to connect pages
//     // <Router>
//     //   <Switch>
//     //     <Route exact Component={LoginPage} path='/login'/>
//     //     <Route exact Component={SignUps} path='/SignUp'/>

//     //   </Switch>
//     // </Router>
  
//   );
// }

// export default App;
