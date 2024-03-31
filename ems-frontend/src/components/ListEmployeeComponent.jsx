import { useState, useEffect } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees()
            .then((response) => {
                console.log(response.data);
                setEmployees(response.data.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const addNewEmployee = () => {
        navigator("/add-employee");
    };

    const updateEmployee = (id) => {
        navigator("/edit-employee/" + id);
    };

    return (
        <div className="container min-vh-80">
            <h2 className="text-center"> List of Employee</h2>
            <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={addNewEmployee}
            >
                Add Employee
            </button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee First Name</th>
                        <th scope="col">Employee Last Name</th>
                        <th scope="col">Employee Email Id</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button
                                    className="btn btn-info"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        updateEmployee(employee.id);
                                    }}
                                >
                                    {" "}
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
