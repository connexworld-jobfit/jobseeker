import React, { Component } from 'react';
import '../Layouts/Style.css';
import Jobseekerheader from '../Layouts/Jobseekerheader';
import JobseekerNavigationmenu from '../Layouts/JobseekerNavigationmenu';


class Appliedjobs extends Component {
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
                                <h4 className="ml-2" style={{ color: "#72dcd1" }}>APPLIED JOBS</h4>
                            </div>
                            <div className="row pt-3">
                                <h6 className="ml-auto"><b>FILTER BY: <img style={{ height: "10px" }}
                                    src={window.location.origin + '/assets/icons/downarrow.jpg'} alt="." /></b></h6>
                            </div>
                            <div className="row p-3 jobapplication">
                                <img style={{ height: "80px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                                <div>
                                    <h2 className="mt-3 ml-3 ff1">FullStack Developer</h2>
                                    <p className="ml-3"><b>End Date: 09July, 2020</b></p>
                                </div>
                                <h4 className="ml-auto m-2 mt-5 row ff1">STATUS: &nbsp;<p className="active">INTERVIEW</p>
                                </h4>
                            </div>

                            <div className="row p-3 mt-2 jobapplication">
                                <img style={{ height: "80px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                                <div>
                                    <h2 className="mt-3 ml-3 ff1">Frontend Developer</h2>
                                    <p className="ml-3"><b>End Date: 09July, 2020</b></p>
                                </div>
                                <h4 className="ml-auto m-2 mt-5 row ff1">STATUS: &nbsp;<p className="active">VIEWED</p>
                                </h4>
                            </div>

                            <div className="row p-3 mt-2 jobapplication" >
                                <img style={{ height: "80px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                                <div>
                                    <h2 className="mt-3 ml-3 ff1">Barista</h2>
                                    <p className="ml-3"><b>End Date: 09July, 2020</b></p>
                                </div>
                                <h4 className="ml-auto m-2 mt-5 row ff1">STATUS: &nbsp;<p className="inactive" >DECLINED</p>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <img style={{ width: "100%" }}
                                src="https://i.pinimg.com/236x/e0/c4/9e/e0c49e7323d88558f7b7eb19d845b7fe--jobs-for-hire-jobs-in.jpg"
                                alt="..." className="rounded mb-2" /><br></br>
                            <img style={{ width: "100%" }} src="https://i.pinimg.com/originals/97/97/c8/9797c8db2a0d85206922b2ccbf66712c.jpg"
                                alt="..." className="rounded mb-2" /><br></br>
                            <img style={{ width: "100%" }} src="https://d3fa68hw0m2vcc.cloudfront.net/751/143163936.jpeg" alt="..."
                                className="rounded" /><br></br>
                        </div>
                    </div>


                </body>
            </div>
        );
    }
}

export default Appliedjobs;