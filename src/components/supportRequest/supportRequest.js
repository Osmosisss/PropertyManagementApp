import React, { Component } from 'react';
import InfoBox from '../infoBox';

import { connect } from 'react-redux'

class SupportRequest extends Component {
    render() {
        return (
            <div>
                support request component
                <div>
                    <div>Add request</div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <InfoBox type="pending" />
                        <InfoBox type="in-progress" />
                        <InfoBox type="complete" />
                    </div>
                    <div className="col-md-9">
                        support request content component - contains UL
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state: state.SupportRequest }
}

export default connect()(SupportRequest);
