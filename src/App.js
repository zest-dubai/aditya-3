import React,{Component} from 'react';
import {Link, Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './components/login'
import Logout from './components/logout'
import Cust from './components/customer'
import GovID from './components/govtID'
import App3 from './cameraSelfie';
import Success from './components/success';
import CamErr from './components/cameraError';
//import Button from '@material-ui/core/Button';


class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/customer" component={Cust}/>       
        <Route exact path="/selfie" component={App3}/>
        <Route exact path="/gid" component={GovID}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/success" component={Success}/>
        <Route exact path="/camerr" component={CamErr}/>

      </Switch>
    );
  }
}
export default App;