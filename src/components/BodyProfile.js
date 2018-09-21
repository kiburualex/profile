import React, { Component }  from 'react';

class BodyProfile extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <div className="profile">
                            <div className="avatar">
                                <img src="assets/img/faces/christian.jpg" alt="Circle" className="img-circle img-responsive img-raised" />
                            </div>
                            <div className="name" id="bio">
                                <h3 className="title">Alex Kiburu</h3>
                                <h6>Software Engineer</h6>
                                <a href="#pablo" className="btn btn-just-icon btn-simple btn-dribbble"><i className="fa fa-dribbble"></i></a>
                                <a href="#pablo" className="btn btn-just-icon btn-simple btn-twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#pablo" className="btn btn-just-icon btn-simple btn-pinterest"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="description text-center">
                    <p>
                        Hi, I'm a responsible and pro-active Software Engineer who accepts challenges with pleasure. 
                        Able to work in a team, and can handle multiple assignments while still maintaining 
                        efficiency.
                    </p>
                </div>
            </div>
        );
    }
}

export default BodyProfile;
