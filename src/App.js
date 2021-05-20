import React, { Component } from 'react'
import FormNote from './components/FormNote'
import ListCategories from './components/ListCategories'
import ListNote from './components/ListNote'
import './components/style.css'

import { CategoryList, NoteList } from './models'
class App extends Component {
  constructor() {
    super()
    this.notes = new NoteList()
    this.categories = new CategoryList()
  }

  render() {
    return (
      <section className="content">
        <FormNote
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className="main-content">
          <ListCategories
            categories={this.categories}
            createCategory={this.categories.addCategory.bind(this.categories)}
          />
          <ListNote
            notes={this.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>
      </section>
    )
  }
}

export default App
