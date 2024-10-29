import React from 'react';

function InventoryManagement() {
    const products = [
        { id: 1, name: 'Lamp', stock: 50 },
        { id: 2, name: 'Battery', stock: 30 },
        { id: 3, name: 'Laptop', stock: 20 },
    ];

    return (
        <div className="inventory-management" style={{ padding: `24px` }}>
            <h2>Inventory Management</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr style={{ backgroundColor: 'lightgray' }}>
                        <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Product Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} style={{ border: '1px solid black' }}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{product.id}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{product.name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InventoryManagement;
