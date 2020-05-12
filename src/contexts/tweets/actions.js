import * as types from './types'

function addTweet({ id, content, comments, retweets, likes }) {
  return {
    type: types.ADD_TWEET,
    payload: { id, content, comments, retweets, likes },
  }
}

function removeTweet(id) {
  return {
    type: types.REMOVE_TWEET,
    payload: { id },
  }
}

export { addTweet, removeTweet }