import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UsersIndex = ({}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      {token === true ? (
        <Outlet />
      ) : (
        <div>
          <h1>Loading....!</h1>
        </div>
      )}
    </>
  );
};

export default UsersIndex;
