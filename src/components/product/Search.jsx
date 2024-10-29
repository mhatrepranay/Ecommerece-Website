import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import productservice from '../services/productservice';
import "./search.css";
// import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';

const Search = () => {
    const [searchParameter, setSearchParameter] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const content = useRef();

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setProducts(storedProducts);
        }
    }, []);

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('products');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handleSearchParameterChange = (event) => {
        setSearchParameter(event.target.value);
    };

    const handlePasteFromClipboard = () => {
        navigator.clipboard.readText()
            .then((text) => {
                setSearchParameter(text);
            })
            .catch((err) => {
                console.error('Failed to read from clipboard', err);
            });
    };

    const fetchProductData = () => {
        setError(null);
        productservice.getProductByGenCode(searchParameter)
            .then((res) => {
                const productData = res.data;
                const updatedProducts = [...products, productData];
                setProducts(updatedProducts);
                localStorage.setItem('products', JSON.stringify(updatedProducts));
            })
            .catch(() => {
                setError('Sorry, No Product with this Code Found');
            });
    };

    const handleRemoveProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchProductData();
    };

    // const handleDownloadProduct = (product) => {
    //     const doc = new jsPDF();

    //     // Add an image to the PDF
    //     const imgWidth = 100; // Width of the image in millimeters
    //     const imgHeight = 100; // Height of the image in millimeters
    //     const x = 10; // X-coordinate where the image will be placed
    //     const y = 40; // Y-coordinate where the image will be placed

    //     doc.addImage("/assets/lamp.png", 'JPEG', x, y, imgWidth, imgHeight);

    //     // Add other content to the PDF
    //     doc.text(`Product Name: ${product.productName}`, 10, 10);
    //     doc.text(`Description: ${product.description}`, 10, 20);
    //     doc.text(`Price: ${product.spec3}`, 10, 30);

    //     // Save the PDF with a specific name
    //     doc.save(`${product.productName}_info.pdf`);
    // };


    const handleDownloadProduct = (product) => {
        const element = content.current;

        // Options for html2pdf
        const options = {
            margin: 10,
            filename: `${product.productName}_info.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        // Generate PDF
        html2pdf(element, options);
    };

    return (
        <>
            <div className="search-container">
                <div className="card-body">
                    <form onSubmit={handleFormSubmit} className="search-form">
                        <div id='brd' className="form-group">
                            <div className="input-group">
                                <input
                                    placeholder="Enter Code"
                                    type="text"
                                    id="searchParameter"
                                    name="searchParameter"
                                    className="form-control search-input"
                                    value={searchParameter}
                                    onChange={handleSearchParameterChange}
                                />
                                <button
                                    style={{ fontSize: `25px`, border: `1px solid white` }}
                                    className="btn "
                                    onClick={handlePasteFromClipboard}
                                >
                                    <i className="fa fa-paste"></i>
                                </button>

                                <div className="input-group-append">
                                    <button
                                        type="submit"
                                        className="btn btn-primary search-button"
                                    >
                                        Search by Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {error && (
                        <div className="text-danger text-center">{error}</div>
                    )}
                    {products.map((product, index) => (
                        <div key={index} className="mt-4 product-details">
                            <div className="product-info">
                                <div ref={content} className="product-info" >


                                    <div className="product-image-container">
                                        <img id='imgg' src={`/assets/${product.genCode}.png`} alt="Product" className="product-image" />
                                    </div>
                                    <div className='product-description'>
                                        <p className='text-dark'>
                                            <strong className='text-dark fw-bold'>Product Name:</strong> {product.productName}
                                        </p>
                                        <p className='text-dark'>
                                            <strong className='text-dark fw-bold'>Description:</strong> {product.description}
                                        </p>
                                        <p className='text-dark'>
                                            <strong className='text-dark fw-bold'>Price:</strong> {product.spec4}
                                        </p>

                                    </div>
                                </div>
                                <div className="download-icon">
                                    {/* Replace the "Download" button with a Font Awesome icon */}
                                    <i
                                        id='down'
                                        className="fa-solid fa-trash fa-2x me-2"
                                        onClick={() => handleRemoveProduct(index)}
                                        style={{ cursor: 'pointer' }}
                                    ></i>
                                    <i
                                        id='down1'
                                        class="fa fa-circle-down fa-2x"
                                        onClick={() => { handleDownloadProduct(product) }}
                                        style={{ cursor: 'pointer' }}
                                    ></i>
                                    <Link to={`/place/${product.id}`} className='btn btn-info'>
                                        Place Order
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Search;
