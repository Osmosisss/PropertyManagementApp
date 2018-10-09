import React, { Component } from 'react';
import EditNewsletter from './newsletter_edit';
import { Link } from 'react-router-dom'

class NewsletterContent extends Component {

    renderItem() {
        if (this.props.latestItem) {
            return (
                <div>
                    <div>
                        <img src={this.props.latestItem.imageUrl} />
                        <h2>{this.props.latestItem.title}</h2>
                        <Link to={`/newsletter/edit/${this.props.latestItem._id}`}>
                            <div>Edit</div>
                        </Link>
                    </div>
                    <p>
                        {this.props.latestItem.body}
                    </p>
                </div >
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderItem()}
            </div>
        );
    }
}

export default NewsletterContent;
