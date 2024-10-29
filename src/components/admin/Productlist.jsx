import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productservice from '../services/productservice';
import './userlist.css';
import AdminNav from './AdminNav';
import Gencode from './Gencode';


export default class Productlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentPage: 1,
            itemsPerPage: 5
        };
    }

    componentDidMount() {
        productservice.getAllProduct().then((res) => {
            this.setState({ products: res.data });
        });
    }

    render() {
        const { products, currentPage, itemsPerPage } = this.state;
        const filteredProducts = products.filter(product => (
            product.productName &&
            product.description

        ));
        const totalFilteredProducts = filteredProducts.length;
        const indexOfLastProduct = currentPage * itemsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
        const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

        let serialNumber = indexOfFirstProduct + 1;

        return (
            <>

                <AdminNav>
                    <Gencode />

                    <div id='new' className="container">
                        <h2 id='h2'>List Of Products</h2>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>Product Name</th>
                                        <th>Description</th>
                                        <th>SHAPE</th>
                                        <th>COLOR</th>
                                        <th>VOLTAGE</th>
                                        <th>PRICE</th>
                                        <th>5th Spec</th>
                                        <th>6th Spec</th>
                                        <th>7th Spec</th>
                                        <th>8th Spec</th>
                                        <th>Code</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {currentProducts.map(product => (
                                        <tr key={product.id}>
                                            <td>{serialNumber++}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.description}</td>
                                            <td>{product.spec1}</td>
                                            <td>{product.spec2}</td>
                                            <td>{product.spec3}</td>
                                            <td>{product.spec4}</td>
                                            <td>{product.spec5}</td>
                                            <td>{product.spec6}</td>
                                            <td>{product.spec7}</td>
                                            <td>{product.spec8}</td>
                                            <td>{product.genCode}</td>
                                            <td><Link to={`/update/${product.id}`} className='btn btn-info'>
                                                UPDATE
                                            </Link></td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="container pagination">
                            <button
                                id='prev'
                                onClick={() => this.setState({ currentPage: currentPage - 1 })}
                                disabled={currentPage === 1} className='btn btn-outline-dark me-4'
                            >
                                Previous
                            </button>
                            <button
                                id='bbb'
                                onClick={() => this.setState({ currentPage: currentPage + 1 })}
                                disabled={indexOfLastProduct >= totalFilteredProducts}
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
