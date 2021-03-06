import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import '../Layouts/Style.css';
import Jobseekernavigationmenu1 from '../Layouts/Jobseekernavigationmenu1';
import Jobseekerheader from '../Layouts/Jobseekerheader';



class Videos extends Component {
    render() {
        return (
            <div>
                <body className="container-fluid background-gradient">
                    <Jobseekerheader />
                    {/* <div className="container-fluid"> */}
                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAU6IWZISW_3o6z0RuFPC78PftISsTwrAnm7JZwwLdvi3m_WzX&usqp=CAU" className="banner" alt="Chicago" />
                    </div>
                    {/* </div> */}


                    <div className="row">
                        <div className="container">
                            <div className="col-lg-2 name">
                                <img style={{ height: "150px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                            </div>

                            <div className="col-lg-4 mt-3 candidate-name">
                                <h1><b>Pete Clarke (Peter)</b></h1>
                                <h4>Canterbury, New Zealand</h4>
                            </div>

                            <div className="col-lg-6" >
                                <div className="row mt-5 btn" >
                                    <button className="btn btn-light btn-lg ml-3"><strong>+Follow</strong></button>
                                    <button className="btn btn-light btn-lg"><strong>Contact</strong></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br></br>

                    <div className="container">
                        <div className="row">
                        <div className="col-lg-3">
                            <Jobseekernavigationmenu1 />
                            </div>

                            <div className="col-lg-6" >
                                <div className="card posts">
                                    <div className="card-body" >
                                        <h3>Videos </h3>
                                    </div>
                                </div>
                      
                                <div className="card status-video">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="">
                                                <div className="row">
                                                    <div><h4 className="pl-4">INTRODUCTION</h4>
                                                    </div>
                                                </div>
                                                <div className="item mt-3">
                                                    <iframe title="myFrame" src="https://www.youtube.com/embed/CDT3QOU9EEU?list=PLg6d-SaMu3JEuvHYGRmEEWDvJHNBfvzBz" className="postedvideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card status-video" >
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="">
                                                <div className="row">
                                                    <div><h4 className="pl-4">MY SKILLS ON SHOW</h4>
                                                    </div>
                                                </div>
                                                <div className="item mt-3">
                                                    <iframe title="myFrame" src="https://www.youtube.com/embed/CDT3QOU9EEU?list=PLg6d-SaMu3JEuvHYGRmEEWDvJHNBfvzBz" className="postedvideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card status-video" >
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="">
                                                <div className="row">
                                                    <div><h4 className="pl-4">WHO SUPPORT ME</h4>
                                                    </div>
                                                </div>
                                                <div className="item mt-3">
                                                    <iframe title="myFrame" src="https://www.youtube.com/embed/CDT3QOU9EEU?list=PLg6d-SaMu3JEuvHYGRmEEWDvJHNBfvzBz" className="postedvideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>

                

                            </div>
                            <div className="col-lg-3">
                                <div>
                                    <img style={{ width: "100%" }} src="https://i.pinimg.com/originals/97/97/c8/9797c8db2a0d85206922b2ccbf66712c.jpg" alt="..." className="rounded" />
                                </div><br></br>
                                <div>
                                    <img style={{ width: "100%" }} src="https://d3fa68hw0m2vcc.cloudfront.net/751/143163936.jpeg" alt="..." className="rounded" />
                                </div>
                            </div>

                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

export default Videos;
