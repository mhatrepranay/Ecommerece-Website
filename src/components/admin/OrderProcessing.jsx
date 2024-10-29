import React from 'react';

function OrderProcessing() {
    const orders = [
        { id: 1, customer: 'Customer A', status: 'Processing' },
        { id: 2, customer: 'Customer B', status: 'Shipped' },
        { id: 3, customer: 'Customer C', status: 'Delivered' },
    ];

    return (
        <div className="order-processing" style={{ padding: `24px` }}>
            <h2 style={{ marginBottom: '20px' }}>Order Processing</h2>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {orders.map((order) => (
                    <li
                        key={order.id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '5px',
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        <strong>Order #{order.id}</strong> - {order.customer} ({order.status})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrderProcessing;
