import React, { Component } from 'react';
import '../Layouts/Style.css';
import JobseekerNavigationmenu from '../Layouts/JobseekerNavigationmenu';
import Advertisement from '../Layouts/Advertisement';
import Jobseekerheader from '../Layouts/Jobseekerheader';


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
        this.showhideContent = this.showhideContent.bind(this);
    }
    showhideContent() {
        this.setState((state) => (
            { isShow: !state.isShow }
        ))
    }
    render() {
        return (
            <div>
            
                <body className="container-fluid background-gradient">
                <Jobseekerheader />
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-lg-2" >
                                <img style={{ height: "150px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded" />
                                <JobseekerNavigationmenu />
                            </div>

                            <br></br>
                            <div className="col-lg-7 mt-2" >
                                <div className="form-group">
                                    <div className="card ff1 createpost" >
                                        <h2 className="ml-2">Create a post</h2>
                                    </div>
                                    <div className="btninsidetextarea">
                                        <textarea className="form-control" rows="1" style={{ height: "120px" }}></textarea>
                                        <button className="btn btn-lg photovideobtn" data-toggle="modal" data-target="#exampleModal"><img style={{ height: "15px" }} src={window.location.origin + '/assets/icons/gallery.jpg'} alt="foto/video" />&nbsp;Photo/video</button>
                                        <button className="btn btn-lg checkinbtn"><img style={{ height: "15px" }} alt="checkin" src={window.location.origin + '/assets/icons/location.png'} />&nbsp;Check-in</button>
                                        <button className="btn btn-lg postbtn">Post</button>
                                    </div>
                                </div>
                                

                                <div className="card status-text" >
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="container">
                                                <div className="row">
                                                    <img style={{ height: "50px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded ml-4" />
                                                    <div><h2 className="pl-3">Peter</h2>
                                                        <h5 className="pl-3">May 31 at 7:27am</h5>
                                                    </div>
                                                    <div className="ml-auto mr-5">
                                                        <h1 style={{ color: "white" }}><b>...</b></h1>
                                                    </div>
                                                </div>
                                                <h4 className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip.</h4>
                                                <div className="row pl-3 pt-2">
                                                    <button className="btn btn-light btn-lg  m-2 p-2 ff1"><strong>Awesome</strong></button>
                                                    <button className="btn btn-light btn-lg  m-2 ff1"><strong>Comment</strong></button>
                                                    <button className="btn btn-light btn-lg  m-2 ff1"><strong>Message</strong></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card status-image">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="container">
                                                <div className="row">

                                                    <img style={{ height: "50px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded ml-4" />
                                                    <div><h2 className="pl-3">Peter</h2>
                                                        <h5 className="pl-3">May 09 at 6:52pm</h5>
                                                    </div>
                                                    <div className="ml-auto mr-5">
                                                        <h1 style={{ color: "white" }}><b>...</b></h1>
                                                    </div>
                                                </div>
                                                <h4 className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip.</h4>
                                                <div className="item">
                                                    <img src="https://www.canon.co.nz/-/media/images/learning/how-to-print-professional-photos-at-home/image-1-kirkr-twelveapostlesvictoria-1000.ashx?la=en-nz" className="postedimage" alt="Chicago" />
                                                </div>
                                                <div className="row pl-3 pt-2">
                                                    <button className="btn btn-light btn-lg  m-2 p-2 ff1"><strong>Awesome</strong></button>
                                                    <button className="btn btn-light btn-lg  m-2 ff1"><strong>Comment</strong></button>
                                                    <button className="btn btn-light btn-lg  m-2 ff1"><strong>Message</strong></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card status-video" >
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="container">
                                                <div className="row">
                                                    <img style={{ height: "50px" }} src={window.location.origin + '/assets/profilepicture.png'} alt="..." className="rounded ml-4" />
                                                    <div><h2 className="pl-3">Peter</h2>
                                                        <h5 className="pl-3">April 20 at 9:27am</h5>
                                                    </div>
                                                    <div className="ml-auto mr-5">
                                                        <h1 style={{ color: "white" }}><b>...</b></h1>
                                                    </div>
                                                </div>
                                                <h4 className="mt-3">Lorem ipsum dolor sit amet</h4>
                                                <div className="item mt-3">
                                                    <iframe title="myFrame" src="https://www.youtube.com/embed/CDT3QOU9EEU?list=PLg6d-SaMu3JEuvHYGRmEEWDvJHNBfvzBz" className="postedvideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                                <div className="row pl-3 pt-2">
                                                    <button className="btn btn-light btn-lg  m-2 p-2 ff1"><strong>Awesome</strong></button>
                                                    <button className="btn btn-light btn-lg  m-2 ff1"><strong>Comment</strong></button>
                                                    <button className="btn btn-light btn-lg  m-2 ff1"><strong>Message</strong></button>
                                                </div>
                                            </div>
                                        </div>
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
                            <div className="col-lg-3">
                            <Advertisement />
                            </div>
                        </div>
                    </div>

                    
                </body>
            </div>
        );
    }
}

export default Feed;