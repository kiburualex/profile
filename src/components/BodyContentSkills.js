import React, { Component }  from 'react';

class BodyContentSkills extends Component {
    render() {
        return (
            <div className="col-md-2 col-md-offset-1 stats" style={{"marginTop":"20px !important"}}>
                <h4 className="title">Technical Skills</h4>
                <ul className="list-unstyled">
                    <li>
                        <b className="text-primary">Programming</b>
                        <p>Python, Javascript, PHP, Java (fx)</p>
                    </li>
                    <li>
                        <b className="text-info">Database</b>
                        <p>Postgres, Mysql, MongoDb</p>
                    </li>
                    <li>
                        <b className="text-rose">Web Technologies</b>
                        <p>ReactJs, VueJs, Django, NodeJs, Django Rest, HTML5, CSS3</p>
                    </li>
                    <li>
                        <b className="text-warning">Knowledge</b>
                        <p>Docker, Versioning (Github, Bitbucket), Project Management 
                            Tools (Asana, Pivotal Tracker)
                        </p>
                    </li>
                    <li>
                        <b className="text-success">Web Services</b>
                        <p>Rest, GraphQl, Soap</p>
                    </li>
                    <li>
                        <b className="text-danger">Operating Systems</b>
                        <p>Linux, Windows</p>
                    </li>
                </ul>
                <hr />
                <a href="assets/alex_kiburu_cv.pdf" download className="btn btn-rose btn-round">
                    Download CV
                    <div className="ripple-container"></div>
                </a>
            </div>
        );
    }
}

export default BodyContentSkills;
