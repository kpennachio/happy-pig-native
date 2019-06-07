let defaultState = {
  username: ""
}

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case "GET_USERNAME":
      return { ...state, username: action.payload }
    default:
      return state
  }
}
