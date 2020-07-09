import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Candidateprofile from './Pages/Candidateprofile';
import Feed from './Pages/Feed';
import jobapplication from './Pages/jobapplication';
import jobapplication2 from './Pages/Jobapplication2';
import Joblisting from './Pages/Joblisting';
import jobdetails from './Pages/Jobdetails';
import jobdetails2 from './Pages/Jobdetails2';

class App extends Component {
 render(){
  return (
    <Router>
      <div>
        <Route exact path='/' component={Candidateprofile} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/jobapplication" component={jobapplication} />
        <Route exact path="/jobapplication2" component={jobapplication2} />
        <Route exact path="/Joblisting" component={Joblisting} />
        <Route exact path="/jobdetails" component={jobdetails} />
        <Route exact path="/jobdetails2" component={jobdetails2} />
      </div>
    </Router>
    );
 }
}

export default App;
