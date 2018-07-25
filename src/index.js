import m from "mithril"
import store from './store'

import FilterButtons from './components/FilterButtons'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

const root = document.body

m.mount(root, {
  oninit({ state, attrs }) {
    store.subscribe(() => {
      state.__store = store.getState()
      m.redraw()
    })
  },
  view({ state }) {
    const { __store = {
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    } } = state

    return m("div.container", [
      m(AddTodo, { store, __store }),
      m(TodoList, { store, __store }),
      m(FilterButtons, { store, __store })
    ])
  }
})


