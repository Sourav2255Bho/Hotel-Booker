import axios from "axios";

export default class ApiService{
    static BASE_URL = "http://localhost:4040"

    static getHeader(){
        const token = localStorage.getItem("token");

        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        };
    }

    /* AUTH */

    /*Register a new user*/
    static async registerUser(registration){
        const response = await axios.post(`${this.BASE_URL}/auth/register`, registration)
        return response.data;
    }

    /*Login a registered user */
    static async loginUser(loginDetails){
        const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails);
        return response.data;
    }

    
    /**USERS */

    /* This is to get the details of all Users */
    static async getAllUsers(){
        const response = await axios.get(`${this.BASE_URL}/users/all`,{
            headers: this.getHeader()
        })

        return response.data;
    }

    /* This is to get the user profile */
    static async getUserProfile(){
        const response = await axios.get(`${this.BASE_URL}/users/get-logged-in-profile-info`,{
            headers: this.getHeader();
        })

        return response.data;
    }


    /* This is to get a single user using the userId */
    static async getUser(userId){
        const response = await axios.get(`${this.BASE_URL}/users/get-by-id/${userId}`, {
            headers: this.getHeader()
        })

        return response.data;
    }


    /* This is to get the user bookings by user id */
    static async getUserBookings(userId){
        const response = await axios.get(`${this.BASE_URL}/users/get-user-bookings/${userId}`, {
            headers:this.getHeader();
        })

        return response.data;
    }

    /* This is to delete a user */
    static async deleteUser(userId){
        const response = await axios.delete(`${this.BASE_URL}/delete/${userId}`, {
            headers: this.getHeader()
        })
    }
}
