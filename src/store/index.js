import { createStore } from 'redux'
import { todoApp, initialState } from './reducer'

const store = createStore(todoApp, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store