import React, { Component } from 'react';
import '../Layouts/Style.css';
import JobseekerNavigationmenu from '../Layouts/JobseekerNavigationmenu';
import Advertisement from '../Layouts/Advertisement';
import Jobseekerheader from '../Layouts/Jobseekerheader';
import { NavLink } from 'react-router-dom';

class jobdetails extends Component {
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
                                <div className="row p-3 m-1" style={{ backgroundColor: "white" }} >
                                    <h5 className="text-center ml-2" style={{ color: "#008477" }}>Job Search</h5>
                                </div>

                                <div className=" m-1 mt-2 p-2" style={{ backgroundColor: "white" }}>
                                    <div className="row">
                                        <img style={{ height: "50px" }} src={window.location.origin + '/assets/icons/connexworld.png'} alt="..." className="rounded ml-4" />
                                        <div><h3 className="pl-3">HEAD CHEF</h3>
                                            <h5 className="pl-3">End Date: 09 July 2020</h5> 
                                        </div>
                                    </div>  
                                    <div className="row">
                                        <h3 className="ml-5 mt-3">Location: </h3><h5 className="ml-1 mt-4">Christchurch, New Zealand</h5>
                                    </div>

                                    <div>
                                        <h5 className="ml-4 mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad minim veniam, quis nostrud.<br></br><br></br>

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                        qui officia deserunt mollit anim id est laborum. Donec<br></br><br></br>

                                        Lorem ipsum dolor<br></br>
                                        Sit amet, consectetur<br></br>
                                        Adipisicing elit, sed<br></br>
                                        Do eiusmod tempor<br></br>
                                        ncididunt ut labore<br></br>
                                        Et dolore magna<br></br>
                                        Aliqua. Ut enim<br></br>
                                        Ad minim veniam,<br></br><br></br>

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad
                                        </h5>
                                    </div>
                                </div>
                                <NavLink exact to="/jobdetails2" ><div className="row p-3 m-1" style={{ backgroundColor: "#009a87" }} >
                                    <h5 className="m-auto" style={{ color: "white" }}>APPLY FOR THIS JOB</h5>
                                </div></NavLink>
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

export default jobdetails;