import React, { Component } from 'react';
import '../Layouts/Style.css';
import JobseekerNavigationmenu from '../Layouts/JobseekerNavigationmenu';
import Advertisement from '../Layouts/Advertisement';
import Jobseekerheader from '../Layouts/Jobseekerheader';
import { NavLink } from 'react-router-dom';

class Applypage1 extends Component {
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
                                    <h5 className="text-center ml-2" style={{ color: "#008477" }}>Job Application</h5>
                                </div>

                                <div className="m-1" style={{ backgroundColor: "white" }}>
                                    <div className="container">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-3">
                                                <h4 className="mt-2 bg-009a87">Qualification*</h4>
                                                <input type="text" className="form-control form-control-lg" name="qualification" ></input>

                                                <h4 className="mt-3 bg-009a87">Security and Visa related*</h4>
                                                <textarea className="form-control form-control-lg" name="qualification"></textarea>

                                                <h4 className="mt-3 bg-009a87">Competence in...</h4>
                                                <textarea type="text"  className="form-control form-control-lg" name="qualification" ></textarea>

                                                <h4 className="mt-3 bg-009a87">Attitude</h4>
                                                <textarea className="form-control form-control-lg" name="qualification"></textarea>
                                                </div>

                                            <div className="row m-1">
                                                <h4 className="bg-009a87">Upload your CV</h4> 
                                                <span class="btn btn-lg btn-file ml-auto pl-5 pr-5" style={{color:"white"}}>
                                                 Upload CV&nbsp;&nbsp;&nbsp;<input type="file" />
                                                </span>
                                            </div>

                                            <div className="row mt-3 m-1">
                                                <h4 className="bg-009a87">Upload your Cover Letter</h4> <span class="btn btn-lg btn-file ml-auto" style={{color:"white"}}>
                                                Upload Cover Letter <input type="file" />
                                                </span>
                                            </div>

                                            <div className="row mt-3 m-1 mb-3">
                                                <h4 className="bg-009a87">Upload additional documents</h4> <span class="btn btn-lg btn-file ml-auto" style={{color:"white"}}>
                                                Upload Documents&nbsp; <input type="file" />
                                                </span>
                                            </div>

                                            
                                        </div>
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

export default Applypage1;