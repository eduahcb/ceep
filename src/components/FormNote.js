import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      text: '',
    }
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleChangeText = (e) => {
    this.setState({ text: e.target.value })
  }

  handleCreateNote = (e) => {
    e.preventDefault()

    if (this.state.title === '' || this.state.text === '') return
    const createNote = this.props.createNote

    createNote(this.state.title, this.state.text)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      title: '',
      text: '',
    })
  }

  render() {
    return (
      <form className="form">
        <input
          className="form-input"
          type="text"
          placeholder="Título"
          value={this.state.title}
          onChange={this.handleChangeTitle}
        />
        <textarea
          rows="5"
          className="form-note"
          placeholder="Escreva a sua nota..."
          value={this.state.text}
          onChange={this.handleChangeText}
        />
        <div className="button-group">
          <button className="form-button" onClick={this.handleCreateNote}>
            Criar Nota
          </button>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  createNote: PropTypes.func,
}

export default Form
