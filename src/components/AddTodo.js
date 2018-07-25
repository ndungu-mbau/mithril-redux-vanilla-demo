import m from 'mithril'
import { addTodo } from '../store/actions'

export default {
  oninit({ state }) {
    state.text = ''
  },
  view({ state, attrs }) {
    return m('form.todo-form', {
      onsubmit(e) {
        e.preventDefault()
        attrs.store.dispatch(addTodo(state.text))
        state.text = ''
      }
    }, [
        m('input[type=text][placeholder=Enter todo text]', {
          oninput: m.withAttr('value', v => state.text = v),
          value: state.text,
        }),
        m('button', 'Add Todo')
      ])
  }
}