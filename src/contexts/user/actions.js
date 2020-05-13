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

function updateProfileUrl(url) {
  return {
    type: types.UPDATE_PROFILE_URL,
    payload: { url },
  }
}

function updateCoverUrl(url) {
  return {
    type: types.UPDATE_COVER_URL,
    payload: { url },
  }
}

export { updateUsername, updateNickname, updateProfileUrl, updateCoverUrl }