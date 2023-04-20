import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { type AppStore } from "../redux/store";
import { PUBLIC_ROUTE_PATHS } from "../constants";

const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState?.uid ? (
    <Outlet />
  ) : (
    <Navigate replace to={PUBLIC_ROUTE_PATHS.HOME} />
  );
};

export default AuthGuard;
