import { LOAD_POSTS, TOGGLE_BOOKED } from '../types'
import { newData } from '../../data'

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: newData
  }
}

export const toogleBooked = id => {
  return {
    type: TOGGLE_BOOKED,
    payload: id
  }
}
