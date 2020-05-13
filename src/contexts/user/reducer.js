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
    case types.UPDATE_PROFILE_URL:
      return {
        ...state,
        profileUrl: action.payload.url
      }
    case types.UPDATE_COVER_URL:
      return {
        ...state,
        coverUrl: action.payload.url
      }
    default:
      throw new Error()
  }
}

export default reducer