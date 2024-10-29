import React, { Component } from 'react';
import productservice from '../services/productservice';
import AdminNav from './AdminNav';
import Gencode from './Gencode';

export class Addproduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productName: "",
            description: "",
            spec1: "",
            spec2: "",
            spec3: "",
            spec4: "",
            spec5: "",
            spec6: "",
            spec7: "",
            spec8: "",
            genCode: ""
        };
    }

    handleChange = (event, field) => {
        this.setState({ [field]: event.target.value });
    };

    saveProduct = (e) => {
        e.preventDefault();
        const product = { ...this.state };

        productservice.createProduct(product)
            .then(res => {
                // Clear the form fields after successful submission
                this.setState({
                    productName: "",
                    description: "",
                    spec1: "",
                    spec2: "",
                    spec3: "",
                    spec4: "",
                    spec5: "",
                    spec6: "",
                    spec7: "",
                    spec8: "",
                    genCode: ""
                });
            })
            .catch(error => {
                // Handle error if the data couldn't be saved
                console.error("Error saving product:", error);
            });
    }

    render() {
        return (
            <>

                <AdminNav>
                    <Gencode />
                    <div className="container111">
                        <div id='card' className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="productName">Product Name</label>
                                        <input
                                            type="text"
                                            id="productName"
                                            placeholder="Enter The Product Name"
                                            className="form-control"
                                            value={this.state.productName}
                                            onChange={(e) => this.handleChange(e, 'productName')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            id="description"
                                            placeholder="Enter the description"
                                            className="form-control"
                                            value={this.state.description}
                                            onChange={(e) => this.handleChange(e, 'description')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="spec1">Shape</label>
                                        <input
                                            type="text"
                                            id="spec1"
                                            placeholder="Enter the 1st Spec"
                                            className="form-control"
                                            value={this.state.spec1}
                                            onChange={(e) => this.handleChange(e, 'spec1')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="spec1">Color</label>
                                        <input
                                            type="text"
                                            id="spec1"
                                            placeholder="Enter the 1st Spec"
                                            className="form-control"
                                            value={this.state.spec2}
                                            onChange={(e) => this.handleChange(e, 'spec2')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="spec1">Voltage</label>
                                        <input
                                            type="text"
                                            id="spec1"
                                            placeholder="Enter the 1st Spec"
                                            className="form-control"
                                            value={this.state.spec3}
                                            onChange={(e) => this.handleChange(e, 'spec3')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="spec1">Price</label>
                                        <input
                                            type="text"
                                            id="spec1"
                                            placeholder="Enter the 1st Spec"
                                            className="form-control"
                                            value={this.state.spec4}
                                            onChange={(e) => this.handleChange(e, 'spec4')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="spec1">5th Spec</label>
                                        <input
                                            type="text"
                                            id="spec1"
                                            placeholder="Enter the 1st Spec"
                                            className="form-control"
                                            value={this.state.spec5}
                                            onChange={(e) => this.handleChange(e, 'spec5')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="spec1">6th Spec</label>
                                        <input
                                            type="text"
                                            id="spec1"
                                            placeholder="Enter the 1st Spec"
                                            className="form-control"
                                            value={this.state.spec6}
                                            onChange={(e) => this.handleChange(e, 'spec6')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="spec1">7th Spec</label>
                                        <input
                                            type="text"
                                            id="spec1"
                                            placeholder="Enter the 1st Spec"
                                            className="form-control"
                                            value={this.state.spec7}
                                            onChange={(e) => this.handleChange(e, 'spec7')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="spec1">8th Spec</label>
                                        <input
                                            type="text"
                                            id="spec1"
                                            placeholder="Enter the 1st Spec"
                                            className="form-control"
                                            value={this.state.spec8}
                                            onChange={(e) => this.handleChange(e, 'spec8')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="spec1">Code</label>
                                        <input
                                            type="text"
                                            id="spec1"
                                            placeholder="Enter the 1st Spec"
                                            className="form-control"
                                            value={this.state.genCode}
                                            onChange={(e) => this.handleChange(e, 'genCode')}
                                        />
                                    </div>



                                    {/* Repeat the above 'div' structure for other input fields */}

                                    <button className="btn btn-dark" onClick={this.saveProduct}>
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </AdminNav>
            </>
        );
    }
}

export default Addproduct;
