export const ADD_TODO = 'ADD_TODO'
export const FILTER_TODO_LIST = 'FILTER_TODO_LIST'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = text => ({
  type : ADD_TODO,
  text
})

export const toggleTodo = index => ({
  type : TOGGLE_TODO,
  index
})

export const setVisibilityFilter = filterName => ({
  type: FILTER_TODO_LIST,
  filterName
})