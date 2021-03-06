import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../../../../components/Posts/PostCss.css"
class Post extends Component {
    render() {
        return (
            <div className="post">
                <h2 className="post_title">{this.props.post.title}</h2>
                <label>Person Assigned:</label>
                <h2 className="post_other">{this.props.post.personAssigned}</h2>
                <label>Due Date:</label>
                <h2 className="post_other">{this.props.post.dueDate}</h2>
                <label>Requirements:</label>
                <p className="post_message">{this.props.post.message}</p>
                <div className="control-buttons">
                    <button className="edit"
                        onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
                        }
                    >Edit</button>
                    <button className="delete"
                        onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
                    >Delete</button>
                </div>
            </div>
        );
    }
}
export default connect()(Post);