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
            headers: this.getHeader()
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
            headers:this.getHeader()
        })

        return response.data;
    }

    /* This is to delete a user */
    static async deleteUser(userId){
        const response = await axios.delete(`${this.BASE_URL}/delete/${userId}`, {
            headers: this.getHeader()
        })
        return response.data;
    }

    /** ROOM */
    /* This adds a new room to the database */ 
    static async addRoom(formData){
        const result = await axios.post(`${this.BASE_URL}/rooms/add`,formData,{
            headers: {
                ...this.getHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });

        return result.data;
    }


    /* This is to get all available rooms */
    static async getAllAvailableRooms(){
        const response = await axios.get(`${this.BASE_URL}/all-available-rooms`)
        return response.data;
    }

    /* This is to get all available rooms by date and type from database with a given date and type */
    static async getAvailableRoomsByDateAndType(checkInDate, checkOutDate, roomType){
        const result = await axios.get(`${this.BASE_URL}/rooms/available-rooms-by-date-and-type?checkInDate=${checkInDate}
		&checkOutDate=${checkOutDate}&roomType=${roomType}`)   
        return result.data;
    }


    /* The gets all room types from the database */
    static async getRoomTypes(){
        const response = await axios.get(`${this.BASE_URL}/rooms/types`)
        return response.data;
    }


    /* This gets all rooms from the database */
    static async getAllRoom(){
        const result = await axios.get(`${this.BASE_URL}/rooms/all`)
        return result.data;
    }

    /* This function gets a room by Id */
    static async getRoomById(roomId){
        const result = await axios.get(`${this.BASE_URL}/rooms/room-by-id/${roomId}`)
        return result.data;
    }

    /* This deletes a room by the Id */
    static async deleteRoom(roomId){
        const result = await axios.delete(`${this.BASE_URL}/rooms/delete/${roomId}`,{
            headers: this.getHeader()
        });
        return result.data;
    }


    /* This updates a room */
    static async updateRoom(roomId , formData){
        const result = await axios.put(`${this.BASE_URL}/rooms/update/${roomId}`,{
            headers: {
                ...this.getHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });
        return result.data;
    }

    /**BOOKING */
    /* This saves a new booking to the database */
    static async bookRoom(roomId, userId, booking){

        console.log("USER ID IS : "+ userId)

        const result = await axios.post(`${this.BASE_URL}/bookings/book-room/${roomId}/${userId}`, booking, {
            headers: this.getHeader()
        });
        return result.data;
    }


    /** This get all bookings from the database */
    static async getAllBookings(){
        const result = await axios.get(`${this.BASE_URL}/bookings/all`,{
            headers: this.getHeader()
        });

        return result.data;
    }

    /* This get booking by the confirmation code */
    static async getBookingByConfirmationCode(bookingCode){
        const result = await axios.get(`${this.BASE_URL}/bookings/get-by-confirmation-code/${bookingCode}`)
        return result.data;
    }

    /* This is to cancel user bookings */
    static async cancelBooking(bookingId){
        const result = await axios.delete(`${this.BASE_URL}/bookings/cancel/${bookingId}`,{
            headers: this.getHeader()
        });

        return result.data;
    }


    /** AUTHENTICATION CHECHER */
    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token; //If token is not present then it will return false and if token is present it will return true
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isUser(){
        const role = localStorage.getItem('role')
        return role === 'USER';
    }
}
