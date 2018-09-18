import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Editor from '../Editor/Editor';
import './Notes.css';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateCurrentNote = this.updateCurrentNote.bind(this);
    this.state = {
      currentNote: 'note0',
      notes: {
        note0: {
          id: 0,
          title: '0 A title of a note',
          text: 'Lorem aaeklsdn',
        },
        note1: {
          id: 1,
          title: '1 Another title of a note',
          text: 'More random note text that should be longer than this',
        }
      },
    };
  }

  updateCurrentNote(e) {
    this.setState({
      currentNote: e.target.id
    });
  }

  handleChange(e) {
    const notes = {...this.state.notes};
    const name = e.target.name;
    notes[this.state.currentNote] = {
      ...notes[this.state.currentNote],
      [name]: e.target.value,
    };
    this.setState({notes});
  }

  render() {
    return (
      <main className="app">
        <Sidebar notes={this.state.notes} handleClick={this.updateCurrentNote} />
        <Editor currentNote={this.state.notes[this.state.currentNote]} handleChange={this.handleChange} />
      </main>

    );
  }
}

export default Notes;