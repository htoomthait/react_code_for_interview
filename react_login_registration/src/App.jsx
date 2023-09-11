import Register from "./components/Register";
import "./App.css";
import Login from "./components/Login";
import Layout from "./components/Layout";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import { Routes, Route } from "react-router-dom";

const ROLES = {
    User: 3,
    Editor: 2,
    Admin: 1,
};

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="linpage" element={<LinkPage />} />
                    <Route path="auauthorized" element={<Unauthorized />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
