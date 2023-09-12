import { useState, useEffect } from "react";
import axios from "../api/axios";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const Users = () => {
    const [users, setUsers] = useState();
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get("/users", {
                    signal: controller.signal,
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`,
                    },
                });

                isMounted && setUsers(response?.data?.users);
            } catch (err) {
                console.error(err);
            }
        };

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [auth.accessToken, setUsers]);

    return (
        <article>
            <h2>User List</h2>
            {users?.length > 0 ? (
                <ul>
                    {users.map((user, i) => (
                        <li key={i}>{user?.name}</li>
                    ))}
                </ul>
            ) : (
                <p> No users to display </p>
            )}

            <button onClick={() => refresh()}>Refresh</button>
            <br />
        </article>
    );
};

export default Users;
