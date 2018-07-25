import {
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters,
  FILTER_TODO_LIST
} from '../actions'

export const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

export const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TODO_LIST:
      return Object.assign({}, state, {
        visibilityFilter: action.filterName
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })
    default:
      return state
  }
}