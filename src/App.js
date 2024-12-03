import { Fragment } from 'react';
import './App.css';
import Navbars from './Components/Nav/Navs';
import { SignUps } from './Components/register/SignUp';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LoginPage  from './Components/login/login'; 

function App() {
  return (
    <SignUps/>
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