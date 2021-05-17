import React, { Component } from 'react'
import PropType from 'prop-types'

class CardNote extends Component {
  render() {
    const { title, text } = this.props

    return (
      <section className="card-note">
        <header>
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
}

export default CardNote
