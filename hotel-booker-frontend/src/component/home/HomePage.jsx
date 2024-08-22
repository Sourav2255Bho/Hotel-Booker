import React, { useState } from "react";
import RoomSearch from "../common/RoomSearch";
import RoomResult from "../common/RoomResult";


const HomePage = () => {

    const [roomSearchResults, setRoomSearchResults] = useState([]);

    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    }

    return (
        <div className="home">
            {/* Header/Banner room section */}
            <section>
                <header className="header-banner">
                    <img src="./assets/images/hotel.webp" alt="Hotel-Booker" className="header-image"/>
                    <div className="over-lay"></div>
                    <div className="animated-text overlay-content">
                        <h1>
                            Welcome to <span className="hotel-color">Hotel-Booker</span>
                        </h1><br />
                        <h3>
                            Step into a heaven of confort and care
                        </h3>
                    </div>
                </header>
            </section>

            {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
            <RoomSearch handleSearchResult={handleSearchResult} />
            <RoomResult roomSearchResults={roomSearchResults} />
            <h4><a className="view-room-home" href="/rooms">All Rooms</a></h4>
            <h2 className="home-services">Services at <span className="hotel-color">Hotel-Booker</span></h2>

            {/* SERVICES SECTION */}
            <section className="service-section">
                <div className="service-card">
                    <img src="./assets/images/ac.png" alt="Air Conditioning" />
                    <div className="service-details">
                        <h3 className="service-title">Air Conditioning</h3>
                        <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/mini-bar.png" alt="Mini bar" />
                    <div className="service-details">
                        <h3 className="service-title">Mini Bar</h3>
                        <p className="service-discription">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/parking.png" alt="Parking" />
                    <div className="service-details">
                        <h3 className="service-title">Parking</h3>
                        <p className="service-discription">We offer on-site parking for your convenience. Please inquire about wallet parking options if available.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/wifi.png" alt="Wifi" />
                    <div className="service-details">
                        <h3 className="service-title">Wifi</h3>
                        <p className="service-discription">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
                    </div>
                </div>
                
            </section>
        </div>
    )
};

export default HomePage;