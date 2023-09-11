import { Outlet } from "react-router-dome";

const Layout = () => {
    return (
        <main className="app">
            <Outlet />
        </main>
    );
};

export default Layout;
