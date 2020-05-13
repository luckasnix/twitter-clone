import * as types from './types'

function updateUsername(username) {
  return {
    type: types.UPDATE_USERNAME,
    payload: { username },
  }
}

function updateNickname(nickname) {
  return {
    type: types.UPDATE_NICKNAME,
    payload: { nickname },
  }
}

export { updateUsername, updateNickname }