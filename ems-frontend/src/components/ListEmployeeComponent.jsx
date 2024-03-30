import React from "react";

const dummyData = [
    {
        id: 1,
        firstName: "Robin",
        lastName: "Htoo",
        email: "robinhtoo@gmail.com",
    },
    {
        id: 2,
        firstName: "john",
        lastName: "doe",
        email: "johndone@gmail.com",
    },
    {
        id: 3,
        firstName: "johnny",
        lastName: "doe",
        email: "johnnydone@gmail.com",
    },
];

const ListEmployeeComponent = () => {
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
                    {dummyData.map((employee) => (
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
