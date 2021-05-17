import React, { Component } from 'react'
import FormNote from './components/FormNote'
import ListNote from './components/ListNote'
import './components/style.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }

  createNote = (title, text) => {
    const newNote = { title, text }
    const newNotesList = [...this.state.notes, newNote]
    this.setState({
      notes: newNotesList,
    })
  }

  render() {
    return (
      <main className="content">
        <FormNote createNote={this.createNote} />
        <ListNote notes={this.state.notes} />
      </main>
    )
  }
}

export default App
