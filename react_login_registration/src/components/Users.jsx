import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const { auth } = useAuth();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                // const response = await axios.get("/users", {
                //     signal: controller.signal,
                //     headers: {
                //         "Access-Control-Allow-Credentials": true,
                //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
                //         "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                //         Authorization: `Bearer ${auth?.accessToken}`,
                //     },
                // });

                const response = await axiosPrivate.get("/users", {
                    signal: controller.signal,
                    headers: {
                        "Access-Control-Allow-Credentials": true,
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
                        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                        Authorization: `Bearer ${auth?.accessToken}`,
                    },
                });
                console.log(response.data.users);
                isMounted && setUsers(response.data.users);
            } catch (err) {
                console.error(err);
                // navigate("/login", {
                //     state: { from: location },
                //     replace: true,
                // });
            }
        };

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [auth?.accessToken]);

    return (
        <article>
            <h2>Users List</h2>
            {users?.length ? (
                <ul>
                    {users.map((user, i) => (
                        <li key={i}>{user?.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No users to display</p>
            )}
        </article>
    );
};

export default Users;
