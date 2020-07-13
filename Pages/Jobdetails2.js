import React, { Component } from 'react';
import '../Layouts/Style.css';
import JobseekerNavigationmenu from '../Layouts/JobseekerNavigationmenu';
import Advertisement from '../Layouts/Advertisement';
import Jobseekerheader from '../Layouts/Jobseekerheader';
import { NavLink } from 'react-router-dom';

class jobdetails2 extends Component {
    render() {
        return (
            <div>
                <body className="container-fluid background-gradient">
                <Jobseekerheader />
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-lg-2" >
                                <div className="name">
                                    <img style={{ height: "150px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                                </div>
                                <JobseekerNavigationmenu />
                            </div>
                            <br></br>
                            <div className="col-lg-7 mt-2" >
                                <div className="row p-3 m-1">
                                    <h5 style={{ color: "white" }} className="mt-3">Want to clarify if you're ready? </h5>
                                    <button type="button" className="button round1 ml-auto">Start Quiz</button>
                                </div>

                                <div className="row m-1 mt-2 p-2" style={{ backgroundColor: "white" }}>
                                    <div className="row">
                                        <img style={{ height: "50px" }} src={window.location.origin + '/assets/icons/connexworld.png'} alt="..." className="rounded ml-4" />
                                        <div><h3 className="pl-3">FULLSTACK DEVELOPER</h3>
                                            <h5 className="pl-3">End Date: 09 July 2020</h5>
                                        </div>
                                    </div>
                                    <button type="button" className="applybutton ml-auto round1">APPLY</button>
                                </div>

                                <div className="row mt-2 ml-1 mr-1 p-3" style={{ backgroundColor: "#008477" }}>
                                    <h5 style={{ color: "white" }}>WHERE WILL YOU WORK</h5>
                                </div>
                                <div className="row ml-1 mr-1 mb-1" style={{ backgroundColor: "white" }}>
                                    <h5 className="pl-3 pt-2 fsize2">YOUR PLACE OF WORK</h5>
                                    <h6 className="pl-3 pr-5 fsize1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et mdjd dolore
                                   consectetur adipisicing elit, sed do eiusm</h6>

                                    <h5 className="pl-3 pt-2 fsize2">THE WORK RESOURCES YOU HAVE ARE...</h5>
                                    <h6 className="pl-3 pr-5 fsize1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore
                                   consectetur adipisicing elit, sed do eiusm</h6>
                                </div>

                                <div className="row mt-2 ml-1 mr-1 p-3" style={{ backgroundColor: "#008477" }}>
                                    <h5 style={{ color: "white" }}>WHAT WE OFFER YOU</h5>
                                </div>
                                <div className="row ml-1 mr-1 mb-1" style={{ backgroundColor: "white" }}>
                                    <h5 className="pl-3 pt-2 fsize2">FINANCIAL AND EQUIPMENT RELATED</h5>
                                    <h6 className="pl-3 pr-5 fsize1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore
                                   consectetur adipisicing elit, sed do eiusm</h6>

                                    <h5 className="pl-3 pt-2 fsize2">PERSONAL DEVELOPMENT</h5>
                                    <h6 className="pl-3 pr-5 fsize1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore
                                   consectetur adipisicing elit, sed do eiusm</h6>

                                   <h5 className="pl-3 pt-2 fsize2">MEMBERSHIP</h5>
                                    <h6 className="pl-3 pr-5 fsize1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore
                                   consectetur adipisicing elit, sed do eiusm</h6>

                                   <h5 className="pl-3 pt-2 fsize2">SOCIAL AND VALUES BASED</h5>
                                    <h6 className="pl-3 pr-5 fsize1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore
                                   consectetur adipisicing elit, sed do eiusm</h6>

                                   <h5 className="pl-3 pt-2 fsize2">HOW WE SHOULD TREAT YOU</h5>
                                    <h6 className="pl-3 pr-5 fsize1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore
                                   consectetur adipisicing elit, sed do eiusm</h6>
                                </div>

                                <iframe width="633" height="300" alt="v" title="video" src="https://www.youtube.com/embed/eX30DnwLCKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <NavLink to="/applypage1" ><button class="applybutton1">APPLY FOR THIS JOB</button></NavLink>
                            </div>

                            <div className="col-lg-3">
                                <Advertisement />
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title btn-lg" id="exampleModalLabel" style={{ fontsize: "18px" }}>Select Photo/video</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <input type="file" className="btn-lg" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary btn-lg" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-lg postbtninmodel">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        );
    }


}

export default jobdetails2;