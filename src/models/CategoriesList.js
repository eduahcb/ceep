class CategoryList {
  constructor() {
    this._categories = []
    this._subscribers = []
  }

  getCategories() {
    return this._categories
  }

  addCategory(name) {
    const newCategory = new Category(name)
    this._categories.push(newCategory)
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

class Category {
  constructor(name) {
    this.category = name
  }
}

export default CategoryList
