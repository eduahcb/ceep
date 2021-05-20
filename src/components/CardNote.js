import React, { Component } from 'react'
import PropType from 'prop-types'
import deleteIcon from '../assets/delete.svg'
class CardNote extends Component {
  handleDeleteNote = () => {
    const { index, deleteNote } = this.props

    deleteNote(index)
  }

  render() {
    const { title, text, category } = this.props
    console.log(title)

    return (
      <section className="card-note">
        <img
          onClick={this.handleDeleteNote}
          className="delete-icon"
          src={deleteIcon}
        />
        <header>
          {category !== 'Sem Categoria' && (
            <h4 className="category-text">{category}</h4>
          )}
          <h3 className="card-title">{title}</h3>
        </header>
        <p className="card-text">{text}</p>
      </section>
    )
  }
}

CardNote.propTypes = {
  title: PropType.string,
  text: PropType.string,
  deleteNote: PropType.func,
  index: PropType.number,
  category: PropType.string,
}

export default CardNote
