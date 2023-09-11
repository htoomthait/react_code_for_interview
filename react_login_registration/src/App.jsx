import Register from "./components/Register";
import "./App.css";
import Login from "./components/Login";
import Layout from "./components/Layout";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./components/RequiredAuth";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Lounge from "./components/Lounge";
import Missing from "./components/Missing";

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
                    <Route path="linkpage" element={<LinkPage />} />
                    <Route path="unauthorized" element={<Unauthorized />} />

                    <Route
                        element={
                            <RequiredAuth
                                allowedRoles={[
                                    ROLES.User,
                                    ROLES.Editor,
                                    ROLES.Admin,
                                ]}
                            />
                        }
                    >
                        <Route path="/" element={<Home />} />
                    </Route>

                    <Route
                        element={
                            <RequiredAuth
                                allowedRoles={[ROLES.Editor, ROLES.Admin]}
                            />
                        }
                    >
                        <Route path="editor" element={<Editor />} />
                    </Route>
                    <Route
                        element={<RequiredAuth allowedRoles={[ROLES.Admin]} />}
                    >
                        <Route path="admin" element={<Admin />} />
                    </Route>
                    <Route
                        element={
                            <RequiredAuth
                                allowedRoles={[ROLES.Editor, ROLES.Admin]}
                            />
                        }
                    >
                        <Route path="lounge" element={<Lounge />} />
                    </Route>
                    {/* catch all */}
                    <Route path="*" element={<Missing />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
