class NoteList {
  constructor() {
    this._notes = []
    this._subscribers = []
  }

  getNotes() {
    return this._notes
  }

  addNote(title, text, category) {
    const newNote = new Note(title, text, category)
    this._notes.push(newNote)
    this.notify()
  }

  deleteNote(index) {
    this._notes.splice(index, 1)
    this.notify()
  }

  subscribe(func) {
    this._subscribers.push(func)
  }

  unsubscribe(func) {
    this._subscribers = this._subscribers.filter((f) => f !== func)
  }

  notify() {
    this._subscribers.forEach((func) => func(this._categories))
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title
    this.text = text
    this.category = category
  }
}

export default NoteList
