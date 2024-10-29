import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './userlist.css';
import userservice from '../services/userservice';
import AdminNav from './AdminNav';


export default class Studentlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentPage: 1,
            itemsPerPage: 5,
            searchQuery: '',
            showError: false,
        };
        this.errorTimer = null;
    }

    handleSearch = () => {
        const { searchQuery, users } = this.state;

        // Filter users based on searchQuery
        const filteredUsers = users.filter(user =>
            user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.userName.includes(searchQuery)
        );

        if (filteredUsers.length === 0) {
            // No users found, set showError state to true
            this.setState({
                showError: true,
            });

            // Start a timer to hide the error message after 5 seconds (5000 milliseconds)
            this.errorTimer = setTimeout(() => {
                this.setState({
                    showError: false,
                });
            }, 2000);
        } else {
            // Users found, reset showError state and update state with filtered users
            this.setState({
                users: filteredUsers,
                currentPage: 1,
                showError: false,
            });

            // Clear the timer if users are found
            clearTimeout(this.errorTimer);
        }
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSearch(); // Trigger search when Enter key is pressed
        }
    };

    componentWillUnmount() {
        // Clear the timer when the component is unmounted
        clearTimeout(this.errorTimer);
    }

    componentDidMount() {
        userservice.getAllUsers()
            .then((res) => {
                this.setState({ users: res.data || [] }); // Initialize as an empty array if data is falsy
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }


    handleClearSearch = () => {
        // Clear the search input and display the full list of users
        userservice.getAllUsers()
            .then((res) => {
                this.setState({
                    searchQuery: '',
                    users: res.data || [], // Initialize as an empty array if data is falsy
                    currentPage: 1,
                });
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    };


    // Function to handle changes in the search input field
    handleInputChange = (e) => {
        const newSearchQuery = e.target.value;

        // Update the search query state
        this.setState({ searchQuery: newSearchQuery });

        // If the input becomes empty, show the full list immediately
        if (newSearchQuery.trim() === '') {
            this.handleClearSearch();
        }
    };

    render() {
        const { users, currentPage, itemsPerPage, searchQuery, showError } = this.state;
        const indexOfLastUser = currentPage * itemsPerPage;
        const indexOfFirstUser = indexOfLastUser - itemsPerPage;
        const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

        let serialNumber = indexOfFirstUser + 1;

        return (
            <>
                <AdminNav>
                    <div id='new' className="container1">
                        <h2 id='h2'>List Of Users</h2>
                        {/* Error message when no users are found */}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search by First Name, Last Name, or Roll No"
                                value={searchQuery}
                                onChange={this.handleInputChange}
                                onKeyUp={this.handleKeyPress}
                            />
                            <button id='btn' onClick={this.handleSearch}>Search</button>
                            {/* Add a button to clear search */}

                        </div>
                        {showError && (
                            <div className="error-message text-danger">
                                Student not found with this name.
                            </div>
                        )}
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>FirstName</th>
                                        <th>LastName</th>
                                        <th>UserName</th>
                                        <th>Password</th>
                                        <th>Email Id</th>
                                        <th>Phone No</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map(user => (
                                        <tr key={user.id}>
                                            <td>{serialNumber++}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.passWord}</td>
                                            <td>{user.emailId}</td>
                                            <td>{user.phoneNo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="container pagination">
                            <button
                                id='prev'
                                onClick={() => this.setState({ currentPage: currentPage - 1 })}
                                disabled={currentPage === 1} className='btn btn-outline-dark'
                            >
                                Previous
                            </button>
                            <button
                                id='bbb'
                                onClick={() => this.setState({ currentPage: currentPage + 1 })}
                                disabled={indexOfLastUser >= users.length} className='btn btn-outline-dark'
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </AdminNav>
            </>
        );
    }
}



