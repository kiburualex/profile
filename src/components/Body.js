import React, { Component }  from 'react';
import BodyProfile from './BodyProfile';
import BodyContent from './BodyContent';

class Body extends Component {
    render() {
        return (
            <div className="main main-raised">
                <div className="profile-content">
                    <div className="container" style={{"paddingBottom": "50px"}}>
                        <BodyProfile />
                        <BodyContent />
	                </div>
                </div>
            </div>
        );
    }
}

export default Body;
