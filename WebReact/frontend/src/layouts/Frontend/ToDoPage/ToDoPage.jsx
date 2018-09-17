import "../../../assets/css/App.css";
import React, { Component } from "react";
import { FormGroup } from "react-bootstrap";
import { Button, Label, Input } from "reactstrap";
import TodoItems from "../../../components/ToDoItems/ToDoItems";

export class ToDoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div className="container">
        <div className="todoListBox">
          <center>
            <div className="header">Add a ToDo Item</div>
          </center>
          <div className="Login">
            <form onSubmit={this.addItem}>
                <FormGroup controlId="itemTitle" bsSize="large">
                  <Label>Add an Item</Label>
                  <Input
                    ref={a => (this._inputElement = a)}
                    placeholder="Please Enter A Task"
                  />
                </FormGroup>
                <Button color="warning" block bsSize="large" type="submit">
                  Add Item
                </Button>
            </form>
          </div>
        </div>
        <br />

        <hr />

        <br />
        <div className="listBox">
          <div className="header">List of items</div>
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}
