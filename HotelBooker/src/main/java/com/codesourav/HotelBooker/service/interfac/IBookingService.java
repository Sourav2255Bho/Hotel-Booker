package com.codesourav.HotelBooker.service.interfac;

import com.codesourav.HotelBooker.dto.Response;
import com.codesourav.HotelBooker.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);
    Response findBookingByConfirmationCode(String confirmationCode);
    Response getAllBookings();
    Response cancelBooking(Long bookingId);
}
