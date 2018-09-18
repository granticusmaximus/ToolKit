import React, { Component } from "react";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  edit() {
    this.setState({
      editing: true
    });
  }

  remove() {
    this.props.onRemove(this.props.index);
  }

  save(e) {
    e.preventDefault();
    this.props.onChange(this.newText.value, this.props.index);
    this.setState({
      editing: false
    });
  }

  renderForm() {
    return (
      <div className="note">
        <form onSubmit={this.save}>
          <textarea ref={input => (this.newText = input)} />
          <button id="save">Save</button>
        </form>
      </div>
    );
  }

  renderDisplay() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} id="edit">
            Edit
          </button>
          <button onClick={this.remove} id="remove">
            Remove
          </button>
        </span>
      </div>
    );
  }
  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}
