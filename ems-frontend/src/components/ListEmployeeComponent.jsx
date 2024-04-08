import { useState, useEffect } from "react";
import { deleteById, asyncListEmployees  } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "react-query";

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    /*const fetchEmployee = () => {
        listEmployees()
            .then((response) => {
                console.log(response.data);
                setEmployees(response.data.data);
            })
            .catch((error) => console.log(error));
    };*/

    const {data, status, isLoading} = useQuery('listEmployee', asyncListEmployees );

usefect(() => {
        setEmployees(data);
    }, []);

    const addNewEmployee = () => {
        navigator("/add-employee");
    };

    const updateEmployee = (id) => {
        navigator("/edit-employee/" + id);
    };

 if(isLoading){
return "<h1> Loading Employees' data </h1>";

}
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
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">
                            Employee ID
                        </th>
                        <th scope="col" className="text-center">
                            Employee First Name
                        </th>
                        <th scope="col" className="text-center">
                            Employee Last Name
                        </th>
                        <th scope="col" className="text-center">
                            Employee Email Id
                        </th>
                        <th scope="col" className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td className="pl-2">{employee.id}</td>
                            <td className="pl-2">{employee.firstName}</td>
                            <td className="pl-2">{employee.lastName}</td>
                            <td className="pl-2">{employee.email}</td>
                            <td className="d-flex justify-content-around">
                                <button
                                    className="btn btn-info"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        updateEmployee(employee.id);
                                    }}
                                >
                                    Update
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        Swal.fire({
                                            icon: "warning",
                                            title: "Delete Employee",
                                            text: "Are you sure? It is going to delete employee permanetly!",
                                            showCancelButton: true,
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                deleteById(employee.id)
                                                    .then((response) => {
                                                        console.log(response);
                                                        Swal.fire({
                                                            icon: "success",
                                                            title: "Delete Employee",
                                                            text:
                                                                "Successfully deleted employe with id : " +
                                                                employee.id,
                                                        });
                                                        fetchEmployee();
                                                    })
                                                    .catch((error) => {
                                                        console.log(error);
                                                        Swal.fire({
                                                            icon: "error",
                                                            title: "Delete Employee",
                                                            text:
                                                                "Cannot  delete employe with id : " +
                                                                employee.id,
                                                        });
                                                    });
                                            }
                                        });
                                    }}
                                >
                                    Delete
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
