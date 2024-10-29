import React from 'react';

function SalesOverview() {
    const salesData = [
        { category: 'Category A', sales: 300 },
        { category: 'Category B', sales: 450 },
        { category: 'Category C', sales: 600 },
    ];

    return (
        <div className="sales-overview" style={{ padding: `24px` }}>
            <h2>Sales Overview</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.category}</td>
                            <td>{item.sales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SalesOverview;
