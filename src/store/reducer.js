import { visable,modal } from "./constants"

const initialState = {
  visable: false,
  modalData:{

  }
}

export default function reducer(state = initialState, action) {
  console.log(action,'action',visable)
  switch(action.type) {
    case visable:
      return {...state, visable: action.visable}
      case modal:
      return {...state, modalData: action.modalData}
    default: 
      return state
  }
}
