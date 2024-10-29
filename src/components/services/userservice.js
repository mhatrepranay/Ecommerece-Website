
import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/users"

class UserService {
    getAllUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    // getemp(employeeId) {
    //     return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId)
    // }

}

export default new UserService()