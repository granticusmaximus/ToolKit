import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./PostCss.css"

class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newPersonAssigned = this.getPerson.value;
        const newDueDate = this.getDueDate.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage,
            newPersonAssigned,
            newDueDate
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.props.post.title} placeholder="Enter Project Title" /><br /><br />
                    <input required type="text" ref={(input) => this.getPerson = input}
                        defaultValue={this.props.post.title} placeholder="Person Assigned to Project" /><br /><br />
                    <input required type="date" ref={(input) => this.getDueDate = input}
                        defaultValue={this.props.post.title} placeholder="Due Date" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                        defaultValue={this.props.post.message} cols="28" placeholder="Enter Project Details" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);