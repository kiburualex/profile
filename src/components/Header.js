import React, { Component }  from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-primary navbar-transparent navbar-fixed-top navbar-color-on-scroll">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Alex Kiburu</a>
                        </div>

                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                            <li>
                            <a href="#bio">
                            <i className="material-icons">apps</i> Bio
                            </a>
                        </li>

                        <li>
                            <a href="#profile" className="btn btn-white btn-simple">
                            <i className="material-icons">shopping_cart</i> Profile
                            </a>
                        </li>
                            </ul>
                        </div>
                    </div>
                </nav>
	            <div className="page-header header-filter" data-parallax="true" style={{"backgroundImage": "url('assets/img/examples/city.jpg')"}}></div>
            </div>
        );
    }
}

export default Header;
