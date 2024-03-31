import { useState } from "react";
import { addEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [clickedSubmit, setClickSubmit] = useState(false);

    const { id } = useParams();

    const [errors, setErrors] = useState({
        firstName: "",
        lastname: "",
        email: "",
    });

    const navigator = useNavigate();

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (clickedSubmit) {
            validateForm();
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (clickedSubmit) {
            validateForm();
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (clickedSubmit) {
            validateForm();
        }
    };

    const validateForm = () => {
        let valid = true;
        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const errorsCopy = { ...errors };

        if (firstName.trim()) {
            errorsCopy.firstName = "";
        } else {
            errorsCopy.firstName = "First name is required";
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = "";
        } else {
            errorsCopy.lastName = "Last name is required";
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = "";

            if (!email.match(validRegex)) {
                errorsCopy.email = "invalid email format";
                valid = false;
            }
        } else {
            errorsCopy.email = "email is required";
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setClickSubmit(true);

        if (validateForm()) {
            const employeeToRecord = {
                firstName: firstName,
                lastName: lastName,
                email: email,
            };
            try {
                const response = await addEmployee(employeeToRecord);
                console.log(response);
                Swal.fire({
                    icon: "success",
                    title: "Employee Adding",
                    text: "Your employee has been recorded successfully!",
                    confirmButtonText: "OK",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigator("/");
                    }
                });
            } catch (error) {
                console.log(error.response.data.message);
                Swal.fire({
                    icon: "error",
                    title: "Employee Adding",
                    text: error.response.data.message,
                });
            }
        }
    };

    const pageTitle = () => {
        if (id) {
            return <h2 className="text-center">Update Employee</h2>;
        } else {
            return <h2 className="text-center">Add Employee</h2>;
        }
    };
    return (
        <>
            <div
                className="container pb-4"
                style={{ minHeight: "89vh", border: "1px solid #000" }}
            >
                <div className="row d-flex justify-content-center">
                    <div className="card col-5 mt-4">
                        {pageTitle()}

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
                                        className={`form-control mb-1 ${
                                            errors.firstName ? "is-invalid" : ""
                                        }`}
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={handleFirstName}
                                    />
                                    {errors.firstName && (
                                        <span className={`invalid-feedback`}>
                                            {errors.firstName}
                                        </span>
                                    )}
                                </div>

                                <div className="form-group mb-2">
                                    <label
                                        htmlFor="lastName"
                                        className="form-label"
                                    >
                                        Last Name :
                                    </label>
                                    <input
                                        className={`form-control mb-1 ${
                                            errors.lastName ? "is-invalid" : ""
                                        }`}
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={lastName}
                                        onChange={handleLastName}
                                    />
                                    {errors.lastName && (
                                        <span className={`text-danger fs-6`}>
                                            {errors.lastName}
                                        </span>
                                    )}
                                </div>

                                <div className="form-group mb-2">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email :
                                    </label>
                                    <input
                                        className={`form-control mb-1 ${
                                            errors.email ? "is-invalid" : ""
                                        }`}
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={handleEmail}
                                    />
                                    {errors.email && (
                                        <span className={`text-danger fs-6`}>
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                                <div className="form-group mb-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Save
                                    </button>
                                    &nbsp;
                                    <button
                                        className="btn btn-secondary ml-4"
                                        onClick={() => {
                                            navigator("/");
                                        }}
                                    >
                                        Back
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
