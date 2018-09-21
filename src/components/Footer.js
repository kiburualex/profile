import React, { Component }  from 'react';

class Footer extends Component {
    dateYear = () => {
        return (new Date().getFullYear());
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="copyright pull-right">
                            &copy; {this.dateYear()}, made with <i className="fa fa-heart heart"></i> by Alex Kiburu
                        </div>
                    </div>
                </footer>
	        </div>
        );
    }
}

export default Footer;
