import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import {
    FaRegCircleCheck,
    FaClockRotateLeft,
    FaCalendarDays,
    FaDollarSign,
    FaUserGroup,
    FaLocationDot
} from "react-icons/fa6";
import "./bookings.css";

export const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // // Fetch bookings data from the server
        // const fetchBookings = async () => {
        //     try {
        //         const response = await fetch('/api/bookings');
        //         const data = await response.json();
        //         setBookings(data);
        //     } catch (error) {
        //         console.error('Error fetching bookings:', error);
        //     }
        // };

        // fetchBookings();

        setBookings([
            {
                id: 1,
                user: "Jacob Thompson",
                userId: 2,
                checkInDate: '2022-01-01',
                checkOutDate: '2022-01-05',
                listingTitle: "Serenity Lake house",
                listingImage: "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11172338/World%E2%80%99s-15-Most-Beautiful-Houses-That-Will-Leave-You-Awestruck-featured-shutterstock_1182743467-1200x700-compressed.jpg",
                image: "https://lh3.googleusercontent.com/proxy/7zm6f8l5tSLObnOgmp9dri9XClokhfS2IwV4rGTk5A_k4g_D5k2j6oMWuiTQXPTLh327VI9BBLLLLs4XjXfJEDzRYXNK5EN_fQQyhQhd2Mt6FMCaZBT36br6gbsUah0Vz1tp-Ug9niGftySl7vR3gK-Ewmy1Zg",
                status: "confirmed",
                location: "Nairobi, Kenya",
                guests: 2,
                price: 600,
            },
            {
                id: 2,
                userId: 3,
                checkInDate: '2022-01-01',
                checkOutDate: '2022-01-05',
                user: "Camilla Brown",
                listingTitle: "Urban Chic Loft",
                listingImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
                status: "pending",
                location: "Nairobi, Kenya",
                guests: 4,
                price: 1200,
            },
            {
                id: 3,
                user: "Brandon White",
                userId: 4,
                checkInDate: '2022-01-01',
                checkOutDate: '2022-01-05',
                listingTitle: "Mountain View Cabin",
                listingImage: "https://kenyahomes.co.ke/blog/wp-content/uploads/2019/09/MAISONETTE.jpg",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
                status: "confirmed",
                location: "Mombasa, Kenya",
                guests: 6,
                price: 1800,
            },
            {
                id: 4,
                userId: 5,
                checkInDate: '2022-01-01',
                checkOutDate: '2022-01-05',
                user: "Charlotte Rodriguez",
                listingTitle: "Sunlit Garden Retreat",
                listingImage: "https://assets-news.housing.com/news/wp-content/uploads/2022/01/10145854/most-beautiful-houses2.png",
                image: "https://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg",
                status: "confirmed",
                location: "Narok, Kenya",
                guests: 8,
                price: 2400,
            }
        ]);
    }, []);

    const approveBooking = (id) => {
        // Approve a booking
        console.log('Approving booking:', id);
    };

    const declineBooking = (id) => {
        // Decline a booking
        console.log('Declining booking:', id);
    };

    const cancelBooking = (id) => {
        // Cancel a booking
        console.log('Cancelling booking:', id);
    };

    return (
        <div className="bookings-container">
            <Navbar />
            <h1>View bookings</h1>

            {
                bookings ? (  // Check if bookings is truthy
                    <ul>
                        {Array.isArray(bookings) && bookings.length > 0 ? (  // Check if bookings is an array and not empty
                            bookings.map((booking) => (  // Map over each booking
                                <li key={booking.id} className="booking-item">
                                    <div className="user-avatar">
                                        <img src={booking.image} alt={booking.user} />
                                        <p>{booking.user}</p>
                                    </div>
                                    <div className="listing-item-view">
                                        <img src={booking.listingImage} alt={booking.listingTitle} />
                                        <h3>{booking.listingTitle}</h3>
                                    </div>
                                    <div className="booking-details">
                                        <p><FaCalendarDays />Check-in: {booking.checkInDate}</p>
                                        <p><FaCalendarDays />Check-out: {booking.checkOutDate}</p>
                                        <p><FaUserGroup />{booking.guests}</p>
                                        <p><FaDollarSign />{parseFloat(booking.price).toLocaleString()}</p>
                                        <p><FaLocationDot />{booking.location}</p>
                                        <p>Status: {booking.status === "confirmed" ? (
                                            <>
                                                Confirmed
                                                <FaRegCircleCheck color="green" />
                                            </>
                                        ) : (
                                            <>
                                                Pending
                                                <FaClockRotateLeft color="orange" />
                                            </>
                                        )}</p>
                                    </div>
                                    {
                                        booking.status === "confirmed" ? (
                                            <div className="booking-actions">
                                                <button className="booking-actions-confirmed" onClick={() => cancelBooking(booking.id)}>Cancel</button>
                                            </div>
                                        ) : (
                                            <div className="booking-actions pending">
                                                <button className="approveBtn" onClick={() => approveBooking(booking.id)}>Approve</button>
                                                <button className="declineBtn" onClick={() => declineBooking(booking.id)}>Decline</button>
                                            </div>
                                        )
                                    }

                                </li>
                            ))
                        ) : bookings && bookings.length === 0 ? (
                            // Render a message if bookings is an empty array
                            <p>No bookings</p>
                        ) : (
                            // Render a single booking if bookings is not an array or is an empty array
                            <li className="booking-item">
                                <p>{bookings && bookings.id}</p>
                                <p>{bookings && bookings.user}</p>
                                <p>{bookings && bookings.checkInDate}</p>
                                <p>{bookings && bookings.checkOutDate}</p>
                            </li>
                        )}
                    </ul>
                ) : (
                    // Render a message if there are no bookings
                    <p>No bookings</p>
                )
            }



        </div>
    );
};