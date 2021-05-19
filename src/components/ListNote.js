import React, { Component } from 'react'
import PropType from 'prop-types'
import CardNote from './CardNote'

class ListNote extends Component {
  render() {
    const { notes, deleteNote } = this.props

    return (
      <ul className="list">
        {notes.map((note, index) => (
          <li className="list-item" key={index}>
            <CardNote
              index={index}
              title={note.title}
              text={note.text}
              deleteNote={deleteNote}
            />
          </li>
        ))}
      </ul>
    )
  }
}

ListNote.propTypes = {
  notes: PropType.array,
  deleteNote: PropType.func,
}

export default ListNote
