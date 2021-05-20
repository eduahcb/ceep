import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      text: '',
      category: 'Sem Categoria',
      categories: [],
    }
  }

  componentDidMount = () => {
    const { categories } = this.props
    categories.subscribe(this.newCategories)
  }

  componentWillUnmount = () => {
    const { categories } = this.props
    categories.unsubscribe(this.newCategories)
  }

  newCategories = (categories) => {
    this.setState({ ...this.state, categories })
  }

  handleChangeCategory = (e) => {
    this.setState({ category: e.target.value })
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

    createNote(this.state.title, this.state.text, this.state.category)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      title: '',
      text: '',
    })
  }

  render() {
    const { categories } = this.props
    return (
      <form className="form">
        <select className="categories" onChange={this.handleChangeCategory}>
          <option defaultValue={this.state.category}>
            Selecione uma categoria
          </option>
          {categories.getCategories().map((category) => (
            <option value={category.category} key={category.category}>
              {category.category}
            </option>
          ))}
        </select>
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
  categories: PropTypes.object,
}

export default Form
