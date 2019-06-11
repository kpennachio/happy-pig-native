let defaultState = {
  username: "",
  userId: ""
}

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case "GET_USERNAME":
      return { ...state, username: action.payload }
    case "GET_ID":
      return { ...state, userId: action.payload }
    default:
      return state
  }
}
