import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context
        // axios to /logout end point

        setAuth({});
        navigate("/linkpage");
    };

    return (
        <section>
            <h1>Home</h1>
            <br />
            <Link to="/eitor"> Go to editor page</Link>
            <br />
            <Link to="/admin"> Go to the Admin page</Link>
            <br />
            <Link to="/lounge"> Go to the lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>sign out</button>
            </div>
        </section>
    );
};
export default Home;
