import { useState } from "react";
import { addEmployee } from "../services/EmployeeService";

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const dataToSubmit = {
            firstName: firstName,
            lastName: lastName,
            email: email,
        };

        const response = await addEmployee(dataToSubmit);
        console.log(response);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <h2 className="text-center">Add Employee</h2>
                        <div className="card-body">
                            <form method="post" onSubmit={handleOnSubmit}>
                                <div className="form-group mb-2">
                                    <label
                                        htmlFor="firstName"
                                        className="form-label"
                                    >
                                        First Name :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={handleFirstName}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label
                                        htmlFor="lastName"
                                        className="form-label"
                                    >
                                        Last Name :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={lastName}
                                        onChange={handleLastName}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={handleEmail}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeeComponent;
