import axios from "axios";

const initialState = {
  username: "",
  id: "",
  profilePicture: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO + "_FULFILLED":
      return Object.assign({}, state, { user: action.payload });
    default:
      return state;
  }
}
