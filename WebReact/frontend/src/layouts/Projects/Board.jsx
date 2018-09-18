import React, { Component } from "react";
import Note from "./Notes";
import { Button, Row } from "react-bootstrap";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.eachNote = this.eachNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.nextId = this.nextId.bind(this);
  }

  addNote(text) {
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId,
          note: text
        }
      ]
    }));
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }

  updateNote(newText, i) {
    console.log("update note at index", i, newText);
    alert("updaing note" + newText + i);
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i ? { ...note, note: newText } : note)
      )
    }));
  }

  removeNote(id) {
    alert("Removing note");
    console.log("removing item at " + id);
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  }

  eachNote(note, i) {
    return (
      <Note
        key={i}
        index={i}
        onChange={this.updateNote}
        onRemove={this.removeNote}
      >
        {note.note}
      </Note>
    );
  }
  render() {
    return (
      <div className="board">
        <Row>{this.state.notes.map(this.eachNote)}</Row>
        <div>
          <Button id="add" onClick={this.addNote.bind(null, "New Note")}>
            Add
          </Button>
        </div>
      </div>
    );
  }
}
