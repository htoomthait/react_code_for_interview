import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = "login";

const Login = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPass] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ email: user, password: pwd }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        widthCredentials: true,
                    },
                }
            );
            console.log(response);
            const accessToken = response?.authorization?.access_token;
            setAuth({ user, accessToken });
            setUser("");
            setPass("");
            setSuccess(true);
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg("Network error");
            } else if (err.response?.status === 401) {
                setErrMsg("Invalid credentials");
            } else if (err.response?.status === 500) {
                setErrMsg("Server error");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else {
                setErrMsg("Unknown error: login failed");
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                        {errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username : </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label htmlFor="password">Password : </label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="off"
                            onChange={(e) => setPass(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account? <br />
                        <span className="line">
                            {/* put router link here to register page */}
                            <Link to="/register">Sign up</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default Login;
