package com.codesourav.HotelBooker.service.impl;

import com.codesourav.HotelBooker.dto.LoginRequest;
import com.codesourav.HotelBooker.dto.Response;
import com.codesourav.HotelBooker.dto.UserDTO;
import com.codesourav.HotelBooker.entity.User;
import com.codesourav.HotelBooker.exception.OurException;
import com.codesourav.HotelBooker.repo.UserRepository;
import com.codesourav.HotelBooker.service.interfac.IUserService;
import com.codesourav.HotelBooker.utils.JWTUtils;
import com.codesourav.HotelBooker.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public Response register(User user) {
        Response response = new Response();
        try{
            if (user.getRole() == null || user.getRole().isBlank()){
                user.setRole("USER");
            }

            if(userRepository.existsByEmail(user.getEmail())){
                throw new OurException(user.getEmail() + "Already Exists");
            }
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            User savedUser = userRepository.save(user);
            UserDTO userDTO = Utils.mapUserEntityToUserDTO(savedUser);
            response.setStatusCode(200);
            response.setUser(userDTO);

        }catch (OurException e){
            response.setStatusCode(400);
            response.setMessage(e.getMessage());
        }catch (Exception e){
            response.setStatusCode(500);
            response.setMessage("Error Occured During User Registration" + e.getMessage());
        }
        return response;
    }

    @Override
    public Response login(LoginRequest loginRequest) {

        Response response = new Response();
        return null;
    }

    @Override
    public Response getAllUser() {
        return null;
    }

    @Override
    public Response getUserBookingHistory(String UserId) {
        return null;
    }

    @Override
    public Response deleteUser(String userId) {
        return null;
    }

    @Override
    public Response getUserById(String userId) {
        return null;
    }

    @Override
    public Response getMyInfo(String userId) {
        return null;
    }
}
