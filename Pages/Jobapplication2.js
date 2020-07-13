import React, { Component } from 'react';
import '../Layouts/Style.css';
import JobseekerNavigationmenu from '../Layouts/JobseekerNavigationmenu';
import Advertisement from '../Layouts/Advertisement';
import Jobseekerheader from '../Layouts/Jobseekerheader';

class jobapplication2 extends Component {
    render() {
        return (
            <div>
                <body className="container-fluid background-gradient">
                <Jobseekerheader />
                    <div className="container pt-4">
                        <div className="col-lg-2">
                            <img style={{ height: "150px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                            <JobseekerNavigationmenu />
                            </div>
                        <div className="col-lg-7 pt-3">
                            <div className="row p-2 jobapplication" >
                                <h4 className="ml-2" style={{ color: "#72dcd1" }}>JOB APPLICATIONS</h4>
                            </div>
                            <div className="row p-3 jobapplication">
                                <img style={{ height: "50px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                                <div>
                                    <h2 className="mt-1 ml-3 ff1">FullStack Developer</h2>
                                    <p className="ml-3"><b>End Date: 09July, 2020</b></p>
                                </div>
                                <h4 className="ml-auto m-2 mt-3 row ff1">STATUS: &nbsp;<p className="active">ACTIVE</p>
                                </h4>
                                <h4 style={{ color: "#007bff" }}>Information and Communication Technology <br></br>Christchurch City, New Zealand</h4>
                            </div>
                            <div className="row viewjobdetails  ">
                                <h3 className="m-auto pb-2 pt-1 ff2">View Job Details</h3>
                            </div>

                            <div className="row p-3 jobapplication mt-2">
                                <img style={{ height: "50px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                                <div>
                                    <h2 className="mt-1 ml-3 ff1">FullStack Developer</h2>
                                    <p className="ml-3"><b>End Date: 09July, 2020</b></p>
                                </div>
                                <div className="ml-auto m-2 mt-4 row ">
                                <h4 className="viewapplication pt-2 pl-3 pr-3">View Application</h4>
                                </div>
                            </div>

                            <div className="row p-3 mt-2 jobapplication">
                                <img style={{ height: "50px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                                <div>
                                    <h2 className="mt-1 ml-3 ff1">Frontend Developer</h2>
                                    <p className="ml-3"><b>End Date: 09July, 2020</b></p>
                                </div>
                                <div className="ml-auto m-2 mt-4 row ">
                                <h4 className="viewapplication pt-2 pl-3 pr-3">View Application</h4>
                                </div>
                            </div>

                            <div className="row p-3 mt-2 jobapplication" >
                                <img style={{ height: "50px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                                <div>
                                    <h2 className="mt-1 ml-3 ff1">Barista</h2>
                                    <p className="ml-3"><b>End Date: 09July, 2020</b></p>
                                </div>
                                <div className="ml-auto m-2 mt-4 row ">
                                <h4 className="viewapplication pt-2 pl-3 pr-3">View Application</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-2">
                          <Advertisement />
                        </div>
                    </div>


                </body>
            </div>
        );
    }
}

export default jobapplication2;