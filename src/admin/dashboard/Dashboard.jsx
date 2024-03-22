import "./dashboard.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export const Dashboard = () => {

  useEffect(() => {
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
          <ul>

            <li>
              <section className="reservation-item">
                <img className="reservation-image" src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/11172338/World%E2%80%99s-15-Most-Beautiful-Houses-That-Will-Leave-You-Awestruck-featured-shutterstock_1182743467-1200x700-compressed.jpg" alt="reservation" />
                <section className="reservation-details">
                  <h3>Serenity Lake house</h3>
                  <p>September 10, 2024 - September 15, 2024</p>
                </section>
              </section>

              <p>$600</p>
            </li>

            <li>
              <section className="reservation-item">
                <img className="reservation-image" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D" alt="reservation" />
                <section className="reservation-details">
                  <h3>Urban Chic Loft</h3>
                  <p> October 5, 2024 -  October 12, 2024</p>
                </section>
              </section>

              <p>$1,200</p>
            </li>

            <li>
              <section className="reservation-item">
                <img className="reservation-image" src="https://kenyahomes.co.ke/blog/wp-content/uploads/2019/09/MAISONETTE.jpg" alt="reservation" />
                <section className="reservation-details">
                  <h3>Mountain View Cabin</h3>
                  <p>November 21, 2023 - November 28, 2023</p>
                </section>
              </section>

              <p>$1,800</p>
            </li>

            <li>
              <section className="reservation-item">
                <img className="reservation-image" src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/10145854/most-beautiful-houses2.png" alt="reservation" />
                <section className="reservation-details">
                  <h3>Sunlit Garden Retreat</h3>
                  <p>December 3, 2023 - December 10, 2023</p>
                </section>
              </section>

              <p>$2,400</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
