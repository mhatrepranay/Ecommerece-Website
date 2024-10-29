import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import orderservice from '../services/orderservice';


class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentPage: 1,
            itemsPerPage: 8,
        };
    }

    componentDidMount() {
        const userId = this.props.loggedInUser.id;

        orderservice.getOrdersByUserId(userId).then((res) => {
            this.setState({ orders: res.data });
        });
    }
    x


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
        ];

        return colors[index % colors.length];
    };

    render() {
        const { orders, currentPage, itemsPerPage } = this.state;
        const indexOfLastUser = currentPage * itemsPerPage;
        const indexOfFirstUser = indexOfLastUser - itemsPerPage;
        const currentUsers = orders.slice(indexOfFirstUser, indexOfLastUser);

        return (
            <>

                <div id='new' className="container">
                    <h2 id='h2'>List Of Orders</h2>
                    <div id='table1' className="order-list-container">
                        {currentUsers.map((order, index) => (
                            <div key={order.id} className={`order-card ${this.getOrderCardClass(index)}`}>
                                <h3>Order #{indexOfFirstUser + index + 1}</h3>
                                {/* <p><strong>Customer name:</strong> {order.cusName}</p> */}
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
                            disabled={indexOfLastUser >= orders.length}
                            className='btn btn-outline-dark'
                        >
                            Next
                        </button>
                    </div>
                </div>

            </>
        );
    }
}

export default Orders;
