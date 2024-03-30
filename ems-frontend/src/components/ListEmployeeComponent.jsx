import { useState, useEffect } from "react";
import { listEmployees } from "../services/EmployeeService";

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees()
            .then((response) => {
                console.log(response.data);
                setEmployees(response.data.data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="container">
            <h2 className="text-center"> List of Employee</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee First Name</th>
                        <th scope="col">Employee Last Name</th>
                        <th scope="col">Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
