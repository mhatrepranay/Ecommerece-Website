import React from 'react';

function CustomerSupport() {
    const inquiries = [
        { id: 1, customer: 'Customer A', issue: 'Product not received' },
        { id: 2, customer: 'Customer B', issue: 'Billing inquiry' },
        { id: 3, customer: 'Customer C', issue: 'Return request' },
    ];

    return (
        <div className="customer-support" style={{ padding: `24px` }}>
            <h2 style={{ marginBottom: '20px' }}>Customer Support</h2>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {inquiries.map((inquiry) => (
                    <li
                        key={inquiry.id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '5px',
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        <strong>Customer:</strong> {inquiry.customer}<br />
                        <strong>Issue:</strong> {inquiry.issue}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerSupport;
