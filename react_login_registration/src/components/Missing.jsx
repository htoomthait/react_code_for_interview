import { Link } from "react-router-dom";

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Page Not found</p>
            <div className="flexGrow">
                <Link to="/">Visit to our home page</Link>
            </div>
        </article>
    );
};

export default Missing;
