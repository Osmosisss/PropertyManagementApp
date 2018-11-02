import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';

class AddNewsletter extends Component {

    renderInput(field) {
        return (
            <div>
                <label htmlFor={field.input.name}>{field.input.name}</label>
                <input className="form-control" {...field.input} />
            </div>
        )
    }

    handleFormSubmit({ title, body }) {
        this.props.saveNewNewsletterEdit({ title, body }, () => {
            this.props.history.push('/newsletter')
        })
    }

    render() {

        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="title" component={this.renderInput} type="text" />
                <Field name="body" component={this.renderInput} type="textarea" />

                <Link to="/newsletter"><div>Cancel</div></Link>
                <button action="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}

AddNewsletter = reduxForm(
    {
        form: "addNewsletter"
    }
)(AddNewsletter);

AddNewsletter = addTitle(AddNewsletter, 'New Newsletter');
AddNewsletter = addHeaderBorder(AddNewsletter);

export default connect(null, actions)(AddNewsletter);
