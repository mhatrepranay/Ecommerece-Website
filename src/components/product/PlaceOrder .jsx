import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import productservice from '../services/productservice';
import orderservice from '../services/orderservice';

function PlaceOrder({ loggedInUser, showAlert }) {
    const { id } = useParams(); // Get the id from route params
    const navigate = useNavigate();

    const [productName, setProductName] = useState("");
    const [genCode, setGenCode] = useState("");
    const [cusName, setCusName] = useState("");
    const [userId, setUserId] = useState("");
    const [qtyNo, setQtyNo] = useState(1);

    useEffect(() => {
        productservice.getProduct(id)
            .then(res => {
                let product = res.data;
                setProductName(product.productName);
                setGenCode(product.genCode);
            })
            .catch(error => {
                console.error("Error fetching product data:", error);
            });

        setCusName(loggedInUser.firstName + " " + loggedInUser.lastName);
        setUserId(loggedInUser.id)
    }, [id, loggedInUser.firstName, loggedInUser.lastName, loggedInUser.id]);

    const handleQuantityChange = (value) => {
        const newValue = Math.max(1, qtyNo + value); // Ensure quantity is not less than 1
        setQtyNo(newValue);
    };

    const placeOrder = (e) => {
        e.preventDefault();
        let order = {
            productName,
            genCode,
            cusName,
            qtyNo,
            userId,
        };

        orderservice.createOrder(order)
            .then(res => {
                showAlert("Order placed successfully", "success");
                // navigate('/product');
            })
            .catch(error => {
                console.error("Error placing order:", error);
            });
    };

    return (
        <div className="container">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Place Order</h3>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Product name</label>
                            <input
                                placeholder='Product Name'
                                className='form-control'
                                value={productName}
                                readOnly
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Code Of the Product</label>
                            <input
                                placeholder='Product Code'
                                className='form-control'
                                value={genCode}
                                readOnly
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Quantity</label>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark"
                                        onClick={() => handleQuantityChange(-1)}
                                    >
                                        -
                                    </button>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={qtyNo}
                                    readOnly
                                />
                                <span className="input-group-btn">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark"
                                        onClick={() => handleQuantityChange(1)}
                                    >
                                        +
                                    </button>
                                </span>
                            </div>
                        </div>

                        <button className='btn btn-dark' onClick={placeOrder}>Place order</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrder;
