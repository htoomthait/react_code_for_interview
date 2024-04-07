import { Route } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Routes } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
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
                        element={<EmployeeComponent />}
                    ></Route>
                    <Route
                        path="/edit-employee/:id"
                        element={<EmployeeComponent />}
                    ></Route>
                </Routes>

                <FooterComponent />
            </BrowserRouter>
            </QueryClientProvider>
            
        </>
    );
}

export default App;
