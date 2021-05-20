import React, { Component } from 'react'
import PropType from 'prop-types'
import CardNote from './CardNote'

class ListNote extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }

  componentDidMount = () => {
    const { notes } = this.props
    notes.subscribe(this.newNotes.bind(this))
  }

  newNotes = (notes) => {
    this.setState({ notes: notes })
  }

  render() {
    const { notes, deleteNote } = this.props

    return (
      <ul className="list">
        {notes.getNotes().map((note, index) => (
          <li className="list-item" key={index}>
            <CardNote
              index={index}
              title={note.title}
              text={note.text}
              category={note.category}
              deleteNote={deleteNote}
            />
          </li>
        ))}
      </ul>
    )
  }
}

ListNote.propTypes = {
  notes: PropType.object,
  deleteNote: PropType.func,
}

export default ListNote
