import React, { Component } from 'react';
import '../Layouts/Style.css';
import JobseekerNavigationmenu from '../Layouts/JobseekerNavigationmenu';
import Advertisement from '../Layouts/Advertisement';
import Jobseekerheader from '../Layouts/Jobseekerheader';
import {NavLink} from 'react-router-dom';


class Joblisting extends Component {
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
                                {/* <div className="form-group">
                                    <div className="card ff1 createpost" >
                                        <h2 className="ml-2">Create a post</h2>
                                    </div>
                                    <div className="btninsidetextarea">
                                        <textarea className="form-control" rows="1" style={{ height: "120px" }}></textarea>
                                        <button className="btn btn-lg photovideobtn" data-toggle="modal" data-target="#exampleModal"><img style={{ height: "15px" }} src={window.location.origin + '/assets/icons/gallery.jpg'} alt="foto/video" />&nbsp;Photo/video</button>
                                        <button className="btn btn-lg checkinbtn"><img style={{ height: "15px" }} alt="checkin" src={window.location.origin + '/assets/icons/location.png'} />&nbsp;Check-in</button>
                                        <button className="btn btn-lg postbtn">Post</button>
                                    </div>
                                </div> */}

                                <div className="row p-3 m-1" style={{ backgroundColor: "white" }} >
                                        <h5 className="ml-4" style={{ color: "#008477" }}><b>JOB SEARCH</b></h5>
                                    </div>

                                <div className="row pt-2">
                                    <h6 className="m-auto pl-2"><b>FILTER BY: <img style={{ height: "10px" }}
                                        src={window.location.origin + '/assets/icons/downarrow.jpg'} alt="." /></b></h6>
                                </div>

                                <div className="card status-text mb-2" >
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="container">
                                                <div className="row">
                                                    <img style={{ height: "50px" }} src={window.location.origin + '/assets/icons/connexworld.png'} alt="..." className="rounded ml-4" />
                                                    <div><h3 className="pl-3">FRONTEND DEVELOPER</h3>
                                                        <h5 className="pl-3">End Date: 09 July 2020</h5>
                                                    </div>
                                                    <div className="ml-auto mr-5">
                                                        <h1 style={{ color: "white" }}><b>...</b></h1>
                                                    </div>
                                                </div>
                                                <h4 className="mt-3">
                                                    Location: Christchurch, New Zealand
                                                </h4>
                                                <h4 className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip.</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <NavLink exact activeClassName="active-link" to="/jobdetails" style={{color:"black"}}> <div className="row p-3 m-1" style={{ backgroundColor: "white" }} >
                                        <h5 className="text-center m-auto" style={{ color: "#008477" }}><b>VIEW JOB ADVERTISEMENT</b></h5>
                                    </div></NavLink>
                                </div>

                                <div className="card status-text mb-2" >
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="container">
                                                <div className="row">
                                                    <img style={{ height: "50px" }} src={window.location.origin + '/assets/icons/connexworld.png'} alt="..." className="rounded ml-4" />
                                                    <div><h3 className="pl-3">FULLSTACK DEVELOPER</h3>
                                                        <h5 className="pl-3">End Date: 09 July 2020</h5>
                                                    </div>
                                                    <div className="ml-auto mr-5">
                                                        <h1 style={{ color: "white" }}><b>...</b></h1>
                                                    </div>
                                                </div>
                                                <h4 className="mt-3">
                                                    Location: Wellington,, New Zealand
                                                </h4>
                                                <h4 className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip.</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-3 m-1" style={{ backgroundColor: "white" }} >
                                        <h5 className="text-center m-auto" style={{ color: "#008477" }}><b>VIEW JOB ADVERTISEMENT</b></h5>
                                    </div>
                                </div>

                                <div className="card status-text mb-2" >
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="container">
                                                <div className="row">
                                                    <img style={{ height: "50px" }} src={window.location.origin + '/assets/icons/connexworld.png'} alt="..." className="rounded ml-4" />
                                                    <div><h3 className="pl-3">HEAD CHEF</h3>
                                                        <h5 className="pl-3">End Date: 09 July 2020</h5>
                                                    </div>
                                                    <div className="ml-auto mr-5">
                                                        <h1 style={{ color: "white" }}><b>...</b></h1>
                                                    </div>
                                                </div>
                                                <h4 className="mt-3">
                                                    Location: Auckland, New Zealand
                                                </h4>
                                                <h4 className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip.</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-3 m-1" style={{ backgroundColor: "white" }} >
                                        <h5 className="text-center m-auto" style={{ color: "#008477" }}><b>VIEW JOB ADVERTISEMENT</b></h5>
                                    </div>
                                </div>

                                <div className="card status-text mb-2" >
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="container">
                                                <div className="row">
                                                    <img style={{ height: "50px" }} src={window.location.origin + '/assets/icons/connexworld.png'} alt="..." className="rounded ml-4" />
                                                    <div><h3 className="pl-3">STORE MANAGER</h3>
                                                        <h5 className="pl-3">End Date: 09 July 2020</h5>
                                                    </div>
                                                    <div className="ml-auto mr-5">
                                                        <h1 style={{ color: "white" }}><b>...</b></h1>
                                                    </div>
                                                </div>
                                                <h4 className="mt-3">
                                                    Location: Christchurch, New Zealand
                                                </h4>
                                                <h4 className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip.</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-3 m-1" style={{ backgroundColor: "white" }} >
                                        <h5 className="text-center m-auto" style={{ color: "#008477" }}><b>VIEW JOB ADVERTISEMENT</b></h5>
                                    </div>
                                </div>

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

export default Joblisting;