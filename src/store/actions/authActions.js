import { persistor } from "../index";
import { getContent } from "../../servicecalls/authApis";

// export const LOGOUT_ACTION = "[Logout action] logout action";

export const authContent =
  (type, value, token, params, navigate) => (dispatch) => {
    let res = getContent(type, value, token, params).then((res) => {
      switch (type) {
        case "userData":
          navigate(params);
          return dispatch({
            type: "USER_DATA",
            payload: res,
          });
        case "userAuth":
          //   navigate(params)
          return dispatch({
            type: "USER_AUTHED",
            payload: res,
          });
      }
    });
  };

export const logout = (navigate, dispatch) => {
  persistor.pause();
  persistor.flush().then(() => {
    return persistor.purge();
  });
  dispatch({
    type: "USER_AUTHED",
    payload: false,
  });
  navigate("/");
};
