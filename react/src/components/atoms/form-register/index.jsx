import React, { useState } from "react";
import Gap from "../gap";

const FormRegister = () => {
    const [reg, setReg] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
    });

    const onInput = (e) => {
        const { name, value } = e.target;
        setReg({
            ...reg,
            [name]: value,
        });
        setErrors({
            ...errors,
            [`${name}Error`]: validateInput(name, value),
        });
    };

    const validateInput = (name, value) => {
        switch (name) {
            case "name":
                return value.length < 5 && value !== ""
                    ? `Please choose a ${name.toLowerCase()} with at least 5 characters!`
                    : "";
            case "email":
                return !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
                    ? "Please enter a valid email address!"
                    : "";
            case "password":
                return !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}/g.test(value)
                    ? "Minimum 4 characters required: lowercase, uppercase, and digit!"
                    : "";
            default:
                return "";
        }
    };

    const { name, email, password } = reg;
    const { nameError, emailError, passwordError } = errors;

    const isDisabled =
        name === "" ||
        email === "" ||
        password === "" ||
        nameError !== "" ||
        emailError !== "" ||
        passwordError !== "";

    return (
        <>
            <div className="card p-3">
                <h3 className="text-center">Register</h3>
                <form noValidate>
                    <label htmlFor="name" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        className={`form-control ${
                            nameError !== ""
                                ? "is-invalid"
                                : name !== ""
                                ? "is-valid"
                                : ""
                        }`}
                        placeholder="Full Name"
                        onChange={onInput}
                    />
                    {nameError && (
                        <>
                            <div className="invalid-feedback">{nameError}</div>
                        </>
                    )}

                    <Gap height={20} />

                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        name="email"
                        className={`form-control ${
                            emailError !== ""
                                ? "is-invalid"
                                : email !== ""
                                ? "is-valid"
                                : ""
                        }`}
                        placeholder="Email"
                        onChange={onInput}
                    />
                    {emailError && (
                        <div className="invalid-feedback">{emailError}</div>
                    )}

                    <Gap height={20} />

                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        name="password"
                        className={`form-control ${
                            passwordError !== ""
                                ? "is-invalid"
                                : password !== ""
                                ? "is-valid"
                                : ""
                        }`}
                        placeholder="Password"
                        onChange={onInput}
                    />
                    {passwordError && (
                        <div className="invalid-feedback">{passwordError}</div>
                    )}

                    <Gap height={40} />

                    <fieldset disabled={isDisabled}>
                        <button
                            className="btn btn-primary w-100"
                            disabled={isDisabled}
                        >
                            Register
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
};

export default FormRegister;
