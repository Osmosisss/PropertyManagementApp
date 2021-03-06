import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';

class AddNewsletter extends Component {


    handleFormSubmit({ title, body }) {
        this.props.saveNewNewsletter({ title, body }, () => {
            this.props.history.push('/newsletter');
        })
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="add-newsletter-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="add-newsletter-form__title">
                    <label htmlFor="title">Newsletter Title</label>
                    <Field name="title" component={(field) => <input {...field.input} />} type="text" />
                </div>
                <div className="add-newsletter-form__body">
                    <label htmlFor="body">Body</label>
                    <Field name="body" component={(field) => <textarea {...field.input} />} type="textarea" />
                </div>

                <Link to="/newsletter">
                    <div className="add-newsletter-form__cancel">
                        <p>Cancel</p>
                    </div>
                </Link>

                <button className="add-newsletter-form__submit" action="submit">Submit</button>
            </form>
        )
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
