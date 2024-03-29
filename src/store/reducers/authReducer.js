const initialState = {
  token: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_DATA":
      return {
        ...state,
        userData: { ...action.payload },
      };
    case "USER_AUTHED":
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
}
