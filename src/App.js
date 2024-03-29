import { lazy, Suspense, useEffect } from "react";
import { useRoutes, useNavigate, useLocation } from "react-router-dom";

import "./App.css";
import Login from "./pages/landingPage/login";
import UsersIndex from "./pages/portals/userPortal";
import UserList from "./pages/portals/userPortal/components/userList";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.token);

  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  const protectedRoute = useRoutes([
    {
      path: "/user-portal",
      element: <UsersIndex />,
      children: [
        {
          path: "user-list",
          element: <UserList />,
        },
      ],
    },
  ]);

  console.log(token);

  return (
    <div className="App">
      {token === false ? (
        <Suspense fallback={<div id="preloader">{"loading..."}</div>}>
          {routes}
        </Suspense>
      ) : (
        <Suspense fallback={<div id="preloader">{"loading..."}</div>}>
          {protectedRoute}
        </Suspense>
      )}
    </div>
  );
}

export default App;
