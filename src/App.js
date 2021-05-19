import React, { Component } from 'react'
import FormNote from './components/FormNote'
import ListCategories from './components/ListCategories'
import ListNote from './components/ListNote'
import './components/style.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      categories: [],
    }
  }

  createNote = (title, text) => {
    const newNote = { title, text }
    const newNotesList = [...this.state.notes, newNote]
    this.setState({
      notes: newNotesList,
    })
  }

  deleteNote = (index) => {
    const notes = this.state.notes
    notes.splice(index, 1)
    this.setState({
      notes: notes,
    })
  }

  createCategory = (name) => {
    const { categories } = this.state
    const newCategories = [...categories, name]
    this.setState({
      categories: newCategories,
    })
  }

  render() {
    return (
      <section className="content">
        <FormNote createNote={this.createNote} />
        <main className="main-content">
          <ListCategories
            categories={this.state.categories}
            createCategory={this.createCategory}
          />
          <ListNote notes={this.state.notes} deleteNote={this.deleteNote} />
        </main>
      </section>
    )
  }
}

export default App
