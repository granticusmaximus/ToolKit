import React from 'react';

import './Editor.css';

const Editor = ({currentNote, handleChange}) => (
  <section className="editor">
    <input className="editor__input editor__input--title"
           type="text"
           name="title"
           onChange={handleChange}
           value={currentNote.title} />
    <textarea className="editor__input editor__input--text"
              name="text"
              value={currentNote.text}
              onChange={handleChange} />
  </section>
);

export default Editor;