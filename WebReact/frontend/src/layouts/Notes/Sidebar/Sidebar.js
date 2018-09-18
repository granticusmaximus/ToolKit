import React from 'react';

import './Sidebar.css';

const Sidebar = ({notes, handleClick}) => {
  const renderNotes = Object.keys(notes)
                            .map(key => {
                              return (
                                <li key={key}>
                                  <button className="sidebar__btn"
                                          onClick={handleClick}
                                          id={key}>
                                    {notes[key].title}
                                  </button>
                                </li>
                              );
                            });

  return (
    <aside className="sidebar">
      <h2>Notes</h2>
      <ul className="sidebar__list">
        {renderNotes}
      </ul>
    </aside>
  );
};

export default Sidebar;
