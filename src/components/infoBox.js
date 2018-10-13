import React, { Component } from 'react';

class InfoBox extends Component {

    handleSelected() {

    }

    render() {
        return (
            <div className="info-box">
                the type of InfoBox this is is {this.props.type}
            </div>
        );
    }
}

export default InfoBox;
