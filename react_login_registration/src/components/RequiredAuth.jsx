/* eslint-disable react/prop-types */
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequiredAuth = (props) => {
    const { auth } = useAuth();
    const location = useLocation();
    const allowedRoles = props.allowedRoles;

    return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : auth?.authUser ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default RequiredAuth;
