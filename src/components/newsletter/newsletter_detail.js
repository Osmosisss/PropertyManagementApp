import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions';

class NewsletterDetail extends Component {

    componentDidMount() {
        // this.props.fetchItemById()
    }
    render() {
        return (
            <div>
                newsletter details
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fetchedItem: state.fetchedItem
    }
}

export default connect(mapStateToProps, actions)(NewsletterDetail);
