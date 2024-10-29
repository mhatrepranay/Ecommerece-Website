import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import productservice from '../services/productservice';
import AdminNav from './AdminNav';

function Update() {
    const { id } = useParams(); // Get the id from route params
    const navigate = useNavigate();
    // const [newId, setNewId] = useState("");


    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [spec1, setSpec1] = useState("");
    const [spec2, setSpec2] = useState("");
    const [spec3, setSpec3] = useState("");
    const [spec4, setSpec4] = useState("");
    const [spec5, setSpec5] = useState("");
    const [spec6, setSpec6] = useState("");
    const [spec7, setSpec7] = useState("");
    const [spec8, setSpec8] = useState("");
    const [genCode, setGenCoge] = useState("");


    useEffect(() => {
        productservice.getProduct(id)
            .then(res => {
                let product = res.data;
                setProductName(product.productName);
                setDescription(product.description);
                setSpec1(product.spec1);
                setSpec2(product.spec2);
                setSpec3(product.spec3);
                setSpec4(product.spec4);
                setSpec5(product.spec5);
                setSpec6(product.spec6);
                setSpec7(product.spec7);
                setSpec8(product.spec8);
                setGenCoge(product.genCode);


            })
            .catch(error => {
                console.error("Error fetching product data:", error);
            });
    }, [id]);

    const updateProduct = (e) => {
        e.preventDefault();
        let product = {
            id,
            productName,
            description,
            spec1,
            spec2,
            spec3,
            spec4,
            spec5,
            spec6,
            spec7,
            spec8,
            genCode,

        };

        productservice.updateProduct(product, id)
            .then(res => {
                navigate('/prodlist');
            })
            .catch(error => {
                console.error("Error updating Product data:", error);
            });
    };

    return (
        <>
            <AdminNav>
                <div>
                    <div className="container">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="">Id</label>
                                        <input
                                            placeholder='Employee ID'
                                            className='form-control'
                                            value={id}
                                            disabled
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">Product name</label>
                                        <input
                                            placeholder='First Name'
                                            className='form-control'
                                            value={productName}
                                            onChange={(e) => setProductName(e.target.value)}
                                        />
                                    </div>
                                    {/* <div className="form-group">
                                <label htmlFor="">Description...</label>
                                <input
                                    placeholder='First Name'
                                    className='form-control'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div> */}
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            placeholder="Enter the description"
                                            className="form-control"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">SHAPE</label>
                                        <input
                                            placeholder='Last Name'
                                            className='form-control'
                                            value={spec1}
                                            onChange={(e) => setSpec1(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">COLOR</label>
                                        <input
                                            placeholder='Last Name'
                                            className='form-control'
                                            value={spec2}
                                            onChange={(e) => setSpec2(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">VOLTAGE</label>
                                        <input
                                            placeholder='Last Name'
                                            className='form-control'
                                            value={spec3}
                                            onChange={(e) => setSpec3(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor=""> PRICE</label>
                                        <input
                                            placeholder='Last Name'
                                            className='form-control'
                                            value={spec4}
                                            onChange={(e) => setSpec4(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Sepcifiaction No.5</label>
                                        <input
                                            placeholder='Last Name'
                                            className='form-control'
                                            value={spec5}
                                            onChange={(e) => setSpec5(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Sepcifiaction No.6</label>
                                        <input
                                            placeholder='Last Name'
                                            className='form-control'
                                            value={spec6}
                                            onChange={(e) => setSpec6(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Sepcifiaction No.7</label>
                                        <input
                                            placeholder='Last Name'
                                            className='form-control'
                                            value={spec7}
                                            onChange={(e) => setSpec7(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Sepcifiaction No.8</label>
                                        <input
                                            placeholder='Last Name'
                                            className='form-control'
                                            value={spec8}
                                            onChange={(e) => setSpec8(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Code</label>
                                        <input
                                            placeholder='Last Name'
                                            className='form-control'
                                            value={genCode}
                                            onChange={(e) => setGenCoge(e.target.value)}
                                        />
                                    </div>



                                    <button className='btn btn-dark' onClick={updateProduct}>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminNav>
        </>
    );
}

export default Update;
