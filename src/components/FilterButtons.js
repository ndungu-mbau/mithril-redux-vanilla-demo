import m from 'mithril'
import { setVisibilityFilter, VisibilityFilters } from '../store/actions'

const FilterButton = {
  view({_, attrs}){
    return m('button', {
      onclick: () => attrs.toggleList(attrs.type)
    }, attrs.type)
  }
}

export default {
  oninit({_, attrs}){
    this.dispatch = attrs.store.dispatch
  },
  view({state, attrs}){
    return m('div.filter-buttons',[
      Object.values(VisibilityFilters).map(filter => m(FilterButton,{
          toggleList : (type) => this.dispatch(setVisibilityFilter(type)),
          type: filter
        })
      )
    ])
  }
}