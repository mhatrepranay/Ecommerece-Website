import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/orders";

class OrderService {
    getAllOrders() {
        return axios.get(USER_API_BASE_URL);
    }

    getOrdersByUserId(userId) {
        return axios.get(`${USER_API_BASE_URL}/user/${userId}`);
    }

    createOrder(order) {
        // Assuming order object has a property 'userId'
        return axios.post(USER_API_BASE_URL, { ...order, userId: order.userId });
    }
}

export default new OrderService();
