import React, { Component } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import productservice from "../services/productservice";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      productsoptions: [],
      spec1options: [],
      spec2options: [],
      spec3options: [],
      spec4options: [],
      spec5options: [],
      spec6options: [],
      spec7options: [],
      spec8options: [],
      output: "",
      selections: {
        Products: "No combinations selected.",
        Shape: "",
        COLOR: "",
        "3rd Sepc": "",
        "4th Sepc": "",
        "5th Sepc": "",
        "6th Sepc": "",
        "7th Sepc": "",
        "8th Sepc": "",
      },
    };
  }

  componentDidMount() {
    productservice.getAllProduct().then((res) => {
      // Create Sets for unique values of each field (case-insensitive)
      const uniqueProductNames = new Set();
      const uniqueSpec1Values = new Set();
      const uniqueSpec2Values = new Set();
      const uniqueSpec3Values = new Set();
      const uniqueSpec4Values = new Set();
      const uniqueSpec5Values = new Set();
      const uniqueSpec6Values = new Set();
      const uniqueSpec7Values = new Set();
      const uniqueSpec8Values = new Set();
      // Add more Sets for other fields as needed

      // Iterate through the products and add unique values to their respective Sets
      res.data.forEach((product) => {
        // Check if the value is non-empty before adding to the Sets
        if (product.productName && typeof product.productName.toLowerCase === 'function') {
          uniqueProductNames.add(product.productName.toLowerCase());
        }
        if (product.spec1 && product.spec1.toLowerCase) {
          uniqueSpec1Values.add(product.spec1.toLowerCase());
        }
        if (product.spec2 && product.spec2.toLowerCase) {
          uniqueSpec2Values.add(product.spec2.toLowerCase());
        }
        if (product.spec3 && product.spec3.toLowerCase) {
          uniqueSpec3Values.add(product.spec3.toLowerCase());
        }
        if (product.spec4 && product.spec4.toLowerCase) {
          uniqueSpec4Values.add(product.spec4.toLowerCase());
        }
        if (product.spec5 && product.spec5.toLowerCase) {
          uniqueSpec5Values.add(product.spec5.toLowerCase());
        }
        if (product.spec6 && product.spec6.toLowerCase) {
          uniqueSpec6Values.add(product.spec6.toLowerCase());
        }
        if (product.spec7 && product.spec7.toLowerCase) {
          uniqueSpec7Values.add(product.spec7.toLowerCase());
        }
        if (product.spec8 && product.spec8.toLowerCase) {
          uniqueSpec8Values.add(product.spec8.toLowerCase());
        }

        // Add more fields as needed
      });

      // Generate options for each field based on unique values
      const productsoptions = this.generateOptions(
        1,
        Array.from(uniqueProductNames).map((name) => {
          const foundProduct = res.data.find(
            (product) => product.productName.toLowerCase() === name
          );

          // Check if foundProduct is not null before accessing toLowerCase
          const productName =
            foundProduct && foundProduct.productName
              ? foundProduct.productName.toLowerCase()
              : '';

          return productName;
        })
      );


      const spec1options = this.generateOptions(
        11,
        Array.from(uniqueSpec1Values).map((value) =>
          res.data.find((product) => product.spec1.toLowerCase() === value).spec1
        )
      );

      const spec2options = this.generateOptions(
        21,
        Array.from(uniqueSpec2Values).map((value) =>
          res.data.find((product) => product.spec2.toLowerCase() === value).spec2
        )
      );

      const spec3options = this.generateOptions(
        31,
        Array.from(uniqueSpec3Values).map((value) =>
          res.data.find((product) => product.spec3.toLowerCase() === value).spec3
        )
      );
      const spec4options = this.generateOptions(
        41,
        Array.from(uniqueSpec4Values).map((value) =>
          res.data.find((product) => product.spec4.toLowerCase() === value).spec4
        )
      );
      const spec5options = this.generateOptions(
        51,
        Array.from(uniqueSpec5Values).map((value) =>
          res.data.find((product) => product.spec5.toLowerCase() === value).spec5
        )
      );
      const spec6options = this.generateOptions(
        61,
        Array.from(uniqueSpec6Values).map((value) =>
          res.data.find((product) => product.spec6.toLowerCase() === value).spec6
        )
      );
      const spec7options = this.generateOptions(
        71,
        Array.from(uniqueSpec7Values).map((value) =>
          res.data.find((product) => product.spec7.toLowerCase() === value).spec7
        )
      );
      const spec8options = this.generateOptions(
        81,
        Array.from(uniqueSpec8Values).map((value) =>
          res.data.find((product) => product.spec8.toLowerCase() === value).spec8
        )
      );



      // Add more fields as needed


      this.setState({
        products: res.data,
        productsoptions,
        spec1options,
        spec2options,
        spec3options,
        spec4options,
        spec5options,
        spec6options,
        spec7options,
        spec8options,
      });
    });
  }

  copyToClipboard = () => {
    const textArea = document.querySelector(".textar");
    textArea.select();
    document.execCommand("copy");
  };

  generateOptions = (startValue, labels) => {
    return labels.map((label, index) => {
      let value = (startValue + index).toString().padStart(2, "0");
      if (startValue === 1) {
        value = label[0].toUpperCase();
      }
      else if (startValue === 11) {
        value = String.fromCharCode(50 + index);
      }
      else if (startValue === 21) {
        value = String.fromCharCode(65 + index);
      }
      else if (startValue === 31) {
        value = String.fromCharCode(73 + index);
      }
      else if (startValue === 41) {
        value = String.fromCharCode(97 + index);
      }
      else if (startValue === 51) {
        value = String.fromCharCode(104 + index);
      }
      else if (startValue === 61) {
        value = String.fromCharCode(112 + index);
      }
      else if (startValue === 71) {
        value = String.fromCharCode(74 + index);
      }
      else if (startValue === 81) {
        value = String.fromCharCode(83 + index);
      }
      else if (label === "None Of the Above") {
        value = "";
      }
      return {
        value: value,
        label: label,
      };
    });
  };

  renderCheckboxGroup = (groupName, options) => (
    <span className="dropdown">
      <button
        className="btn btn-light dropdown-toggle my-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {groupName}
      </button>
      <ul className="dropdown-menu">
        {options.map((option) => (
          <li key={`${groupName}-${option.value}`}>
            <input
              type="checkbox"
              id={`${groupName}-${option.value}`}
              name={groupName}
              value={option.value}
              checked={this.state.selections[groupName] === option.value}
              onChange={() => this.handleCheckboxChange(groupName, option.value)}
            />
            <label htmlFor={`${groupName}-${option.value}`} className="fw-bolder">
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </span>
  );

  handleCheckboxChange = (groupName, value) => {
    this.setState((prevState) => ({
      selections: {
        ...prevState.selections,
        [groupName]: value,
      },
    }));
  };

  generateCode = () => {
    const { selections } = this.state;
    const selectedItems = [];

    // Define the order in which the fields should be processed
    const fieldsOrder = ["Products", "Shape", "Color", "Voltage", "Price", "Spec5", "Spec6", "Spec7", "Spec8"];

    // Iterate through the fields in the specified order
    fieldsOrder.forEach((field) => {
      const selectedItem = selections[field];
      if (selectedItem !== "") {
        selectedItems.push(selectedItem);
      }
    });

    if (selectedItems.length > 0) {
      const output = selectedItems.join("");
      this.setState({ output });
    } else {
      this.setState({ output: "No combinations selected." });
    }
  };



  render() {
    return (
      <>
        <div className="product-container">
          <h1 className="product-title">Generate Product Combinations</h1>

          <div className="container my-4">
            <div className="options-container">

              <div className="options-group1">
                {this.renderCheckboxGroup("Products", this.state.productsoptions)}
              </div>

              <div className="options-group">
                {this.renderCheckboxGroup("Shape", this.state.spec1options)}
              </div>

              <div className="options-group">
                {this.renderCheckboxGroup("Color", this.state.spec2options)}
              </div>

              <div className="options-group">
                {this.renderCheckboxGroup("Voltage", this.state.spec3options)}
              </div>

              <div className="options-group">
                {this.renderCheckboxGroup("Price", this.state.spec4options)}
              </div>

              <div className="options-group">
                {this.renderCheckboxGroup("Spec5", this.state.spec5options)}
              </div>

              <div className="options-group">
                {this.renderCheckboxGroup("Spec6", this.state.spec6options)}
              </div>

              <div className="options-group">
                {this.renderCheckboxGroup("Spec7", this.state.spec7options)}
              </div>

              <div className="options-group">
                {this.renderCheckboxGroup("Spec8", this.state.spec8options)}
              </div>

            </div>
            <div className="my-5 d-flex justify-content-end">
              <button type="button" className="btn btn-outline-dark" onClick={this.generateCode}>
                Generate
              </button>
            </div>
            <div className="container">
              <div className="d-flex align-items-center">
                <textarea
                  className="textar fw-bolder"
                  value={this.state.output}
                  onChange={(e) => this.setState({ output: e.target.value })}
                ></textarea>

                <button
                  style={{ fontSize: `35px`, border: `1px solid white` }}
                  className="btn "
                  onClick={this.copyToClipboard}
                >
                  <i className="fa-solid fa-copy me-1"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <Search />
          </div>
        </div>
      </>
    );
  }
}

export default Product;
