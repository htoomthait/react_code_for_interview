import { Link } from "react-router-dom";

const Lounge = () => {
    return (
        <section>
            <h1>Lounge</h1>
            <br />
            <p>Admin and Editor can hang out here.</p>
            <div className="flexGlow">
                <Link to="/">Go to Home</Link>
            </div>
        </section>
    );
};

export default Lounge;
