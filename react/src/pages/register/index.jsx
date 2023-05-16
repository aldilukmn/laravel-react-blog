import React from "react";
import { registerBg } from "../../assets";
import "./register.scss";
import { FormRegister } from "../../components";

const Register = () => {
    return (
        <div className="content-wrapper">
            <div className="left">
                <img className="img-register" src={registerBg} alt="image-bg" />
            </div>
            <div className="right">
                <FormRegister />
            </div>
        </div>
    );
};

export default Register;
