import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import orderservice from '../services/orderservice';

import AdminNav from './AdminNav';

export default class Orderlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentPage: 1,
            itemsPerPage: 8,
            searchQuery: '',
            showError: false,
        };
        this.errorTimer = null;
    }


    handleSearch = () => {
        const { searchQuery, orders } = this.state;

        // Filter orders based on searchQuery
        const filteredorders = orders.filter(order =>
            order.cusName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.genCode.includes(searchQuery)
        );

        if (filteredorders.length === 0) {
            // No orders found, set showError state to true
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
            // orders found, reset showError state and update state with filtered orders
            this.setState({
                orders: filteredorders,
                currentPage: 1,
                showError: false,
            });

            // Clear the timer if orders are found
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
        orderservice.getAllOrders().then((res) => {
            this.setState({ orders: res.data });
        });
    }

    handleClearSearch = () => {
        // Clear the search input and display the full list of users
        orderservice.getAllOrders()
            .then((res) => {
                this.setState({
                    searchQuery: '',
                    orders: res.data || [], // Initialize as an empty array if data is falsy
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
    getOrderCardClass = (index) => {
        const colors = [
            'order-card-black1',
            'order-card-black2',
            'order-card-black3',
            'order-card-black4',
            'order-card-black5',
            'order-card-black6',
            'order-card-black7',
            'order-card-black8',

            // Add more colors if needed
        ];

        return colors[index % colors.length];
    };
    render() {
        const { orders, currentPage, itemsPerPage, searchQuery, showError } = this.state;
        const indexOfLastorder = currentPage * itemsPerPage;
        const indexOfFirstorder = indexOfLastorder - itemsPerPage;
        const currentorders = orders.slice(indexOfFirstorder, indexOfLastorder);

        // ... Your React component code

        return (
            <>
                <AdminNav>
                    <div id='new' className="container">
                        <h2 id='h2'>List Of Orders</h2>
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
                        <div id='table' className="order-list-container">
                            {currentorders.map((order, index) => (
                                <div key={order.id} className={`order-card ${this.getOrderCardClass(index)}`}>
                                    <h3>Order #{indexOfFirstorder + index + 1}</h3>
                                    <p><strong>Customer name:</strong> {order.cusName}</p>
                                    <p><strong>Product Name:</strong> {order.productName}</p>
                                    <p><strong>Product Code:</strong> {order.genCode}</p>
                                    <p><strong>Quantity:</strong> {order.qtyNo}</p>
                                </div>
                            ))}
                        </div>
                        <div className="container pagination">
                            <button
                                id='prev'
                                onClick={() => this.setState({ currentPage: currentPage - 1 })}
                                disabled={currentPage === 1}
                                className='btn btn-outline-dark me-2'
                            >
                                Previous
                            </button>
                            <button
                                id='bbb'
                                onClick={() => this.setState({ currentPage: currentPage + 1 })}
                                disabled={indexOfLastorder >= orders.length}
                                className='btn btn-outline-dark'
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
