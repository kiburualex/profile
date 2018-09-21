import React, { Component }  from 'react';
import BodyContentSkills from './BodyContentSkills';
import BodyContentPortfolio from "./BodyContentPortfolio";

class BodyContent extends Component {
    render() {
        return (
            <div className="row">
                <BodyContentSkills />
                <BodyContentPortfolio />
            </div>
        );
    }
}

export default BodyContent;
