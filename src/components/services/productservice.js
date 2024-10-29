
import axios from "axios";
const PRODUCT_API_BASE_URL = "http://localhost:8080/products"

class productservice {
    getAllProduct() {
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProduct(productId) {
        return axios.get(PRODUCT_API_BASE_URL + "/" + productId)
    }


    updateProduct(product, productId) {
        return axios.put(PRODUCT_API_BASE_URL + "/" + productId, product);
    }

    getProductByGenCode(genCode) {
        return axios.get(PRODUCT_API_BASE_URL + "/genCode", {
            params: {
                genCode: genCode
            }
        });
    }

}

export default new productservice()

