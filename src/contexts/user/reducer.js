import * as types from './types'

function reducer(state, action) {
  switch(action.type) {
    case types.UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      }
    case types.UPDATE_NICKNAME:
      return {
        ...state,
        nickname: action.payload.nickname,
      }
    default:
      throw new Error()
  }
}

export default reducer