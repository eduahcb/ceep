import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListCategories extends Component {
  constructor() {
    super()
    this.state = {
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
    this.setState({
      categories: categories,
    })
  }

  handleCreateCategory = (e) => {
    const categoryName = e.target.value
    if (e.key !== 'Enter' || categoryName === '') return

    const { createCategory } = this.props
    createCategory(categoryName)
    this.clearCategoryInput(e)
  }

  clearCategoryInput = (e) => {
    e.target.value = ''
  }

  render() {
    const { categories } = this.props

    return (
      <section className="categories-container">
        <ul className="categories-list">
          {categories.getCategories().map((category, index) => (
            <li key={index} className="categories-item">
              {category.category}
            </li>
          ))}
        </ul>
        <input
          className="category-input"
          type="text"
          placeholder="Adicionar categoria"
          onKeyUp={this.handleCreateCategory}
        />
      </section>
    )
  }
}

ListCategories.propTypes = {
  categories: PropTypes.object,
  createCategory: PropTypes.func,
}

export default ListCategories
