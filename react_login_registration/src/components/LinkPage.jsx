import { Link } from "react-router-dom";

const LinkPage = () => {
    return (
        <section>
            <h1> Links</h1>
            <br />
            <h2>Public</h2>
            <Link to="/login">login</Link>
            <Link to="/register">Register</Link>
            <br />
            <h2>Private</h2>
            <Link to="/">Home</Link>
            <Link to="/editor">Editors</Link>
            <link to="/admin">Admin Page</link>
        </section>
    );
};

export default LinkPage;
