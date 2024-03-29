import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authContent, logout } from "../../../../store/actions/authActions";
import { useNavigate, useLocation } from "react-router-dom";

const UserList = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.auth.userData);

  return userData ? (
    <>
      <div>
        <h1>user data</h1>
        <h3>{userData.name}</h3>
        <h3>{userData.email}</h3>
        <h3>{userData.role}</h3>

        <button
          className="signUp-btn mt-20"
          onClick={() => logout(navigate, dispatch)}
        >
          logout
        </button>
      </div>
    </>
  ) : (
    <div>
      <h1>Content Loading</h1>
    </div>
  );
};

export default UserList;
