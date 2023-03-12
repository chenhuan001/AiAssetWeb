import { visable } from "./constants"

const initialState = {
  counter: 10
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case visable:
      return {...state, counter: state.counter + action.num}
    default: 
      return state
  }
}
