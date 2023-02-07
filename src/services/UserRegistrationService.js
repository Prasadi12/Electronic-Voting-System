import axios from "axios"


export class UserRegistrationService {
    static async registerUser(userData) {
        const url = 'http://localhost:5000/api/v1/register'

        return await axios.post(url, userData)
    }
}