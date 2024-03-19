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

          <NavLink to="#">Create a new listing</NavLink>
        </section>
      </main>
    </div>
  )
}
