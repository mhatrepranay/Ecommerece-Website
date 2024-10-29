
import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/msges"


class msgservice {
    getallMsges() {
        return axios.get(USER_API_BASE_URL);
    }

    saveMsg(contactus) {
        return axios.post(USER_API_BASE_URL, contactus);
    }

    // getemp(employeeId) {
    //     return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId)
    // }

}

export default new msgservice()

