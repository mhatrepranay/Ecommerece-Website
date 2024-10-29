import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./log.css";

const Login = (props) => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false); // New state for password visibility
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (credentials.username === "admin" && credentials.password === "pranay") {
            props.showAlert("Logged in Successfully", "success");
            history("/admin");
        } else if (credentials.username === "user" && credentials.password === "pranay") {
            props.showAlert("Logged in Successfully", "success");
            history("/");
        } else {
            props.showAlert("Invalid Email & password", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div id='my'>
            <img className="wave" src="assets/wave.png" />
            <div id='try' className="text-center m-3">
                <div className="img1">
                    <img src="assets/bg.svg" />
                </div>
                <form action="" id='box' onSubmit={handleSubmit}>
                    <img src="assets/avatar.svg" />
                    <h2 className='fw-bolder'>LOGIN</h2>
                    <p className='pad'>
                        <label className='fw-bolder'><i className="fa fa-user me-2"></i>Username</label><br />
                        <input
                            id='input1'
                            className='fw-bolder'
                            type="text"
                            name="username"
                            onChange={onChange}
                            value={credentials.username}
                            required
                        />
                    </p>
                    <p className='pad'>
                        <label className='fw-bolder'><i className="fa fa-lock me-2"></i>Password</label><br />
                        <div className="password-input">
                            <input
                                id='input2'
                                className='fw-bolder'
                                type={showPassword ? "text" : "password"} // Toggle password visibility
                                name="password"
                                onChange={onChange}
                                value={credentials.password}
                                required
                            />
                            <span
                                type="button"
                                className='toggle-password-btn'
                                onClick={togglePasswordVisibility} // Toggle password visibility on click
                            >
                                {showPassword ? (
                                    <i className="fa fa-eye-slash"></i>
                                ) : (
                                    <i className="fa fa-eye"></i>
                                )}
                            </span>
                        </div>
                    </p>
                    <p className='pad1'>
                        <button type="submit" className='fw-bolder' id="sub_btn">LOGIN</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
