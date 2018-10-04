import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./PostCss.css"

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const personAssigned = this.getPerson.value;
        const dueDate = this.getDueDate.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            personAssigned,
            dueDate,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Project Details</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter Project Title" /><br /><br />
                    <input required type="text" ref={(input) => this.getPerson = input}
                        placeholder="Person Assigned to Project" /><br /><br />
                    <input required type="date" ref={(input) => this.getDueDate = input}
                        placeholder="Due Date" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                        cols="28" placeholder="Enter Project Details" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);