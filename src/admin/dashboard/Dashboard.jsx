import "./dashboard.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    // // Fetch bookings data from the server
    // const fetchReservations = async () => {
    //     try {
    //         const response = await fetch('/api/reservations');
    //         const data = await response.json();
    //         setBookings(data);
    //     } catch (error) {
    //         console.error('Error fetching bookings:', error);
    //     }
    // };

    // fetchReservation();

    setReservation([
      {
        id: 1,
        title: "Serenity Lake house",
        date: "September 10, 2024 - September 15, 2024",
        price: 600,
        image: "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11172338/World%E2%80%99s-15-Most-Beautiful-Houses-That-Will-Leave-You-Awestruck-featured-shutterstock_1182743467-1200x700-compressed.jpg",
      },
      {
        id: 2,
        title: "Urban Chic Loft",
        date: "October 5, 2024 -  October 12, 2024",
        price: 1200,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: 3,
        title: "Mountain View Cabin",
        date: "November 21, 2023 - November 28, 2023",
        price: 1800,
        image: "https://kenyahomes.co.ke/blog/wp-content/uploads/2019/09/MAISONETTE.jpg",
      },
      {
        id: 4,
        title: "Sunlit Garden Retreat",
        date: "December 3, 2023 - December 10, 2023",
        price: 2400,
        image: "https://assets-news.housing.com/news/wp-content/uploads/2022/01/10145854/most-beautiful-houses2.png",
      },
    ]);

    document.title = "Rental Co. | Admin Dashboard"
  }, [])


  return (
    <div className="dashboard-container">
      <Navbar />
      <main>
        <section className="header">
          <h2>Welcome Back, User</h2>
          <p>List your space</p>
        </section>

        <section className="smallbar">
          <ul>
            <NavLink to="/admin"><p>Today</p></NavLink>
            <NavLink to="/"><p>Calender</p></NavLink>
            <NavLink to="#"><p>Inbox</p></NavLink>
            <NavLink to="#"><p>Performance</p></NavLink>
            <NavLink to="#"><p>Earnings</p></NavLink>
          </ul>
          <hr />
        </section>

        <h2> List your space</h2>

        <section className="list-space">
          <section className="list-space-item">
            <p>Get Started with a brand new listing</p>
            <small>It&apos;s quick and easy to add your first listing. Just follow the steps and you&apos;ll be ready to start hosting in no time</small>
          </section>

          <NavLink to="/admin/create">Create a new listing</NavLink>
        </section>

        <section className="reservation">
          <h2>Your upcoming reservations</h2>

          {
            Array.isArray(reservation) && reservation.length > 0 ? (
              <ul>
                {reservation.map((item) => (
                  <li key={item.id}>
                    <section className="reservation-item">
                      <img className="reservation-image" src={item.image} alt="reservation" />
                      <section className="reservation-details">
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>
                      </section>
                    </section>

                    <p>${parseFloat(item.price).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            ) : reservation.length === 0 ? (
              <p>No reservations</p>
            ) : !reservation ? (
              <p>No reservations available</p>
            ) : (
              <ul>
                <li>
                  <section className="reservation-item">
                    <img className="reservation-image" src={reservation.image} alt="reservation" />
                    <section className="reservation-details">
                      <h3>{reservation.title}</h3>
                      <p>{reservation.date}</p>
                    </section>
                  </section>

                  <p>${reservation.price}</p>
                </li>
              </ul>
            )
          }
        </section>
      </main>
    </div>
  )
}
