import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListCategories extends Component {
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
          {categories.map((category, index) => (
            <li key={index} className="categories-item">
              {category}
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
  categories: PropTypes.array,
  createCategory: PropTypes.func,
}

export default ListCategories
