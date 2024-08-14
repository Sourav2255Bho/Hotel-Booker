package com.codesourav.HotelBooker.service.interfac;

import com.codesourav.HotelBooker.dto.LoginRequest;
import com.codesourav.HotelBooker.dto.Response;
import com.codesourav.HotelBooker.entity.User;

public interface IUserService {

    Response register(User user);
    Response login(LoginRequest loginRequest);
    Response getAllUser();
    Response getUserBookingHistory(String userId);
    Response deleteUser(String userId);
    Response getUserById(String userId);
    Response getMyInfo(String email);
}
