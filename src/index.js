import m from "mithril"
import store from './store'

import FilterButtons from './components/FilterButtons'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

const root = document.body

m.mount(root, {
  view() {
    return m("div.container", [
      m(AddTodo, { store }),
      m(TodoList, { store}),
      m(FilterButtons, { store })
    ])
  }
})

store.subscribe(() => m.redraw())
