// eslint-disable-next-line
import React ,{Component} from 'react';
import { Modal, Carousel } from 'react-bootstrap';


class BodyContentPortfolio extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            show: false,
            projects: [
                {
                    id: 1,
                    name: "Restaurant Management System",
                    caption: `An awesome Management system that manages Orders, Sales and Others`,
                    captionImage: "assets/img/examples/color1.jpg",
                    category: "software",
                    description: `This is a system made using python django, django rest framework,
                                reactjs and javafx. 
                                It's a microservice made of javafx desktop client application and 
                                a backend server.`,
                    images: [
                        "assets/img/bg2.jpg",
                        "assets/img/bg3.jpg",
                        "assets/img/bg.jpg"
                    ]
                },
                {
                    id: 2,
                    name: "StackOverFlow Lite",
                    caption: `An awesome Management system that manages Orders, Sales and Others`,
                    captionImage: "assets/img/examples/color2.jpg",
                    category: "software",
                    description: `This is a mock of the stack overflow lite. It is made using
                                Flask and Flask Rest-plus for api documentation. Link hosted 
                                heroku.`,
                    images: [
                        "assets/img/bg.jpg"
                    ]
                }
            ],
            selectedProject: {
                id: 0,
                name: "",
                description: ``,
                images: []
            }
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    }
    
    handleShow = (event) => {
        let projectIndex = event.target.getAttribute("data-projectindex");
        // Remember put a check to see if the projects data exists.
        let selectedProject = this.state.projects[parseInt(projectIndex,10)];

        this.setState({ show: true, selectedProject });
    }

    render() {
        return (
            <div className="col-md-7 col-md-offset-1" id="profile">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile-tabs" style={{"marginTop":"10px !important"}}>
                            <div className="nav-align-center">
                                <ul className="nav nav-pills nav-pills-icons" role="tablist">
                                    <li className="active">
                                        <a href="#softwares" role="tab" data-toggle="tab">
                                            <i className="material-icons">palette</i>
                                            Softwares
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#others" role="tab" data-toggle="tab">
                                            <i className="material-icons">people</i>
                                            Others
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="tab-content">
                            <div className="tab-pane active work" id="softwares">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="title">Softwares</h4>
                                        <div className="row collectionss">

                                            <div className="col-md-6">
                                                <div className="card card-blog">
                                                    <div className="card-image">
                                                        <a href="#pablo">
                                                            <img src="assets/img/examples/color1.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h6 className="category text-warning">Dynamic Shadows</h6>
                                                        <h4 className="card-title">
                                                            <a href="#pablo">The image from this card is getting a yellow shadow</a>
                                                        </h4>
                                                        <button className="btn btn-raised btn-round btn-default btn-block" 
                                                            data-projectindex="0"
                                                            onClick={this.handleShow}>
                                                            View
                                                        </button>
                                                    </div>
                    
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="card card-blog">
                                                    <div className="card-image">
                                                        <a href="#pablo">
                                                            <img src="assets/img/examples/color2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h6 className="category text-rose">Dynamic Shadows</h6>
                                                        <h4 className="card-title">
                                                            <a href="#pablo">The image from this card is getting a yellow shadow</a>
                                                        </h4>
                                                        <button className="btn btn-raised btn-round btn-default btn-block" 
                                                            data-projectindex="1"
                                                            onClick={this.handleShow}>
                                                            View
                                                        </button>
                                                    </div>
                    
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="card card-background" style={{"backgroundImage": "url('assets/img/examples/chris4.jpg')"}}>
                                                    <a href="#pablo"> </a>
                                                    <div className="card-content">
                                                        <label className="label label-primary">Summer 2016</label>
                                                        <a href="#pablo">
                                                            <h2 className="card-title">Stilleto 01</h2>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="card card-background" style={{"backgroundImage": "url('assets/img/examples/chris6.jpg')"}}>
                                                    <a href="#pablo"> </a>
                                                    <div className="card-content">
                                                        <label className="label label-primary">Summer 2016</label>
                                                        <a href="#pablo">
                                                            <h2 className="card-title">Low Heels</h2>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane connections" id="others">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="title">Other Projects</h4>
                                        <div className="row collections">
                                            <div className="col-md-6">
                                                <div className="card card-background" style={{"backgroundImage": "url('assets/img/examples/chris4.jpg')"}}>
                                                    <a href="#pablo"> </a>
                                                    <div className="card-content">
                                                        <label className="label label-primary">Spring 2016</label>
                                                        <a href="#pablo">
                                                            <h2 className="card-title">Stilleto</h2>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card card-background" style={{"backgroundImage": "url('assets/img/examples/chris6.jpg')"}}>
                                                    <a href="#pablo"> </a>
                                                    <div className="card-content">
                                                        <label className="label label-primary">Spring 2016</label>
                                                        <a href="#pablo">
                                                            <h2 className="card-title">High Heels</h2>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> {this.state.selectedProject.name} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="instruction">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-raised card-carousel">
                                        <Carousel>
                                        {
                                            this.state.selectedProject.images.map((index, im) => {
                                                return (
                                                    <Carousel.Item key={index}>
                                                        <img width={900} height={500} alt="900x500" src={this.state.selectedProject.images[im]} />
                                                    </Carousel.Item>
                                                );
                                            })
                                        }
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <strong>Description</strong>
                                    <p> {this.state.selectedProject.description} </p>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="row">
                            <div className="col-md-12">
                            <button className="btn btn-raised btn-round btn-info btn-block modalbtn-width_override" style={{"width":"100% !important"}}
                                onClick={this.handleClose}>Close</button>
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default BodyContentPortfolio;
