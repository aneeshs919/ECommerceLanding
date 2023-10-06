const initState = {
  counter: 0,
  tabIndex: 0
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'UPDATE_TAB_INDEX': {
      return {
        ...state,
        tabIndex: action.index
      }
    }
    default:
      return state
  }
}


export default rootReducer
