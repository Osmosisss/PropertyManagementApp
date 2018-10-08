import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NewsletterDetail extends Component {

    componentDidMount() {
        this.props.fetchNewsletterById(this.props.match.params.id)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fetchedItem: state.newsletter.fetchedItem
    }
}

export default connect(mapStateToProps, actions)(NewsletterDetail);
