import * as types from './types'

function reducer(state, action) {
  switch(action.type) {
    case types.ADD_TWEET:
      const newState = [ ...state ]
      newState.unshift(action.payload)
      return newState
    case types.REMOVE_TWEET:
      return state.filter((cur) => {
        return cur.id !== action.payload.id
      })
    default:
      throw new Error()
  }
}

export default reducer