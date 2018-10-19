import React, { Component } from 'react';
import InfoBox from '../infoBox';
import * as actions from '../../actions';
import { connect } from 'react-redux'
import SupportRequestContent from './supportRequest_content';

import { Link } from 'react-router-dom';

class SupportRequest extends Component {

    componentDidMount() {
        this.props.fetchSupportRequests()
    }

    render() {
        return (
            <div>
                support request component
                <div>
                    <Link to='/support-request/add'>
                        <div>add</div>
                    </Link>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <InfoBox type="pending" />
                        <InfoBox type="in-progress" />
                        <InfoBox type="complete" />
                    </div>
                    <div className="col-md-9">
                        <SupportRequestContent />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state: state.SupportRequest }
}

export default connect(mapStateToProps, actions)(SupportRequest);
