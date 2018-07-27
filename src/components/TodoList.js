import m from 'mithril'
import { toggleTodo } from '../store/actions'

const Todo = {
  view({ _, attrs }) {
    return m('li', [
      m('button', { onclick: () => attrs.store.dispatch(toggleTodo(attrs.index)) }, 'X'),
      m('p', { class: attrs.todo.completed ? 'line-through' : '' }, attrs.todo.text)
    ])
  }
}

export default {
  view({ _, attrs }) {
    const { __store: { todos, visibilityFilter } } = attrs

    return m('ul', todos.filter((todo) => {
      switch (visibilityFilter) {
        case 'SHOW_COMPLETED':
          return todo.completed && todo
        case 'SHOW_ACTIVE':
          return !todo.completed && todo
        case 'SHOW_ALL':
        default:
          return todo
      }
    }).map((todo, i) => m(Todo, { todo, index: i, store: attrs.store })))
  }
}