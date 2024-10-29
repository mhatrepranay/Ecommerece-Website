import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userservice from './services/userservice';

const Login = (props) => {
    const [users, setUsers] = useState([]);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);


    const checkLocalStorage = () => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            props.setLoggedInUser(JSON.parse(storedUser));
        }
    };
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await userservice.getAllUsers();
                setUsers(res.data);
                checkLocalStorage();
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const foundUser = users.find(user =>
            user.userName === credentials.username && user.passWord === credentials.password
        );

        if (foundUser) {
            props.showAlert('Logged in Successfully', 'success');
            props.setLoggedInUser(foundUser);
            localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
            window.location.href = "/home";
        } else if (credentials.username === "admin" && credentials.password === "pranay") {
            props.showAlert("Logged in Successfully", "success");
            props.setLoggedInUser({ userName: 'admin' });
            // Store the user in localStorage for persistence
            localStorage.setItem('loggedInUser', JSON.stringify({ userName: 'admin' }));
            window.location.href = "/admin";
        } else {
            props.showAlert('Invalid Email & password', 'danger');
        }
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='d-flex justify-content-center my-3'>
                <h1>WELCOME TO OUR WEBSITE</h1>
            </div>
            <div id='my'>
                <img className='wave' src='assets/wave.png' alt='wave' />
                <div id='try' className='text-center m-3'>
                    <div className='img1'>
                        <img src='assets/bg.svg' alt='background' />
                    </div>
                    <form action='' id='box' onSubmit={handleSubmit}>
                        <img src='assets/avatar.svg' alt='avatar' />
                        <h2 className='fw-bolder'>LOGIN</h2>
                        <p className='pad'>
                            <label className='fw-bolder'>
                                <i className='fa fa-user me-2'></i> Username
                            </label>
                            <br />
                            <input
                                id='input1'
                                className='fw-bolder'
                                type='text'
                                name='username'
                                onChange={onChange}
                                value={credentials.username}
                                required
                            />
                        </p>
                        <p className='pad'>
                            <label className='fw-bolder'>
                                <i className='fa fa-lock me-2'></i> Password
                            </label>
                            <br />
                            <input
                                id='input2'
                                className='fw-bolder'
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                onChange={onChange}
                                value={credentials.password}
                                required
                            />
                            <span
                                type='button'
                                className='toggle-password-btn'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <i className='fa fa-eye-slash'></i>
                                ) : (
                                    <i className='fa fa-eye'></i>
                                )}
                            </span>
                        </p>
                        <p className='pad1'>
                            <button type='submit' className='fw-bolder' id='sub_btn'>
                                Login
                            </button>
                        </p>
                        <p className='text-center'>
                            Don't have an account?{' '}
                            <Link style={{ textDecoration: 'none' }} to='/signup' className='text-dark fw-bolder'>
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
