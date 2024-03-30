import { Route } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Routes } from "react-router-dom";
import AddEmployeeComponent from "./components/AddEmployeeComponent";

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<ListEmployeeComponent />}></Route>
                    <Route
                        path="/employees"
                        element={<ListEmployeeComponent />}
                    ></Route>
                    <Route
                        path="/add-employee"
                        element={<AddEmployeeComponent />}
                    ></Route>
                </Routes>

                <FooterComponent />
            </BrowserRouter>
        </>
    );
}

export default App;
