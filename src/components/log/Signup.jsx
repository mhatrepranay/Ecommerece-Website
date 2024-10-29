import React, { useState, Component } from 'react'
import { useNavigate } from 'react-router-dom'
import userservice from '../services/userservice'
import "./sign.css";
import { Link } from 'react-router-dom';


// import { Link } from "react-router-dom";


export default class Signup extends Component {


    constructor(props) {

        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            passWord: "",
            emailId: "",
            phoneNo: ""

        }
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            passWord: this.state.passWord,
            emailId: this.state.emailId,
            phoneNo: this.state.phoneNo,
        };
        // userservice.createUser(user).then(res => {

        // })

        userservice.createUser(user)
            .then(res => {
                // Clear the form fields after successful submission
                this.setState({
                    firstName: "",
                    lastName: "",
                    userName: "",
                    passWord: "",
                    emailId: "",
                    phoneNo: ""
                });
            })
            .catch(error => {
                // Handle error if the data couldn't be saved
                console.error("Error saving employee:", error);
            });
    }



    changeFname = (event) => {
        this.setState({ firstName: event.target.value })
    }
    changelname = (event) => {
        this.setState({ lastName: event.target.value })
    }
    changeUname = (event) => {
        this.setState({ userName: event.target.value })
    }
    changepass = (event) => {
        this.setState({ passWord: event.target.value })
    }
    changeemail = (event) => {
        this.setState({ emailId: event.target.value })
    }
    changephone = (event) => {
        this.setState({ phoneNo: event.target.value })
    }

    render() {
        return (
            <>

                <div id='my1'>
                    <img className="wave1" src="assets/wave.png" />
                    <div id='try1' className="text-center m-3">
                        <div className="img11">
                            <img src="assets/bg.svg" />
                        </div>
                        <form action="" id='box1'  >

                            <h2 className='fw-bolder'>SIGN UP</h2>
                            <p className='pad1'>

                                <label className='fw-bolder'><i className="fa   fa-user me-2"></i>  First Name</label><br />
                                <input id='input11' type='text' className='fw-bolder' value={this.state.firstName} onChange={this.changeFname} required />
                            </p>
                            <p className='pad1'>

                                <label className='fw-bolder'><i className="fa   fa-user me-2"></i>  Last Name</label>

                                <br />
                                <input id='input11' className='fw-bolder' value={this.state.lastName} onChange={this.changelname} required />
                            </p>
                            <p className='pad1'>

                                <label className='fw-bolder'> <i className="fa   fa-user me-2"></i>  User Name</label>

                                <br />
                                <input id='input11' className='fw-bolder' value={this.state.userName} onChange={this.changeUname} required />
                            </p>
                            <p className='pad1'>

                                <label className='fw-bolder'><i className="fa fa-lock me-2"></i>   Password</label>

                                <br />
                                <input id='input11' className='fw-bolder' value={this.state.passWord} onChange={this.changepass} required />
                            </p>
                            <p className='pad1'>

                                <label className='fw-bolder'><i className="fa fa-envelope me-2"></i>  Email Id</label>

                                <br />
                                <input id='input11' className='fw-bolder' value={this.state.emailId} onChange={this.changeemail} required />
                            </p>
                            <p className='pad1'>

                                <label className='fw-bolder'><i className="fa fa-phone me-2"></i>  Phone No</label>

                                <br />
                                <input id='input11' className='fw-bolder' value={this.state.phoneNo} onChange={this.changephone} required />
                            </p>



                            <p className='pad'>

                                <button type="submit" className='fw-bolder' onClick={this.saveUser} id="sub_btn1">Submit</button>

                            </p>
                            <p className="text-center">

                                Have an account? <Link style={{ textDecoration: `none` }} to="/" className='text-dark fw-bolder'>Login</Link>
                            </p>
                        </form>
                    </div>
                </div >
            </>

        )
    }
}


