import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Candidateprofile from './Pages/Candidateprofile';
import Feed from './Pages/Feed';
import jobapplication from './Pages/jobapplication';
import jobapplication2 from './Pages/Jobapplication2';
import Joblisting from './Pages/Joblisting';
import jobdetails from './Pages/Jobdetails';
import jobdetails2 from './Pages/Jobdetails2';
import jobseekerheader from './Layouts/Jobseekerheader';
import Heighlights from './Pages/Heighlights';
import Videos from './Pages/Videos';
import Recommendations from './Pages/Recommendations';
import Experience from './Pages/Experience';
import Appliedjobs from './Pages/Appliedjobs';
import Savedjobs from './Pages/Savedjobs';
import Applypage1 from './Pages/Applypage1';

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
        <Route exact path="/jobseekerheader" component={jobseekerheader} />
        <Route exact path="/heighlights" component={Heighlights} />
        <Route exact path="/Videos" component={Videos} />
        <Route exact path="/recommendations" component={Recommendations} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/appliedjobs" component={Appliedjobs} />
        <Route exact path="/savedjobs" component={Savedjobs} />
        <Route exact path="/applypage1" component={Applypage1} />
      </div>
    </Router>
    );
 }
}

export default App;
