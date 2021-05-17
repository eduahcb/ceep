import React, { Component } from 'react'
import PropType from 'prop-types'
import CardNote from './CardNote'

class ListNote extends Component {
  render() {
    const notes = this.props.notes

    return (
      <ul className="list">
        {notes.map((note, index) => (
          <li className="list-item" key={index}>
            <CardNote title={note.title} text={note.text} />
          </li>
        ))}
      </ul>
    )
  }
}

ListNote.propTypes = {
  notes: PropType.array,
}

export default ListNote
